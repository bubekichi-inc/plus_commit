"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Target, Heart, Zap } from "lucide-react"
import Link from "next/link"

export default function SelectionPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="h-[40vh] flex items-center justify-center relative overflow-hidden bg-white border-b border-zinc-200">
                {/* Ambient Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary-100/40 rounded-full blur-[100px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[80px]" />
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
                </div>

                <div className="relative z-10 text-center px-8 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-zinc-900 leading-[1.1] mb-6">
                            <span className="block">選考について</span>
                        </h1>

                        <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto font-medium">
                            プラスコミットの選考プロセスと、採用で重視しているポイントをご紹介します。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="max-w-6xl mx-auto px-8 py-12 space-y-12">
                {/* Selection Process Section */}
                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                        <span className="w-1.5 h-8 bg-accent rounded-full"></span>
                        選考の流れ
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                step: "01",
                                title: "書類審査",
                                description: "履歴書・職務経歴書を基に、基本的なスキルと経験を評価します。応募から1週間以内に結果をご連絡します。",
                                icon: CheckCircle
                            },
                            {
                                step: "02",
                                title: "一次面接",
                                description: "人事担当者との面接です。あなたのキャリアや志向性についてお話を伺います。カジュアルな雰囲気でお互いの理解を深めましょう。",
                                icon: Users
                            },
                            {
                                step: "03",
                                title: "適性検査・課題",
                                description: "あなたのスキルや適性を確認するための検査や実務に近い課題を実施します。技術職の場合はプログラミングテストも含まれます。",
                                icon: Target
                            },
                            {
                                step: "04",
                                title: "最終面接",
                                description: "役員または部門責任者との面接です。会社のビジョンや将来のキャリアについて深くお話しします。",
                                icon: Heart
                            },
                            {
                                step: "05",
                                title: "内定・入社",
                                description: "選考通過後、内定となります。入社までの期間に必要な手続きやオリエンテーションを行います。",
                                icon: Zap
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6 p-6 bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                        <span className="text-primary-600 font-bold text-lg">{item.step}</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <item.icon className="w-5 h-5 text-accent" />
                                        <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                                    </div>
                                    <p className="text-zinc-600 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* What We Value Section */}
                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                        <span className="w-1.5 h-8 bg-primary-600 rounded-full"></span>
                        採用で重視していること
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "技術力と学習意欲",
                                description: "最新の技術を積極的に学び、応用できる能力を重視します。技術は日々進化するため、継続的な学習姿勢が重要です。",
                                icon: Zap
                            },
                            {
                                title: "チームワークとコミュニケーション",
                                description: "一人で完璧に仕事をこなすよりも、チームで協力して成果を上げることを大切にしています。円滑なコミュニケーションが不可欠です。",
                                icon: Users
                            },
                            {
                                title: "責任感と当事者意識",
                                description: "自分の仕事に対して責任を持ち、主体的に行動できる方を求めています。問題解決に向けて積極的に取り組む姿勢を評価します。",
                                icon: Target
                            },
                            {
                                title: "プラスコミットの価値観への共感",
                                description: "「1億総エンジニア社会を創る」という私たちのビジョンに共感し、一緒に挑戦したいという想いを重視します。",
                                icon: Heart
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <item.icon className="w-6 h-6 text-primary-600" />
                                    <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                                </div>
                                <p className="text-zinc-600 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section className="text-center py-12">
                    <h2 className="text-2xl font-bold text-zinc-900 mb-4">ご質問・お問い合わせ</h2>
                    <p className="text-zinc-600 mb-8 max-w-2xl mx-auto">
                        選考プロセスや採用についてのご質問があれば、お気軽にお問い合わせください。
                    </p>
                    <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 h-12 rounded-full">
                        <Link href="/recruit/contact">
                            お問い合わせ
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </section>
            </div>
        </>
    )
}