"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/components/auth/AuthProvider"
import { Button } from "@/components/ui/button"
import { Mail, Lock, Eye, EyeOff, AlertCircle, ArrowLeft } from "lucide-react"

export default function RecruitLoginPage() {
    const router = useRouter()
    const { user, profile, signIn, loading, isConfigured } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if (!loading && user && profile) {
            router.push("/recruit/mypage")
        }
    }, [user, profile, loading, router])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsSubmitting(true)

        try {
            const { error } = await signIn(email, password)
            if (error) {
                setError(error.message === "Invalid login credentials"
                    ? "メールアドレスまたはパスワードが正しくありません"
                    : error.message)
            }
            // Redirection is handled by useEffect when auth state changes
        } catch {
            setError("ログインに失敗しました")
        } finally {
            setIsSubmitting(false)
        }
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

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4 py-12">
            <div className="w-full max-w-md">
                {/* Back Link */}
                <Link
                    href="/recruit"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 text-sm mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    採用トップへ戻る
                </Link>

                {/* Card */}
                <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm">
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <Image
                            src="/general/logo.svg"
                            alt="プラスコミット"
                            width={160}
                            height={40}
                            className="h-10 w-auto mx-auto mb-4"
                        />
                        <h1 className="text-2xl font-bold text-zinc-900 mb-2">ログイン</h1>
                        <p className="text-zinc-600 text-sm">
                            会員限定コンテンツを閲覧できます
                        </p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-600">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <p className="text-sm">{error}</p>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-zinc-700 text-sm font-medium mb-2">
                                メールアドレス
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-white border border-zinc-200 rounded-lg pl-12 pr-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="example@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-zinc-700 text-sm font-medium mb-2">
                                パスワード
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full bg-white border border-zinc-200 rounded-lg pl-12 pr-12 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Link
                                href="/auth/reset-password"
                                className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
                            >
                                パスワードをお忘れですか？
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary-600 hover:bg-primary-700 !text-white font-bold py-6 rounded-lg transition-colors"
                        >
                            {isSubmitting ? "ログイン中..." : "ログイン"}
                        </Button>
                    </form>

                    {/* Register Link */}
                    <p className="mt-8 text-center text-zinc-600 text-sm">
                        アカウントをお持ちでないですか？{" "}
                        <Link href="/recruit/register" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                            新規会員登録
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
