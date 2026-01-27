import Link from "next/link"
import { ShareButtons } from "@/app/(main)/news/_components/ShareButtons"
import { Button } from "@/components/ui/button"
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
            title: '取り扱い技術 | 株式会社PLUS-COMMIT',
        }
    }
}

export default async function TechnologyDetailPage({
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

    // 子カテゴリーの1つ目を取得（表示用）
    const categoryLabel = post["child-category"]?.[0]?.["child-name"] || "Technologies";

    return (
        <>
            <main className="min-h-screen pt-20 bg-white">
                <article className="py-24">
                    <div className="container mx-auto px-4">
                        {/* 子カテゴリーをh3として表示 */}
                        {post["child-category"] && post["child-category"].length > 0 && (
                            <div className="max-w-5xl mx-auto mb-8">
                                <h3 className="text-2xl font-bold text-zinc-900 flex flex-wrap gap-3 items-center">
                                    {post["child-category"].map((childCat, index) => (
                                        <span key={childCat.id}>
                                            {childCat["child-name"]}
                                            {index < post["child-category"]!.length - 1 && (
                                                <span className="text-zinc-300 mx-2">/</span>
                                            )}
                                        </span>
                                    ))}
                                </h3>
                            </div>
                        )}
                        <div className="flex gap-8 max-w-5xl mx-auto">
                            <aside className="hidden lg:block w-16 shrink-0">
                                <ShareButtons title={post.title} id={post.id} />
                            </aside>

                            <div className="flex-1 max-w-3xl">
                                <div className="mb-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <Link
                                            href="/technologies"
                                            className="text-zinc-500 hover:text-primary-600 transition-colors text-sm font-medium"
                                        >
                                            取り扱い技術
                                        </Link>
                                        <span className="text-zinc-300">/</span>
                                        <span className="text-primary-600 text-sm font-bold">{categoryLabel}</span>
                                    </div>

                                    <div className="flex items-start gap-6 mb-8">
                                        {post.icon && (
                                            <div className="text-6xl flex-shrink-0 bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                                                {post.icon}
                                            </div>
                                        )}
                                        <div>
                                            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4 leading-tight">
                                                {post.title}
                                            </h1>
                                            {/* 子カテゴリーを表示 */}
                                            {post["child-category"] && post["child-category"].length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {post["child-category"].map((childCat) => (
                                                        <span
                                                            key={childCat.id}
                                                            className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-bold rounded-full border border-primary-100"
                                                        >
                                                            {childCat["child-name"]}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                            {post.category && (
                                                <div className="inline-block px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-bold rounded-full">
                                                    {post.category.name}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="text-zinc-500 text-sm border-b border-zinc-100 pb-8 space-y-1">
                                        <div>作成日: {new Date(post.createdAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}</div>
                                        <div>更新日: {new Date(post.updatedAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}</div>
                                    </div>
                                </div>

                                {/* 特徴があれば表示 */}
                                {post.features && (
                                    <div className="mb-12 bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
                                        <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
                                            <span className="text-primary-500">◆</span> 特徴
                                        </h2>
                                        <div className="flex flex-wrap gap-2">
                                            {post.features.split('\n').map((feature, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 bg-white border border-zinc-200 text-zinc-700 text-sm font-medium rounded-lg shadow-sm"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

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
                                        <Link href="/technologies">取り扱い技術一覧に戻る</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}
