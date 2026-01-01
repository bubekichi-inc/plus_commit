"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/components/auth/AuthProvider"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Lock, Clock, User } from "lucide-react"
import type { MemberContent } from "@/types/microcms"

export default function MemberContentDetailPage() {
    const router = useRouter()
    const params = useParams()
    const { user, loading, isConfigured } = useAuth()
    const [content, setContent] = useState<MemberContent | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!loading && !user && isConfigured) {
            router.push(`/recruit/login?redirect=/recruit/member-contents/${params.id}`)
        }
    }, [user, loading, isConfigured, router, params.id])

    useEffect(() => {
        const fetchContent = async () => {
            if (!user || !params.id) return
            
            try {
                const res = await fetch(`/api/recruit/member-contents/${params.id}`)
                if (!res.ok) {
                    if (res.status === 404) {
                        setError("コンテンツが見つかりませんでした")
                    } else {
                        throw new Error("コンテンツの取得に失敗しました")
                    }
                    return
                }
                const data = await res.json()
                setContent(data)
            } catch (err) {
                console.error(err)
                setError("コンテンツの取得に失敗しました")
            } finally {
                setIsLoading(false)
            }
        }

        if (user) {
            fetchContent()
        }
    }, [user, params.id])

    if (loading || isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-white/50">読み込み中...</div>
            </div>
        )
    }

    if (!isConfigured) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-white/60 mb-4">認証機能は現在準備中です</p>
                    <Link href="/recruit">
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            トップへ戻る
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center max-w-md mx-auto px-4">
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                        <Lock className="w-10 h-10 text-white/30" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-4">会員限定コンテンツ</h1>
                    <p className="text-white/50 mb-8">
                        このコンテンツを閲覧するには<br />
                        ログインまたは会員登録が必要です
                    </p>
                    <div className="flex flex-col gap-3">
                        <Link href={`/recruit/login?redirect=/recruit/member-contents/${params.id}`}>
                            <Button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-6">
                                ログイン
                            </Button>
                        </Link>
                        <Link href="/recruit/register">
                            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 py-6">
                                新規会員登録
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-white/60 mb-4">{error}</p>
                    <Link href="/recruit/member-contents">
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            コンテンツ一覧へ戻る
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    if (!content) {
        return null
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] py-12 px-4">
            <article className="max-w-3xl mx-auto">
                {/* Back Link */}
                <Link 
                    href="/recruit/member-contents" 
                    className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    コンテンツ一覧へ戻る
                </Link>

                {/* Thumbnail */}
                {content.thumbnail && (
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                        <Image
                            src={content.thumbnail.url}
                            alt={content.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-6 left-6">
                            <span className="px-4 py-2 bg-emerald-500 text-black text-sm font-bold rounded-full">
                                会員限定
                            </span>
                        </div>
                    </div>
                )}

                {/* Header */}
                <header className="mb-12">
                    {content.category && (
                        <span className="text-emerald-400 text-sm font-bold">
                            {content.category.name}
                        </span>
                    )}
                    <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
                        {content.title}
                    </h1>
                    <div className="flex items-center gap-6 text-white/50 text-sm">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <time>{new Date(content.publishedAt).toLocaleDateString('ja-JP')}</time>
                        </div>
                        {content.author && (
                            <div className="flex items-center gap-2">
                                {content.author.image ? (
                                    <Image
                                        src={content.author.image.url}
                                        alt={content.author.name}
                                        width={24}
                                        height={24}
                                        className="rounded-full"
                                    />
                                ) : (
                                    <User className="w-4 h-4" />
                                )}
                                <span>{content.author.name}</span>
                            </div>
                        )}
                    </div>
                </header>

                {/* Content */}
                <div 
                    className="prose prose-invert prose-lg max-w-none
                        prose-headings:text-white prose-headings:font-bold
                        prose-p:text-white/80 prose-p:leading-relaxed
                        prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-white
                        prose-ul:text-white/80 prose-ol:text-white/80
                        prose-blockquote:border-emerald-500 prose-blockquote:text-white/70
                        prose-code:text-emerald-400 prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded
                        prose-pre:bg-[#111] prose-pre:border prose-pre:border-white/10
                        prose-img:rounded-xl
                    "
                    dangerouslySetInnerHTML={{ __html: content.content }}
                />

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-white/10">
                    <Link 
                        href="/recruit/member-contents"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        他のコンテンツを見る
                    </Link>
                </footer>
            </article>
        </div>
    )
}

