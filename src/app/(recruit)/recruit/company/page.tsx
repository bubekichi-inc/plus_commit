"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CompanyPage() {
    return (
        <>
            {/* Hero */}
            <section className="py-32 px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 to-black" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <Link 
                            href="/recruit" 
                            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors mb-8"
                        >
                            ← 採用トップへ戻る
                        </Link>
                        <span className="block text-emerald-400 text-sm font-bold tracking-[0.3em] uppercase mb-4">
                            Company
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                            会社を知る
                        </h1>
                        <p className="text-white/60 text-lg">
                            私たちの想い、目指す未来、そして会社の基本情報をご紹介します。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 px-8">
                <div className="max-w-4xl mx-auto">
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
                                <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-6">
                                    「1億総エンジニア社会」を創る
                                </h2>
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
                                <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-6">
                                    デジタル変革の最高のパートナー
                                </h2>
                                <p className="text-white/60 leading-relaxed text-lg">
                                    お客様のビジネス課題を深く理解し、最適なテクノロジーソリューションを提供。
                                    共に成長し、共に成功する真のパートナーであり続けます。
                                    単なる開発会社ではなく、お客様のビジネスの成功に本気でコミットする存在でありたい。
                                </p>
                            </div>
                        </motion.div>

                        {/* Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent" />
                            <div className="pl-8">
                                <span className="text-cyan-400/50 text-xs font-bold tracking-widest uppercase">Values</span>
                                <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-6">
                                    大切にしている価値観
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    {[
                                        { title: "自走力", description: "自ら考え、自ら行動する。指示待ちではなく、主体的に動く姿勢を大切にします。" },
                                        { title: "学習意欲", description: "技術は常に進化します。学び続ける姿勢こそが、成長の源泉です。" },
                                        { title: "チーム貢献", description: "個の力だけでなく、チームで成果を出す。互いを高め合える関係を築きます。" },
                                        { title: "顧客視点", description: "技術はあくまで手段。お客様の課題解決と価値創造を常に意識します。" },
                                    ].map((value) => (
                                        <div key={value.title} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                            <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
                                            <p className="text-white/50 text-sm">{value.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20 px-8 border-t border-white/10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="text-emerald-400 text-sm font-bold tracking-[0.3em] uppercase">
                            Overview
                        </span>
                        <h2 className="text-3xl font-black text-white mt-4">
                            会社概要
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8"
                    >
                        <div className="grid gap-6">
                            {[
                                { label: "会社名", value: "株式会社プラスコミット" },
                                { label: "設立", value: "2024年1月" },
                                { label: "代表者", value: "代表取締役 青柳 航佑" },
                                { label: "所在地", value: "東京都渋谷区" },
                                { label: "事業内容", value: "コーディング代行、DXコンサルティング、Web制作・開発、IT教育事業" },
                                { label: "資本金", value: "100万円" },
                            ].map((item) => (
                                <div key={item.label} className="flex flex-col md:flex-row md:items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                    <span className="text-white/40 text-sm w-32 shrink-0 mb-1 md:mb-0">{item.label}</span>
                                    <span className="text-white/80">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-20 px-8 border-t border-white/10">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link
                            href="/recruit/culture"
                            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-all"
                        >
                            <span className="text-white/40 text-sm">Next</span>
                            <h3 className="text-xl font-bold text-white mt-2 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                                カルチャー
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </h3>
                        </Link>
                        <Link
                            href="/recruit/jobs"
                            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-all"
                        >
                            <span className="text-white/40 text-sm">Explore</span>
                            <h3 className="text-xl font-bold text-white mt-2 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                                募集職種
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </h3>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}







