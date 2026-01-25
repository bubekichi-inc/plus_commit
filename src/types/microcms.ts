import type { MicroCMSListResponse } from "microcms-js-sdk";

// ページ設定
export type PageSetting = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  slug: string;
  title: string;
  description?: string;
  ogImage?: {
    url: string;
    height: number;
    width: number;
  };
};

// 既存の Technology 型を参考に microCMS 用の型を定義
export type Technology = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  slug: string;
  name: string;
  category: "frontend" | "backend" | "infrastructure" | "tools" | "cms";
  categoryLabel: string;
  icon: string;
  description: string;
  features: string[]; // microCMSの繰り返しフィールドなどで実装
  useCases: string[];
  relatedTech: string[]; // 関連技術のslugリスト、またはコンテンツ参照
};

export type TechnologyResponse = MicroCMSListResponse<Technology>;

// カテゴリ型(コンテンツ参照で設定されている場合)
export type NewsCategory = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  title?: string;
  slug: string;
  "child-name"?: string; // 子カテゴリーの名前
};

// microCMSのカスタムフィールド（真偽値）の型
export type SpecialField = boolean | {
  fieldId: string;
  special: boolean;
};

export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  category?: NewsCategory;
  "child-category"?: NewsCategory[]; // 子カテゴリー
  icon?: string; // アイコン（絵文字など）
  features?: string; // 特徴（改行区切りテキストなど）
  special?: SpecialField;
  thumbnail?: {
    url: string;
    height: number;
    width: number;
  };
};

export type NewsResponse = MicroCMSListResponse<News>;

export type Works = News & {
  clientName?: string;
  industry?: string;
  services?: string[];
  projectUrl?: string;
};

export type WorksResponse = MicroCMSListResponse<Works>;
