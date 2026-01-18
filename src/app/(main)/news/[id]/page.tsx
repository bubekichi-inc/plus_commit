import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { ShareButtons } from "@/components/business/ShareButtons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getNewsDetail } from "@/lib/microcms"
import { Metadata } from 'next'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {
    const { id } = await params
    try {
        const post = await getNewsDetail(id)
        const ogImage = post.thumbnail?.url || "/general/ogp.png"
        return {
            title: `${post.title} | 株式会社PLUS-COMMIT`,
            description: post.content ? post.content.replace(/<[^>]*>?/gm, '').substring(0, 160) : '',
            openGraph: {
                title: `${post.title} | 株式会社PLUS-COMMIT`,
                description: post.content ? post.content.replace(/<[^>]*>?/gm, '').substring(0, 160) : '',
                images: [ogImage],
                type: "article",
                publishedTime: post.publishedAt,
            },
            twitter: {
                card: "summary_large_image",
                title: `${post.title} | 株式会社PLUS-COMMIT`,
                description: post.content ? post.content.replace(/<[^>]*>?/gm, '').substring(0, 160) : '',
                images: [ogImage],
            },
        }
    } catch {
        return {
            title: 'ニュース | 株式会社PLUS-COMMIT',
        }
    }
}

export default async function NewsDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    let post;
    try {
        post = await getNewsDetail(id)
    } catch {
        notFound()
    }

    if (!post) {
        notFound()
    }

    return (
        <>
            <Header />
            <main className="min-h-screen pt-20 bg-white">
                <article className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="flex gap-8 max-w-5xl mx-auto">
                            <aside className="hidden lg:block w-16 shrink-0">
                                <ShareButtons title={post.title} id={post.id} />
                            </aside>

                            <div className="flex-1 max-w-3xl">
                                <div className="mb-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <Link
                                            href="/news"
                                            className="text-zinc-500 hover:text-primary-600 transition-colors text-sm font-medium"
                                        >
                                            お知らせ一覧
                                        </Link>
                                        <span className="text-zinc-300">/</span>
                                        <span className="text-primary-600 text-sm font-bold">{post.category?.name || "お知らせ"}</span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6 leading-tight">
                                        {post.title}
                                    </h1>
                                    <div className="text-zinc-500 text-sm space-y-1">
                                        <div>作成日: {new Date(post.createdAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}</div>
                                        <div>更新日: {new Date(post.updatedAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}</div>
                                    </div>
                                </div>

                                <div
                                    className="post-content prose prose-zinc max-w-none text-zinc-700"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />

                                <div className="lg:hidden border-t border-zinc-200 pt-8 mb-12">
                                    <p className="text-sm text-zinc-500 mb-4">この記事をシェア</p>
                                    <ShareButtons title={post.title} id={post.id} layout="inline" />
                                </div>

                                <div className="border-t border-zinc-200 pt-12 text-center">
                                    <Button className="bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300 font-bold" asChild>
                                        <Link href="/news">お知らせ一覧に戻る</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    )
}





