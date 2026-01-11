"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Briefcase } from "lucide-react"
import Link from "next/link"
import type { News } from "@/types/microcms"

type JobsListProps = {
    jobs: News[]
}

export default function JobsList({ jobs }: JobsListProps) {
    // Helper to strip HTML tags for description preview
    const stripHtml = (html: string) => {
        return html.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...';
    }

    return (
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
                                        {job.category?.name || 'Recruitment'}
                                    </span>
                                    <h2 className="text-2xl font-bold text-zinc-900 mt-1 group-hover:text-primary-600 transition-colors">
                                        {job.title}
                                    </h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ArrowRight className="w-6 h-6 text-primary-600 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                            <p className="text-zinc-600 mb-6 font-medium">
                                {stripHtml(job.content)}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                                    <Briefcase className="w-4 h-4" />
                                    <span>正社員 / 業務委託</span> {/* Default or extract from features? */}
                                </div>
                                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                                    <MapPin className="w-4 h-4" />
                                    <span>フルリモート可</span> {/* Default */}
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    )
}
