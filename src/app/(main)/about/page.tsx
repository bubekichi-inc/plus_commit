import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { Metadata } from 'next'
import { getPageSetting } from "@/lib/microcms"

export async function generateMetadata(): Promise<Metadata> {
    const setting = await getPageSetting('about')
    return {
        title: setting?.title,
        description: setting?.description,
    }
}

export default function AboutPage() {
    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen pt-20 bg-white text-zinc-900">
                {/* Hero Section */}
                <section className="py-24 border-b border-zinc-100">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-6 text-zinc-900">
                            <span className="text-zinc-900 underline decoration-primary-500">会社</span>概要
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-2xl">
                            株式会社PLUS-COMMITは、Web制作・開発、DXコンサルティング、システムエンジニアリングサービスを通じて、
                            企業のビジネス成長とデジタル変革をトータルでサポートします。
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-20 border-b border-zinc-100">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black italic tracking-tighter mb-6 border-l-4 border-zinc-900 pl-4 text-zinc-900">
                                    <span>Mission</span>
                                </h2>
                                <p className="text-zinc-900 text-lg font-bold leading-relaxed mb-6">
                                    テクノロジーで、ビジネスを加速させる。
                                </p>
                                <p className="text-zinc-600 leading-relaxed">
                                    私たちは、最新のテクノロジーと確かな技術力を提供し、
                                    お客様のビジネス課題の解決と生産性の向上を支援します。
                                    変化の激しいデジタル社会において、
                                    信頼されるパートナーとして共に成長し続けます。
                                </p>
                            </div>
                            <div className="bg-zinc-50 border border-zinc-100 p-8 rounded-lg">
                                <div className="text-6xl font-black italic text-zinc-900 mb-4">100%</div>
                                <p className="text-zinc-600">コミットメントを追求</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Info Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-black italic tracking-tighter mb-12 border-l-4 border-zinc-900 pl-4 text-zinc-900">
                            会社情報
                        </h2>
                        <div className="bg-white border border-zinc-100 rounded-lg overflow-hidden shadow-sm">
                            <div className="grid divide-y divide-zinc-100">
                                <div className="grid md:grid-cols-4 p-6">
                                    <div className="text-zinc-500 font-bold uppercase tracking-wider text-sm mb-2 md:mb-0">会社名</div>
                                    <div className="md:col-span-3 text-zinc-900">株式会社PLUS-COMMIT</div>
                                </div>
                                <div className="grid md:grid-cols-4 p-6">
                                    <div className="text-zinc-500 font-bold uppercase tracking-wider text-sm mb-2 md:mb-0">設立</div>
                                    <div className="md:col-span-3 text-zinc-900">2024年4月</div>
                                </div>
                                <div className="grid md:grid-cols-4 p-6">
                                    <div className="text-zinc-500 font-bold uppercase tracking-wider text-sm mb-2 md:mb-0">代表者</div>
                                    <div className="md:col-span-3 text-zinc-900">青柳 航佑</div>
                                </div>
                                <div className="grid md:grid-cols-4 p-6">
                                    <div className="text-zinc-500 font-bold uppercase tracking-wider text-sm mb-2 md:mb-0">所在地</div>
                                    <div className="md:col-span-3 text-zinc-900">東京都</div>
                                </div>
                                <div className="grid md:grid-cols-4 p-6">
                                    <div className="text-zinc-500 font-bold uppercase tracking-wider text-sm mb-2 md:mb-0">事業内容</div>
                                    <div className="md:col-span-3 text-zinc-900">
                                        <ul className="space-y-2">
                                            <li>・Web制作・開発事業</li>
                                            <li>・DXコンサルティング・導入支援</li>
                                            <li>・システムエンジニアリングサービス（SES）</li>
                                            <li>・コーディング代行事業</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <BusinessFooter />
        </>
    )
}





