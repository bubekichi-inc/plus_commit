"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Briefcase } from "lucide-react"
import Link from "next/link"
import { getPublishedJobs } from "@/lib/recruit-jobs"

export default function JobsPage() {
    const jobs = getPublishedJobs()

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
                </div>
            </section>

            {/* Job List */}
            <section className="py-20 px-8 bg-zinc-50">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/recruit/jobs/${job.id}`}
                                    className="block group"
                                >
                                    <div className="p-8 bg-white border border-zinc-200 rounded-2xl hover:border-primary-500 hover:bg-primary-50/30 transition-all shadow-sm">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                            <div>
                                                <span className="text-primary-600 text-xs font-bold tracking-wider uppercase">
                                                    {job.department}
                                                </span>
                                                <h2 className="text-2xl font-bold text-zinc-900 mt-1 group-hover:text-primary-600 transition-colors">
                                                    {job.title}
                                                </h2>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <ArrowRight className="w-6 h-6 text-primary-600 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                        <p className="text-zinc-600 mb-6">
                                            {job.description}
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            <div className="flex items-center gap-2 text-zinc-500 text-sm">
                                                <Briefcase className="w-4 h-4" />
                                                {job.type}
                                            </div>
                                            <div className="flex items-center gap-2 text-zinc-500 text-sm">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
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

            {/* Navigation */}
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
        </>
    )
}









