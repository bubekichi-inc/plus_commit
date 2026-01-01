"use client"

import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

type FormData = {
    company: string
    name: string
    email: string
    phone: string
    service: string
    budget: string
    message: string
}

type FormErrors = {
    [key in keyof FormData]?: string
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        company: "",
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [submitMessage, setSubmitMessage] = useState("")

    // クライアントサイドバリデーション
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.company.trim()) {
            newErrors.company = "会社名は必須です"
        }
        if (!formData.name.trim()) {
            newErrors.name = "お名前は必須です"
        }
        if (!formData.email.trim()) {
            newErrors.email = "メールアドレスは必須です"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "有効なメールアドレスを入力してください"
        }
        if (!formData.service) {
            newErrors.service = "サービスを選択してください"
        }
        if (!formData.message.trim()) {
            newErrors.message = "メッセージは必須です"
        } else if (formData.message.length > 5000) {
            newErrors.message = "メッセージは5000文字以内で入力してください"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        // バリデーション
        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)
        setSubmitStatus("idle")
        setSubmitMessage("")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "送信に失敗しました")
            }

            setSubmitStatus("success")
            setSubmitMessage(data.message)
            // フォームをリセット
            setFormData({
                company: "",
                name: "",
                email: "",
                phone: "",
                service: "",
                budget: "",
                message: "",
            })
        } catch (error) {
            setSubmitStatus("error")
            setSubmitMessage(error instanceof Error ? error.message : "予期せぬエラーが発生しました")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData({ ...formData, [field]: value })
        // エラーをクリア
        if (errors[field]) {
            setErrors({ ...errors, [field]: undefined })
        }
    }

    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen pt-20 bg-black">
                <section className="py-24 border-b border-zinc-800">
                    <div className="container mx-auto px-4">
                        <div className="text-zinc-400 font-medium mb-2 tracking-wider">CONTACT</div>
                        <h1 className="text-5xl font-black tracking-tight text-white mb-6">
                            お問い合わせ
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl">
                            プロジェクトのご相談・お見積りは無料です。お気軽にお問い合わせください。
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="md:col-span-2">
                                {/* 送信完了メッセージ */}
                                {submitStatus === "success" && (
                                    <div className="mb-8 p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="text-emerald-400 font-bold mb-1">送信完了</h3>
                                            <p className="text-zinc-300">{submitMessage}</p>
                                        </div>
                                    </div>
                                )}

                                {/* エラーメッセージ */}
                                {submitStatus === "error" && (
                                    <div className="mb-8 p-6 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-4">
                                        <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="text-red-400 font-bold mb-1">エラー</h3>
                                            <p className="text-zinc-300">{submitMessage}</p>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                                会社名 <span className="text-white">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.company}
                                                onChange={(e) => handleChange("company", e.target.value)}
                                                className={`w-full bg-zinc-900 border px-4 py-3 text-zinc-100 focus:outline-none transition-colors ${
                                                    errors.company ? "border-red-500" : "border-zinc-800 focus:border-white"
                                                }`}
                                                placeholder="株式会社〇〇"
                                            />
                                            {errors.company && (
                                                <p className="text-red-400 text-sm mt-1">{errors.company}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                                ご担当者名 <span className="text-white">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => handleChange("name", e.target.value)}
                                                className={`w-full bg-zinc-900 border px-4 py-3 text-zinc-100 focus:outline-none transition-colors ${
                                                    errors.name ? "border-red-500" : "border-zinc-800 focus:border-white"
                                                }`}
                                                placeholder="山田 太郎"
                                            />
                                            {errors.name && (
                                                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                                メールアドレス <span className="text-white">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleChange("email", e.target.value)}
                                                className={`w-full bg-zinc-900 border px-4 py-3 text-zinc-100 focus:outline-none transition-colors ${
                                                    errors.email ? "border-red-500" : "border-zinc-800 focus:border-white"
                                                }`}
                                                placeholder="example@company.co.jp"
                                            />
                                            {errors.email && (
                                                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                                電話番号
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => handleChange("phone", e.target.value)}
                                                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-white transition-colors"
                                                placeholder="03-1234-5678"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                                ご検討中のサービス <span className="text-white">*</span>
                                            </label>
                                            <select
                                                value={formData.service}
                                                onChange={(e) => handleChange("service", e.target.value)}
                                                className={`w-full bg-zinc-900 border px-4 py-3 text-zinc-100 focus:outline-none transition-colors ${
                                                    errors.service ? "border-red-500" : "border-zinc-800 focus:border-white"
                                                }`}
                                            >
                                                <option value="">選択してください</option>
                                                <option value="corporate">コーポレートサイト制作</option>
                                                <option value="lp">LP（ランディングページ）制作</option>
                                                <option value="ec">ECサイト構築</option>
                                                <option value="webapp">Webアプリケーション開発</option>
                                                <option value="maintenance">保守・運用サポート</option>
                                                <option value="other">その他</option>
                                            </select>
                                            {errors.service && (
                                                <p className="text-red-400 text-sm mt-1">{errors.service}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                                ご予算
                                            </label>
                                            <select
                                                value={formData.budget}
                                                onChange={(e) => handleChange("budget", e.target.value)}
                                                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-white transition-colors"
                                            >
                                                <option value="">選択してください</option>
                                                <option value="~30">〜30万円</option>
                                                <option value="30-50">30万円〜50万円</option>
                                                <option value="50-100">50万円〜100万円</option>
                                                <option value="100-300">100万円〜300万円</option>
                                                <option value="300~">300万円以上</option>
                                                <option value="undecided">未定・相談したい</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                                            プロジェクトの詳細 <span className="text-white">*</span>
                                        </label>
                                        <textarea
                                            rows={6}
                                            value={formData.message}
                                            onChange={(e) => handleChange("message", e.target.value)}
                                            className={`w-full bg-zinc-900 border px-4 py-3 text-zinc-100 focus:outline-none transition-colors resize-none ${
                                                errors.message ? "border-red-500" : "border-zinc-800 focus:border-white"
                                            }`}
                                            placeholder="プロジェクトの概要、課題、ご要望などをお聞かせください"
                                        />
                                        {errors.message && (
                                            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                                        )}
                                    </div>

                                    <Button 
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="bg-white hover:bg-zinc-200 text-black font-bold px-12 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                送信中...
                                            </>
                                        ) : (
                                            "送信する"
                                        )}
                                    </Button>
                                </form>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-zinc-900 border border-zinc-800 p-6">
                                    <h3 className="text-white font-bold mb-4 border-l-2 border-white pl-3">
                                        お問い合わせの流れ
                                    </h3>
                                    <ol className="space-y-4 text-sm">
                                        <li className="flex gap-3 text-zinc-400">
                                            <span className="text-white font-bold">1.</span>
                                            フォーム送信
                                        </li>
                                        <li className="flex gap-3 text-zinc-400">
                                            <span className="text-white font-bold">2.</span>
                                            担当者より連絡（2営業日以内）
                                        </li>
                                        <li className="flex gap-3 text-zinc-400">
                                            <span className="text-white font-bold">3.</span>
                                            オンラインMTGで詳細ヒアリング
                                        </li>
                                        <li className="flex gap-3 text-zinc-400">
                                            <span className="text-white font-bold">4.</span>
                                            お見積り・ご提案
                                        </li>
                                    </ol>
                                </div>

                                <div className="bg-zinc-900 border border-zinc-800 p-6">
                                    <h3 className="text-white font-bold mb-4 border-l-2 border-white pl-3">
                                        営業時間
                                    </h3>
                                    <p className="text-zinc-400 text-sm">
                                        平日 10:00 - 19:00<br />
                                        土日祝日はお休み
                                    </p>
                                </div>

                                <div className="bg-zinc-800 border border-white/10 p-6">
                                    <h3 className="text-white font-bold mb-2">
                                        お急ぎの方へ
                                    </h3>
                                    <p className="text-zinc-400 text-sm mb-4">
                                        緊急のご相談は、メールにてご連絡ください。
                                    </p>
                                    <a 
                                        href="mailto:business@plus-commit.com"
                                        className="text-white text-sm font-medium hover:underline"
                                    >
                                        business@plus-commit.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <BusinessFooter />
        </>
    )
}
