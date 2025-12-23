"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { RecruitHeader } from "@/components/recruit/RecruitHeader"
import { RecruitFooter } from "@/components/recruit/RecruitFooter"
import { LoginModal } from "@/components/auth/LoginModal"
import { useAuth } from "@/components/auth/AuthProvider"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Users, Zap, MessageSquare, ChevronDown } from "lucide-react"

export default function RecruitPage() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const { isConfigured } = useAuth()

    return (
        <div className="min-h-screen bg-black">
            <RecruitHeader onLoginClick={() => setIsLoginModalOpen(true)} />
            
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-black to-black" />
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8"
                        >
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            <span className="text-emerald-400 text-sm font-medium">Now Hiring</span>
                        </motion.div>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8">
                            <span className="block">1億総エンジニア</span>
                            <span className="block italic text-emerald-400">社会を創る。</span>
                        </h1>
                        
                        <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-12">
                            プラスコミットは、誰もが技術を武器に自由に生きられる社会を目指しています。<br className="hidden md:block" />
                            自ら考え、自ら形にする。そのマインドを持った仲間と共に、新しい未来を創り上げます。
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold px-8 py-6 text-lg rounded-full"
                            >
                                募集職種を見る
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
                            >
                                会社を知る
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <ChevronDown className="w-8 h-8 text-white/30 animate-bounce" />
                </motion.div>
            </section>

            {/* Values Section */}
            <section id="culture" className="py-32 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-sm font-bold text-emerald-400 tracking-[0.3em] uppercase mb-4">
                            Our Values
                        </h2>
                        <p className="text-4xl md:text-5xl font-black text-white">
                            大切にしている価値観
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: "Output First",
                                subtitle: "01",
                                description: "完璧よりも、まずは形にすること。素早く実装し、フィードバックを得て改善を繰り返す。"
                            },
                            {
                                icon: Code2,
                                title: "Stay Professional",
                                subtitle: "02",
                                description: "常に最新を学び、最高を提供すること。技術者として成長し続ける姿勢を大切にする。"
                            },
                            {
                                icon: Users,
                                title: "Challenge Boundaries",
                                subtitle: "03",
                                description: "既成概念にとらわれず挑戦すること。新しい技術や手法に積極的に取り組む。"
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300"
                            >
                                <div className="absolute -top-4 -right-4 text-6xl font-black text-white/5 group-hover:text-emerald-500/10 transition-colors">
                                    {value.subtitle}
                                </div>
                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <value.icon className="w-7 h-7 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-white/50 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-32 bg-gradient-to-b from-black via-emerald-950/10 to-black">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-bold text-emerald-400 tracking-[0.3em] uppercase mb-4">
                                Culture
                            </h2>
                            <p className="text-4xl md:text-5xl font-black text-white mb-8">
                                自律と成長を<br />支える環境
                            </p>
                            <p className="text-white/60 leading-relaxed mb-8">
                                マイクロマネジメントは行いません。各メンバーがプロフェッショナルとして責任を持ち、
                                最適な手法を選択してプロジェクトを進めます。同時に、学び続ける環境を整備し、
                                メンバーの成長を全力でサポートします。
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    "フルリモート・フレックス制導入",
                                    "最新MacBook Pro貸与",
                                    "書籍・セミナー費用全額負担",
                                    "副業OK（申請制）"
                                ].map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                                        <span className="text-white/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl p-8 border border-white/10">
                                <div className="h-full bg-black/50 rounded-2xl p-6 font-mono text-sm overflow-hidden">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                                    </div>
                                    <pre className="text-emerald-400/80">
{`// Our Culture
const plusCommit = {
  workStyle: "remote-first",
  hours: "flexible",
  learning: "unlimited",
  communication: "flat",
  
  mission: () => {
    return "技術の力で、" +
           "ビジネスを次のステージへ";
  }
};`}
                                    </pre>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section id="workflow" className="py-32">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-sm font-bold text-emerald-400 tracking-[0.3em] uppercase mb-4">
                            Workflow
                        </h2>
                        <p className="text-4xl md:text-5xl font-black text-white">
                            論理的な開発プロセス
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {[
                            { step: "01", title: "ヒアリング & 要件定義", description: "お客様のビジネスモデルを深く理解し、真の課題を特定します。" },
                            { step: "02", title: "設計 & 技術選定", description: "拡張性、保守性、パフォーマンスを考慮し、最適なアーキテクチャを設計します。" },
                            { step: "03", title: "実装 & レビュー", description: "「誰が読んでも理解できるコード」を基準に実装を進めます。" },
                            { step: "04", title: "納品 & 運用改善", description: "リリースして終わりではなく、継続的なパフォーマンス改善を行います。" }
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex gap-8 pb-12 last:pb-0"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-black font-bold">
                                        {item.step}
                                    </div>
                                    {index < 3 && (
                                        <div className="w-0.5 flex-1 bg-gradient-to-b from-emerald-500/50 to-transparent mt-4" />
                                    )}
                                </div>
                                <div className="flex-1 pt-2">
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-white/50">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section id="jobs" className="py-32 bg-gradient-to-b from-black via-emerald-950/10 to-black">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-sm font-bold text-emerald-400 tracking-[0.3em] uppercase mb-4">
                            Job Openings
                        </h2>
                        <p className="text-4xl md:text-5xl font-black text-white">
                            募集職種
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "エンジニア",
                                type: "Full Time",
                                description: "フロントエンドからバックエンドまで、フルスタックな開発に携わっていただきます。",
                                tags: ["Next.js", "TypeScript", "AWS", "Go"]
                            },
                            {
                                title: "DXコンサルタント",
                                type: "Full Time",
                                description: "お客様のデジタル課題を特定し、解決に向けた戦略立案から導入支援までを担当します。",
                                tags: ["IT戦略", "業務改善", "SaaS"]
                            }
                        ].map((job, index) => (
                            <motion.div
                                key={job.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full">
                                        {job.type}
                                    </span>
                                </div>
                                <p className="text-white/50 mb-6 leading-relaxed">{job.description}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {job.tags.map((tag) => (
                                        <span key={tag} className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <Button className="w-full bg-white/10 hover:bg-emerald-500 text-white hover:text-black font-bold transition-all duration-300 rounded-full group-hover:bg-emerald-500 group-hover:text-black">
                                    詳細を見る
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-32">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-sm font-bold text-emerald-400 tracking-[0.3em] uppercase mb-4">
                            FAQ
                        </h2>
                        <p className="text-4xl md:text-5xl font-black text-white">
                            よくある質問
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto divide-y divide-white/10">
                        {[
                            { q: "未経験からの応募は可能ですか？", a: "ポテンシャル採用も行っていますが、プログラミングの基礎知識や、自ら学習を進めている姿勢を重視します。" },
                            { q: "試用期間はありますか？", a: "3ヶ月間の試用期間を設けています。待遇は正社員登用後と変わりません。" },
                            { q: "副業は可能ですか？", a: "可能です。個人のスキルアップや新しい挑戦を尊重しています（申請制）。" },
                            { q: "リモートワークは可能ですか？", a: "フルリモート勤務が可能です。フレックス制も導入しており、柔軟な働き方ができます。" }
                        ].map((faq, index) => (
                            <motion.div
                                key={faq.q}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="py-8"
                            >
                                <div className="flex gap-4">
                                    <MessageSquare className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-3">{faq.q}</h4>
                                        <p className="text-white/50 leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20" />
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl" />
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                            一緒に未来を<br />
                            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                創りませんか？
                            </span>
                        </h2>
                        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                            プロフェッショナルとしての自律と、飽くなき探究心を持つ仲間を求めています。
                        </p>
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold px-12 py-6 text-lg rounded-full"
                        >
                            エントリーする
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            <RecruitFooter />

            {/* Login Modal */}
            {isConfigured && (
                <LoginModal
                    isOpen={isLoginModalOpen}
                    onClose={() => setIsLoginModalOpen(false)}
                />
            )}
        </div>
    )
}

