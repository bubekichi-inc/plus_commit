import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BusinessHomePage() {
    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl">
                            <div className="text-blue-400 font-medium mb-4 tracking-wider">DIGITAL TRANSFORMATION PARTNER</div>
                            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-white leading-tight">
                                テクノロジーで<br />
                                <span className="text-blue-500">ビジネスを進化</span>させる
                            </h1>
                            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                                Web制作・コーディング代行・DXコンサルティング。<br />
                                貴社のデジタル戦略をワンストップでサポートします。
                            </p>
                            <div className="flex gap-4">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8" asChild>
                                    <Link href="/business/contact">無料相談する</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800" asChild>
                                    <Link href="/business/works">制作実績を見る</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Overview */}
                <section className="py-24 border-t border-slate-800">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="text-blue-400 font-medium mb-2 tracking-wider">SERVICES</div>
                            <h2 className="text-4xl font-black tracking-tight text-white">事業内容</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "💻",
                                    title: "コーディング代行",
                                    description: "デザインカンプからの正確なコーディング。レスポンシブ対応、アニメーション実装、CMS組み込みまで対応します。",
                                    price: "5万円〜",
                                },
                                {
                                    icon: "🚀",
                                    title: "DXコンサルティング",
                                    description: "業務効率化、システム導入支援、デジタル戦略立案。貴社のDX推進をトータルでサポートします。",
                                    price: "月額10万円〜",
                                },
                                {
                                    icon: "🌐",
                                    title: "Web制作",
                                    description: "コーポレートサイト、LP、ECサイトなど。企画・デザイン・開発までワンストップで対応。",
                                    price: "30万円〜",
                                },
                                {
                                    icon: "⚡",
                                    title: "Webアプリ開発",
                                    description: "業務システム、SaaS、会員サイトなど。Next.js/Reactを活用したモダンな開発を行います。",
                                    price: "100万円〜",
                                },
                                {
                                    icon: "🔧",
                                    title: "保守・運用",
                                    description: "サイト公開後の継続的なサポート。セキュリティ更新、コンテンツ更新、障害対応まで。",
                                    price: "月額3万円〜",
                                },
                                {
                                    icon: "📊",
                                    title: "業務自動化",
                                    description: "RPAツール導入、API連携、スプレッドシート自動化など。手作業を減らし生産性を向上。",
                                    price: "20万円〜",
                                },
                            ].map((service, index) => (
                                <div key={index} className="bg-slate-900 border border-slate-800 p-8 hover:border-blue-500/50 transition-colors group">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="text-blue-400 font-bold">{service.price}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800" asChild>
                                <Link href="/business/services">サービス詳細を見る →</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-24 border-t border-slate-800 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="text-blue-400 font-medium mb-2 tracking-wider">WHY US</div>
                            <h2 className="text-4xl font-black tracking-tight text-white">選ばれる理由</h2>
                        </div>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { number: "01", title: "技術力", desc: "現役エンジニアが対応" },
                                { number: "02", title: "柔軟な対応", desc: "小規模〜大規模まで" },
                                { number: "03", title: "スピード", desc: "最短即日見積り" },
                                { number: "04", title: "伴走支援", desc: "DX推進をトータルサポート" },
                            ].map((item, index) => (
                                <div key={index} className="text-center p-6">
                                    <div className="text-5xl font-black text-blue-500/20 mb-2">{item.number}</div>
                                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                    <p className="text-slate-500 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 border-t border-slate-800">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-black tracking-tight text-white mb-4">
                            まずはお気軽にご相談ください
                        </h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            プロジェクトの規模や予算に関わらず、最適なソリューションをご提案いたします。
                        </p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-12" asChild>
                            <Link href="/business/contact">無料相談を予約する</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <BusinessFooter />
        </>
    )
}

