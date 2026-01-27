"use client"

import { motion } from "framer-motion"
import { Mail, Lock, AlertCircle } from "lucide-react"
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
            if (signInError.message?.includes("Email not confirmed")) {
                setError("メールアドレスが未認証です。登録時に送信されたメール内のリンクをクリックして、アカウントを有効化してください。")
            } else {
                setError(signInError.message || "ログインに失敗しました")
            }
            setLoading(false)
        } else {
            router.push(nextUrl)
        }
    }

    return (
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center py-12 px-6">
            <div className="w-full max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mb-3">
                        ログイン
                    </h1>
                    <p className="text-zinc-600 text-sm">
                        登録済みのメールアドレスとパスワードでログインしてください
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                <div className="text-sm text-red-700">
                                    {error}
                                </div>
                            </div>
                        )}

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
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ログイン中...
                                </>
                            ) : (
                                <>ログイン</>
                            )}
                        </Button>

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

            </div>
        </div>
    )
}

export default function LoginPageClient() {
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
