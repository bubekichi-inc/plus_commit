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
    const { signUp, isConfigured } = useAuth()
    
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
                        <Link href="/login" className="text-black hover:underline">
                            ログイン
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


