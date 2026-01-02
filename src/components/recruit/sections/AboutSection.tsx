"use client"

import { motion } from "framer-motion"

export function AboutSection() {
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
                        About Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-8">
                        私たちについて
                    </h2>
                </motion.div>

                <div className="grid gap-16">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-transparent" />
                        <div className="pl-8">
                            <span className="text-emerald-400/50 text-xs font-bold tracking-widest uppercase">Mission</span>
                            <h3 className="text-3xl font-black text-white mt-2 mb-6">
                                「1億総エンジニア社会」を創る
                            </h3>
                            <p className="text-white/60 leading-relaxed text-lg">
                                私たちは、誰もが技術を武器に活躍できる社会の実現を目指しています。
                                テクノロジーの民主化を推進し、すべての人がデジタルスキルを持つ未来を創造します。
                                エンジニアという職業を、特別なものではなく、誰もが選択できるキャリアの一つにしたい。
                                そんな想いで、日々の事業に取り組んでいます。
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500 to-transparent" />
                        <div className="pl-8">
                            <span className="text-teal-400/50 text-xs font-bold tracking-widest uppercase">Vision</span>
                            <h3 className="text-3xl font-black text-white mt-2 mb-6">
                                デジタル変革の最高のパートナー
                            </h3>
                            <p className="text-white/60 leading-relaxed text-lg">
                                お客様のビジネス課題を深く理解し、最適なテクノロジーソリューションを提供。
                                共に成長し、共に成功する真のパートナーであり続けます。
                                単なる開発会社ではなく、お客様のビジネスの成功に本気でコミットする存在でありたい。
                            </p>
                        </div>
                    </motion.div>

                    {/* Company Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-8"
                    >
                        <h3 className="text-xl font-bold text-white mb-6">会社概要</h3>
                        <div className="grid gap-4">
                            {[
                                { label: "会社名", value: "株式会社プラスコミット" },
                                { label: "設立", value: "2024年1月" },
                                { label: "代表", value: "青柳 航佑" },
                                { label: "所在地", value: "東京都渋谷区" },
                                { label: "事業内容", value: "コーディング代行、DXコンサルティング、Web制作・開発、IT教育事業" },
                            ].map((item) => (
                                <div key={item.label} className="flex border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                    <span className="text-white/40 text-sm w-32 shrink-0">{item.label}</span>
                                    <span className="text-white/80 text-sm">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}



