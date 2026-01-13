"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/AuthProvider"
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"
import { Suspense } from "react"

function LoginForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const { signIn, isConfigured, user } = useAuth()
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const redirectTo = searchParams.get('redirect') || '/mypage'

    useEffect(() => {
        if (user) {
            router.push(redirectTo)
        }
    }, [user, router, redirectTo])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        try {
            const { error } = await signIn(email, password)
            
            if (error) {
                if (error.message.includes("Invalid login credentials")) {
                    setError("メールアドレスまたはパスワードが正しくありません")
                } else if (error.message.includes("Email not confirmed")) {
                    setError("メールアドレスの確認が完了していません。確認メールをご確認ください。")
                } else {
                    setError(error.message)
                }
            } else {
                router.push(redirectTo)
            }
        } catch {
            setError("ログインに失敗しました。もう一度お試しください。")
        } finally {
            setLoading(false)
        }
    }

    if (!isConfigured) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-950">
                <div className="text-center">
                    <p className="text-zinc-400">認証機能は現在準備中です</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex bg-zinc-950">
            {/* Left Side - Image/Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-zinc-900 to-black">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="relative z-10 flex flex-col justify-center px-16">
                    <Link href="/" className="mb-12">
                        <Image
                            src="/general/top/logo.png"
                            alt="プラスコミット"
                            width={200}
                            height={45}
                            className="h-12 w-auto"
                        />
                    </Link>
                    <h1 className="text-4xl font-black text-white mb-6">
                        おかえりなさい
                    </h1>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        ログインして、あなたの学習を続けましょう。<br />
                        限定コンテンツやマイページ機能をお楽しみください。
                    </p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md w-full"
                >
                    <div className="lg:hidden mb-8">
                        <Link href="/">
                            <Image
                                src="/general/top/logo.png"
                                alt="プラスコミット"
                                width={160}
                                height={36}
                                className="h-9 w-auto"
                            />
                        </Link>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2">
                        ログイン
                    </h2>
                    <p className="text-zinc-400 mb-8">
                        アカウントをお持ちでない方は{" "}
                        <Link href="/register" className="text-white hover:underline">
                            新規登録
                        </Link>
                    </p>

                    {/* Email Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-zinc-400 text-sm mb-2">メールアドレス</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="email@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-zinc-400 text-sm">パスワード</label>
                                <Link href="/auth/reset-password" className="text-sm text-white hover:underline">
                                    パスワードを忘れた方
                                </Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-12 pr-12 py-3 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="パスワード"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-white hover:bg-zinc-200 text-black font-bold py-3 rounded-lg disabled:opacity-50"
                        >
                            {loading ? "ログイン中..." : "ログイン"}
                            {!loading && <ArrowRight className="w-5 h-5 ml-2" />}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-zinc-950">
                <div className="text-zinc-400">読み込み中...</div>
            </div>
        }>
            <LoginForm />
        </Suspense>
    )
}


