"use client"

import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        category: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: フォーム送信処理を実装
        alert("お問い合わせありがとうございます。担当者より折り返しご連絡いたします。")
    }

    return (
        <>
            <Header />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="py-24 border-b border-zinc-800">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-6">
                            <span className="text-primary-500">お問い</span>合わせ
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl">
                            ご質問・ご相談はお気軽にどうぞ。通常1営業日以内にご返信いたします。
                        </p>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-12">
                            {/* Form */}
                            <div className="md:col-span-2">
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div>
                                        <label className="block text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3">
                                            お名前 <span className="text-primary-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-primary-500 transition-colors"
                                            placeholder="山田 太郎"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3">
                                            メールアドレス <span className="text-primary-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-primary-500 transition-colors"
                                            placeholder="example@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3">
                                            お問い合わせ種別 <span className="text-primary-500">*</span>
                                        </label>
                                        <select
                                            required
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-primary-500 transition-colors"
                                        >
                                            <option value="">選択してください</option>
                                            <option value="service">サービスについて</option>
                                            <option value="consultation">無料個別相談会について</option>
                                            <option value="recruit">採用について</option>
                                            <option value="media">メディア・取材について</option>
                                            <option value="other">その他</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3">
                                            お問い合わせ内容 <span className="text-primary-500">*</span>
                                        </label>
                                        <textarea
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                                            placeholder="お問い合わせ内容をご記入ください"
                                        />
                                    </div>

                                    <Button 
                                        type="submit"
                                        className="bg-primary-600 hover:bg-primary-500 text-white font-bold italic uppercase rounded-none skew-x-[-10deg] px-8 py-6 border-2 border-primary-600 hover:border-primary-400 text-lg"
                                    >
                                        <span className="skew-x-[10deg]">送信する</span>
                                    </Button>
                                </form>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                <div className="bg-zinc-900 border border-zinc-800 p-6">
                                    <h3 className="text-lg font-bold mb-4 border-l-4 border-primary-500 pl-3">
                                        無料個別相談会
                                    </h3>
                                    <p className="text-zinc-400 text-sm mb-4">
                                        サービスに興味をお持ちの方は、まずは無料の個別相談会にご参加ください。
                                    </p>
                                    <a 
                                        href="/#pricing"
                                        className="text-primary-500 text-sm font-bold uppercase tracking-wider hover:underline"
                                    >
                                        詳しく見る →
                                    </a>
                                </div>

                                <div className="bg-zinc-900 border border-zinc-800 p-6">
                                    <h3 className="text-lg font-bold mb-4 border-l-4 border-primary-500 pl-3">
                                        よくある質問
                                    </h3>
                                    <ul className="space-y-3 text-sm text-zinc-400">
                                        <li className="border-b border-zinc-800 pb-3">
                                            Q. 未経験でも大丈夫ですか？
                                        </li>
                                        <li className="border-b border-zinc-800 pb-3">
                                            Q. 学習時間の目安は？
                                        </li>
                                        <li>
                                            Q. 途中解約はできますか？
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-zinc-900 border border-zinc-800 p-6">
                                    <h3 className="text-lg font-bold mb-4 border-l-4 border-primary-500 pl-3">
                                        営業時間
                                    </h3>
                                    <p className="text-zinc-400 text-sm">
                                        平日 10:00 - 19:00<br />
                                        土日祝日はお休み
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

