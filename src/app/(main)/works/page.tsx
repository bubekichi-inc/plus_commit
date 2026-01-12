
import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getWorks } from "@/lib/microcms"

export const metadata = {
    title: '制作実績 | プラスコミット株式会社',
    description: 'プラスコミット株式会社の制作実績一覧です。Web制作、システム開発、アプリケーション開発など、幅広いプロジェクトを手がけています。',
}

export default async function WorksPage() {
    const { contents: works } = await getWorks()

    return (
        <>
            <Header />
            <main className="min-h-screen pt-20 bg-white">
                <section className="py-24 border-b border-zinc-100">
                    <div className="container mx-auto px-4">
                        <div className="text-zinc-500 font-bold tracking-wider text-sm mb-4">WORKS</div>
                        <h1 className="text-5xl font-black tracking-tight text-zinc-900 mb-6">
                            制作実績
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-2xl">
                            これまでに手がけたプロジェクトの一部をご紹介します。
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            {works.length === 0 ? (
                                <div className="col-span-2 text-center py-20 bg-zinc-50 rounded-xl border border-dashed border-zinc-200">
                                    <p className="text-zinc-500">現在公開されている実績はありません。</p>
                                </div>
                            ) : (
                                works.map((work, index) => (
                                    <div
                                        key={work.id}
                                        className="bg-white border border-zinc-200 overflow-hidden hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500 rounded-xl group"
                                    >
                                        <div className="aspect-video bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center border-b border-zinc-200 relative overflow-hidden">
                                            {work.thumbnail ? (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img
                                                    src={work.thumbnail.url}
                                                    alt={work.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <span className="text-4xl font-black text-zinc-200">0{index + 1}</span>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <div className="text-zinc-500 text-sm font-medium mb-2">{work.category?.name || 'Uncategorized'}</div>
                                            <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                                                {work.title}
                                            </h3>
                                            <p className="text-zinc-600 text-sm mb-4 leading-relaxed line-clamp-3">
                                                {work.content.replace(/<[^>]*>?/gm, '')}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {work["child-category"]?.map((tech) => (
                                                    <span
                                                        key={tech.id}
                                                        className="px-3 py-1 bg-zinc-50 text-zinc-600 text-xs font-medium border border-zinc-200 rounded"
                                                    >
                                                        {tech.name}
                                                    </span>
                                                ))}
                                            </div>
                                            {work.features && (
                                                <div className="border-t border-zinc-100 pt-4">
                                                    <div className="text-zinc-500 text-xs mb-1">成果</div>
                                                    <div className="text-zinc-900 font-bold">{work.features}</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </section>

                <section className="py-24 border-t border-zinc-100 bg-zinc-50/50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-black tracking-tight text-zinc-900 mb-4">
                            次はあなたのプロジェクトを
                        </h2>
                        <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
                            貴社のビジネス課題に合わせた最適なソリューションをご提案いたします。
                        </p>
                        <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-12" asChild>
                            <Link href="/contact">プロジェクトを相談する</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
