import { createClient } from 'microcms-js-sdk';
import { cache } from 'react';
import type { MicroCMSQueries, MicroCMSListResponse, MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import type { News, PageSetting, NewsCategory, Works } from '@/types/microcms';

const MICROCMS_SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY;
const isMicrocmsConfigured = Boolean(MICROCMS_SERVICE_DOMAIN && MICROCMS_API_KEY);

let hasWarnedMissingEnv = false;
const warnMicrocmsDisabled = () => {
  if (!isMicrocmsConfigured && !hasWarnedMissingEnv) {
    console.warn('microCMS environment variables are not set. Returning fallback data.');
    hasWarnedMissingEnv = true;
  }
};

const client = isMicrocmsConfigured
  ? createClient({
      serviceDomain: MICROCMS_SERVICE_DOMAIN!,
      apiKey: MICROCMS_API_KEY!,
    })
  : null;

const getClient = () => {
  if (!client) {
    warnMicrocmsDisabled();
  }
  return client;
};

type MicroCMSBaseContent = MicroCMSContentId & MicroCMSDate;

const createFallbackListResponse = <T extends MicroCMSBaseContent>(contents: T[] = []): MicroCMSListResponse<T> => ({
  contents,
  totalCount: contents.length,
  limit: contents.length,
  offset: 0,
});

const createFallbackPageSetting = (slug: string): PageSetting => {
  const timestamp = new Date().toISOString();
  return {
    id: `fallback-${slug}`,
    slug,
    title: `${slug} (microCMS未設定)`,
    description: 'microCMSの環境変数が設定されていないため、プレースホルダーを表示しています。',
    createdAt: timestamp,
    updatedAt: timestamp,
    publishedAt: timestamp,
    revisedAt: timestamp,
  };
};

const createFallbackNews = (id: string): News => {
  const timestamp = new Date().toISOString();
  return {
    id,
    title: 'コンテンツを読み込めませんでした',
    content: 'microCMSの環境変数が設定されていません。',
    createdAt: timestamp,
    updatedAt: timestamp,
    publishedAt: timestamp,
    revisedAt: timestamp,
  };
};

const createFallbackWorks = (id: string): Works => ({
  ...createFallbackNews(id),
}) as Works;

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
  if (!client) {
    warnMicrocmsDisabled();
    return undefined;
  }
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
type GetBlogListByCategoryOptions<T extends MicroCMSBaseContent> = {
  categorySlug: string;
  queries?: MicroCMSQueries;
  fields?: string;
  limit?: number;
  mergeFilters?: boolean;
  cacheConfig?: RequestInit;
  fallbackContents?: T[];
};

const getBlogListByCategory = async <T extends MicroCMSBaseContent = News>({
  categorySlug,
  queries,
  fields,
  limit,
  mergeFilters = false,
  cacheConfig = CACHE_CONFIG.DYNAMIC,
  fallbackContents = [] as T[],
}: GetBlogListByCategoryOptions<T>): Promise<MicroCMSListResponse<T>> => {
  const microcmsClient = getClient();
  if (!microcmsClient) {
    return createFallbackListResponse<T>(fallbackContents);
  }

  const categoryId = await getCategoryIdBySlug(categorySlug);

  const filterQuery = categoryId
    ? `category[equals]${categoryId}`
    : `category[equals]${categorySlug}`;

  const filters = mergeFilters && queries?.filters
    ? `${queries.filters}[and]${filterQuery}`
    : filterQuery;

  return await microcmsClient.getList<T>({
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
    fallbackContents: [createFallbackNews('fallback-news')],
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
  const microcmsClient = getClient();
  if (!microcmsClient) {
    return createFallbackNews(contentId);
  }
  try {
    return await microcmsClient.getListDetail<News>({
      endpoint: 'blog',
      contentId,
      queries: {
        ...queries,
        depth: 2,
      },
      customRequestInit: CACHE_CONFIG.DYNAMIC,
    });
  } catch (error) {
    console.error(`Failed to fetch news detail for ${contentId}:`, error);
    return createFallbackNews(contentId);
  }
});

/**
 * ページ設定を取得
 * キャッシュ: 1時間（変更頻度が低い）
 */
export const getPageSetting = cache(async (slug: string, queries?: MicroCMSQueries) => {
  const microcmsClient = getClient();
  if (!microcmsClient) {
    return createFallbackPageSetting(slug);
  }
  try {
    const response = await microcmsClient.getList<PageSetting>({
      endpoint: 'page-settings',
      queries: {
        ...queries,
        filters: `slug[equals]${slug}`,
      },
      customRequestInit: CACHE_CONFIG.STATIC,
    });
    return response.contents[0] ?? createFallbackPageSetting(slug);
  } catch (error) {
    console.error(`Failed to fetch page setting for ${slug}:`, error);
    return createFallbackPageSetting(slug);
  }
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
    fallbackContents: [createFallbackNews('fallback-technologies')],
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
    fallbackContents: [createFallbackNews('fallback-recruitment')],
  });
});

/**
 * 制作実績一覧を取得
 * キャッシュ: 1時間（変更頻度が低い）
 */
export const getWorks = cache(async (queries?: MicroCMSQueries) => {
  return getBlogListByCategory<Works>({
    categorySlug: 'works',
    queries,
    cacheConfig: CACHE_CONFIG.STATIC,
    fallbackContents: [createFallbackWorks('fallback-work')],
  });
});

/**
 * キャッシュを無効化してデータを取得する関数
 * Webhook等でコンテンツ更新時に使用
 */
export const revalidateContent = async (endpoint: string, contentId?: string) => {
  const { revalidatePath } = await import('next/cache');

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
