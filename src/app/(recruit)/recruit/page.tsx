"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Building2, Heart, Briefcase } from "lucide-react"
import Link from "next/link"

export default function RecruitTopPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="h-[50vh] flex items-center justify-center relative overflow-hidden bg-black">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 text-center px-8 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6">
                            <span className="block">1億総エンジニア</span>
                            <span className="block text-emerald-400">社会を創る。</span>
                        </h1>

                        <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
                            プラスコミットは、誰もが技術を武器に自由に生きられる社会を目指しています。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="max-w-6xl mx-auto px-8 py-12 space-y-12">
                {/* Jobs Table Section */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-6">現在6職種で募集中</h2>
                    <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10">
                                    <th className="px-6 py-4 text-xs font-bold text-white/40 uppercase tracking-wider">職種</th>
                                    <th className="px-6 py-4 text-xs font-bold text-white/40 uppercase tracking-wider">関連リンク</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    "プロデューサー",
                                    "採用コンサルタント",
                                    "プロジェクトマネージャー",
                                    "コンテンツディレクター",
                                    "ウェブデザイナー",
                                    "エンジニア"
                                ].map((job) => (
                                    <tr key={job} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-5">
                                            <span className="text-base font-bold text-white">{job}</span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex flex-wrap gap-6 text-sm">
                                                <Link href="#" className="text-emerald-400 hover:text-emerald-300 hover:underline">職種紹介</Link>
                                                <Link href="#" className="text-emerald-400 hover:text-emerald-300 hover:underline">募集要項</Link>
                                                <Link href="#" className="text-emerald-400 hover:text-emerald-300 hover:underline">カジュアル面談</Link>
                                                <Link href="#" className="text-emerald-400 hover:text-emerald-300 hover:underline">エントリー</Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Recently Viewed Section */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-6">最近チェックしたページ</h2>
                    <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10">
                                    <th className="px-6 py-4 text-xs font-bold text-white/40 uppercase tracking-wider">タイトル</th>
                                    <th className="px-6 py-4 text-xs font-bold text-white/40 uppercase tracking-wider">訪問日時</th>
                                    <th className="px-6 py-4 text-xs font-bold text-white/40 uppercase tracking-wider">場所</th>
                                    <th className="px-6 py-4 text-xs font-bold text-white/40 uppercase tracking-wider">担当</th>
                                    <th className="px-6 py-4 text-xs font-bold text-white/40 uppercase tracking-wider">読了時間</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-sm">
                                {[
                                    { title: "フロントエンドエンジニア", date: "4日前", place: "募集要項", person: "酒井 琢郎", time: "約11分" },
                                    { title: "中島 碧（プロジェクトマネージャー）", date: "4日前", place: "社員インタビュー", person: "中島 碧", time: "約9分" },
                                    { title: "採用方針・採用基準", date: "4日前", place: "選考", person: "高橋 慶", time: "約8分" },
                                    { title: "私たちの失敗談", date: "4日前", place: "仕事", person: "今西 毅寿", time: "約13分" },
                                    { title: "コンテンツディレクターの仕事", date: "4日前", place: "仕事", person: "林崎 優吾", time: "約20分" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <div className="p-1.5 bg-white/10 rounded">
                                                <Briefcase className="w-4 h-4 text-white/40" />
                                            </div>
                                            <span className="font-bold text-white">{row.title}</span>
                                        </td>
                                        <td className="px-6 py-4 text-white/50">{row.date}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-white/50">
                                                <Building2 className="w-4 h-4" />
                                                <span>{row.place}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-emerald-500/20 overflow-hidden">
                                                <div className="w-full h-full flex items-center justify-center text-[10px] text-emerald-400 font-bold">
                                                    {row.person[0]}
                                                </div>
                                            </div>
                                            <span className="text-white/70">{row.person}</span>
                                        </td>
                                        <td className="px-6 py-4 text-white/50">{row.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </>
    )
}
