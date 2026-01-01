"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/components/auth/AuthProvider"
import { Button } from "@/components/ui/button"
import { User, Mail, BookOpen, LogOut, ChevronRight, Clock } from "lucide-react"

export default function RecruitMyPage() {
    const router = useRouter()
    const { user, profile, loading, isConfigured, signOut } = useAuth()

    useEffect(() => {
        if (!loading && !user && isConfigured) {
            router.push("/recruit/login")
        }
    }, [user, loading, isConfigured, router])

    const handleSignOut = async () => {
        await signOut()
        router.push("/recruit")
    }

    if (loading) {
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
        return null
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-white mb-2">マイページ</h1>
                    <p className="text-white/50">会員情報の確認と限定コンテンツへのアクセス</p>
                </div>

                {/* User Info Card */}
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6 mb-8">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <User className="w-8 h-8 text-emerald-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    {profile?.name || user.email?.split('@')[0]}
                                </h2>
                                <div className="flex items-center gap-2 text-white/50 text-sm mt-1">
                                    <Mail className="w-4 h-4" />
                                    {user.email}
                                </div>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleSignOut}
                            className="border-white/20 text-white/70 hover:bg-white/10"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            ログアウト
                        </Button>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Link
                        href="/recruit/member-contents"
                        className="group bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-emerald-400" />
                            </div>
                            <ChevronRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">会員限定コンテンツ</h3>
                        <p className="text-white/50 text-sm">
                            社員インタビューや会社の裏側など、<br />
                            会員だけが読めるコンテンツを公開中
                        </p>
                    </Link>

                    <Link
                        href="/recruit/entry"
                        className="group bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                                <User className="w-6 h-6 text-white/70" />
                            </div>
                            <ChevronRight className="w-5 h-5 text-white/40 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">エントリー</h3>
                        <p className="text-white/50 text-sm">
                            選考にエントリーする
                        </p>
                    </Link>
                </div>

                {/* Recent Activity */}
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4">最近の閲覧履歴</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                            <Clock className="w-5 h-5 text-white/40" />
                            <p className="text-white/50 text-sm">閲覧履歴はありません</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

