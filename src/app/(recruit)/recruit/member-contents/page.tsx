"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/components/auth/AuthProvider"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, ArrowLeft, Lock, ChevronRight } from "lucide-react"
import type { MemberContent } from "@/types/microcms"

export default function MemberContentsPage() {
    const router = useRouter()
    const { user, loading, isConfigured } = useAuth()
    const [contents, setContents] = useState<MemberContent[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!loading && !user && isConfigured) {
            router.push("/recruit/login?redirect=/recruit/member-contents")
        }
    }, [user, loading, isConfigured, router])

    useEffect(() => {
        const fetchContents = async () => {
            if (!user) return
            
            try {
                const res = await fetch("/api/recruit/member-contents")
                if (!res.ok) {
                    throw new Error("コンテンツの取得に失敗しました")
                }
                const data = await res.json()
                setContents(data.contents || [])
            } catch (err) {
                console.error(err)
                setError("コンテンツの取得に失敗しました")
            } finally {
                setIsLoading(false)
            }
        }

        if (user) {
            fetchContents()
        }
    }, [user])

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
                        <Link href="/recruit/login?redirect=/recruit/member-contents">
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

    return (
        <div className="min-h-screen bg-[#0a0a0a] py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Back Link */}
                <Link 
                    href="/recruit/mypage" 
                    className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    マイページへ戻る
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                            <p className="text-emerald-400 text-sm font-bold">MEMBER ONLY</p>
                            <h1 className="text-3xl font-bold text-white">会員限定コンテンツ</h1>
                        </div>
                    </div>
                    <p className="text-white/50">
                        社員インタビューや会社の裏側など、会員だけが読めるコンテンツを公開しています。
                    </p>
                </div>

                {/* Error */}
                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
                        <p className="text-red-400">{error}</p>
                    </div>
                )}

                {/* Contents List */}
                {contents.length === 0 ? (
                    <div className="bg-[#111] border border-white/10 rounded-2xl p-12 text-center">
                        <Clock className="w-12 h-12 text-white/20 mx-auto mb-4" />
                        <p className="text-white/50 text-lg">
                            コンテンツは準備中です
                        </p>
                        <p className="text-white/30 text-sm mt-2">
                            近日公開予定です。お楽しみに！
                        </p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        {contents.map((content) => (
                            <Link
                                key={content.id}
                                href={`/recruit/member-contents/${content.id}`}
                                className="group bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-colors"
                            >
                                {content.thumbnail && (
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={content.thumbnail.url}
                                            alt={content.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full">
                                                会員限定
                                            </span>
                                        </div>
                                    </div>
                                )}
                                <div className="p-6">
                                    {content.category && (
                                        <span className="text-emerald-400 text-xs font-bold">
                                            {content.category.name}
                                        </span>
                                    )}
                                    <h3 className="text-lg font-bold text-white mt-2 mb-3 group-hover:text-emerald-400 transition-colors">
                                        {content.title}
                                    </h3>
                                    {content.excerpt && (
                                        <p className="text-white/50 text-sm line-clamp-2 mb-4">
                                            {content.excerpt}
                                        </p>
                                    )}
                                    <div className="flex items-center justify-between">
                                        <time className="text-white/30 text-xs">
                                            {new Date(content.publishedAt).toLocaleDateString('ja-JP')}
                                        </time>
                                        <span className="text-emerald-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                            読む
                                            <ChevronRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

