"use client"

import { motion } from "framer-motion"
import { Zap, Code2, Users, Laptop, BookOpen, Coffee } from "lucide-react"

export function CultureSection() {
    const values = [
        {
            icon: Zap,
            title: "Output First",
            description: "完璧よりも、まずは形にすること。素早く実装し、フィードバックを得て改善を繰り返す。"
        },
        {
            icon: Code2,
            title: "Stay Professional",
            description: "常に最新を学び、最高を提供すること。技術者として成長し続ける姿勢を大切にする。"
        },
        {
            icon: Users,
            title: "Challenge Boundaries",
            description: "既成概念にとらわれず挑戦すること。新しい技術や手法に積極的に取り組む。"
        }
    ]

    const benefits = [
        { icon: Laptop, label: "フルリモート", description: "場所を選ばない働き方" },
        { icon: Coffee, label: "フレックス制", description: "コアタイムなしの柔軟な勤務" },
        { icon: BookOpen, label: "学習支援", description: "書籍・セミナー費用全額負担" },
    ]

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
                        Culture
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-8">
                        カルチャー
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                        マイクロマネジメントは行いません。各メンバーがプロフェッショナルとして責任を持ち、
                        最適な手法を選択してプロジェクトを進めます。
                    </p>
                </motion.div>

                {/* Values */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300"
                        >
                            <div className="absolute -top-4 -right-4 text-6xl font-black text-white/5 group-hover:text-emerald-500/10 transition-colors">
                                0{index + 1}
                            </div>
                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <value.icon className="w-7 h-7 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                            <p className="text-white/50 leading-relaxed text-sm">{value.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Work Environment */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-bold text-white mb-8">働く環境</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.label}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 text-center"
                            >
                                <benefit.icon className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
                                <h4 className="text-white font-bold mb-1">{benefit.label}</h4>
                                <p className="text-white/50 text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                    <h3 className="text-xl font-bold text-white mb-6">使用技術</h3>
                    <div className="flex flex-wrap gap-3">
                        {[
                            "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
                            "Go", "PostgreSQL", "Supabase", "AWS", "Vercel", "Docker", "GitHub Actions"
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}



