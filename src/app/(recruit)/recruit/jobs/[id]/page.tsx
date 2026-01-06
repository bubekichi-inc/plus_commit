"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Briefcase, CheckCircle } from "lucide-react"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { getJobById, getPublishedJobs } from "@/lib/recruit-jobs"
import { Button } from "@/components/ui/button"

export default function JobDetailPage() {
    const params = useParams()
    const jobId = params.id as string
    const job = getJobById(jobId)

    if (!job || !job.published) {
        notFound()
    }

    const otherJobs = getPublishedJobs().filter(j => j.id !== jobId).slice(0, 3)

    return (
        <>
            {/* Hero */}
            <section className="py-32 px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-black" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link 
                            href="/recruit/jobs" 
                            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors mb-8"
                        >
                            ← 募集職種一覧へ戻る
                        </Link>
                        <span className="block text-emerald-400 text-sm font-bold tracking-[0.3em] uppercase mb-4">
                            {job.department}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                            {job.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center gap-2 text-white/60 text-sm bg-white/5 px-4 py-2 rounded-full">
                                <Briefcase className="w-4 h-4" />
                                {job.type}
                            </div>
                            <div className="flex items-center gap-2 text-white/60 text-sm bg-white/5 px-4 py-2 rounded-full">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                            </div>
                        </div>
                        <p className="text-white/60 text-lg">
                            {job.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Job Details */}
            <section className="py-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        {/* Responsibilities */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-emerald-500" />
                                業務内容
                            </h2>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                <ul className="space-y-4">
                                    {job.responsibilities.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                            <span className="text-white/70">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Requirements */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-teal-500" />
                                必須要件
                            </h2>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                <ul className="space-y-4">
                                    {job.requirements.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                                            <span className="text-white/70">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Preferred */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-cyan-500" />
                                歓迎要件
                            </h2>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                <ul className="space-y-4">
                                    {job.preferred.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                            <span className="text-white/70">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Salary */}
                        {job.salary && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-emerald-500" />
                                    給与
                                </h2>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/70 text-lg">{job.salary}</p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Apply CTA */}
            <section className="py-20 px-8 border-t border-white/10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-emerald-950/50 to-teal-950/50 border border-emerald-500/30 rounded-2xl p-8 md:p-12 text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            このポジションに応募する
                        </h2>
                        <p className="text-white/60 mb-8">
                            ご興味をお持ちいただけましたら、ぜひエントリーください。<br />
                            選考の流れや詳細は、エントリー後にご案内いたします。
                        </p>
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold px-12 py-6 text-lg rounded-full"
                            asChild
                        >
                            <Link href={`/recruit/entry?position=${job.id}`}>
                                エントリーする
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Other Jobs */}
            {otherJobs.length > 0 && (
                <section className="py-20 px-8 border-t border-white/10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-8">
                            その他の募集職種
                        </h2>
                        <div className="space-y-4">
                            {otherJobs.map((otherJob) => (
                                <Link
                                    key={otherJob.id}
                                    href={`/recruit/jobs/${otherJob.id}`}
                                    className="block group"
                                >
                                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-emerald-500/50 transition-all flex items-center justify-between">
                                        <div>
                                            <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase">
                                                {otherJob.department}
                                            </span>
                                            <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                                                {otherJob.title}
                                            </h3>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}







