/**
 * 採用 - 募集職種データ
 */

export type JobPosition = {
    id: string
    title: string
    department: string
    type: string // 正社員 | 業務委託 | インターン
    location: string
    description: string
    responsibilities: string[]
    requirements: string[]
    preferred: string[]
    salary?: string
    published: boolean
}

export const jobPositions: JobPosition[] = [
    {
        id: "frontend-engineer",
        title: "フロントエンドエンジニア",
        department: "開発チーム",
        type: "正社員 / 業務委託",
        location: "フルリモート可",
        description: "モダンなフロントエンド技術を駆使して、ユーザー体験を最大化するWebアプリケーションを開発していただきます。",
        responsibilities: [
            "React/Next.jsを使用したWebアプリケーション開発",
            "デザイナーとの協業によるUI/UX改善",
            "パフォーマンス最適化・アクセシビリティ対応",
            "コードレビュー・技術的なメンタリング",
        ],
        requirements: [
            "React/Vue.js等のモダンフレームワーク経験2年以上",
            "TypeScriptの実務経験",
            "Git/GitHubを使ったチーム開発経験",
        ],
        preferred: [
            "Next.js/Nuxt.jsの実務経験",
            "デザインシステムの構築経験",
            "テスト駆動開発の経験",
        ],
        salary: "年収 500万〜800万円（経験・スキルによる）",
        published: true,
    },
    {
        id: "backend-engineer",
        title: "バックエンドエンジニア",
        department: "開発チーム",
        type: "正社員 / 業務委託",
        location: "フルリモート可",
        description: "スケーラブルで堅牢なバックエンドシステムを設計・開発していただきます。",
        responsibilities: [
            "APIの設計・開発（REST/GraphQL）",
            "データベース設計・最適化",
            "インフラ構築・運用（AWS/GCP）",
            "セキュリティ対策・パフォーマンスチューニング",
        ],
        requirements: [
            "バックエンド開発経験3年以上",
            "Node.js/Python/Go等の言語経験",
            "RDBMSの設計・運用経験",
        ],
        preferred: [
            "マイクロサービスアーキテクチャの経験",
            "Kubernetes/Dockerの実務経験",
            "大規模トラフィック対応の経験",
        ],
        salary: "年収 550万〜900万円（経験・スキルによる）",
        published: true,
    },
    {
        id: "project-manager",
        title: "プロジェクトマネージャー",
        department: "PMチーム",
        type: "正社員",
        location: "フルリモート可",
        description: "クライアントと開発チームの間に立ち、プロジェクトを成功に導いていただきます。",
        responsibilities: [
            "プロジェクトの計画立案・進行管理",
            "クライアントとの折衝・要件定義",
            "チームメンバーのマネジメント",
            "リスク管理・課題解決",
        ],
        requirements: [
            "Webシステム開発プロジェクトのPM経験2年以上",
            "技術的なバックグラウンド",
            "優れたコミュニケーション能力",
        ],
        preferred: [
            "アジャイル開発の経験",
            "エンジニア経験",
            "複数プロジェクト同時管理の経験",
        ],
        salary: "年収 600万〜1000万円（経験・スキルによる）",
        published: true,
    },
    {
        id: "ui-ux-designer",
        title: "UI/UXデザイナー",
        department: "デザインチーム",
        type: "正社員 / 業務委託",
        location: "フルリモート可",
        description: "ユーザー視点に立った魅力的なUI/UXをデザインしていただきます。",
        responsibilities: [
            "Webサービス・アプリのUI/UXデザイン",
            "ユーザーリサーチ・ペルソナ設計",
            "プロトタイピング・ユーザビリティテスト",
            "デザインシステムの構築・運用",
        ],
        requirements: [
            "UI/UXデザイン経験3年以上",
            "Figma等のデザインツールの実務経験",
            "ポートフォリオの提出が可能な方",
        ],
        preferred: [
            "フロントエンド実装の知識",
            "デザインシステムの構築経験",
            "アクセシビリティへの深い理解",
        ],
        salary: "年収 500万〜800万円（経験・スキルによる）",
        published: true,
    },
    {
        id: "intern-engineer",
        title: "エンジニアインターン",
        department: "開発チーム",
        type: "インターン（長期）",
        location: "フルリモート可",
        description: "実際のプロダクト開発に参加しながら、実践的なスキルを身につけていただきます。",
        responsibilities: [
            "プロダクト開発のサポート",
            "技術調査・検証",
            "ドキュメント作成",
        ],
        requirements: [
            "プログラミングの基礎知識",
            "週20時間以上の稼働が可能な方",
            "半年以上の長期インターンが可能な方",
        ],
        preferred: [
            "個人開発の経験",
            "チーム開発の経験",
            "特定の技術領域への深い興味",
        ],
        salary: "時給 1,500円〜2,500円（スキルによる）",
        published: true,
    },
]

export function getPublishedJobs(): JobPosition[] {
    return jobPositions.filter(job => job.published)
}

export function getJobById(id: string): JobPosition | undefined {
    return jobPositions.find(job => job.id === id)
}


