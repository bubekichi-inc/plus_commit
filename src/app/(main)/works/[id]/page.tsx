import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { ShareButtons } from "@/components/business/ShareButtons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getNewsDetail } from "@/lib/microcms"
import { Metadata } from 'next'
import { ArrowLeft, ExternalLink } from "lucide-react"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {
    const { id } = await params
    try {
        const post = await getNewsDetail(id)
        return {
            title: `${post.title} | 株式会社PLUS-COMMIT`,
            description: post.content ? post.content.replace(/<[^>]*>?/gm, '').substring(0, 160) : '',
        }
    } catch {
        return {
            title: '制作実績 | 株式会社PLUS-COMMIT',
        }
    }
}

export default async function WorksDetailPage({
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
                <article className="py-12 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            {/* Breadcrumb & Back Link */}
                            <div className="mb-8">
                                <Link
                                    href="/works"
                                    className="inline-flex items-center text-zinc-500 hover:text-primary-600 transition-colors text-sm font-bold group"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                                    制作実績一覧に戻る
                                </Link>
                            </div>

                            <div className="grid md:grid-cols-[1fr_320px] gap-12">
                                {/* Main Content */}
                                <div>
                                    <div className="mb-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full border border-primary-100">
                                                {post.category?.name || "Works"}
                                            </span>
                                            <span className="text-zinc-400 text-sm font-mono">
                                                {new Date(post.publishedAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}
                                            </span>
                                        </div>
                                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6 leading-tight">
                                            {post.title}
                                        </h1>
                                    </div>

                                    {post.thumbnail && (
                                        <div className="aspect-video w-full bg-zinc-100 rounded-2xl overflow-hidden mb-12 border border-zinc-100 shadow-sm">
                                            <img
                                                src={post.thumbnail.url}
                                                alt={post.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}

                                    <div
                                        className="post-content prose prose-zinc max-w-none text-zinc-700 prose-headings:font-bold prose-a:text-primary-600 hover:prose-a:text-primary-700"
                                        dangerouslySetInnerHTML={{ __html: post.content }}
                                    />
                                </div>

                                {/* Sidebar / Meta Info */}
                                <aside className="space-y-8">
                                    {/* Technologies */}
                                    {post["child-category"] && post["child-category"].length > 0 && (
                                        <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                                            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">
                                                Technologies
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {post["child-category"].map((tech) => (
                                                    <span
                                                        key={tech.id}
                                                        className="px-3 py-1.5 bg-white text-zinc-600 text-xs font-bold rounded border border-zinc-200 shadow-sm"
                                                    >
                                                        {tech["child-name"]}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Share */}
                                    <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                                        <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">
                                            Share This Project
                                        </h3>
                                        <ShareButtons title={post.title} id={post.id} layout="inline" />
                                    </div>

                                    {/* CTA or Contact */}
                                    <div className="bg-zinc-900 rounded-2xl p-6 text-white text-center">
                                        <h3 className="font-bold text-lg mb-2">開発のご相談</h3>
                                        <p className="text-zinc-400 text-sm mb-6">
                                            同様やシステムの開発について、お気軽にご相談ください。
                                        </p>
                                        <Button className="w-full bg-white text-black hover:bg-zinc-200 font-bold" asChild>
                                            <Link href="/contact">
                                                お問い合わせ
                                            </Link>
                                        </Button>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Bottom Navigation */}
                <div className="border-t border-zinc-100 bg-zinc-50 py-12">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-8">More Works</h2>
                        <Button variant="outline" size="lg" className="rounded-full px-8 bg-white hover:bg-zinc-900 hover:text-white transition-all" asChild>
                            <Link href="/works">
                                制作実績一覧を見る
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
