import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { NewsSearchSidebar } from "@/components/business/NewsSearchSidebar"
import Link from "next/link"
import { getNewsList } from "@/lib/microcms"
import { Suspense } from "react"

type SearchParams = Promise<{ q?: string }>

export default async function NewsListPage({
    searchParams,
}: {
    searchParams: SearchParams
}) {
    const params = await searchParams
    const searchQuery = params.q || ""
    
    const { contents: news } = await getNewsList({
        q: searchQuery || undefined,
    })
    
    // 特選記事かどうかを判定するヘルパー関数
    // microCMSのカスタムフィールドはオブジェクト形式 {fieldId: "special", special: true/false} で返される
    const isSpecialArticle = (item: typeof news[0]) => {
        if (typeof item.special === 'boolean') {
            return item.special === true
        }
        if (typeof item.special === 'object' && item.special !== null) {
            return (item.special as { special?: boolean }).special === true
        }
        return false
    }
    
    const specialNews = searchQuery ? [] : news.filter(isSpecialArticle)

    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen pt-20 bg-black">
                {/* Hero Section */}
                <section className="py-24 border-b border-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-zinc-400 font-bold tracking-wider text-sm mb-4">NEWS</div>
                        <h1 className="text-5xl font-black tracking-tight text-white mb-6">
                            お知らせ
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl">
                            最新のニュース、プレスリリース、技術情報をお届けします。
                        </p>
                    </div>
                </section>

                {/* Special News */}
                {specialNews.length > 0 && (
                    <section className="py-12 border-b border-zinc-800 bg-zinc-900/30">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-white text-xl">★</span>
                                    <h2 className="text-xl font-bold text-white">おすすめの記事</h2>
                                </div>
                                <div className="grid gap-4">
                                    {specialNews.map((item) => (
                                        <Link 
                                            key={item.id}
                                            href={`/news/${item.id}`}
                                            className="group flex flex-col md:flex-row md:items-center gap-4 p-6 bg-zinc-900 border border-white/10 hover:border-white/30 transition-all relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 left-0 w-1 h-full bg-white" />
                                            <div className="flex items-center gap-4 shrink-0 pl-4">
                                                <span className="text-sm text-zinc-500 min-w-[100px]">
                                                    {new Date(item.publishedAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}
                                                </span>
                                                <span className="px-3 py-1 bg-white/5 text-zinc-300 text-xs font-bold border border-white/10">
                                                    {item.category?.name || "お知らせ"}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-zinc-300 transition-colors pl-4 md:pl-0">
                                                {item.title}
                                            </h3>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Main Content with Sidebar */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="flex-1 min-w-0">
                                {searchQuery && (
                                    <div className="mb-8 p-4 bg-zinc-900 border border-white/10">
                                        <p className="text-zinc-300">
                                            <span className="text-white font-bold">&ldquo;{searchQuery}&rdquo;</span> の検索結果: 
                                            <span className="text-white font-bold ml-2">{news.length}件</span>
                                        </p>
                                    </div>
                                )}

                                {!searchQuery && specialNews.length > 0 && (
                                    <h2 className="text-lg font-bold text-zinc-500 mb-6">すべての記事</h2>
                                )}

                                {news.length > 0 ? (
                                    <div className="grid gap-6">
                                        {news.map((item) => (
                                            <Link 
                                                key={item.id}
                                                href={`/news/${item.id}`}
                                                className="group flex flex-col md:flex-row md:items-center gap-4 p-6 bg-zinc-900/50 border border-zinc-800 hover:border-white/30 transition-all"
                                            >
                                                <div className="flex items-center gap-4 shrink-0">
                                                    <span className="text-sm text-zinc-500 min-w-[100px]">
                                                        {new Date(item.publishedAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}
                                                    </span>
                                                    <span className="px-3 py-1 bg-white/5 text-zinc-400 text-xs font-bold border border-white/10">
                                                        {item.category?.name || "お知らせ"}
                                                    </span>
                                                </div>
                                                <h2 className="text-lg font-bold text-white group-hover:text-zinc-300 transition-colors">
                                                    {item.title}
                                                </h2>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-16">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 mb-4">
                                            <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-zinc-400 text-lg mb-2">
                                            該当する記事が見つかりませんでした
                                        </p>
                                        <p className="text-zinc-500 text-sm">
                                            別のキーワードで検索してみてください
                                        </p>
                                        <Link 
                                            href="/news"
                                            className="inline-block mt-6 px-6 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 transition-colors"
                                        >
                                            すべての記事を表示
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Suspense fallback={
                                <aside className="w-full lg:w-80 shrink-0">
                                    <div className="bg-zinc-900 border border-zinc-800 p-6 animate-pulse">
                                        <div className="h-6 bg-zinc-800 rounded mb-4 w-1/2"></div>
                                        <div className="h-12 bg-zinc-800 rounded mb-3"></div>
                                        <div className="h-12 bg-zinc-800 rounded"></div>
                                    </div>
                                </aside>
                            }>
                                <NewsSearchSidebar />
                            </Suspense>
                        </div>
                    </div>
                </section>
            </main>
            <BusinessFooter />
        </>
    )
}





