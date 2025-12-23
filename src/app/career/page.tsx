"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Users, BookOpen, Briefcase, Target, MessageSquare, Award } from "lucide-react"

export default function CareerPage() {
    return (
        <div className="min-h-screen bg-zinc-950">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 border-b border-primary-500/20 bg-zinc-950/90 backdrop-blur-md">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <Link href="/career" className="flex items-center gap-3">
                        <Image
                            src="/general/logo-pc.png"
                            alt="Plus Commit"
                            width={160}
                            height={36}
                            className="h-9 w-auto"
                            priority
                        />
                        <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase border-l border-emerald-400/30 pl-3">
                            Career
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#about" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-primary-500 transition-colors">
                            About
                        </Link>
                        <Link href="#services" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-primary-500 transition-colors">
                            Services
                        </Link>
                        <Link href="#pricing" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-primary-500 transition-colors">
                            Pricing
                        </Link>
                        <Link href="/" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-primary-500 transition-colors">
                            Corporate
                        </Link>
                        <Button size="sm" className="bg-primary-600 hover:bg-primary-500 text-white font-bold italic uppercase rounded-none skew-x-[-10deg] px-6 border-2 border-primary-600 hover:border-primary-400" asChild>
                            <Link href="#contact">
                                <span className="skew-x-[10deg]">無料相談</span>
                            </Link>
                        </Button>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/30" />
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 py-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                <span className="text-emerald-400 text-sm font-bold">IT転職・独立を本気でサポート</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black italic text-white leading-[0.9] mb-8">
                                <span className="block">1億総エンジニア</span>
                                <span className="block text-primary-500">社会の主役へ。</span>
                            </h1>

                            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-12">
                                技術は、人生を切り拓く最強の武器になる。<br className="hidden md:block" />
                                プラスコミットキャリアは、本気でIT転職・独立を目指す方のための<br className="hidden md:block" />
                                スパルタ式キャリア支援サービスです。
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-primary-600 hover:bg-primary-500 text-white font-bold italic uppercase px-8 py-6 text-lg rounded-none skew-x-[-10deg] border-2 border-primary-600"
                                >
                                    <span className="skew-x-[10deg] flex items-center gap-2">
                                        無料カウンセリング
                                        <ArrowRight className="w-5 h-5" />
                                    </span>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 px-8 py-6 text-lg"
                                >
                                    サービス詳細を見る
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-32 border-t border-zinc-800">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="text-primary-500 font-bold tracking-widest text-sm mb-4">ABOUT</div>
                                <h2 className="text-4xl md:text-5xl font-black italic text-white mb-8 leading-tight">
                                    なぜ<span className="text-emerald-400">「スパルタ」</span>なのか
                                </h2>
                                <div className="space-y-6 text-zinc-400 leading-relaxed">
                                    <p>
                                        世の中には「優しい」スクールがたくさんあります。
                                        しかし、優しさだけでは結果は出ません。
                                    </p>
                                    <p>
                                        IT業界で成功するためには、<strong className="text-white">本気で向き合い、厳しく自分を律する姿勢</strong>が必要です。
                                        私たちは、あなたの甘えを許しません。その代わり、全力であなたの成長をサポートします。
                                    </p>
                                    <p>
                                        現役エンジニア・起業家が直接指導。
                                        実務で使える<strong className="text-white">本物のスキル</strong>を身につけてもらいます。
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: Target, label: "目標達成率", value: "92%", desc: "受講生の目標達成率" },
                                    { icon: Users, label: "受講生数", value: "500+", desc: "累計受講生数" },
                                    { icon: Briefcase, label: "転職成功", value: "85%", desc: "転職成功率" },
                                    { icon: Award, label: "満足度", value: "4.8", desc: "受講生満足度" },
                                ].map((stat, index) => (
                                    <div key={index} className="p-6 bg-zinc-900 border border-zinc-800">
                                        <stat.icon className="w-8 h-8 text-primary-500 mb-4" />
                                        <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                                        <div className="text-zinc-500 text-sm">{stat.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-32 border-t border-zinc-800 bg-zinc-900/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="text-primary-500 font-bold tracking-widest text-sm mb-4">SERVICES</div>
                            <h2 className="text-4xl md:text-5xl font-black italic text-white mb-4">
                                3つの<span className="text-emerald-400">コア</span>サービス
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: BookOpen,
                                    title: "実践型学習",
                                    description: "座学ではなく、実際のプロジェクトを通じて学ぶ実践型カリキュラム。現場で即戦力になれるスキルを習得。",
                                    features: ["実践課題", "コードレビュー", "ポートフォリオ作成"]
                                },
                                {
                                    icon: MessageSquare,
                                    title: "個別メンタリング",
                                    description: "週1回の1on1メンタリングで進捗管理。厳しくも温かいフィードバックで確実に成長。",
                                    features: ["週1回1on1", "24h質問対応", "進捗管理"]
                                },
                                {
                                    icon: Briefcase,
                                    title: "キャリアサポート",
                                    description: "履歴書添削、面接対策、企業紹介まで。転職・独立をトータルでサポート。",
                                    features: ["履歴書添削", "面接対策", "企業紹介"]
                                }
                            ].map((service, index) => (
                                <div key={index} className="p-8 bg-zinc-900 border border-zinc-800 hover:border-primary-500/50 transition-all">
                                    <service.icon className="w-12 h-12 text-primary-500 mb-6" />
                                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-zinc-400 mb-6 leading-relaxed">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-zinc-300 text-sm">
                                                <CheckCircle className="w-4 h-4 text-emerald-400" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-32 border-t border-zinc-800">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="text-primary-500 font-bold tracking-widest text-sm mb-4">PRICING</div>
                            <h2 className="text-4xl md:text-5xl font-black italic text-white mb-4">
                                料金プラン
                            </h2>
                            <p className="text-zinc-400">目標に合わせて選べる3つのプラン</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    name: "STARTER",
                                    price: "29,800",
                                    period: "月額",
                                    description: "まずは始めたい方に",
                                    features: ["オンライン教材", "週1回グループMTG", "Slack質問対応", "月1回個別面談"],
                                    cta: "申し込む"
                                },
                                {
                                    name: "STANDARD",
                                    price: "59,800",
                                    period: "月額",
                                    description: "本気で転職を目指す方に",
                                    features: ["オンライン教材", "週1回1on1メンタリング", "24h質問対応", "履歴書添削", "面接対策"],
                                    popular: true,
                                    cta: "申し込む"
                                },
                                {
                                    name: "PREMIUM",
                                    price: "99,800",
                                    period: "月額",
                                    description: "独立・起業を目指す方に",
                                    features: ["オンライン教材", "週2回1on1メンタリング", "24h質問対応", "ビジネス支援", "営業サポート", "継続サポート"],
                                    cta: "申し込む"
                                }
                            ].map((plan, index) => (
                                <div 
                                    key={index} 
                                    className={`relative p-8 border ${plan.popular ? 'bg-primary-950/30 border-primary-500' : 'bg-zinc-900 border-zinc-800'}`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-white text-xs font-bold uppercase">
                                            人気No.1
                                        </div>
                                    )}
                                    <div className="text-center mb-8">
                                        <div className="text-primary-400 font-bold tracking-widest text-sm mb-2">{plan.name}</div>
                                        <div className="text-4xl font-black text-white mb-1">
                                            ¥{plan.price}
                                            <span className="text-lg text-zinc-400">/{plan.period}</span>
                                        </div>
                                        <p className="text-zinc-500 text-sm">{plan.description}</p>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-zinc-300 text-sm">
                                                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button 
                                        className={`w-full ${plan.popular ? 'bg-primary-600 hover:bg-primary-500' : 'bg-zinc-800 hover:bg-zinc-700'} text-white font-bold`}
                                    >
                                        {plan.cta}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="py-32 border-t border-zinc-800 bg-gradient-to-b from-zinc-900 to-primary-950/30">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl md:text-5xl font-black italic text-white mb-6">
                            人生を変える<span className="text-primary-500">決断</span>を。
                        </h2>
                        <p className="text-zinc-400 mb-12 max-w-2xl mx-auto text-lg">
                            まずは無料カウンセリングで、あなたの目標と現状をお聞かせください。
                            最適なプランをご提案します。
                        </p>
                        <Button
                            size="lg"
                            className="bg-primary-600 hover:bg-primary-500 text-white font-bold italic uppercase px-12 py-6 text-lg rounded-none skew-x-[-10deg] border-2 border-primary-600"
                        >
                            <span className="skew-x-[10deg] flex items-center gap-2">
                                無料カウンセリングを予約
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </Button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-12 border-t border-zinc-800 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <Image
                                    src="/general/logo-pc.png"
                                    alt="Plus Commit"
                                    width={140}
                                    height={32}
                                    className="h-8 w-auto"
                                />
                                <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase border-l border-emerald-400/30 pl-3">
                                    Career
                                </span>
                            </div>
                            <p className="text-zinc-500 text-sm mt-2">IT転職・独立を本気でサポート</p>
                        </div>
                        <div className="flex gap-6 text-sm text-zinc-500">
                            <Link href="/" className="hover:text-white transition-colors">
                                コーポレートサイト
                            </Link>
                            <a href="https://recruit.plus-commit.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                採用情報
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-600 text-xs">
                        © {new Date().getFullYear()} Plus Commit Inc. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

