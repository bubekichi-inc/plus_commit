import type { MicroCMSQueries, MicroCMSListResponse } from "microcms-js-sdk";

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

