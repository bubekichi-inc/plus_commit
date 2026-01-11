"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/AuthProvider"
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, CheckCircle } from "lucide-react"

export default function RegisterPage() {
    const router = useRouter()
    const { signUp, signInWithOAuth, isConfigured } = useAuth()
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)

        if (password !== confirmPassword) {
            setError("パスワードが一致しません")
            return
        }

        if (password.length < 8) {
            setError("パスワードは8文字以上で入力してください")
            return
        }

        setLoading(true)

        try {
            const { error } = await signUp(email, password, name)
            
            if (error) {
                if (error.message.includes("already registered")) {
                    setError("このメールアドレスは既に登録されています")
                } else {
                    setError(error.message)
                }
            } else {
                setSuccess(true)
            }
        } catch {
            setError("登録に失敗しました。もう一度お試しください。")
        } finally {
            setLoading(false)
        }
    }

    const handleOAuthSignIn = async (provider: 'google' | 'github') => {
        setError(null)
        const { error } = await signInWithOAuth(provider)
        if (error) {
            setError(error.message)
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

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md w-full text-center"
                >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-4">
                        確認メールを送信しました
                    </h1>
                    <p className="text-zinc-400 mb-8">
                        {email} 宛に確認メールを送信しました。<br />
                        メール内のリンクをクリックして登録を完了してください。
                    </p>
                    <Link href="/login">
                        <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                            ログインページへ
                        </Button>
                    </Link>
                </motion.div>
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
                        あなたの学習を<br />
                        <span className="text-white underline decoration-zinc-500">次のレベル</span>へ
                    </h1>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        マイページへの登録でカジュアル面談に申し込むことができます。<br />
                        
                    </p>
                    <div className="mt-12 space-y-4">
                        {[
                            "限定記事・動画コンテンツ",
                            "学習進捗の管理",
                            "コミュニティへの参加",
                        ].map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-white" />
                                <span className="text-zinc-300">{feature}</span>
                            </div>
                        ))}
                    </div>
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
                        アカウント作成
                    </h2>
                    <p className="text-zinc-400 mb-8">
                        既にアカウントをお持ちですか？{" "}
                        <Link href="/login" className="text-white hover:underline">
                            ログイン
                        </Link>
                    </p>

                    {/* OAuth Buttons */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <Button
                            type="button"
                            variant="outline"
                            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                            onClick={() => handleOAuthSignIn('google')}
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Google
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                            onClick={() => handleOAuthSignIn('github')}
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </Button>
                    </div>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-zinc-800" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-zinc-950 text-zinc-500">または</span>
                        </div>
                    </div>

                    {/* Email Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-zinc-400 text-sm mb-2">お名前</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="山田 太郎"
                                />
                            </div>
                        </div>

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
                            <label className="block text-zinc-400 text-sm mb-2">パスワード</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-12 pr-12 py-3 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="8文字以上"
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

                        <div>
                            <label className="block text-zinc-400 text-sm mb-2">パスワード（確認）</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="パスワードを再入力"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-white hover:bg-zinc-200 text-black font-bold py-3 rounded-lg disabled:opacity-50"
                        >
                            {loading ? "登録中..." : "アカウントを作成"}
                            {!loading && <ArrowRight className="w-5 h-5 ml-2" />}
                        </Button>
                    </form>

                    <p className="mt-6 text-xs text-zinc-500 text-center">
                        アカウントを作成することで、
                        <Link href="/terms" className="text-white hover:underline">利用規約</Link>
                        および
                        <Link href="/privacy" className="text-white hover:underline">プライバシーポリシー</Link>
                        に同意したものとみなされます。
                    </p>
                </motion.div>
            </div>
        </div>
    )
}


