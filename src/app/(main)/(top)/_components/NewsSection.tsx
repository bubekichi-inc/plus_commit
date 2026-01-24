import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { News } from "@/types/microcms"

type NewsSectionProps = {
    news: News[]
}

export function NewsSection({ news }: NewsSectionProps) {
    return (
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
                        className="btn-arrow inline-flex items-center text-sm text-[#666666] hover:text-[#242422] transition-colors font-medium link-underline"
                    >
                        VIEW MORE
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
