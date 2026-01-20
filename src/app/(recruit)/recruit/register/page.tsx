"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/components/auth/AuthProvider"
import { Button } from "@/components/ui/button"
import { Mail, Lock, User, Eye, EyeOff, AlertCircle, ArrowLeft, CheckCircle } from "lucide-react"

export default function RecruitRegisterPage() {
    const router = useRouter()
    const { user, signUp, loading, isConfigured } = useAuth()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if (!loading && user) {
            router.push("/recruit/mypage")
        }
    }, [user, loading, router])

    const validatePassword = (pwd: string) => {
        if (pwd.length < 8) return "パスワードは8文字以上で入力してください"
        return null
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        // Validation
        const passwordError = validatePassword(password)
        if (passwordError) {
            setError(passwordError)
            return
        }

        if (password !== confirmPassword) {
            setError("パスワードが一致しません")
            return
        }

        setIsSubmitting(true)

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
            setError("登録に失敗しました")
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

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4 py-12">
                <div className="w-full max-w-md">
                    <div className="bg-white border border-zinc-200 rounded-2xl p-8 text-center shadow-sm">
                        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-8 h-8 text-primary-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-black-900 mb-4">登録完了</h1>
                        <p className="text-zinc-600 mb-6">
                            確認メールを送信しました。<br />
                            メール内のリンクをクリックして、<br />
                            アカウントを有効化してください。
                        </p>
                        <Link href="/recruit/login">
                            <Button className="w-full bg-primary-600 hover:bg-primary-700 text-black font-bold py-6 rounded-lg">
                                ログインページへ
                            </Button>
                        </Link>
                    </div>
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
                        <h1 className="text-2xl font-bold text-black-900 mb-2">会員登録</h1>
                        <p className="text-zinc-600 text-sm">
                            会員限定コンテンツを閲覧できます
                        </p>
                    </div>

                    {/* Benefits */}
                    <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
                        <p className="text-primary-700 text-sm font-bold mb-2">会員特典</p>
                        <ul className="space-y-1 text-zinc-700 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-primary-600" />
                                社員インタビュー記事の閲覧
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-primary-600" />
                                会社の裏側コンテンツ
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-primary-600" />
                                選考に関する最新情報
                            </li>
                        </ul>
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
                                お名前
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full bg-white border border-zinc-200 rounded-lg pl-12 pr-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="山田 太郎"
                                />
                            </div>
                        </div>

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
                                    placeholder="8文字以上"
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

                        <div>
                            <label className="block text-zinc-700 text-sm font-medium mb-2">
                                パスワード（確認）
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="w-full bg-white border border-zinc-200 rounded-lg pl-12 pr-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="もう一度入力"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary-600 hover:bg-primary-700 !text-black font-bold py-6 rounded-lg transition-colors"
                        >
                            {isSubmitting ? "登録中..." : "会員登録"}
                        </Button>
                    </form>

                    {/* Login Link */}
                    <p className="mt-8 text-center text-zinc-600 text-sm">
                        すでにアカウントをお持ちですか？{" "}
                        <Link href="/recruit/login" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                            ログイン
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

