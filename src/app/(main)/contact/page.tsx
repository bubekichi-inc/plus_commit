"use client"

import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        company: "",
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert("お問い合わせありがとうございます。担当者より2営業日以内にご連絡いたします。")
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
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                                会社名 <span className="text-white">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-white transition-colors"
                                                placeholder="株式会社〇〇"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                                ご担当者名 <span className="text-white">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-white transition-colors"
                                                placeholder="山田 太郎"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                                メールアドレス <span className="text-white">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-white transition-colors"
                                                placeholder="example@company.co.jp"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                                電話番号
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                                                required
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-white transition-colors"
                                            >
                                                <option value="">選択してください</option>
                                                <option value="corporate">コーポレートサイト制作</option>
                                                <option value="lp">LP（ランディングページ）制作</option>
                                                <option value="ec">ECサイト構築</option>
                                                <option value="webapp">Webアプリケーション開発</option>
                                                <option value="maintenance">保守・運用サポート</option>
                                                <option value="other">その他</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                                ご予算
                                            </label>
                                            <select
                                                value={formData.budget}
                                                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-white transition-colors resize-none"
                                            placeholder="プロジェクトの概要、課題、ご要望などをお聞かせください"
                                        />
                                    </div>

                                    <Button 
                                        type="submit"
                                        size="lg"
                                        className="bg-white hover:bg-zinc-200 text-black font-bold px-12"
                                    >
                                        送信する
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
