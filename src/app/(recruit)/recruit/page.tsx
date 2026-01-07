"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Building2, Heart, Briefcase } from "lucide-react"
import Link from "next/link"

export default function RecruitTopPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="h-[50vh] flex items-center justify-center relative overflow-hidden bg-white border-b border-zinc-200">
                {/* Ambient Background Effects (Light Theme) */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary-100/40 rounded-full blur-[100px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[80px]" />
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
                </div>

                <div className="relative z-10 text-center px-8 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-zinc-900 leading-[1.1] mb-6">
                            <span className="block">1億総エンジニア</span>
                            <span className="block text-primary-600">社会を創る。</span>
                        </h1>

                        <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto font-medium">
                            プラスコミットは、誰もが技術を武器に自由に生きられる社会を目指しています。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="max-w-6xl mx-auto px-8 py-12 space-y-12">
                {/* Jobs Table Section */}
                <section>
                    <h2 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-accent rounded-full"></span>
                        現在6職種で募集中
                    </h2>
                    <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-zinc-50 border-b border-zinc-100">
                                    <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">職種</th>
                                    <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">関連リンク</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100">
                                {[
                                    "プロデューサー",
                                    "採用コンサルタント",
                                    "プロジェクトマネージャー",
                                    "コンテンツディレクター",
                                    "ウェブデザイナー",
                                    "エンジニア"
                                ].map((job) => (
                                    <tr key={job} className="hover:bg-zinc-50 transition-colors">
                                        <td className="px-6 py-5">
                                            <span className="text-base font-bold text-zinc-800">{job}</span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex flex-wrap gap-6 text-sm">
                                                <Link href="#" className="text-primary-600 hover:text-primary-700 hover:underline font-bold">職種紹介</Link>
                                                <Link href="#" className="text-primary-600 hover:text-primary-700 hover:underline font-bold">募集要項</Link>
                                                <Link href="#" className="text-primary-600 hover:text-primary-700 hover:underline font-bold">カジュアル面談</Link>
                                                <Link href="#" className="text-primary-600 hover:text-primary-700 hover:underline font-bold">エントリー</Link>
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
                    <h2 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-zinc-300 rounded-full"></span>
                        最近チェックしたページ
                    </h2>
                    <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-zinc-50 border-b border-zinc-100">
                                    <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">タイトル</th>
                                    <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">訪問日時</th>
                                    <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">場所</th>
                                    <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">担当</th>
                                    <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">読了時間</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100 text-sm">
                                {[
                                    { title: "フロントエンドエンジニア", date: "4日前", place: "募集要項", person: "酒井 琢郎", time: "約11分" },
                                    { title: "中島 碧（プロジェクトマネージャー）", date: "4日前", place: "社員インタビュー", person: "中島 碧", time: "約9分" },
                                    { title: "採用方針・採用基準", date: "4日前", place: "選考", person: "高橋 慶", time: "約8分" },
                                    { title: "私たちの失敗談", date: "4日前", place: "仕事", person: "今西 毅寿", time: "約13分" },
                                    { title: "コンテンツディレクターの仕事", date: "4日前", place: "仕事", person: "林崎 優吾", time: "約20分" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-zinc-50 transition-colors">
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <div className="p-1.5 bg-zinc-100 rounded">
                                                <Briefcase className="w-4 h-4 text-zinc-400" />
                                            </div>
                                            <span className="font-bold text-zinc-800">{row.title}</span>
                                        </td>
                                        <td className="px-6 py-4 text-zinc-500 font-medium">{row.date}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-zinc-500 font-medium">
                                                <Building2 className="w-4 h-4" />
                                                <span>{row.place}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-primary-100 overflow-hidden border border-primary-200 text-primary-600">
                                                <div className="w-full h-full flex items-center justify-center text-[10px] font-bold">
                                                    {row.person[0]}
                                                </div>
                                            </div>
                                            <span className="text-zinc-600 font-medium">{row.person}</span>
                                        </td>
                                        <td className="px-6 py-4 text-zinc-500 font-medium">{row.time}</td>
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
