# Plus Commit プロジェクト構成

## 概要
このプロジェクトはNext.js 16を使用したコーポレートサイトです。Supabase認証、microCMS連携、3Dアニメーション、採用ページなどを含みます。

## 詳細ディレクトリ構造

```
├── .next/ ←ビルド出力ディレクトリ（触らない）
├── node_modules/ ←依存パッケージ（触らない）
│
├── public/ ←静的ファイル（画像、アイコンなど）
│
├── src/
│   ├── app/ ←Next.js App Routerのルート定義
│   │   │
│   │   ├── (main)/ ←メインサイトのルートグループ
│   │   │   │
│   │   │   ├── (top)/ ←トップページ（/）
│   │   │   │   ├── _components/
│   │   │   │   │   ├── Hero.tsx ←ヒーローセクション（3D背景含む）
│   │   │   │   │   ├── MissionVisionValue.tsx ←ミッション・ビジョン・バリュー表示
│   │   │   │   │   ├── NewsSection.tsx ←ニュース一覧セクション
│   │   │   │   │   └── WorksSection.tsx ←実績紹介セクション
│   │   │   │   └── page.tsx ←トップページメイン
│   │   │   │
│   │   │   ├── _components/ ←メインサイト共通コンポーネント
│   │   │   │   ├── Header.tsx ←サイトヘッダー（ナビゲーション）
│   │   │   │   ├── Footer.tsx ←サイトフッター
│   │   │   │   └── CTA.tsx ←CTA（Call To Action）ボタン
│   │   │   │
│   │   │   ├── company/
│   │   │   │   └── page.tsx ←会社情報ページ（/company/）
│   │   │   │
│   │   │   ├── contact/ ←お問い合わせ
│   │   │   │   ├── page.tsx ←お問い合わせフォーム（/contact/）
│   │   │   │   ├── layout.tsx ←お問い合わせページのレイアウト
│   │   │   │   └── thanks/
│   │   │   │       └── page.tsx ←送信完了ページ（/contact/thanks/）
│   │   │   │
│   │   │   ├── news/ ←ニュース（microCMS連携）
│   │   │   │   ├── _components/
│   │   │   │   │   ├── NewsSearchSidebar.tsx ←ニュース検索サイドバー
│   │   │   │   │   └── ShareButtons.tsx ←SNSシェアボタン
│   │   │   │   ├── page.tsx ←ニュース一覧（/news/）
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx ←ニュース詳細（/news/[id]/）
│   │   │   │
│   │   │   ├── technologies/ ←技術情報
│   │   │   │   ├── page.tsx ←技術一覧（/technologies/）
│   │   │   │   ├── TechnologiesTabs.tsx ←技術タブ切り替え
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx ←技術詳細（/technologies/[id]/）
│   │   │   │
│   │   │   ├── works/ ←実績紹介
│   │   │   │   ├── page.tsx ←実績一覧（/works/）
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx ←実績詳細（/works/[id]/）
│   │   │   │
│   │   │   ├── privacy/
│   │   │   │   └── page.tsx ←プライバシーポリシー（/privacy/）
│   │   │   │
│   │   │   ├── personal-info/
│   │   │   │   └── page.tsx ←個人情報保護方針（/personal-info/）
│   │   │   │
│   │   │   ├── sitemap/
│   │   │   │   └── page.tsx ←サイトマップページ（/sitemap/）
│   │   │   │
│   │   │   └── layout.tsx ←メインサイト共通レイアウト
│   │   │
│   │   ├── api/ ←API Routes（バックエンド処理）
│   │   │   ├── contact/
│   │   │   │   └── route.ts ←お問い合わせAPI（POST /api/contact）
│   │   │   ├── profile/
│   │   │   │   └── route.ts ←プロフィールAPI（GET/POST /api/profile）
│   │   │   └── technologies/
│   │   │       └── categories/
│   │   │           └── route.ts ←技術カテゴリAPI（GET /api/technologies/categories）
│   │   │
│   │   ├── auth/ ←認証関連ページ（Supabase）
│   │   │   ├── callback/
│   │   │   │   └── route.ts ←認証コールバック処理
│   │   │   ├── success/
│   │   │   │   └── page.tsx ←認証成功ページ
│   │   │   ├── auth-code-error/
│   │   │   │   └── page.tsx ←認証エラーページ
│   │   │   └── reset-password/
│   │   │       └── page.tsx ←パスワードリセットページ
│   │   │
│   │   ├── layout.tsx ←ルートレイアウト（全ページ共通）
│   │   ├── not-found.tsx ←404ページ
│   │   ├── globals.css ←グローバルCSS（Tailwind設定含む）
│   │   └── favicon.ico
│   │
│   ├── components/ ←再利用可能コンポーネント
│   │   │
│   │   ├── 3d/ ←Three.js/React Three Fiber 3Dコンポーネント
│   │   │   ├── Hero3D.tsx ←トップページ3Dヒーロー背景
│   │   │   ├── MetalAnimation.tsx ←メタル質感3Dアニメーション
│   │   │   └── RecruitAnimation.tsx ←採用ページ3Dアニメーション
│   │   │
│   │   ├── auth/ ←認証関連UI
│   │   │   ├── AuthProvider.tsx ←認証コンテキストプロバイダー
│   │   │   └── LoginModal.tsx ←ログインモーダル
│   │   │
│   │   └── ui/ ←基本UIコンポーネント
│   │       └── button.tsx ←汎用ボタンコンポーネント
│   │
│   ├── lib/ ←ライブラリ・ユーティリティ関数
│   │   │
│   │   ├── email.ts ←メール送信処理（Resend API連携）
│   │   ├── microcms.ts ←microCMS APIクライアント設定
│   │   │
│   │   ├── recruit/ ←採用関連ユーティリティ
│   │   │   ├── api.ts ←採用API関数
│   │   │   └── forms.ts ←採用フォーム処理
│   │   │
│   │   └── supabase/ ←Supabase関連設定
│   │       ├── client.ts ←クライアントサイドSupabaseクライアント
│   │       ├── server.ts ←サーバーサイドSupabaseクライアント
│   │       └── middleware.ts ←Supabase認証ミドルウェア
│   │
│   ├── types/ ←TypeScript型定義
│   │   └── microcms.ts ←microCMS関連の型定義
│   │
│   └── proxy.ts ←Next.jsミドルウェア（認証チェックなど）
│
├── .env.local ←環境変数（Git管理外、要設定）
├── .gitignore ←Git除外設定
├── eslint.config.mjs ←ESLint設定
├── next.config.mjs ←Next.js設定（画像最適化、実験的機能など）
├── package.json ←依存関係とスクリプト定義
├── package-lock.json ←依存関係ロックファイル
├── postcss.config.mjs ←PostCSS設定（Tailwind処理）
├── tsconfig.json ←TypeScript設定
├── next-env.d.ts ←Next.js型定義（自動生成）
└── sitemap.md ←このファイル（プロジェクト構成ドキュメント）
```

