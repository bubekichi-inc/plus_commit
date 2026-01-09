"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getPublishedJobs } from "@/lib/recruit-jobs"
import { Suspense } from "react"

function EntryForm() {
    const searchParams = useSearchParams()
    const preselectedPosition = searchParams.get("position") || ""
    const jobs = getPublishedJobs()

    return (
        <form className="space-y-8">
            {/* 基本情報 */}
            <div className="space-y-6">
                <h3 className="text-lg font-bold text-zinc-900">基本情報</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-zinc-600 text-sm mb-2">
                            お名前 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 transition-colors"
                            placeholder="山田 太郎"
                        />
                    </div>
                    <div>
                        <label className="block text-zinc-600 text-sm mb-2">
                            フリガナ <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 transition-colors"
                            placeholder="ヤマダ タロウ"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-zinc-600 text-sm mb-2">
                            メールアドレス <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 transition-colors"
                            placeholder="example@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-zinc-600 text-sm mb-2">
                            電話番号
                        </label>
                        <input
                            type="tel"
                            className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 transition-colors"
                            placeholder="090-1234-5678"
                        />
                    </div>
                </div>
            </div>

            {/* 応募情報 */}
            <div className="space-y-6">
                <h3 className="text-lg font-bold text-zinc-900">応募情報</h3>
                <div>
                    <label className="block text-zinc-600 text-sm mb-2">
                        希望職種 <span className="text-red-500">*</span>
                    </label>
                    <select
                        required
                        defaultValue={preselectedPosition}
                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 transition-colors"
                    >
                        <option value="" className="bg-white">選択してください</option>
                        {jobs.map((job) => (
                            <option key={job.id} value={job.id} className="bg-white">
                                {job.title}
                            </option>
                        ))}
                        <option value="open" className="bg-white">オープンポジション（その他）</option>
                    </select>
                </div>
                <div>
                    <label className="block text-zinc-600 text-sm mb-2">
                        希望雇用形態 <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-4">
                        {["正社員", "業務委託", "インターン", "その他"].map((type) => (
                            <label key={type} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-zinc-300 bg-white text-primary-500 focus:ring-primary-500"
                                />
                                <span className="text-zinc-700">{type}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* リンク */}
            <div className="space-y-6">
                <h3 className="text-lg font-bold text-zinc-900">ポートフォリオ・リンク</h3>
                <div>
                    <label className="block text-zinc-600 text-sm mb-2">
                        GitHub / GitLab
                    </label>
                    <input
                        type="url"
                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="https://github.com/username"
                    />
                </div>
                <div>
                    <label className="block text-zinc-600 text-sm mb-2">
                        ポートフォリオサイト / その他URL
                    </label>
                    <input
                        type="url"
                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="https://your-portfolio.com"
                    />
                </div>
            </div>

            {/* 自己PR */}
            <div className="space-y-6">
                <h3 className="text-lg font-bold text-zinc-900">自己PR・志望動機</h3>
                <div>
                    <label className="block text-zinc-600 text-sm mb-2">
                        自己PR・志望動機 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        required
                        rows={6}
                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                        placeholder="これまでの経験やスキル、弊社への志望動機などをご記入ください。"
                    />
                </div>
            </div>

            {/* 同意事項 */}
            <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        required
                        className="w-4 h-4 mt-1 rounded border-zinc-300 bg-white text-primary-500 focus:ring-primary-500"
                    />
                    <span className="text-zinc-700 text-sm">
                        <Link href="/privacy" className="text-primary-600 hover:underline">
                            プライバシーポリシー
                        </Link>
                        に同意します
                    </span>
                </label>
            </div>

            {/* Submit */}
            <div className="pt-4">
                <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-6 text-lg rounded-full shadow-sm"
                >
                    エントリーを送信
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
            </div>
        </form>
    )
}

export default function EntryPage() {
    return (
        <>
            {/* Hero */}
            <section className="py-32 px-8 relative overflow-hidden bg-white border-b border-zinc-200">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary-100/40 rounded-full blur-[100px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[80px]" />
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link
                            href="/recruit"
                            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 text-sm transition-colors mb-8"
                        >
                            ← 採用トップへ戻る
                        </Link>
                        <span className="block text-primary-600 text-sm font-bold tracking-[0.3em] uppercase mb-4">
                            Entry
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                            エントリー
                        </h1>
                        <p className="text-zinc-600 text-lg">
                            プラスコミットへのご応募、ありがとうございます。<br />
                            以下のフォームに必要事項をご記入の上、送信してください。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Selection Flow */}
            <section className="py-12 px-8 bg-zinc-50 border-b border-zinc-200">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-lg font-bold text-zinc-900 mb-6">選考の流れ</h2>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            {[
                                "エントリー",
                                "書類選考",
                                "カジュアル面談",
                                "技術面接",
                                "最終面接",
                                "内定"
                            ].map((step, index, arr) => (
                                <div key={step} className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary-600" />
                                        <span className="text-zinc-700">{step}</span>
                                    </div>
                                    {index < arr.length - 1 && (
                                        <ArrowRight className="w-4 h-4 text-zinc-400" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Entry Form */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm"
                    >
                        <Suspense fallback={<div className="text-zinc-500">読み込み中...</div>}>
                            <EntryForm />
                        </Suspense>
                    </motion.div>
                </div>
            </section>

            {/* Contact Alternative */}
            <section className="py-20 px-8 bg-zinc-50 border-t border-zinc-200">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xl font-bold text-zinc-900 mb-4">
                            まずは話を聞いてみたい方へ
                        </h2>
                        <p className="text-zinc-600 mb-8">
                            選考前にカジュアルにお話ししたい方は、<br />
                            お問い合わせフォームからご連絡ください。
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 border border-zinc-300 text-zinc-700 font-bold px-8 py-4 rounded-full hover:bg-white transition-all shadow-sm"
                        >
                            カジュアル面談を申し込む
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}









