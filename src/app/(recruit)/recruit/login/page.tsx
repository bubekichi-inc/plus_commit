"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Lock, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Suspense, useState } from "react"
import { useAuth } from "@/components/auth/AuthProvider"

function LoginForm() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const nextUrl = searchParams.get("next") || "/recruit/mypage"
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const { signIn, isConfigured } = useAuth()

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
        const email = formData.get("email") as string
        const password = formData.get("password") as string

        const { error: signInError } = await signIn(email, password)

        if (signInError) {
            setError(signInError.message || "ログインに失敗しました")
            setLoading(false)
        } else {
            // ログイン成功
            router.push(nextUrl)
        }
    }

    return (
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center py-12 px-6">
            <div className="w-full max-w-md">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mb-3">
                        ログイン
                    </h1>
                    <p className="text-zinc-600 text-sm">
                        会員限定コンテンツにアクセスできます
                    </p>
                </motion.div>

                {/* Login Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm"
                >
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
                                    placeholder="パスワードを入力"
                                />
                            </div>
                            <div className="flex justify-end mt-2">
                                <Link
                                    href="/auth/reset-password"
                                    className="text-xs text-primary-600 hover:text-primary-700 hover:underline font-semibold"
                                >
                                    パスワードをお忘れの方
                                </Link>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="remember"
                                className="w-4 h-4 rounded border-zinc-300 bg-white text-primary-500 focus:ring-primary-500 cursor-pointer"
                            />
                            <span className="text-sm text-zinc-700">
                                ログイン状態を保持する
                            </span>
                        </label>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ログイン中...
                                </>
                            ) : (
                                <>
                                    ログイン
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </Button>

                        {/* Register Link */}
                        <div className="text-center pt-4 border-t border-zinc-100">
                            <p className="text-sm text-zinc-600">
                                アカウントをお持ちでない方は
                                <Link href="/recruit/register" className="text-primary-600 hover:text-primary-700 font-semibold hover:underline ml-2">
                                    新規登録
                                </Link>
                            </p>
                        </div>
                    </form>
                </motion.div>

                {/* Social Login Options */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8"
                >
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-zinc-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-zinc-50 text-zinc-500">または</span>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                        <button
                            type="button"
                            className="w-full h-12 bg-white border border-zinc-200 rounded-lg text-zinc-700 font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center gap-3"
                            disabled
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            Googleでログイン（準備中）
                        </button>

                        <button
                            type="button"
                            className="w-full h-12 bg-white border border-zinc-200 rounded-lg text-zinc-700 font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center gap-3"
                            disabled
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                            </svg>
                            GitHubでログイン（準備中）
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-zinc-600">読み込み中...</p>
                </div>
            </div>
        }>
            <LoginForm />
        </Suspense>
    )
}
