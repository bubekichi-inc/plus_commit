"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, MapPin, Users, Zap, Heart, Coffee, Laptop, BookOpen } from "lucide-react"
import Link from "next/link"

export default function CulturePage() {
    return (
        <>
            {/* Hero */}
            <section className="py-32 px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-teal-950/20 to-black" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link 
                            href="/recruit" 
                            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors mb-8"
                        >
                            ← 採用トップへ戻る
                        </Link>
                        <span className="block text-emerald-400 text-sm font-bold tracking-[0.3em] uppercase mb-4">
                            Culture
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                            カルチャー
                        </h1>
                        <p className="text-white/60 text-lg">
                            私たちの働き方、大切にしている価値観、そしてチームの文化をご紹介します。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Work Style */}
            <section className="py-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="text-emerald-400 text-sm font-bold tracking-[0.3em] uppercase">
                            Work Style
                        </span>
                        <h2 className="text-3xl font-black text-white mt-4">
                            働き方
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: Laptop,
                                title: "フルリモート可",
                                description: "場所を選ばず、自分のベストな環境で働けます。オフィス出社も自由です。"
                            },
                            {
                                icon: Clock,
                                title: "フレックスタイム",
                                description: "コアタイムなしのフルフレックス。自分のリズムで最高のパフォーマンスを。"
                            },
                            {
                                icon: MapPin,
                                title: "ワーケーション推奨",
                                description: "旅先からの仕事もOK。新しい環境が新しいアイデアを生み出します。"
                            },
                            {
                                icon: Users,
                                title: "副業・複業OK",
                                description: "多様な経験がスキルを高める。本業に支障がなければ副業は自由です。"
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-white/5 border border-white/10 rounded-xl"
                            >
                                <item.icon className="w-10 h-10 text-emerald-400 mb-4" />
                                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-white/50 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Culture */}
            <section className="py-20 px-8 border-t border-white/10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="text-emerald-400 text-sm font-bold tracking-[0.3em] uppercase">
                            Team Culture
                        </span>
                        <h2 className="text-3xl font-black text-white mt-4">
                            チームの文化
                        </h2>
                    </motion.div>

                    <div className="grid gap-8">
                        {[
                            {
                                icon: Zap,
                                title: "スピード重視",
                                description: "完璧を目指すより、まず形にする。素早く仮説検証を繰り返し、最適解を見つけていきます。「Done is better than perfect」の精神で、スピーディーに価値を届けます。"
                            },
                            {
                                icon: Heart,
                                title: "心理的安全性",
                                description: "失敗を恐れずチャレンジできる環境を大切にしています。分からないことは素直に聞ける、間違いを認め合える、そんなチームを目指しています。"
                            },
                            {
                                icon: BookOpen,
                                title: "学習文化",
                                description: "技術は常に進化します。社内勉強会、書籍購入補助、カンファレンス参加支援など、学び続ける環境を整えています。"
                            },
                            {
                                icon: Coffee,
                                title: "フラットな関係",
                                description: "役職や年齢に関係なく、フラットに意見を言い合える関係を大切にしています。良いアイデアは誰からでも生まれます。"
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-xl"
                            >
                                <div className="shrink-0">
                                    <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                                        <item.icon className="w-7 h-7 text-emerald-400" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-white/50">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 px-8 border-t border-white/10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="text-emerald-400 text-sm font-bold tracking-[0.3em] uppercase">
                            Benefits
                        </span>
                        <h2 className="text-3xl font-black text-white mt-4">
                            福利厚生
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "フルリモートワーク",
                                "フレックスタイム制",
                                "書籍購入補助",
                                "カンファレンス参加支援",
                                "PC・開発環境支給",
                                "副業OK",
                                "有給休暇（入社時付与）",
                                "慶弔休暇",
                                "産休・育休制度",
                                "健康診断",
                            ].map((benefit) => (
                                <div key={benefit} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                                    <span className="text-white/70">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-20 px-8 border-t border-white/10">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link
                            href="/recruit/company"
                            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-all"
                        >
                            <span className="text-white/40 text-sm">Previous</span>
                            <h3 className="text-xl font-bold text-white mt-2 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                                ← 会社を知る
                            </h3>
                        </Link>
                        <Link
                            href="/recruit/jobs"
                            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-all"
                        >
                            <span className="text-white/40 text-sm">Next</span>
                            <h3 className="text-xl font-bold text-white mt-2 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                                募集職種
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </h3>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}





