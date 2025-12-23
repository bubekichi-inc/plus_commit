import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { ShareButtons } from "@/components/business/ShareButtons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getNewsDetail } from "@/lib/microcms"

export default async function NewsDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    
    let post;
    try {
        post = await getNewsDetail(id)
    } catch (error) {
        notFound()
    }

    if (!post) {
        notFound()
    }

    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <article className="py-24">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <Link 
                                    href="/business/news"
                                    className="text-slate-400 hover:text-white transition-colors text-sm"
                                >
                                    お知らせ一覧
                                </Link>
                                <span className="text-slate-600">/</span>
                                <span className="text-blue-400 text-sm font-bold">{post.category?.name || "お知らせ"}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <div className="text-slate-500 text-sm">
                                公開日: {new Date(post.publishedAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}
                            </div>
                        </div>

                        {/* Content */}
                        <div 
                            className="prose prose-invert prose-blue max-w-none text-slate-300 leading-relaxed mb-16
                            prose-headings:text-white prose-headings:font-bold
                            prose-strong:text-white prose-a:text-blue-400
                            prose-img:rounded-lg"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Share Buttons */}
                        <ShareButtons title={post.title} id={post.id} />

                        {/* Footer CTA */}
                        <div className="border-t border-slate-800 pt-12 text-center">
                            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800" asChild>
                                <Link href="/business/news">お知らせ一覧に戻る</Link>
                            </Button>
                        </div>
                    </div>
                </article>
            </main>
            <BusinessFooter />
        </>
    )
}

