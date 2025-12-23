import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import Link from "next/link"
import { getNewsList } from "@/lib/microcms"

export default async function NewsListPage() {
    const { contents: news } = await getNewsList()
    
    // おすすめ記事を抽出
    const specialNews = news.filter((item) => item.special)

    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="py-24 border-b border-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-blue-400 font-bold tracking-wider text-sm mb-4">NEWS</div>
                        <h1 className="text-5xl font-black tracking-tight text-white mb-6">
                            お知らせ
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl">
                            最新のニュース、プレスリリース、技術情報をお届けします。
                        </p>
                    </div>
                </section>

                {/* Special News (おすすめ記事) */}
                {specialNews.length > 0 && (
                    <section className="py-12 border-b border-slate-800 bg-gradient-to-r from-blue-950/30 to-slate-900/30">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-yellow-400 text-xl">★</span>
                                    <h2 className="text-xl font-bold text-white">おすすめの記事</h2>
                                </div>
                                <div className="grid gap-4">
                                    {specialNews.map((item) => (
                                        <Link 
                                            key={item.id}
                                            href={`/business/news/${item.id}`}
                                            className="group flex flex-col md:flex-row md:items-center gap-4 p-6 bg-slate-900 border border-blue-500/30 hover:border-blue-500 transition-all relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-blue-500" />
                                            <div className="flex items-center gap-4 shrink-0 pl-4">
                                                <span className="text-sm text-slate-500 min-w-[100px]">
                                                    {new Date(item.publishedAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}
                                                </span>
                                                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-bold border border-yellow-500/20">
                                                    {item.category?.name || "お知らせ"}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors pl-4 md:pl-0">
                                                {item.title}
                                            </h3>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Regular News List */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl">
                            {specialNews.length > 0 && (
                                <h2 className="text-lg font-bold text-slate-400 mb-6">すべての記事</h2>
                            )}
                            <div className="grid gap-6">
                                {news.map((item) => (
                                    <Link 
                                        key={item.id}
                                        href={`/business/news/${item.id}`}
                                        className="group flex flex-col md:flex-row md:items-center gap-4 p-6 bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all"
                                    >
                                        <div className="flex items-center gap-4 shrink-0">
                                            <span className="text-sm text-slate-500 min-w-[100px]">
                                                {new Date(item.publishedAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}
                                            </span>
                                            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
                                                {item.category?.name || "お知らせ"}
                                            </span>
                                        </div>
                                        <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {item.title}
                                        </h2>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <BusinessFooter />
        </>
    )
}

