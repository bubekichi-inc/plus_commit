"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, FileText, Calendar } from "lucide-react"

export function EntrySection() {
    return (
        <section className="min-h-screen py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-emerald-400 text-sm font-bold tracking-[0.3em] uppercase">
                        Entry
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-8">
                        一緒に未来を<br />
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            創りませんか？
                        </span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        プロフェッショナルとしての自律と、飽くなき探究心を持つ仲間を求めています。
                        まずはカジュアルにお話ししましょう。
                    </p>
                </motion.div>

                {/* Entry Options */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                            <Calendar className="w-7 h-7 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">カジュアル面談</h3>
                        <p className="text-white/50 mb-6 leading-relaxed text-sm">
                            まずは気軽にお話ししましょう。会社の雰囲気や働き方、
                            キャリアについてざっくばらんにお伝えします。
                        </p>
                        <Button
                            className="w-full bg-white/10 hover:bg-emerald-500 text-white hover:text-black font-bold transition-all duration-300 rounded-full group-hover:bg-emerald-500 group-hover:text-black"
                        >
                            カジュアル面談を申し込む
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                            <FileText className="w-7 h-7 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">本エントリー</h3>
                        <p className="text-white/50 mb-6 leading-relaxed text-sm">
                            選考に進みたい方はこちら。履歴書・職務経歴書をご用意の上、
                            フォームよりエントリーください。
                        </p>
                        <Button
                            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold rounded-full"
                        >
                            エントリーフォームへ
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </motion.div>
                </div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-white/40 text-sm mb-4">
                        その他のお問い合わせ
                    </p>
                    <a
                        href="mailto:recruit@plus-commit.com"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        recruit@plus-commit.com
                    </a>
                </motion.div>

                {/* Selection Process */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                    <h3 className="text-xl font-bold text-white mb-8 text-center">選考フロー</h3>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {[
                            { step: "01", label: "書類選考" },
                            { step: "02", label: "カジュアル面談" },
                            { step: "03", label: "技術面接" },
                            { step: "04", label: "最終面接" },
                            { step: "05", label: "内定" },
                        ].map((item, index) => (
                            <div key={item.step} className="flex items-center gap-4">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-black font-bold text-sm mx-auto mb-2">
                                        {item.step}
                                    </div>
                                    <span className="text-white/60 text-sm">{item.label}</span>
                                </div>
                                {index < 4 && (
                                    <ArrowRight className="w-4 h-4 text-white/20 hidden md:block" />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}









