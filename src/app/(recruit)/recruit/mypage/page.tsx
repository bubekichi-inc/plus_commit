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
            <div className="min-h-screen flex items-center justify-center bg-zinc-50">
                <div className="text-zinc-500">読み込み中...</div>
            </div>
        )
    }

    if (!isConfigured) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-50">
                <div className="text-center">
                    <p className="text-zinc-600 mb-4">認証機能は現在準備中です</p>
                    <Link href="/recruit">
                        <Button variant="outline" className="border-zinc-300 text-zinc-700 hover:bg-zinc-100">
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
        <div className="min-h-screen bg-zinc-50">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-10">
                    <p className="text-xs font-bold text-primary-600 tracking-[0.16em] uppercase mb-2">
                        My Page
                    </p>
                    <h1 className="text-3xl font-bold text-zinc-900 mb-2">マイページ</h1>
                    <p className="text-zinc-600 text-sm">
                        会員情報の確認や会員限定コンテンツへのアクセスができます。
                    </p>
                </div>

                {/* User Info Card */}
                <div className="bg-white border border-zinc-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center border border-primary-100">
                                <User className="w-8 h-8 text-primary-600" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-zinc-900">
                                    {profile?.name || user.email?.split('@')[0]}
                                </h2>
                                <div className="flex items-center gap-2 text-zinc-500 text-sm mt-1">
                                    <Mail className="w-4 h-4" />
                                    <span>{user.email}</span>
                                </div>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleSignOut}
                            className="border-zinc-200 text-zinc-700 hover:bg-zinc-50"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            ログアウト
                        </Button>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="grid md:grid-cols-2 gap-6">
                    <Link
                        href="/recruit/casual"
                        className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:border-primary-400 hover:shadow-md transition-all"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                                <Clock className="w-6 h-6 text-primary-600" />
                            </div>
                            <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:translate-x-1 group-hover:text-primary-600 transition-all" />
                        </div>
                        <h3 className="text-lg font-bold text-zinc-900 mb-2">カジュアル面談のお申し込み</h3>
                        <p className="text-zinc-600 text-sm">
                            選考の前に、まずは気軽にお話ししませんか？
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

