"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Building2, Heart, Briefcase } from "lucide-react"
import Link from "next/link"
import type { News } from "@/types/microcms"

type RecruitTopPageClientProps = {
    jobs: News[]
}

export default function RecruitTopPageClient({ jobs }: RecruitTopPageClientProps) {
    return (
        <>
            {/* Hero Section */}
            <section className="h-[50vh] flex items-center justify-center relative overflow-hidden bg-white border-b border-zinc-200">
                {/* Ambient Background Effects (Light Theme) */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary-100/40 rounded-full blur-[100px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[80px]" />
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
                        現在{jobs.length}職種で募集中
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
                                {jobs.map((job) => (
                                    <tr key={job.id} className="hover:bg-zinc-50 transition-colors">
                                        <td className="px-6 py-5">
                                            <span className="text-base font-bold text-zinc-800">{job.title}</span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex flex-wrap gap-6 text-sm">
                                                <Link href={`/recruit/jobs/${job.id}`} className="text-primary-600 hover:text-primary-700 hover:underline font-bold">募集要項</Link>
                                                <Link href="/recruit/casual" className="text-primary-600 hover:text-primary-700 hover:underline font-bold">カジュアル面談</Link>
                                            </div>
                                        </td>
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
