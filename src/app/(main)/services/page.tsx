import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20">
                {/* Hero */}
                <section className="py-24 border-b border-zinc-800 bg-zinc-950">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6 text-white">
                            OUR <span className="text-primary-500">SERVICES</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                            プラスコミットは、教育事業に留まらず、エンジニアの挑戦を支えるプロダクトやメディアを展開しています。
                        </p>
                    </div>
                </section>

                {/* K-zoku Details */}
                <section className="py-24 border-b border-zinc-800 bg-zinc-900/30">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="text-primary-500 font-bold mb-4 tracking-widest uppercase">Self-Developed Application</div>
                                <h2 className="text-4xl font-bold text-white mb-6">K-zoku</h2>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                    現代の「誘惑が多い社会」で、自分の目標に向かって努力し続けることは容易ではありません。
                                    K-zokuは、心理学とデータ分析に基づいた「仕組み」を提供し、
                                    ユーザーが迷わず、飽きず、孤独にならずに継続できる環境を提供します。
                                </p>
                                <div className="space-y-6 mb-10">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center text-primary-500 shrink-0">
                                            <span className="text-2xl">🔥</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">継続レベルシステム</h4>
                                            <p className="text-zinc-500 text-sm">努力をゲーム化し、レベルが上がる喜びで習慣化を促進。</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center text-primary-500 shrink-0">
                                            <span className="text-2xl">📊</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">詳細なデータ分析</h4>
                                            <p className="text-zinc-500 text-sm">積み上げた時間を可視化し、客観的な自信へと繋げます。</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center text-primary-500 shrink-0">
                                            <span className="text-2xl">⏰</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">没入型アラーム機能</h4>
                                            <p className="text-zinc-500 text-sm">スマホの誘惑を断ち切り、集中すべき時間に没頭させます。</p>
                                        </div>
                                    </div>
                                </div>
                                <Button className="bg-primary-600 hover:bg-primary-500 text-white font-bold italic uppercase rounded-none skew-x-[-10deg] px-10 py-6 text-lg" asChild>
                                    <Link href="https://k-zoku.com/" target="_blank">
                                        <span className="skew-x-[10deg]">K-zoku を始める</span>
                                    </Link>
                                </Button>
                            </div>
                            <div className="bg-zinc-800 border border-zinc-700 aspect-video flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent"></div>
                                <span className="text-4xl font-black italic text-zinc-600">K-zoku SCREENSHOT</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 個人開発研究所 Details */}
                <section className="py-24 bg-zinc-950">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="lg:order-2">
                                <div className="text-primary-500 font-bold mb-4 tracking-widest uppercase">Engineer Media</div>
                                <h2 className="text-4xl font-bold text-white mb-6">個人開発研究所</h2>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                    エンジニアが自分のプロダクトで世界に挑戦するためのナレッジベース。
                                    技術的な選定から、なかなか表に出ないマネタイズの裏側まで、
                                    実践的な情報を「科学的」な視点で分析し発信しています。
                                </p>
                                <div className="grid grid-cols-2 gap-6 mb-10">
                                    <div className="p-6 bg-zinc-900 border border-zinc-800">
                                        <h4 className="text-white font-bold mb-2">最先端スタック</h4>
                                        <p className="text-zinc-500 text-sm">Next.js, Supabase, Tailwind等、爆速開発を可能にする技術群。</p>
                                    </div>
                                    <div className="p-6 bg-zinc-900 border border-zinc-800">
                                        <h4 className="text-white font-bold mb-2">収益化戦略</h4>
                                        <p className="text-zinc-500 text-sm">月10万円を稼ぐためのステップとマインドセットを公開。</p>
                                    </div>
                                    <div className="p-6 bg-zinc-900 border border-zinc-800">
                                        <h4 className="text-white font-bold mb-2">グローバル展開</h4>
                                        <p className="text-zinc-500 text-sm">日本から世界をターゲットにするための知見を共有。</p>
                                    </div>
                                    <div className="p-6 bg-zinc-900 border border-zinc-800">
                                        <h4 className="text-white font-bold mb-2">ニュースレター</h4>
                                        <p className="text-zinc-500 text-sm">最新トレンドを毎週メールボックスにお届け。</p>
                                    </div>
                                </div>
                                <Button className="bg-primary-600 hover:bg-primary-500 text-white font-bold italic uppercase rounded-none skew-x-[-10deg] px-10 py-6 text-lg" asChild>
                                    <Link href="https://personal-dev.net/" target="_blank">
                                        <span className="skew-x-[10deg]">記事を読む</span>
                                    </Link>
                                </Button>
                            </div>
                            <div className="lg:order-1 bg-zinc-800 border border-zinc-700 aspect-video flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-bl from-primary-500/20 to-transparent"></div>
                                <span className="text-4xl font-black italic text-zinc-600">MEDIA SCREENSHOT</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 border-t border-zinc-800 bg-primary-600/5">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-black italic tracking-tighter mb-8 text-white">
                            あなたの挑戦を、<br />
                            <span className="text-primary-500">仕組みと技術</span>で支えたい。
                        </h2>
                        <Button className="bg-primary-600 hover:bg-primary-500 text-white font-bold italic uppercase rounded-none skew-x-[-10deg] px-12 py-8 text-xl border-2 border-primary-600 hover:border-primary-400" asChild>
                            <Link href="/contact">
                                <span className="skew-x-[10deg]">まずは無料相談から</span>
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

