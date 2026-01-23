import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import Link from "next/link"
import { BusinessHero } from "@/components/business/BusinessHero"

import { MissionVisionValue } from "@/components/sections/MissionVisionValue"
import { ArrowRight } from "lucide-react"
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
    const { contents: allWorks } = await getWorks({ limit: 50 })
    const works = allWorks
        .slice()
        .sort((a, b) => {
            const aHasThumb = !!a.thumbnail?.url
            const bHasThumb = !!b.thumbnail?.url
            if (aHasThumb === bHasThumb) return 0
            return aHasThumb ? -1 : 1
        })
        .slice(0, 4)

    return (
        <>
            <Header />
            <main className="min-h-screen pt-0 relative">
                {/* Fixed Grid Background */}
                <div className="fixed inset-0 z-[-1] pointer-events-none bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black)] opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)'
                    }}
                />

                <BusinessHero />



                <MissionVisionValue />

                {/* Works Section - Smaller items */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        {/* Header */}
                        <div className="mb-12 md:mb-16">
                            <p className="text-sm text-[#999999] mb-3 tracking-widest uppercase font-medium">
                                Works
                            </p>
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#242422] tracking-tight">
                                    導入事例
                                </h2>
                                <Link
                                    href="/works/"
                                    className="hidden md:inline-flex items-center text-sm text-[#666666] hover:text-[#242422] transition-colors font-medium"
                                >
                                    すべての事例を見る
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>

                        {/* Works Grid - 3 columns, smaller cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12">
                            {works.map((work) => (
                                <Link
                                    key={work.id}
                                    href={`/works/${work.id}`}
                                    className="group block border border-[#E8E8E8] hover:border-[#CCCCCC] transition-colors rounded-[5px] overflow-hidden"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F8F8]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={work.thumbnail?.url || "/general/ogp.png"}
                                            alt={work.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-base font-bold text-[#242422] leading-snug group-hover:opacity-70 transition-opacity line-clamp-2">
                                            {work.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile CTA */}
                        <div className="md:hidden text-center">
                            <Link
                                href="/works"
                                className="inline-flex items-center justify-center h-14 px-10 rounded-[5px] bg-[#242422] text-white text-sm font-medium hover:opacity-80 transition-opacity"
                            >
                                すべての事例を見る
                                <ArrowRight className="w-4 h-4 ml-3" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* News Section - Baigie Style */}
                <section className="py-20 md:py-28 bg-[#F8F8F8]">
                    <div className="container mx-auto px-6">
                        {/* Header */}
                        <div className="mb-12 md:mb-16">
                            <p className="text-sm text-[#999999] mb-3 tracking-widest uppercase font-medium">
                                News
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#242422] tracking-tight">
                                お知らせ
                            </h2>
                        </div>

                        {/* News List */}
                        <div className="space-y-0 divide-y divide-[#E8E8E8]">
                            {news.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/news/${item.id}`}
                                    className="group flex flex-col md:flex-row md:items-center gap-4 py-6 hover:opacity-70 transition-opacity"
                                >
                                    <div className="flex items-center gap-4 shrink-0 md:w-44">
                                        <span className="text-sm text-[#999999] font-medium">
                                            {new Date(item.createdAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}
                                        </span>
                                        <span className="text-xs text-[#666666] border border-[#DDDDDD] px-2 py-0.5">
                                            {item.category?.name || "お知らせ"}
                                        </span>
                                    </div>
                                    <p className="text-[#242422] font-medium flex-1 line-clamp-1">
                                        {item.title}
                                    </p>
                                    <ArrowRight className="hidden md:block w-4 h-4 text-[#999999] shrink-0" />
                                </Link>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-12 text-center">
                            <Link
                                href="/news"
                                className="inline-flex items-center text-sm text-[#666666] hover:text-[#242422] transition-colors font-medium"
                            >
                                VIEW MORE
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Combined CTA Section - Baigie Style */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {/* Contact Card */}
                            <div className="bg-[#008CFF] p-8 md:p-12 text-white rounded-[5px]">
                                <p className="text-sm text-white/70 mb-3 tracking-widest uppercase font-medium">
                                    Contact
                                </p>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                                    お問い合わせ
                                </h2>
                                <p className="text-white/80 text-sm leading-[1.8] mb-8">
                                    Web制作、システム開発など、<br />
                                    お気軽にお問い合わせください。<br />
                                    最適なプランをご提案いたします。
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center h-12 px-8 rounded-[5px] bg-white text-[#008CFF] text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    お問い合わせ
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>

                            {/* Recruit Card */}
                            <div className="bg-[#242422] p-8 md:p-12 text-white rounded-[5px]">
                                <p className="text-sm text-white/50 mb-3 tracking-widest uppercase font-medium">
                                    Recruit
                                </p>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                                    採用情報
                                </h2>
                                <p className="text-white/70 text-sm leading-[1.8] mb-8">
                                    採用サイトで私たちの魅力を<br />
                                    ご覧ください。<br />
                                    みなさまのご応募お待ちしております。
                                </p>
                                <Link
                                    href={getRecruitUrl()}
                                    target="_blank"
                                    className="inline-flex items-center justify-center h-12 px-8 rounded-[5px] bg-white text-[#242422] text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    採用情報を見る
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
