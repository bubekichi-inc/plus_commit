"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Mail, Lock, User, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Suspense, useState } from "react"
import { useAuth } from "@/components/auth/AuthProvider"

function RegisterForm() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const nextUrl = searchParams.get("next") || "/recruit/mypage"
    const [agreed, setAgreed] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const { signUp, isConfigured } = useAuth()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        if (!isConfigured) {
            setError("Supabaseが設定されていません。環境変数を確認してください。")
            setLoading(false)
            return
        }

        const formData = new FormData(e.currentTarget)
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const password = formData.get("password") as string
        const confirmPassword = formData.get("confirmPassword") as string

        // パスワード確認
        if (password !== confirmPassword) {
            setError("パスワードが一致しません")
            setLoading(false)
            return
        }

        const { error: signUpError } = await signUp(email, password, name)

        if (signUpError) {
            setError(signUpError.message || "登録に失敗しました")
            setLoading(false)
        } else {
            // 登録成功
            setSuccess(true)
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-zinc-50 py-12">
            <div className="max-w-2xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4">
                        会員登録
                    </h1>
                    <p className="text-zinc-600 text-sm">
                        限定コンテンツや応募管理機能をご利用いただけます
                    </p>
                </motion.div>

                {/* Registration Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm"
                >
                    {success ? (
                        <div className="text-center py-8 space-y-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h2 className="text-xl font-bold text-zinc-900">登録完了</h2>
                            <p className="text-zinc-600">
                                確認メールを送信しました。<br />
                                メール内のリンクをクリックして、アカウントを有効化してください。
                            </p>
                            <Button
                                onClick={() => router.push("/recruit/login")}
                                className="mt-6 bg-primary-600 hover:bg-primary-700 text-white"
                            >
                                ログインページへ
                            </Button>
                        </div>
                    ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                <div className="text-sm text-red-700">
                                    {error}
                                </div>
                            </div>
                        )}
                        {/* お名前 */}
                        <div>
                            <label className="block text-zinc-700 text-sm font-semibold mb-2">
                                お名前 <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-white border border-zinc-200 rounded-lg pl-11 pr-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                                    placeholder="山田 太郎"
                                />
                            </div>
                        </div>

                        {/* メールアドレス */}
                        <div>
                            <label className="block text-zinc-700 text-sm font-semibold mb-2">
                                メールアドレス <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-white border border-zinc-200 rounded-lg pl-11 pr-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                                    placeholder="example@email.com"
                                />
                            </div>
                            <p className="text-xs text-zinc-500 mt-2">
                                確認メールが届きますので、受信可能なメールアドレスをご入力ください
                            </p>
                        </div>

                        {/* パスワード */}
                        <div>
                            <label className="block text-zinc-700 text-sm font-semibold mb-2">
                                パスワード <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    minLength={8}
                                    className="w-full bg-white border border-zinc-200 rounded-lg pl-11 pr-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                                    placeholder="8文字以上"
                                />
                            </div>
                        </div>

                        {/* パスワード（確認） */}
                        <div>
                            <label className="block text-zinc-700 text-sm font-semibold mb-2">
                                パスワード（確認） <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    required
                                    minLength={8}
                                    className="w-full bg-white border border-zinc-200 rounded-lg pl-11 pr-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                                    placeholder="もう一度入力してください"
                                />
                            </div>
                        </div>

                        {/* 利用規約 */}
                        <div className="bg-zinc-50 rounded-lg p-5 border border-zinc-100">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="mt-1 w-5 h-5 rounded border-zinc-300 bg-white text-primary-500 focus:ring-primary-500 cursor-pointer"
                                />
                                <span className="text-sm text-zinc-700 leading-relaxed">
                                    <Link href="/personal-info" className="text-primary-600 hover:text-primary-700 font-semibold hover:underline">
                                        個人情報保護方針
                                    </Link>
                                    および
                                    <Link href="/privacy" className="text-primary-600 hover:text-primary-700 font-semibold hover:underline ml-1">
                                        利用規約
                                    </Link>
                                    に同意する <span className="text-red-500">*</span>
                                </span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={!agreed || loading}
                            className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    登録中...
                                </>
                            ) : (
                                <>
                                    会員登録する
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </Button>

                        {/* Login Link */}
                        <div className="text-center pt-4 border-t border-zinc-100">
                            <p className="text-sm text-zinc-600">
                                すでにアカウントをお持ちの方は
                                <Link href="/recruit/login" className="text-primary-600 hover:text-primary-700 font-semibold hover:underline ml-2">
                                    ログイン
                                </Link>
                            </p>
                        </div>
                    </form>
                    )}
                </motion.div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-12 bg-white rounded-2xl border border-zinc-200 p-8"
                >
                    <h2 className="text-lg font-bold text-zinc-900 mb-6">会員登録のメリット</h2>
                    <div className="space-y-4">
                        {[
                            "限定コンテンツ・社員インタビューの閲覧",
                            "応募履歴の管理・追跡",
                            "カジュアル面談の予約",
                            "選考状況のリアルタイム確認",
                            "採用担当者からの直接メッセージ受信",
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span className="text-zinc-700">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default function RegisterPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-zinc-600">読み込み中...</p>
                </div>
            </div>
        }>
            <RegisterForm />
        </Suspense>
    )
}
