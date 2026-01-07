"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Banknote } from "lucide-react"

type JobsSectionProps = {
    onNavigate: (sectionId: string) => void
}

const jobs = [
    {
        id: "engineer",
        title: "エンジニア",
        type: "正社員",
        location: "フルリモート",
        salary: "年収 400万円〜800万円",
        description: "フロントエンドからバックエンドまで、フルスタックな開発に携わっていただきます。自社プロダクトの開発から、クライアントワークまで幅広い案件に参加できます。",
        requirements: [
            "Webアプリケーション開発経験2年以上",
            "React/Vue.js等のモダンフレームワーク経験",
            "TypeScriptの実務経験",
            "Git/GitHubを用いたチーム開発経験",
        ],
        welcome: [
            "Next.js/Nuxt.jsの経験",
            "バックエンド開発経験（Node.js, Go, Python等）",
            "クラウドサービス（AWS, GCP）の経験",
            "チームリーダー/テックリードの経験",
        ],
        tags: ["Next.js", "TypeScript", "AWS", "Go"]
    },
    {
        id: "consultant",
        title: "DXコンサルタント",
        type: "正社員",
        location: "フルリモート",
        salary: "年収 500万円〜900万円",
        description: "お客様のデジタル課題を特定し、解決に向けた戦略立案から導入支援までを担当します。技術とビジネスの両面からお客様の成長をサポートします。",
        requirements: [
            "IT業界での業務経験3年以上",
            "要件定義・プロジェクト管理経験",
            "顧客折衝・プレゼンテーション経験",
            "ビジネス課題を技術で解決する提案力",
        ],
        welcome: [
            "コンサルティングファーム出身",
            "SaaS導入支援の経験",
            "エンジニアとしての開発経験",
            "業務改善・BPRの経験",
        ],
        tags: ["IT戦略", "業務改善", "SaaS"]
    },
]

export function JobsSection({ onNavigate }: JobsSectionProps) {
    return (
        <section className="min-h-screen py-32 relative">
            <div className="max-w-4xl mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-emerald-400 text-sm font-bold tracking-[0.3em] uppercase">
                        Job Openings
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-8">
                        募集職種
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
                        >
                            {/* Header */}
                            <div className="p-8 border-b border-white/10">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                                        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                                            <span className="flex items-center gap-1 text-white/50">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1 text-white/50">
                                                <Clock className="w-4 h-4" />
                                                {job.type}
                                            </span>
                                            <span className="flex items-center gap-1 text-emerald-400">
                                                <Banknote className="w-4 h-4" />
                                                {job.salary}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full">
                                        募集中
                                    </span>
                                </div>
                                <p className="text-white/60 leading-relaxed">{job.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {job.tags.map((tag) => (
                                        <span key={tag} className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Requirements */}
                            <div className="p-8 grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-white font-bold mb-4 text-sm tracking-wider">必須スキル</h4>
                                    <ul className="space-y-2">
                                        {job.requirements.map((req) => (
                                            <li key={req} className="flex items-start gap-2 text-white/60 text-sm">
                                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0" />
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-4 text-sm tracking-wider">歓迎スキル</h4>
                                    <ul className="space-y-2">
                                        {job.welcome.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-white/60 text-sm">
                                                <span className="w-1.5 h-1.5 bg-white/30 rounded-full mt-2 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="px-8 pb-8">
                                <Button
                                    className="w-full bg-white/10 hover:bg-emerald-500 text-white hover:text-black font-bold transition-all duration-300 rounded-full"
                                    onClick={() => onNavigate("entry")}
                                >
                                    この職種にエントリーする
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}









