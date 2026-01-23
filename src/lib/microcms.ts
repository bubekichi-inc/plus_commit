import { createClient } from 'microcms-js-sdk';
import { cache } from 'react';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import type { News, PageSetting, NewsCategory } from '@/types/microcms';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

/**
 * キャッシュ設定の定数
 * - STATIC: ほぼ変更されないデータ（カテゴリー、ページ設定など）
 * - DYNAMIC: 定期的に更新されるデータ（ブログ記事など）
 */
const CACHE_CONFIG = {
  STATIC: { next: { revalidate: 3600 } },    // 1時間
  DYNAMIC: { next: { revalidate: 300 } },    // 5分
  REALTIME: { next: { revalidate: 60 } },    // 1分（リアルタイム性が必要な場合）
} as const;

/**
 * カテゴリーのslugからIDを取得する共通関数
 * - React.cache(): 同一リクエスト内での重複呼び出しを防ぐ
 * - next.revalidate: クロスリクエストでのキャッシュ（1時間）
 */
const getCategoryIdBySlug = cache(async (slug: string): Promise<string | undefined> => {
  try {
    const response = await client.getList<NewsCategory>({
      endpoint: 'categories',
      queries: {
        filters: `slug[equals]${slug}`,
        fields: 'id',
        limit: 1,
      },
      customRequestInit: CACHE_CONFIG.STATIC,
    });
    return response.contents[0]?.id;
  } catch (e) {
    console.error(`Failed to fetch category by slug "${slug}":`, e);
    return undefined;
  }
});

/**
 * カテゴリーslugでフィルタリングしてブログ一覧を取得する共通関数
 */
type GetBlogListByCategoryOptions = {
  categorySlug: string;
  queries?: MicroCMSQueries;
  fields?: string;
  limit?: number;
  mergeFilters?: boolean;
  cacheConfig?: RequestInit;
};

const getBlogListByCategory = async ({
  categorySlug,
  queries,
  fields,
  limit,
  mergeFilters = false,
  cacheConfig = CACHE_CONFIG.DYNAMIC,
}: GetBlogListByCategoryOptions) => {
  const categoryId = await getCategoryIdBySlug(categorySlug);

  const filterQuery = categoryId
    ? `category[equals]${categoryId}`
    : `category[equals]${categorySlug}`;

  const filters = mergeFilters && queries?.filters
    ? `${queries.filters}[and]${filterQuery}`
    : filterQuery;

  return await client.getList<News>({
    endpoint: 'blog',
    queries: {
      ...queries,
      filters,
      ...(fields && { fields }),
      ...(limit && { limit }),
    },
    customRequestInit: cacheConfig,
  });
};

/**
 * ニュース一覧を取得（newsカテゴリーのみ）
 * キャッシュ: 5分
 */
export const getNewsList = cache(async (queries?: MicroCMSQueries) => {
  return getBlogListByCategory({
    categorySlug: 'news',
    queries,
    mergeFilters: true,
    cacheConfig: CACHE_CONFIG.DYNAMIC,
  });
});

/**
 * ニュース詳細を取得
 * キャッシュ: 5分
 */
export const getNewsDetail = cache(async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<News>({
    endpoint: 'blog',
    contentId,
    queries: {
      ...queries,
      depth: 2,
    },
    customRequestInit: CACHE_CONFIG.DYNAMIC,
  });
});

/**
 * ページ設定を取得
 * キャッシュ: 1時間（変更頻度が低い）
 */
export const getPageSetting = cache(async (slug: string, queries?: MicroCMSQueries) => {
  const response = await client.getList<PageSetting>({
    endpoint: 'page-settings',
    queries: {
      ...queries,
      filters: `slug[equals]${slug}`,
    },
    customRequestInit: CACHE_CONFIG.STATIC,
  });
  return response.contents[0];
});

/**
 * 技術スタック一覧を取得
 * キャッシュ: 1時間（変更頻度が低い）
 */
export const getAllTechnologies = cache(async (queries?: MicroCMSQueries) => {
  return getBlogListByCategory({
    categorySlug: 'technologies',
    queries,
    fields: 'id,createdAt,updatedAt,publishedAt,revisedAt,title,content,category,child-category.id,child-category.child-name,child-category.slug,icon,features,thumbnail',
    limit: 100,
    cacheConfig: CACHE_CONFIG.STATIC,
  });
});

/**
 * 採用情報一覧を取得
 * キャッシュ: 5分
 */
export const getRecruitmentJobs = cache(async (queries?: MicroCMSQueries) => {
  return getBlogListByCategory({
    categorySlug: 'recruitment',
    queries,
    cacheConfig: CACHE_CONFIG.DYNAMIC,
  });
});

/**
 * 制作実績一覧を取得
 * キャッシュ: 1時間（変更頻度が低い）
 */
export const getWorks = cache(async (queries?: MicroCMSQueries) => {
  return getBlogListByCategory({
    categorySlug: 'works',
    queries,
    cacheConfig: CACHE_CONFIG.STATIC,
  });
});

/**
 * キャッシュを無効化してデータを取得する関数
 * Webhook等でコンテンツ更新時に使用
 */
export const revalidateContent = async (endpoint: string, contentId?: string) => {
  const { revalidatePath, revalidateTag } = await import('next/cache');

  // パスベースの再検証
  switch (endpoint) {
    case 'blog':
      revalidatePath('/news');
      revalidatePath('/technologies');
      revalidatePath('/works');
      if (contentId) {
        revalidatePath(`/news/${contentId}`);
      }
      break;
    case 'page-settings':
      revalidatePath('/');
      break;
    default:
      revalidatePath('/');
  }
};
