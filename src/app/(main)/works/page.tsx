import Link from "next/link"
import { getWorks } from "@/lib/microcms"

export const metadata = {
    title: '導入事例 | プラスコミット株式会社',
    description: 'プラスコミット株式会社の導入事例一覧です。Web制作、システム開発、アプリケーション開発など、幅広いプロジェクトを手がけています。',
    openGraph: {
        title: '導入事例 | プラスコミット株式会社',
        description: 'プラスコミット株式会社の導入事例一覧です。Web制作、システム開発、アプリケーション開発など、幅広いプロジェクトを手がけています。',
        images: ["/general/ogp.png"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: '導入事例 | プラスコミット株式会社',
        description: 'プラスコミット株式会社の導入事例一覧です。Web制作、システム開発、アプリケーション開発など、幅広いプロジェクトを手がけています。',
        images: ["/general/ogp.png"],
    },
}

export default async function WorksPage() {
    const { contents: works } = await getWorks()

    return (
        <>
            <main className="min-h-screen pt-20 bg-white">
                {/* Hero Section */}
                <section className="py-16 md:py-20 border-b border-[#E8E8E8]">
                    <div className="container mx-auto px-6">
                        <p className="text-sm text-[#999999] mb-3 tracking-widest uppercase font-medium">
                            Works
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#242422] tracking-tight mb-6">
                            導入事例
                        </h1>
                        <p className="text-[#666666] text-sm md:text-base leading-[1.8] max-w-2xl">
                            これまでに手がけたプロジェクトの一部をご紹介します。
                        </p>
                    </div>
                </section>

                {/* Works List Section */}
                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-6">
                        {works.length === 0 ? (
                            <div className="text-center py-20 border border-[#E8E8E8] rounded-[5px]">
                                <p className="text-[#999999]">現在公開されている事例はありません。</p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                                {works.map((work) => (
                                    <Link
                                        key={work.id}
                                        href={`/works/${work.id}`}
                                        className="group block border border-[#E8E8E8] hover:border-[#CCCCCC] transition-colors rounded-[5px] overflow-hidden"
                                    >
                                        <div className="aspect-[16/10] bg-[#F8F8F8] overflow-hidden">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={work.thumbnail?.url || "/general/ogp.png"}
                                                alt={work.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-5 md:p-6">
                                            <div className="flex items-center gap-4 mb-3">
                                                <span className="text-xs text-[#999999] font-medium">
                                                    {work.category?.name || 'Works'}
                                                </span>
                                                <span className="text-xs text-[#999999]">
                                                    {new Date(work.createdAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}
                                                </span>
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold text-[#242422] mb-3 leading-snug group-hover:opacity-70 transition-opacity line-clamp-2">
                                                {work.title}
                                            </h3>
                                            <p className="text-[#666666] text-sm leading-[1.8] line-clamp-2 mb-4">
                                                {work.content.replace(/<[^>]*>?/gm, '')}
                                            </p>
                                            {work["child-category"] && work["child-category"].length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {work["child-category"].map((tech) => (
                                                        <span
                                                            key={tech.id}
                                                            className="px-2 py-1 text-xs text-[#666666] border border-[#DDDDDD]"
                                                        >
                                                            {tech["child-name"]}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    )
}
