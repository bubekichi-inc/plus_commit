import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
    {
        id: "coding",
        title: "コーディング代行",
        description: "デザインカンプからの正確なコーディングを代行します。制作会社様、デザイナー様のパートナーとして。",
        features: [
            "Figma / XD / Photoshopからのコーディング",
            "HTML / CSS / JavaScriptの実装",
            "レスポンシブ対応（スマホ・タブレット・PC）",
            "アニメーション・インタラクション実装",
            "WordPress / microCMSなどCMS組み込み",
            "既存サイトの修正・改修対応",
        ],
        price: "5万円〜",
        period: "1〜2週間",
    },
    {
        id: "dx-consulting",
        title: "DXコンサルティング",
        description: "デジタル技術を活用した業務改革を支援。戦略立案から導入・運用まで伴走します。",
        features: [
            "現状分析・課題の可視化",
            "DX戦略・ロードマップ策定",
            "SaaS / ツール選定支援",
            "業務プロセス改善提案",
            "社内システム導入支援",
            "デジタル人材育成支援",
        ],
        price: "月額10万円〜",
        period: "3ヶ月〜",
    },
    {
        id: "web-production",
        title: "Web制作",
        description: "コーポレートサイト、LP、ECサイトなど。企画・デザイン・開発をワンストップで対応。",
        features: [
            "要件定義・サイト設計",
            "UI/UXデザイン",
            "フロントエンド開発",
            "CMS構築・導入",
            "SEO対策",
            "アクセス解析設定",
        ],
        price: "30万円〜",
        period: "4〜8週間",
    },
    {
        id: "webapp",
        title: "Webアプリケーション開発",
        description: "業務システム、SaaS、会員サイトなど。モダンな技術スタックで開発します。",
        features: [
            "Next.js / React によるフロントエンド開発",
            "API設計・バックエンド開発",
            "データベース設計・構築",
            "認証・セキュリティ対策",
            "クラウドインフラ構築（AWS / GCP / Vercel）",
            "CI/CD パイプライン構築",
        ],
        price: "100万円〜",
        period: "2〜6ヶ月",
    },
    {
        id: "automation",
        title: "業務自動化",
        description: "手作業を自動化し、生産性を向上。RPAやAPI連携で業務効率化を実現します。",
        features: [
            "業務フロー分析・自動化設計",
            "RPA（UiPath / Power Automate）導入",
            "Google Apps Script / VBA開発",
            "API連携・データ連携",
            "スプレッドシート・Excel自動化",
            "定型レポート自動生成",
        ],
        price: "20万円〜",
        period: "2〜4週間",
    },
    {
        id: "maintenance",
        title: "保守・運用サポート",
        description: "サイト・システム公開後も安心。継続的なサポートを提供します。",
        features: [
            "定期的なセキュリティ更新",
            "コンテンツ更新代行",
            "アクセス解析レポート",
            "パフォーマンス監視",
            "障害対応・復旧",
            "機能追加・改修",
        ],
        price: "月額3万円〜",
        period: "継続契約",
    },
]

export default function ServicesPage() {
    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen pt-20">
                <section className="py-24 border-b border-slate-800">
                    <div className="container mx-auto px-4">
                        <div className="text-blue-400 font-medium mb-2 tracking-wider">SERVICES</div>
                        <h1 className="text-5xl font-black tracking-tight text-white mb-6">
                            サービス一覧
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl">
                            コーディング代行からDXコンサルティングまで。お客様のビジネス課題に合わせて最適なソリューションをご提案いたします。
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="space-y-16">
                            {services.map((service, index) => (
                                <div key={service.id} className="grid md:grid-cols-2 gap-12 items-start">
                                    <div className={index % 2 === 1 ? "md:order-2" : ""}>
                                        <div className="text-blue-400 font-medium mb-2 tracking-wider">
                                            0{index + 1}
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-4">
                                            {service.title}
                                        </h2>
                                        <p className="text-slate-400 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <div className="flex gap-8 mb-6">
                                            <div>
                                                <div className="text-slate-500 text-sm mb-1">料金目安</div>
                                                <div className="text-xl font-bold text-blue-400">{service.price}</div>
                                            </div>
                                            <div>
                                                <div className="text-slate-500 text-sm mb-1">納期目安</div>
                                                <div className="text-xl font-bold text-white">{service.period}</div>
                                            </div>
                                        </div>
                                        <Button className="bg-blue-600 hover:bg-blue-500 text-white" asChild>
                                            <Link href="/contact">このサービスについて相談する</Link>
                                        </Button>
                                    </div>
                                    <div className={`bg-slate-900 border border-slate-800 p-8 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                        <h3 className="text-white font-bold mb-4">サービス内容</h3>
                                        <ul className="space-y-3">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center gap-3 text-slate-400">
                                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 border-t border-slate-800 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="text-blue-400 font-medium mb-2 tracking-wider">PROCESS</div>
                            <h2 className="text-4xl font-black tracking-tight text-white">制作の流れ</h2>
                        </div>
                        <div className="grid md:grid-cols-5 gap-4">
                            {[
                                { step: "01", title: "ヒアリング", desc: "課題・要件の整理" },
                                { step: "02", title: "企画・設計", desc: "サイト構成・仕様策定" },
                                { step: "03", title: "デザイン", desc: "UI/UXデザイン制作" },
                                { step: "04", title: "開発", desc: "コーディング・実装" },
                                { step: "05", title: "納品・運用", desc: "公開・保守サポート" },
                            ].map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="bg-slate-900 border border-slate-800 p-6 text-center h-full">
                                        <div className="text-3xl font-black text-blue-500/30 mb-2">{item.step}</div>
                                        <h3 className="text-white font-bold mb-1">{item.title}</h3>
                                        <p className="text-slate-500 text-sm">{item.desc}</p>
                                    </div>
                                    {index < 4 && (
                                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-slate-700">
                                            →
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 border-t border-slate-800">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-black tracking-tight text-white mb-4">
                            お見積りは無料です
                        </h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            ご予算・ご要望に応じて、最適なプランをご提案いたします。
                        </p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-12" asChild>
                            <Link href="/contact">無料見積りを依頼する</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <BusinessFooter />
        </>
    )
}





