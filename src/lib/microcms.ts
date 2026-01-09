import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import type { News, MemberContent, PageSetting, NewsCategory } from '@/types/microcms';

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

// ニュース一覧を取得
export const getNewsList = async (queries?: MicroCMSQueries) => {
  return await client.getList<News>({
    endpoint: 'blog',
    queries,
  });
};

// ニュース詳細を取得
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<News>({
    endpoint: 'blog',
    contentId,
    queries,
  });
};

// 会員限定コンテンツ一覧を取得（採用ページ用）
export const getMemberContentList = async (queries?: MicroCMSQueries) => {
  return await client.getList<MemberContent>({
    endpoint: 'recruit',
    queries,
  });
};

// 会員限定コンテンツ詳細を取得（採用ページ用）
export const getMemberContentDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<MemberContent>({
    endpoint: 'recruit',
    contentId,
    queries,
  });
};

// ページ設定を取得
export const getPageSetting = async (slug: string, queries?: MicroCMSQueries) => {
  const response = await client.getList<PageSetting>({
    endpoint: 'page-settings',
    queries: {
      ...queries,
      filters: `slug[equals]${slug}`,
    },
  });
  return response.contents[0];
};

// 技術スタック一覧を取得（blogの中からcategory.slug=technologiesのもの）
export const getAllTechnologies = async (queries?: MicroCMSQueries) => {
  // 1. まず 'technologies' というslugを持つカテゴリーのIDを取得
  const categoriesResponse = await client.getList<NewsCategory>({
    endpoint: 'categories',
    queries: {
      filters: 'slug[equals]technologies',
      fields: 'id',
      limit: 1,
    },
  });

  const technologyCategoryId = categoriesResponse.contents[0]?.id;

  if (!technologyCategoryId) {
    console.warn("Category with slug 'technologies' not found.");
    return { contents: [], totalCount: 0, offset: 0, limit: 0 };
  }

  // 2. 取得したカテゴリIDでフィルタリングしてブログ記事を取得
  return await client.getList<News>({
    endpoint: 'blog',
    queries: {
      ...queries,
      filters: `category[equals]${technologyCategoryId}`,
      limit: 100,
    },
  });
};
