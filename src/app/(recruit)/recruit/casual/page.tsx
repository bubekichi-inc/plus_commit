"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Coffee, Users, MessageCircle, Building2, Send, CheckCircle, Loader2, Lock, UserPlus } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth/AuthProvider"

export default function CasualInterviewPage() {
    const { user, profile, loading, isConfigured } = useAuth()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        preferredDate1: "",
        preferredDate2: "",
        preferredDate3: "",
        questions: "",
    })

    // 現在は申し込み受付を停止中
    const isStopped = true

    const isLoggedIn = !!user

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!isLoggedIn) return

        // 受付停止中は送信処理を行わない
        if (isStopped) return

        setIsSubmitting(true)

        // TODO: APIに送信する処理を実装
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
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
                        <Button variant="outline">
                            トップへ戻る
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-zinc-50">
                <div className="max-w-2xl mx-auto px-6 py-20">
                    <div className="bg-white rounded-3xl border border-zinc-200 p-8 md:p-12 text-center shadow-sm">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-zinc-900 mb-4">
                            お申し込みありがとうございます
                        </h1>
                        <p className="text-zinc-600 mb-8">
                            カジュアル面談のお申し込みを受け付けました。<br />
                            担当者より2営業日以内にメールでご連絡いたします。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/recruit/mypage">
                                <Button variant="outline" className="w-full sm:w-auto">
                                    マイページへ戻る
                                </Button>
                            </Link>
                            <Link href="/recruit">
                                <Button className="w-full sm:w-auto">
                                    採用トップへ
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-zinc-50">
            {/* Header / Hero */}
            <div className="bg-white border-b border-zinc-200">
                <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
                    <Link
                        href={isLoggedIn ? "/recruit/mypage" : "/recruit"}
                        className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 text-sm mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {isLoggedIn ? "マイページへ戻る" : "採用トップへ戻る"}
                    </Link>

                    <div className="text-center max-w-2xl mx-auto">
                        <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-2xl mb-6">
                            <Coffee className="w-8 h-8 text-primary-600" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 font-feature-settings-palt">
                            カジュアル面談のお申し込み
                        </h1>
                        <p className="text-zinc-600 leading-relaxed">
                            選考を受ける前に、株式会社プラスコミットの雰囲気や働き方について<br className="hidden md:block" />
                            ざっくばらんにお話しする場をご用意しています。
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">

                {/* Form */}
                <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
                    {/* 未ログイン時のオーバーレイ */}
                    {!isLoggedIn && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-8 md:pt-12">
                            {/* グラデーションオーバーレイ */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/98 to-white" />

                            {/* ログイン促進カード */}
                            <div className="relative z-20 bg-white border border-zinc-200 rounded-2xl p-8 shadow-xl max-w-md mx-4 text-center">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-full mb-5">
                                    <Lock className="w-7 h-7 text-primary-600" />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                                    会員登録・ログインが必要です
                                </h3>
                                <p className="text-zinc-600 text-sm mb-6 leading-relaxed">
                                    カジュアル面談のお申し込みには<br />
                                    会員登録またはログインが必要です。
                                </p>
                                <div className="flex flex-col gap-3">
                                    <Link href="/recruit/register?next=/recruit/casual" className="w-full">
                                        <Button className="w-full bg-primary-600 hover:bg-primary-700 text-black font-bold py-3">
                                            <UserPlus className="w-4 h-4 mr-2" />
                                            新規会員登録
                                        </Button>
                                    </Link>
                                    <Link href="/recruit/login?next=/recruit/casual" className="w-full">
                                        <Button variant="outline" className="w-full font-bold py-3">
                                            ログインはこちら
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className={`space-y-8 ${!isLoggedIn ? 'opacity-40 pointer-events-none select-none' : ''}`}>
                        {/* ユーザー情報（自動取得） */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-bold text-zinc-700 uppercase tracking-wider">基本情報</h3>
                            <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-100">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-zinc-500 text-xs mb-1">お名前</label>
                                        <p className="text-zinc-900 font-medium">
                                            {isLoggedIn ? (profile?.name || user?.email?.split('@')[0] || "未設定") : "ログイン後に表示"}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-zinc-500 text-xs mb-1">メールアドレス</label>
                                        <p className="text-zinc-900 font-medium">
                                            {isLoggedIn ? user?.email : "ログイン後に表示"}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-zinc-400 mt-4">
                                    ※ 登録情報を変更する場合はマイページからプロフィールを編集してください
                                </p>
                            </div>
                        </div>

                        {/* 希望日時 */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-bold text-zinc-700 uppercase tracking-wider">希望日時</h3>
                            <p className="text-sm text-zinc-500">
                                ご都合の良い日時を第3希望までご入力ください（平日10:00〜18:00）
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-zinc-600 text-sm mb-2">
                                        第1希望 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="datetime-local"
                                        required
                                        value={formData.preferredDate1}
                                        onChange={(e) => setFormData({ ...formData, preferredDate1: e.target.value })}
                                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-zinc-600 text-sm mb-2">
                                        第2希望
                                    </label>
                                    <input
                                        type="datetime-local"
                                        value={formData.preferredDate2}
                                        onChange={(e) => setFormData({ ...formData, preferredDate2: e.target.value })}
                                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-zinc-600 text-sm mb-2">
                                        第3希望
                                    </label>
                                    <input
                                        type="datetime-local"
                                        value={formData.preferredDate3}
                                        onChange={(e) => setFormData({ ...formData, preferredDate3: e.target.value })}
                                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 質問事項 */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-bold text-zinc-700 uppercase tracking-wider">事前質問</h3>
                            <div>
                                <label className="block text-zinc-600 text-sm mb-2">
                                    当日聞きたいこと・相談したいこと
                                </label>
                                <textarea
                                    rows={5}
                                    value={formData.questions}
                                    onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
                                    className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                                    placeholder="例：リモートワークの働き方について詳しく聞きたい、チームの雰囲気を知りたい など"
                                />
                            </div>
                        </div>

                        {/* 注意事項 / お知らせ */}
                        <div className="space-y-3">
                            {isStopped && (
                                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                    <p className="text-sm text-red-800 font-medium">
                                        現在、カジュアル面談のお申し込み受付は一時停止しております。
                                        再開までしばらくお待ちください。
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Submit */}
                        <div className="pt-4">
                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting || !isLoggedIn || isStopped}
                                className="w-full bg-primary-600 hover:bg-primary-700 text-black font-bold py-6 text-lg rounded-full shadow-lg shadow-primary-500/20 disabled:opacity-50 disabled:hover:bg-primary-600"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        送信中...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2" />
                                        現在は申し込みを停止しています
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
