import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from 'next'
import { getPageSetting } from "@/lib/microcms"
import { Building2, MapPin, Calendar, User, Mail, Phone } from "lucide-react"

export async function generateMetadata(): Promise<Metadata> {
    const setting = await getPageSetting('company')
    return {
        title: setting?.title || '会社概要 | プラスコミット株式会社',
        description: setting?.description || '株式会社PLUS-COMMITの会社概要です。企業情報、代表メッセージ、事業内容、沿革などをご紹介します。',
        openGraph: {
            title: setting?.title || '会社概要 | プラスコミット株式会社',
            description: setting?.description || '株式会社PLUS-COMMITの会社概要です。企業情報、代表メッセージ、事業内容、沿革などをご紹介します。',
            images: ["/general/ogp.png"],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: setting?.title || '会社概要 | プラスコミット株式会社',
            description: setting?.description || '株式会社PLUS-COMMITの会社概要です。企業情報、代表メッセージ、事業内容、沿革などをご紹介します。',
            images: ["/general/ogp.png"],
        },
    }
}

export default async function CompanyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20 bg-white">
                {/* Hero Section */}
                <section className="py-24 border-b border-zinc-100 relative overflow-hidden bg-gradient-to-br from-zinc-50 to-white">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-zinc-500 font-bold tracking-wider text-sm mb-4">COMPANY</div>
                        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-zinc-900 mb-6">
                            会社概要
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-3xl leading-relaxed">
                            株式会社PLUS-COMMITは、テクノロジーの力でビジネスを加速させ、<br className="hidden md:block" />
                            お客様の成長と成功を全力でサポートする、Web制作・開発・DX支援を行う企業です。
                        </p>
                    </div>
                </section>

                {/* Company Info Section */}
                <section className="py-20 border-b border-zinc-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-black tracking-tight text-zinc-900 mb-12 flex items-center gap-3">
                            <Building2 className="w-8 h-8 text-primary-600" />
                            会社情報
                        </h2>
                        <div className="max-w-4xl">
                            <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
                                <div className="grid divide-y divide-zinc-100">
                                    <div className="grid md:grid-cols-4 p-6 hover:bg-zinc-50 transition-colors">
                                        <div className="text-zinc-500 font-bold text-sm mb-2 md:mb-0">会社名</div>
                                        <div className="md:col-span-3 text-zinc-900 font-medium">株式会社PLUS-COMMIT</div>
                                    </div>
                                    <div className="grid md:grid-cols-4 p-6 hover:bg-zinc-50 transition-colors">
                                        <div className="text-zinc-500 font-bold text-sm mb-2 md:mb-0">英文社名</div>
                                        <div className="md:col-span-3 text-zinc-900 font-medium">PLUS-COMMIT Inc.</div>
                                    </div>
                                    <div className="grid md:grid-cols-4 p-6 hover:bg-zinc-50 transition-colors">
                                        <div className="text-zinc-500 font-bold text-sm mb-2 md:mb-0 flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            設立
                                        </div>
                                        <div className="md:col-span-3 text-zinc-900 font-medium">2024年4月</div>
                                    </div>
                                    <div className="grid md:grid-cols-4 p-6 hover:bg-zinc-50 transition-colors">
                                        <div className="text-zinc-500 font-bold text-sm mb-2 md:mb-0">資本金</div>
                                        <div className="md:col-span-3 text-zinc-900 font-medium">100万円</div>
                                    </div>
                                    <div className="grid md:grid-cols-4 p-6 hover:bg-zinc-50 transition-colors">
                                        <div className="text-zinc-500 font-bold text-sm mb-2 md:mb-0 flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            代表取締役
                                        </div>
                                        <div className="md:col-span-3 text-zinc-900 font-medium">青柳 航佑</div>
                                    </div>
                                    <div className="grid md:grid-cols-4 p-6 hover:bg-zinc-50 transition-colors">
                                        <div className="text-zinc-500 font-bold text-sm mb-2 md:mb-0 flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            所在地
                                        </div>
                                        <div className="md:col-span-3 text-zinc-900 font-medium">
                                            東京都
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-4 p-6 hover:bg-zinc-50 transition-colors">
                                        <div className="text-zinc-500 font-bold text-sm mb-2 md:mb-0 flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            お問い合わせ
                                        </div>
                                        <div className="md:col-span-3">
                                            <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium underline">
                                                お問い合わせフォームへ
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-4 p-6 hover:bg-zinc-50 transition-colors">
                                        <div className="text-zinc-500 font-bold text-sm mb-2 md:mb-0">事業内容</div>
                                        <div className="md:col-span-3 text-zinc-900">
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0"></span>
                                                    <span className="font-medium">Web制作・開発事業</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0"></span>
                                                    <span className="font-medium">DXコンサルティング・導入支援</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0"></span>
                                                    <span className="font-medium">システムエンジニアリングサービス（SES）</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0"></span>
                                                    <span className="font-medium">コーディング代行事業</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0"></span>
                                                    <span className="font-medium">ITコンサルティング事業</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="py-20 bg-zinc-50 border-b border-zinc-100">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm">
                                <div className="text-primary-600 text-sm font-bold uppercase tracking-wider mb-4">MISSION</div>
                                <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-6 leading-tight">
                                    テクノロジーで、<br />ビジネスを加速させる
                                </h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    私たちは、最新のテクノロジーと確かな技術力を提供し、お客様のビジネス課題の解決と生産性の向上を支援します。変化の激しいデジタル社会において、信頼されるパートナーとして共に成長し続けます。
                                </p>
                            </div>
                            <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm">
                                <div className="text-primary-600 text-sm font-bold uppercase tracking-wider mb-4">VISION</div>
                                <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-6 leading-tight">
                                    挑戦する全ての人を<br />技術で支える
                                </h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    技術の力で新しいことに挑戦する人々を支援し、ビジネスの可能性を最大化します。常に学び続け、革新的なソリューションを提供することで、お客様と社会の発展に貢献します。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Value Section */}
                <section className="py-20 border-b border-zinc-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-black tracking-tight text-zinc-900 mb-12 text-center">
                            私たちの価値観
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-3xl">💪</span>
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-4">コミットメント</h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    お客様へのコミットメントを第一に、約束したことは必ず実現します。
                                </p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-3xl">🚀</span>
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-4">スピード</h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    変化の激しい時代に対応するため、迅速な意思決定と行動を重視します。
                                </p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-3xl">🌱</span>
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-4">成長</h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    常に学び続け、技術力と人間力の両面で成長し続けます。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* History Section */}
                <section className="py-20 bg-zinc-50 border-b border-zinc-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-black tracking-tight text-zinc-900 mb-12">
                            沿革
                        </h2>
                        <div className="max-w-3xl">
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-32">
                                        <div className="text-zinc-900 font-bold text-lg">2024年4月</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="bg-white border border-zinc-200 rounded-lg p-6 shadow-sm">
                                            <p className="text-zinc-900 font-medium">株式会社PLUS-COMMIT 設立</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-32">
                                        <div className="text-zinc-900 font-bold text-lg">2024年5月</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="bg-white border border-zinc-200 rounded-lg p-6 shadow-sm">
                                            <p className="text-zinc-900 font-medium">Web制作・開発事業 開始</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-32">
                                        <div className="text-zinc-900 font-bold text-lg">2024年7月</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="bg-white border border-zinc-200 rounded-lg p-6 shadow-sm">
                                            <p className="text-zinc-900 font-medium">DXコンサルティング事業 開始</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-32">
                                        <div className="text-zinc-900 font-bold text-lg">2024年10月</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="bg-white border border-zinc-200 rounded-lg p-6 shadow-sm">
                                            <p className="text-zinc-900 font-medium">SES事業 開始</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white relative overflow-hidden">
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">
                            お気軽にご相談ください
                        </h2>
                        <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
                            プロジェクトのご相談、お見積もり、その他ご質問など、<br className="hidden md:block" />
                            何でもお気軽にお問い合わせください。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100 font-bold px-10 h-14 rounded-full text-lg shadow-xl" asChild>
                                <Link href="/contact">
                                    <Mail className="mr-2 w-5 h-5" />
                                    お問い合わせ
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-10 h-14 rounded-full text-lg" asChild>
                                <Link href="/works">
                                    制作実績を見る
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
