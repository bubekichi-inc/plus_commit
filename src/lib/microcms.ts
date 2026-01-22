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

// ニュース一覧を取得（newsカテゴリーのみ）
export const getNewsList = async (queries?: MicroCMSQueries) => {
  // 1. まず 'news' というslugを持つカテゴリーのIDを取得
  let newsCategoryId: string | undefined;

  try {
    const categoriesResponse = await client.getList<NewsCategory>({
      endpoint: 'categories',
      queries: {
        filters: 'slug[equals]news',
        fields: 'id',
        limit: 1,
      },
    });
    newsCategoryId = categoriesResponse.contents[0]?.id;
  } catch (e) {
    console.error("Failed to fetch news category by slug:", e);
  }

  // 2. 取得したカテゴリIDでフィルタリング
  const filterQuery = newsCategoryId
    ? `category[equals]${newsCategoryId}`
    : 'category[equals]news';

  return await client.getList<News>({
    endpoint: 'blog',
    queries: {
      ...queries,
      filters: queries?.filters ? `${queries.filters}[and]${filterQuery}` : filterQuery,
    },
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
    queries: {
      ...queries,
      // child-name（子カテゴリー）が展開されるように明示的に指定
      depth: 2,
    },
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
  let technologyCategoryId: string | undefined;

  try {
    const categoriesResponse = await client.getList<NewsCategory>({
      endpoint: 'categories',
      queries: {
        filters: 'slug[equals]technologies',
        fields: 'id',
        limit: 1,
      },
    });
    technologyCategoryId = categoriesResponse.contents[0]?.id;
  } catch (e) {
    console.error("Failed to fetch category by slug:", e);
  }

  // 2. 取得したカテゴリIDでフィルタリング、もしくはIDが取得できなければ 'technologies' というID/文字列でフィルタリング試行
  const filterQuery = technologyCategoryId
    ? `category[equals]${technologyCategoryId}`
    : 'category[equals]technologies';

  console.log(`Fetching technologies with filter: ${filterQuery}`);

  return await client.getList<News>({
    endpoint: 'blog',
    queries: {
      ...queries,
      filters: filterQuery,
      fields: 'id,createdAt,updatedAt,publishedAt,revisedAt,title,content,category,child-category.id,child-category.child-name,child-category.slug,icon,features,thumbnail',
      limit: 100,
    },
  });
};

// 採用情報一覧を取得（blogの中からcategory.slug=recruitmentのもの）
export const getRecruitmentJobs = async (queries?: MicroCMSQueries) => {
  // 1. まず 'recruitment' というslugを持つカテゴリーのIDを取得
  let recruitmentCategoryId: string | undefined;

  try {
    const categoriesResponse = await client.getList<NewsCategory>({
      endpoint: 'categories',
      queries: {
        filters: 'slug[equals]recruitment',
        fields: 'id',
        limit: 1,
      },
    });
    recruitmentCategoryId = categoriesResponse.contents[0]?.id;
  } catch (e) {
    console.error("Failed to fetch category by slug:", e);
  }

  // 2. 取得したカテゴリIDでフィルタリング
  const filterQuery = recruitmentCategoryId
    ? `category[equals]${recruitmentCategoryId}`
    : 'category[equals]recruitment';

  console.log(`Fetching recruitment jobs with filter: ${filterQuery}`);

  return await client.getList<News>({
    endpoint: 'blog',
    queries: {
      ...queries,
      filters: filterQuery,
    },
  });
};
// 制作実績一覧を取得（blogの中からcategory.slug=worksのもの）
export const getWorks = async (queries?: MicroCMSQueries) => {
  // 1. まず 'works' というslugを持つカテゴリーのIDを取得
  let worksCategoryId: string | undefined;

  try {
    const categoriesResponse = await client.getList<NewsCategory>({
      endpoint: 'categories',
      queries: {
        filters: 'slug[equals]works',
        fields: 'id',
        limit: 1,
      },
    });
    worksCategoryId = categoriesResponse.contents[0]?.id;
  } catch (e) {
    console.error("Failed to fetch category by slug:", e);
  }

  // 2. 取得したカテゴリIDでフィルタリング
  const filterQuery = worksCategoryId
    ? `category[equals]${worksCategoryId}`
    : 'category[equals]works';

  console.log(`Fetching works with filter: ${filterQuery}`);

  return await client.getList<News>({
    endpoint: 'blog',
    queries: {
      ...queries,
      filters: filterQuery,
    },
  });
};