## 主要な技術スタック

### フロントエンド
- **Next.js 16** - App Router使用
- **React 19** - UIライブラリ
- **TypeScript** - 型安全な開発
- **Tailwind CSS v4** - スタイリング
- **Framer Motion** - アニメーション
- **GSAP** - 高度なアニメーション
- **Three.js + React Three Fiber** - 3Dグラフィック

### バックエンド・インフラ
- **Supabase** - 認証・データベース
- **microCMS** - ヘッドレスCMS（ニュース管理）
- **Resend** - メール送信サービス
- **Vercel KV + Upstash** - レート制限

### UI・開発ツール
- **Radix UI** - アクセシブルなUIプリミティブ
- **Lucide React** - アイコン
- **Zod** - バリデーション

## 主要な機能

### ルートグループ
- **(main)** - メインサイト（会社情報、ニュース、お問い合わせなど）
- **(recruit)** - 採用サイト（別レイアウト）

### API Routes
- `/api/contact` - お問い合わせフォーム送信
- `/api/profile` - プロフィール情報の取得・更新
- `/api/technologies` - 技術情報の取得

### 認証
- Supabaseを使用したユーザー認証
- `/auth` - 認証関連のページ

### CMS連携
- microCMSからニュース記事を取得
- `/news` - ニュース一覧・詳細ページ

## 開発コマンド

```bash
npm run dev   # 開発サーバー起動（http://localhost:3000）
npm run build # プロダクションビルド
npm start     # プロダクションサーバー起動
npm run lint  # ESLintによるコードチェック
```

## 環境変数

`.env.local` に以下の環境変数が必要：
- Supabase関連（認証・DB）
- microCMS API（ニュース取得）
- Resend API（メール送信）
- Vercel KV（レート制限）