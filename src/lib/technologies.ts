export interface Technology {
    slug: string
    name: string
    category: "frontend" | "backend" | "infrastructure" | "tools" | "cms"
    categoryLabel: string
    icon: string
    description: string
    features: string[]
    useCases: string[]
    relatedTech: string[]
}

export const technologies: Technology[] = [
    // Frontend
    {
        slug: "react",
        name: "React",
        category: "frontend",
        categoryLabel: "フロントエンド",
        icon: "⚛️",
        description: "Facebookが開発したUIライブラリ。コンポーネントベースの設計で、大規模なWebアプリケーションの開発に最適です。",
        features: [
            "コンポーネントベースアーキテクチャ",
            "仮想DOMによる高速レンダリング",
            "豊富なエコシステム",
            "React Hooksによる状態管理",
            "JSX記法による直感的な記述",
        ],
        useCases: [
            "SPA（シングルページアプリケーション）",
            "管理画面・ダッシュボード",
            "ECサイト",
            "SNS・コミュニティサイト",
        ],
        relatedTech: ["nextjs", "typescript", "tailwindcss"],
    },
    {
        slug: "nextjs",
        name: "Next.js",
        category: "frontend",
        categoryLabel: "フロントエンド",
        icon: "▲",
        description: "Vercelが開発したReactフレームワーク。SSR、SSG、ISRなど多様なレンダリング戦略をサポートし、SEOに強いWebサイトを構築できます。",
        features: [
            "App Router（最新のルーティングシステム）",
            "サーバーコンポーネント",
            "自動コード分割",
            "画像最適化",
            "APIルート",
            "ミドルウェア",
        ],
        useCases: [
            "コーポレートサイト",
            "ECサイト",
            "メディアサイト",
            "Webアプリケーション",
        ],
        relatedTech: ["react", "typescript", "vercel"],
    },
    {
        slug: "typescript",
        name: "TypeScript",
        category: "frontend",
        categoryLabel: "フロントエンド",
        icon: "📘",
        description: "Microsoftが開発した静的型付け言語。JavaScriptのスーパーセットとして、大規模開発での保守性と開発効率を向上させます。",
        features: [
            "静的型チェック",
            "IntelliSenseによる開発支援",
            "インターフェース・ジェネリクス",
            "ES最新機能のサポート",
            "段階的な導入が可能",
        ],
        useCases: [
            "大規模Webアプリケーション",
            "チーム開発プロジェクト",
            "長期運用システム",
            "APIクライアント開発",
        ],
        relatedTech: ["react", "nextjs", "nodejs"],
    },
    {
        slug: "tailwindcss",
        name: "Tailwind CSS",
        category: "frontend",
        categoryLabel: "フロントエンド",
        icon: "🎨",
        description: "ユーティリティファーストのCSSフレームワーク。クラス名で直接スタイリングでき、高速なUI開発を実現します。",
        features: [
            "ユーティリティクラスによる高速開発",
            "レスポンシブデザイン対応",
            "ダークモードサポート",
            "JITコンパイラによる最適化",
            "カスタマイズ性",
        ],
        useCases: [
            "ランディングページ",
            "管理画面UI",
            "コンポーネントライブラリ",
            "プロトタイピング",
        ],
        relatedTech: ["react", "nextjs", "figma"],
    },
    // Backend
    {
        slug: "nodejs",
        name: "Node.js",
        category: "backend",
        categoryLabel: "バックエンド",
        icon: "🟢",
        description: "JavaScriptランタイム環境。フロントエンドと同じ言語でバックエンド開発ができ、フルスタック開発に最適です。",
        features: [
            "非同期I/O",
            "NPMによる豊富なパッケージ",
            "イベント駆動アーキテクチャ",
            "マイクロサービス構築",
            "リアルタイム通信",
        ],
        useCases: [
            "REST API構築",
            "リアルタイムアプリケーション",
            "マイクロサービス",
            "CLI開発",
        ],
        relatedTech: ["typescript", "express", "postgresql"],
    },
    {
        slug: "postgresql",
        name: "PostgreSQL",
        category: "backend",
        categoryLabel: "バックエンド",
        icon: "🐘",
        description: "オープンソースのリレーショナルデータベース。高い信頼性と拡張性を持ち、エンタープライズレベルのシステムにも対応します。",
        features: [
            "ACID準拠",
            "JSON/JSONB型サポート",
            "全文検索",
            "地理空間データ対応",
            "レプリケーション",
        ],
        useCases: [
            "業務システム",
            "ECサイト",
            "分析システム",
            "地理情報システム",
        ],
        relatedTech: ["nodejs", "prisma", "supabase"],
    },
    {
        slug: "prisma",
        name: "Prisma",
        category: "backend",
        categoryLabel: "バックエンド",
        icon: "◆",
        description: "次世代のNode.js/TypeScript ORM。型安全なデータベースアクセスと、直感的なスキーマ定義を提供します。",
        features: [
            "型安全なクエリビルダー",
            "自動マイグレーション",
            "Prisma Studio（GUI）",
            "複数DBサポート",
            "リレーション管理",
        ],
        useCases: [
            "TypeScriptプロジェクト",
            "Next.js API Routes",
            "GraphQL API",
            "マイクロサービス",
        ],
        relatedTech: ["typescript", "postgresql", "nextjs"],
    },
    // Infrastructure
    {
        slug: "vercel",
        name: "Vercel",
        category: "infrastructure",
        categoryLabel: "インフラ",
        icon: "▲",
        description: "Next.jsの開発元が提供するホスティングプラットフォーム。ゼロコンフィグでデプロイでき、エッジネットワークで高速配信します。",
        features: [
            "自動デプロイ",
            "プレビューデプロイ",
            "エッジファンクション",
            "分析ダッシュボード",
            "カスタムドメイン",
        ],
        useCases: [
            "Next.jsアプリケーション",
            "Jamstackサイト",
            "プロトタイプ",
            "プロダクション環境",
        ],
        relatedTech: ["nextjs", "react", "github"],
    },
    {
        slug: "aws",
        name: "AWS",
        category: "infrastructure",
        categoryLabel: "インフラ",
        icon: "☁️",
        description: "Amazonが提供するクラウドプラットフォーム。200以上のサービスを持ち、あらゆる規模のシステム構築に対応します。",
        features: [
            "EC2/Lambda（コンピューティング）",
            "S3（ストレージ）",
            "RDS（データベース）",
            "CloudFront（CDN）",
            "IAM（認証・認可）",
        ],
        useCases: [
            "大規模Webサービス",
            "データ分析基盤",
            "機械学習",
            "バックアップ・DR",
        ],
        relatedTech: ["docker", "terraform", "nodejs"],
    },
    {
        slug: "docker",
        name: "Docker",
        category: "infrastructure",
        categoryLabel: "インフラ",
        icon: "🐳",
        description: "コンテナ仮想化プラットフォーム。環境の再現性を高め、開発から本番まで一貫した環境を提供します。",
        features: [
            "コンテナ化による環境分離",
            "Docker Compose",
            "イメージのバージョン管理",
            "マルチステージビルド",
            "オーケストレーション連携",
        ],
        useCases: [
            "開発環境構築",
            "マイクロサービス",
            "CI/CDパイプライン",
            "本番環境デプロイ",
        ],
        relatedTech: ["aws", "github", "nodejs"],
    },
    // Tools
    {
        slug: "github",
        name: "GitHub",
        category: "tools",
        categoryLabel: "開発ツール",
        icon: "🐙",
        description: "世界最大のソースコードホスティングサービス。バージョン管理からCI/CD、プロジェクト管理まで開発のあらゆるフェーズをサポートします。",
        features: [
            "Git リポジトリ管理",
            "GitHub Actions（CI/CD）",
            "Pull Request",
            "Issue管理",
            "Copilot（AI支援）",
        ],
        useCases: [
            "ソースコード管理",
            "チーム開発",
            "オープンソース",
            "自動デプロイ",
        ],
        relatedTech: ["vercel", "docker", "vscode"],
    },
    {
        slug: "figma",
        name: "Figma",
        category: "tools",
        categoryLabel: "開発ツール",
        icon: "🎨",
        description: "クラウドベースのデザインツール。リアルタイムコラボレーションで、デザイナーと開発者の連携を円滑にします。",
        features: [
            "リアルタイム共同編集",
            "コンポーネントシステム",
            "プロトタイピング",
            "デザインシステム管理",
            "開発者向けハンドオフ",
        ],
        useCases: [
            "UIデザイン",
            "プロトタイプ作成",
            "デザインシステム構築",
            "チーム間連携",
        ],
        relatedTech: ["tailwindcss", "react", "storybook"],
    },
    // CMS
    {
        slug: "wordpress",
        name: "WordPress",
        category: "cms",
        categoryLabel: "CMS",
        icon: "📝",
        description: "世界シェアNo.1のCMS。豊富なプラグインとテーマで、ブログからECサイトまで幅広く対応します。",
        features: [
            "直感的な管理画面",
            "豊富なプラグイン",
            "SEO対策機能",
            "マルチサイト",
            "REST API",
        ],
        useCases: [
            "コーポレートサイト",
            "ブログ・メディア",
            "ECサイト",
            "ヘッドレスCMS",
        ],
        relatedTech: ["php", "mysql", "docker"],
    },
    {
        slug: "microcms",
        name: "microCMS",
        category: "cms",
        categoryLabel: "CMS",
        icon: "📋",
        description: "日本製のヘッドレスCMS。APIベースでコンテンツを配信し、Next.jsなどのモダンフレームワークと相性抜群です。",
        features: [
            "APIファーストアーキテクチャ",
            "日本語対応の管理画面",
            "Webhook連携",
            "画像最適化",
            "プレビュー機能",
        ],
        useCases: [
            "コーポレートサイト",
            "ブログ",
            "ニュースサイト",
            "Jamstackサイト",
        ],
        relatedTech: ["nextjs", "vercel", "react"],
    },
    {
        slug: "shopify",
        name: "Shopify",
        category: "cms",
        categoryLabel: "CMS",
        icon: "🛒",
        description: "世界シェアNo.1のECプラットフォーム。簡単にオンラインストアを開設でき、決済から配送まで一貫して管理できます。",
        features: [
            "簡単なストア構築",
            "多様な決済対応",
            "在庫管理",
            "アプリによる機能拡張",
            "Headless Commerce対応",
        ],
        useCases: [
            "D2C",
            "小売EC",
            "サブスクリプション",
            "越境EC",
        ],
        relatedTech: ["nextjs", "react", "stripe"],
    },
]

export const categories = [
    { id: "frontend", label: "フロントエンド", color: "blue" },
    { id: "backend", label: "バックエンド", color: "green" },
    { id: "infrastructure", label: "インフラ", color: "purple" },
    { id: "tools", label: "開発ツール", color: "orange" },
    { id: "cms", label: "CMS", color: "pink" },
]

export function getTechnologyBySlug(slug: string): Technology | undefined {
    return technologies.find((tech) => tech.slug === slug)
}

export function getTechnologiesByCategory(category: string): Technology[] {
    return technologies.filter((tech) => tech.category === category)
}

export function getRelatedTechnologies(slugs: string[]): Technology[] {
    return technologies.filter((tech) => slugs.includes(tech.slug))
}

