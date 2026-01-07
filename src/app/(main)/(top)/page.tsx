import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BusinessHero } from "@/components/business/BusinessHero"
import { MissionVisionValue } from "@/components/sections/MissionVisionValue"
import { ArrowRight, ChevronRight, Check, Zap, ExternalLink, Mail } from "lucide-react"
import { getNewsList, getPageSetting } from "@/lib/microcms"
import { getRecruitUrl, isRecruitExternal } from "@/lib/site-config"
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const setting = await getPageSetting('top')
    return {
        title: setting?.title,
        description: setting?.description,
    }
}

export default async function HomePage() {
    const { contents: news } = await getNewsList({ limit: 3 })
    // 仮でBlogも同じニュースソースを使うが、運用によっては分ける
    const { contents: blogs } = await getNewsList({ limit: 3, offset: 3 })

    return (
        <>
            <Header />
            <main className="min-h-screen pt-0 bg-white">
                <BusinessHero />

                <MissionVisionValue />

                {/* Services Section */}
                <section className="py-24 border-t border-zinc-100">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="md:w-1/2">
                                <div className="text-primary-600 font-bold tracking-widest text-xs mb-4">SERVICES</div>
                                <h2 className="text-3xl md:text-4xl font-black text-black mb-6 leading-tight">
                                    ビジネスを加速させる、<br />
                                    包括的なソリューション。
                                </h2>
                                <p className="text-zinc-600 font-medium leading-relaxed mb-8">
                                    戦略立案から実装、運用まで。クライアントの課題に合わせて最適なチームを編成し、ビジネスの成長を支援します。
                                </p>
                                <Button asChild variant="outline" className="rounded-full px-8 h-12 border-zinc-300 text-zinc-900 hover:bg-black hover:text-white font-bold">
                                    <Link href="/services">
                                        View All Services
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                                {["Coding", "DX Consulting", "Web Development", "UI/UX Design"].map((item) => (
                                    <div key={item} className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 flex items-center justify-center text-center font-bold text-zinc-700 h-32">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Works Section */}
                <section className="py-24 border-t border-zinc-100 bg-zinc-50">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="md:w-1/2 order-2 md:order-1">
                                {/* Placeholder for Works Grid/Image */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="aspect-video bg-zinc-200 rounded-xl"></div>
                                    <div className="aspect-video bg-zinc-200 rounded-xl"></div>
                                    <div className="aspect-video bg-zinc-200 rounded-xl"></div>
                                    <div className="aspect-video bg-zinc-200 rounded-xl"></div>
                                </div>
                            </div>
                            <div className="md:w-1/2 order-1 md:order-2">
                                <div className="text-accent font-bold tracking-widest text-xs mb-4">WORKS</div>
                                <h2 className="text-3xl md:text-4xl font-black text-black mb-6 leading-tight">
                                    確かな技術で、<br />
                                    理想をカタチに。
                                </h2>
                                <p className="text-zinc-600 font-medium leading-relaxed mb-8">
                                    大手企業からスタートアップまで、様々な業界・規模のプロジェクト実績があります。私たちの技術力が生み出した成果をご覧ください。
                                </p>
                                <Button asChild variant="outline" className="rounded-full px-8 h-12 border-zinc-300 text-zinc-900 hover:bg-black hover:text-white font-bold">
                                    <Link href="/works">
                                        View Our Works
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Owned Products Section */}
                <section className="py-24 border-t border-zinc-100">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <div className="text-zinc-400 font-bold tracking-widest text-xs mb-2">OWNED PRODUCTS</div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black">自社プロダクト・運営メディア</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Plus Commit */}
                            <div className="group relative bg-white border border-zinc-200 p-10 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5 transition-all rounded-2xl flex flex-col">
                                <div className="text-primary-600 font-bold mb-4 tracking-widest uppercase text-xs">Skill Support</div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-4">プラスコミット</h3>
                                <p className="text-zinc-600 mb-6 leading-relaxed text-sm font-medium flex-1">
                                    IT転職・独立を目指す方のためのスキル習得支援サービス。実践的なカリキュラムとメンタリングでキャリアをお手伝いします。
                                </p>
                                <div className="mt-auto">
                                    <span className="text-zinc-400 text-sm font-bold group-hover:text-primary-600 transition-colors flex items-center gap-2">
                                        詳細を見る <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>

                            {/* K-zoku */}
                            <div className="group relative bg-white border border-zinc-200 p-10 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all rounded-2xl flex flex-col">
                                <div className="text-accent font-bold mb-4 tracking-widest uppercase text-xs">Application</div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-4">K-zoku</h3>
                                <p className="text-zinc-600 mb-6 leading-relaxed text-sm font-medium flex-1">
                                    意志に頼らず「仕組み」で解決する、新感覚の努力記録アプリ。行動経済学に基づいた設計で継続をサポート。
                                </p>
                                <div className="mt-auto">
                                    <Link href="https://k-zoku.com/" target="_blank" className="text-zinc-400 hover:text-accent transition-colors flex items-center gap-2 text-sm font-bold">
                                        公式サイトを見る
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Personal Dev */}
                            <div className="group relative bg-white border border-zinc-200 p-10 hover:border-zinc-400 hover:shadow-lg hover:shadow-zinc-500/5 transition-all rounded-2xl flex flex-col">
                                <div className="text-zinc-500 font-bold mb-4 tracking-widest uppercase text-xs">Media</div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-4">個人開発研究所</h3>
                                <p className="text-zinc-600 mb-6 leading-relaxed text-sm font-medium flex-1">
                                    エンジニアの挑戦を支える技術メディア。最新技術からマネタイズまで、開発者のための有益な情報を発信しています。
                                </p>
                                <div className="mt-auto">
                                    <Link href="https://personal-dev.net/" target="_blank" className="text-zinc-400 hover:text-zinc-800 transition-colors flex items-center gap-2 text-sm font-bold">
                                        メディアを見る
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* News Section */}
                <section className="py-24 border-t border-zinc-100 bg-zinc-50/50">
                    <div className="container mx-auto px-6">
                        <div className="flex items-end justify-between mb-12">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black">NEWS</h2>
                            <Link href="/news" className="group text-sm text-zinc-500 hover:text-primary-500 transition-colors flex items-center gap-2 font-bold">
                                VIEW ALL <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {news.map((item) => (
                                <Link key={item.id} href={`/news/${item.id}`} className="group flex items-center gap-6 py-6 border-b border-zinc-200 hover:bg-white hover:border-transparent hover:shadow-sm transition-all px-6 rounded-xl bg-transparent">
                                    <span className="text-sm text-zinc-400 font-mono shrink-0">{new Date(item.publishedAt).toLocaleDateString('en-US').replace(/\//g, '.')}</span>
                                    <p className="text-base text-zinc-800 group-hover:text-primary-600 transition-colors flex-1 font-bold line-clamp-1">{item.title}</p>
                                    <span className="px-3 py-1 bg-white text-zinc-500 text-xs font-bold border border-zinc-200 rounded min-w-[80px] text-center group-hover:border-primary-200 group-hover:text-primary-600 transition-colors">
                                        {item.category?.name || "お知らせ"}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Section */}
                <section className="py-24 border-t border-zinc-100">
                    <div className="container mx-auto px-6">
                        <div className="flex items-end justify-between mb-12">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black">BLOG</h2>
                            <Link href="/news" className="group text-sm text-zinc-500 hover:text-primary-500 transition-colors flex items-center gap-2 font-bold">
                                VIEW ALL <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {blogs.map((item) => (
                                <Link key={item.id} href={`/news/${item.id}`} className="group flex flex-col">
                                    <div className="aspect-video bg-zinc-100 rounded-2xl mb-6 overflow-hidden border border-zinc-100">
                                        {item.thumbnail ? (
                                            <img src={item.thumbnail.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-zinc-300 font-bold">NO IMAGE</div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="text-xs font-bold text-primary-600">{item.category?.name || "Tech"}</span>
                                        <span className="text-xs text-zinc-400 font-mono">{new Date(item.publishedAt).toLocaleDateString('en-US').replace(/\//g, '.')}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-primary-600 transition-colors leading-relaxed line-clamp-2">
                                        {item.title}
                                    </h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Corporate CTA */}
                <section className="py-32 border-t border-zinc-100 bg-zinc-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">
                            お仕事のご依頼・ご相談
                        </h2>
                        <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
                            Web制作、システム開発、DX支援など、<br className="md:hidden" />お気軽にご相談ください。<br />
                            貴社の課題に合わせた最適なプランをご提案いたします。
                        </p>
                        <Button size="lg" className="bg-white text-black hover:bg-primary-500 hover:text-white font-bold px-12 h-16 rounded-full text-lg transition-all" asChild>
                            <Link href="/contact">
                                <Mail className="mr-2 w-5 h-5" />
                                お問い合わせはこちら
                            </Link>
                        </Button>
                    </div>
                </section>

                {/* Recruit CTA */}
                <section className="py-32 bg-gradient-premium relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-white/10 blur-3xl rounded-full translate-x-1/2" />
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="inline-block px-4 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-bold text-white mb-6">
                            RECRUIT
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-8">
                            Join Our Team
                        </h2>
                        <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto font-medium">
                            自分の成長と、誰かの幸せに、本気で挑戦しませんか。<br />
                            PlusCommitでは、熱い想いを持った仲間を募集しています。
                        </p>
                        <Button size="lg" className="bg-white text-primary-600 hover:bg-zinc-100 font-bold px-12 h-14 rounded-full shadow-lg shadow-black/10" asChild>
                            <Link href={getRecruitUrl()} target={isRecruitExternal() ? "_blank" : undefined}>
                                View Open Positions
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
