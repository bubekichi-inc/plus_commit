import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BusinessHero } from "@/components/business/BusinessHero"
import { MissionVisionValue } from "@/components/sections/MissionVisionValue"
import { ArrowRight, ChevronRight, Check, Zap, ExternalLink, Mail, Calendar, RefreshCw } from "lucide-react"
import { getNewsList, getPageSetting, getWorks } from "@/lib/microcms"
import { getRecruitUrl } from "@/lib/site-config"
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const setting = await getPageSetting('top')
    return {
        title: setting?.title,
        description: setting?.description,
        openGraph: {
            title: setting?.title,
            description: setting?.description,
            images: ["/general/ogp.png"],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: setting?.title,
            description: setting?.description,
            images: ["/general/ogp.png"],
        },
    }
}

export default async function HomePage() {
    const { contents: news } = await getNewsList({ limit: 3 })
    const { contents: works } = await getWorks({ limit: 4 })

    return (
        <>
            <Header />
            <main className="min-h-screen pt-0 bg-white">
                <BusinessHero />

                <MissionVisionValue />{/* Works Section */}<section className="py-32 border-t border-zinc-100 bg-zinc-50/50">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight tracking-tight">
                                    <span className="block mb-2">Works</span>
                                </h2>
                                <p className="text-zinc-600 font-medium leading-relaxed text-lg max-w-xl">
                                    様々な業界・規模のプロジェクト実績があります。
                                    数値の変化だけでなく、結果を出すまでの過程も可能な限り公開しています。
                                </p>
                            </div>
                            <Button asChild variant="outline" className="rounded-full px-8 h-12 border-zinc-300 text-zinc-900 hover:bg-black hover:text-white font-bold transition-all hidden md:flex">
                                <Link href="/works/">
                                    View All Works
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {works.map((work) => (
                                <Link key={work.id} href={`/works/${work.id}`} className="group relative block aspect-video overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-100 shadow-sm transition-all hover:shadow-xl">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={work.thumbnail?.url || "/general/ogp.png"}
                                        alt={work.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/20">
                                                {work.category?.name || "Works"}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 mb-2 opacity-80">
                                            <span className="text-xs text-white/90 flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(work.createdAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}
                                            </span>
                                            <span className="text-xs text-white/90 flex items-center gap-1">
                                                <RefreshCw className="w-3 h-3" />
                                                {new Date(work.updatedAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white leading-tight mb-2 group-hover:text-primary-300 transition-colors">
                                            {work.title}
                                        </h3>
                                    </div>
                                    <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110">
                                        <ArrowRight className="w-5 h-5 text-white group-hover:text-black" />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="md:hidden flex justify-center">
                            <Button asChild variant="outline" className="rounded-full px-8 h-12 border-zinc-300 text-zinc-900 hover:bg-black hover:text-white font-bold w-full">
                                <Link href="/works">
                                    View All Works
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>{/* News Section */}<section className="py-24 bg-white border-t border-zinc-50">
                    <div className="container mx-auto px-6">
                        <div className="flex items-end justify-between mb-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black">
                                    News
                                </h2>
                            </div>
                            <Link href="/news" className="group text-sm text-zinc-500 hover:text-primary-600 transition-colors flex items-center gap-2 font-bold hidden md:flex">
                                VIEW ALL <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {news.map((item) => (
                                <Link key={item.id} href={`/news/${item.id}`} className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-b border-zinc-100 hover:bg-zinc-50 transition-all px-6 rounded-2xl">
                                    <div className="flex items-center gap-4 shrink-0">
                                        <span className="text-xs text-zinc-400 font-mono font-medium flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(item.createdAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}
                                        </span>
                                        <span className="text-xs text-zinc-400 font-mono font-medium flex items-center gap-1">
                                            <RefreshCw className="w-3 h-3" />
                                            {new Date(item.updatedAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}
                                        </span>
                                        <span className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-bold rounded-full min-w-[80px] text-center group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                                            {item.category?.name || "お知らせ"}
                                        </span>
                                    </div>
                                    <p className="text-base md:text-lg text-zinc-800 group-hover:text-primary-600 transition-colors flex-1 font-bold line-clamp-1">{item.title}</p>
                                    <div className="shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary-600 hidden md:block">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-8 md:hidden flex justify-center">
                            <Link href="/news" className="group text-sm text-zinc-500 hover:text-primary-600 transition-colors flex items-center gap-2 font-bold">
                                VIEW ALL <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>{/* Corporate CTA */}<section className="py-32 border-t border-zinc-100 bg-zinc-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">
                            お仕事のご依頼・ご相談
                        </h2>
                        <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
                            Web制作、システム開発、DX支援など、<br className="md:hidden" />お気軽にご相談ください。<br />
                            貴社の課題に合わせた最適なプランをご提案いたします。
                        </p>
                        <Button size="lg" className="bg-white text-black hover:bg-primary-500 hover:text-white font-bold px-12 h-16 rounded-full text-lg transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(0,140,255,0.3)]" asChild>
                            <Link href="/contact">
                                <Mail className="mr-2 w-5 h-5" />
                                お問い合わせはこちら
                            </Link>
                        </Button>
                    </div>
                </section>{/* Recruit CTA */}<section className="py-32 bg-gradient-premium relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-white/10 blur-3xl rounded-full translate-x-1/2" />
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.1] mix-blend-overlay" />
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
                        <Button size="lg" className="bg-white text-primary-600 hover:bg-zinc-100 font-bold px-12 h-14 rounded-full shadow-xl shadow-black/20 hover:scale-105 transition-transform" asChild>
                            <Link href={getRecruitUrl()} target="_blank">
                                View Open Positions
                                <ExternalLink className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
