"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { News } from "@/types/microcms"

type JobDetailClientProps = {
    job: News
    otherJobs: News[]
}

export default function JobDetailClient({ job, otherJobs }: JobDetailClientProps) {
    return (
        <>
            {/* Hero */}
            <section className="py-32 px-8 relative overflow-hidden bg-white border-b border-zinc-200 min-h-[50vh] flex items-center">
                <div className="absolute inset-0">
                    <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary-100/40 rounded-full blur-[100px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[80px]" />
                    {/* Ambient Background */}
                </div>
                <div className="max-w-4xl mx-auto relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link
                            href="/recruit/jobs"
                            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 text-sm transition-colors mb-8"
                        >
                            ← 募集職種一覧へ戻る
                        </Link>
                        <span className="block text-primary-600 text-sm font-bold tracking-[0.3em] uppercase mb-4">
                            {job.category?.name || 'RECRUITMENT'}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 leading-tight">
                            {job.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center gap-2 text-zinc-600 text-sm bg-zinc-100 px-4 py-2 rounded-full">
                                <Clock className="w-4 h-4" />
                                {new Date(job.publishedAt).toLocaleDateString()}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Job Details (Content) */}
            <section className="py-20 px-8 bg-zinc-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-zinc prose-lg max-w-none bg-white p-8 md:p-12 rounded-2xl border border-zinc-200 shadow-sm
                        prose-headings:font-bold prose-headings:text-zinc-900
                        prose-h2:text-2xl prose-h2:border-l-4 prose-h2:border-primary-500 prose-h2:pl-4 prose-h2:mt-12 prose-h2:mb-6
                        prose-h3:text-xl prose-h3:text-primary-700 prose-h3:mt-8 prose-h3:mb-4 prose-h3:flex prose-h3:items-center prose-h3:before:content-[''] prose-h3:before:w-2 prose-h3:before:h-2 prose-h3:before:bg-primary-500 prose-h3:before:rounded-full prose-h3:before:mr-3"
                    >
                        <div dangerouslySetInnerHTML={{ __html: job.content }} />
                    </motion.div>
                </div>
            </section>

            {/* Apply CTA */}
            <section className="py-20 px-8 border-t border-zinc-200 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-primary-50/50 border border-primary-100 rounded-2xl p-8 md:p-12 text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
                            このポジションに応募する
                        </h2>
                        <p className="text-zinc-600 mb-8">
                            ご興味をお持ちいただけましたら、ぜひエントリーください。<br />
                            選考の流れや詳細は、エントリー後にご案内いたします。
                        </p>
                        <Button
                            size="lg"
                            className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-md"
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
                <section className="py-20 px-8 border-t border-zinc-200 bg-zinc-50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-8">
                            その他の募集職種
                        </h2>
                        <div className="space-y-4">
                            {otherJobs.map((otherJob) => (
                                <Link
                                    key={otherJob.id}
                                    href={`/recruit/jobs/${otherJob.id}`}
                                    className="block group"
                                >
                                    <div className="p-6 bg-white border border-zinc-200 rounded-xl hover:border-primary-500 hover:bg-primary-50/30 transition-all flex items-center justify-between shadow-sm">
                                        <div>
                                            <span className="text-primary-600 text-xs font-bold tracking-wider uppercase">
                                                {otherJob.category?.name || 'RECRUITMENT'}
                                            </span>
                                            <h3 className="text-lg font-bold text-zinc-900 group-hover:text-primary-600 transition-colors">
                                                {otherJob.title}
                                            </h3>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
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
