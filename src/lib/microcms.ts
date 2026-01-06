import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import type { News, MemberContent, PageSetting } from '@/types/microcms';

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

