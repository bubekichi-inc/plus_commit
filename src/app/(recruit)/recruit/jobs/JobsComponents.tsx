"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function JobsHero() {
    return (
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
                Jobs
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                募集職種
            </h1>
            <p className="text-zinc-600 text-lg">
                現在募集中のポジションをご紹介します。<br />
                あなたのスキルと経験を活かせる場所を見つけてください。
            </p>
        </motion.div>
    )
}

export function JobsCTA() {
    return (
        <section className="py-20 px-8 bg-white border-t border-zinc-200">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                        該当するポジションがない場合も
                    </h2>
                    <p className="text-zinc-600 mb-8">
                        オープンポジションとして、あなたのスキルと経験をお聞かせください。<br />
                        マッチするポジションがあればご連絡いたします。
                    </p>
                    <Link
                        href="/recruit/entry"
                        className="inline-flex items-center gap-2 bg-primary-600 text-white font-bold px-8 py-4 rounded-full hover:bg-primary-700 transition-all shadow-sm"
                    >
                        オープンエントリー
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export function JobsNavigation() {
    return (
        <section className="py-20 px-8 bg-zinc-50 border-t border-zinc-200">
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    <Link
                        href="/recruit/culture"
                        className="group p-8 bg-white border border-zinc-200 rounded-2xl hover:border-primary-500 hover:bg-primary-50/30 transition-all shadow-sm"
                    >
                        <span className="text-zinc-500 text-sm">Previous</span>
                        <h3 className="text-xl font-bold text-zinc-900 mt-2 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                            ← カルチャー
                        </h3>
                    </Link>
                    <Link
                        href="/recruit/faq"
                        className="group p-8 bg-white border border-zinc-200 rounded-2xl hover:border-primary-500 hover:bg-primary-50/30 transition-all shadow-sm"
                    >
                        <span className="text-zinc-500 text-sm">Next</span>
                        <h3 className="text-xl font-bold text-zinc-900 mt-2 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                            よくある質問
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </h3>
                    </Link>
                </div>
            </div>
        </section>
    )
}
