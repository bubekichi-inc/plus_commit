import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="py-24 border-b border-zinc-800">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-6">
                            <span className="text-primary-500">会社</span>概要
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl">
                            プラスコミットは、IT業界への転職・独立・起業を目指す方々を
                            本気でサポートするスパルタ学習管理サービスを提供しています。
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-20 border-b border-zinc-800">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black italic tracking-tighter mb-6 border-l-4 border-primary-500 pl-4">
                                    <span className="text-primary-500">Mission</span>
                                </h2>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                                    「やり抜く力」を全ての人に。
                                </p>
                                <p className="text-zinc-500 leading-relaxed">
                                    多くの人が学習を始めても、途中で挫折してしまいます。
                                    私たちは、徹底したサポート体制と効果的な学習管理で、
                                    あなたが最後までやり抜けるよう伴走します。
                                </p>
                            </div>
                            <div className="bg-zinc-900 border border-zinc-800 p-8">
                                <div className="text-6xl font-black italic text-primary-500 mb-4">95%</div>
                                <p className="text-zinc-400">目標達成率</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Info Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-black italic tracking-tighter mb-12 border-l-4 border-primary-500 pl-4">
                            会社情報
                        </h2>
                        <div className="bg-zinc-900 border border-zinc-800">
                            <div className="grid divide-y divide-zinc-800">
                                <div className="grid md:grid-cols-4 p-6">
                                    <div className="text-zinc-500 font-bold uppercase tracking-wider text-sm mb-2 md:mb-0">会社名</div>
                                    <div className="md:col-span-3 text-zinc-200">株式会社プラスコミット</div>
                                </div>
                                <div className="grid md:grid-cols-4 p-6">
                                    <div className="text-zinc-500 font-bold uppercase tracking-wider text-sm mb-2 md:mb-0">設立</div>
                                    <div className="md:col-span-3 text-zinc-200">2024年1月</div>
                                </div>
                                <div className="grid md:grid-cols-4 p-6">
                                    <div className="text-zinc-500 font-bold uppercase tracking-wider text-sm mb-2 md:mb-0">代表者</div>
                                    <div className="md:col-span-3 text-zinc-200">青柳 航佑</div>
                                </div>
                                <div className="grid md:grid-cols-4 p-6">
                                    <div className="text-zinc-500 font-bold uppercase tracking-wider text-sm mb-2 md:mb-0">所在地</div>
                                    <div className="md:col-span-3 text-zinc-200">東京都渋谷区</div>
                                </div>
                                <div className="grid md:grid-cols-4 p-6">
                                    <div className="text-zinc-500 font-bold uppercase tracking-wider text-sm mb-2 md:mb-0">事業内容</div>
                                    <div className="md:col-span-3 text-zinc-200">
                                        <ul className="space-y-2">
                                            <li>・スパルタ学習管理サービスの運営</li>
                                            <li>・IT学習コンテンツの提供</li>
                                            <li>・キャリアコンサルティング</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

