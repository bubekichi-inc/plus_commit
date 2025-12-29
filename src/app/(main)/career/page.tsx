"use client"

"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Users, BookOpen, Briefcase, Target, MessageSquare, Award, Flame, Zap, Dumbbell, TrendingUp, Search, MousePointer2 } from "lucide-react"
import { RecruitLink } from "@/components/ui/RecruitLink"

export default function CareerPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/career" className="flex items-center gap-2">
                        <Image
                            src="/general/logo-pc.png"
                            alt="Plus Commit"
                            width={120}
                            height={28}
                            className="h-7 w-auto invert"
                            priority
                        />
                        <span className="text-emerald-400 text-[10px] font-black tracking-[0.2em] uppercase bg-emerald-400/10 px-2 py-0.5 rounded">
                            Gym
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="#problem" className="text-xs font-bold text-zinc-400 hover:text-white transition-colors">
                            悩み
                        </Link>
                        <Link href="#concept" className="text-xs font-bold text-zinc-400 hover:text-white transition-colors">
                            コンセプト
                        </Link>
                        <Link href="#program" className="text-xs font-bold text-zinc-400 hover:text-white transition-colors">
                            プログラム
                        </Link>
                        <Link href="#pricing" className="text-xs font-bold text-zinc-400 hover:text-white transition-colors">
                            料金
                        </Link>
                        <Button size="sm" className="bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs px-6 rounded-full" asChild>
                            <Link href="#contact">
                                無料体験を受ける
                            </Link>
                        </Button>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
                    {/* Abstract Background */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
                        <div className="absolute inset-0 opacity-[0.03]" style={{
                            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }} />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                                <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                                <span className="text-zinc-400 text-xs font-bold tracking-wider">伸び悩むジュニアエンジニアの「限界突破」を支える</span>
                            </div>

                            <h1 className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tight mb-8">
                                <span className="text-white">「継続」を、</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">エンジニアの最強の武器に。</span>
                            </h1>

                            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-12">
                                独学やスクールで技術は学べる。でも、継続は一人では難しい。<br className="hidden md:block" />
                                現役エンジニアの徹底伴走と、理想を叶える転職サポートで、<br className="hidden md:block" />
                                あなたを「挫折しないエンジニア」へと肉体改造します。
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-emerald-500 hover:bg-emerald-400 text-black font-black px-10 py-7 text-xl rounded-full shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all hover:scale-105"
                                >
                                    <span className="flex items-center gap-2">
                                        今すぐ無料体験を予約
                                        <ArrowRight className="w-6 h-6" />
                                    </span>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/10 text-zinc-400 hover:bg-white/5 px-10 py-7 text-xl rounded-full"
                                >
                                    メソッドを見る
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Problem Section */}
                <section id="problem" className="py-24 bg-white/5">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black mb-6 italic underline decoration-emerald-500 decoration-4 underline-offset-8">
                                学習の「停滞」を感じていませんか？
                            </h2>
                            <p className="text-zinc-500">独学や一般的なスクールでは解決できない、ジュニア特有の壁があります。</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "学習が継続できない",
                                    desc: "独学や動画教材では、仕事が忙しくなるとつい後回しになり、モチベーションが維持できない。",
                                    icon: Flame
                                },
                                {
                                    title: "転職できるか不安",
                                    desc: "今の学習が本当に現場で通用するのか、理想のキャリアに繋がっているのか確信が持てない。",
                                    icon: Target
                                },
                                {
                                    title: "相談できる人がいない",
                                    desc: "エラーの解消だけでなく、コードの設計やキャリアの悩みなど、プロに相談したいことが山積み。",
                                    icon: MessageSquare
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-10 bg-black border border-white/5 rounded-3xl relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                                    <item.icon className="w-12 h-12 text-emerald-400 mb-8" />
                                    <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Concept Section */}
                <section id="concept" className="py-32 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full" />
                                <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 flex items-center justify-center p-12 text-center">
                                    <div>
                                        <Dumbbell className="w-24 h-24 text-emerald-500 mx-auto mb-8 animate-bounce" />
                                        <div className="text-6xl font-black text-white mb-4 italic">PLUS COMMIT<br />GYM</div>
                                        <p className="text-emerald-400 font-bold tracking-widest uppercase">Engineer Personal Training</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                                    エンジニアにも、<br />
                                    <span className="text-emerald-400 italic">「追い込み」</span>の期間が必要だ。
                                </h2>
                                <div className="space-y-8 text-lg text-zinc-400 leading-relaxed">
                                    <p>
                                        筋肉をつけるためにジムへ行くように、エンジニアとしての「地力」をつけるためのトレーニングが必要です。
                                    </p>
                                    <p>
                                        私たちは単なるスクールではありません。<br />
                                        あなたのコードの癖を直し、思考の筋肉を鍛え、<strong className="text-white font-black">自走できるエンジニア</strong>へと肉体改造（マインドセット）する場所です。
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "教材を渡すだけ、の指導はしません。",
                                            "あなたの弱点に合わせた、独自のメニューを組みます。",
                                            "現役エンジニアが、あなたのコードを隅々までチェックします。"
                                        ].map((text, i) => (
                                            <li key={i} className="flex items-center gap-3 text-white font-bold">
                                                <Zap className="w-5 h-5 text-emerald-500 fill-emerald-500" />
                                                {text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Section */}
                <section id="program" className="py-24 bg-zinc-900/50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 italic uppercase">3 Key Pillars</h2>
                            <p className="text-zinc-500">確実に成長するための「3つの柱」</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    title: "「挫折」をゼロにする徹底伴走",
                                    subtitle: "1-on-1 Coaching",
                                    desc: "週1回のメンタリングで、学習の進捗だけでなく、モチベーション管理や生活習慣までサポート。一人では挫折しがちな時期を一緒に乗り越えます。",
                                    icon: Users
                                },
                                {
                                    title: "実務レベルのコードレビュー",
                                    subtitle: "Technical Review",
                                    desc: "現場の第一線で活躍するエンジニアが、あなたのコードを隅々までチェック。独学では気づけない「プロの設計」を身に付けます。",
                                    icon: Target
                                },
                                {
                                    title: "理想のキャリアを叶える転職支援",
                                    subtitle: "Career Support",
                                    desc: "履歴書の添削、模擬面接、ポートフォリオ作成のアドバイスまで徹底サポート。あなたの市場価値を最大化し、理想の職場への転職を成功させます。",
                                    icon: Briefcase
                                }
                            ].map((item, i) => (
                                <div key={i} className="text-center group">
                                    <div className="w-24 h-24 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                                        <item.icon className="w-10 h-10 text-emerald-500 group-hover:text-black" />
                                    </div>
                                    <h3 className="text-xs font-black text-emerald-400 mb-2 tracking-[0.3em] uppercase">{item.subtitle}</h3>
                                    <h4 className="text-2xl font-black text-white mb-6">{item.title}</h4>
                                    <p className="text-zinc-400 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-32">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black italic text-white mb-4 uppercase">Membership</h2>
                            <p className="text-zinc-500">あなたの本気に合わせたプランニング</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    name: "月額プラン",
                                    price: "9,980",
                                    period: "/月",
                                    desc: "まずは1ヶ月から始めたい方に。",
                                    features: ["週1回 1on1メンタリング", "無制限コードレビュー", "Slack質問サポート", "キャリア相談（随時）"]
                                },
                                {
                                    name: "6ヶ月一括プラン",
                                    price: "49,900",
                                    period: "/6ヶ月",
                                    desc: "着実に成長したい方向け。1ヶ月分がお得になります。",
                                    features: ["週1回 1on1メンタリング", "無制限コードレビュー", "Slack質問サポート", "転職・ポートフォリオ支援"],
                                    popular: true,
                                    badge: "1ヶ月分無料"
                                },
                                {
                                    name: "12ヶ月一括プラン",
                                    price: "99,800",
                                    period: "/1年",
                                    desc: "プロのエンジニアを目指す最高峰プラン。2ヶ月分がお得になります。",
                                    features: ["週1回 1on1メンタリング", "無制限コードレビュー", "Slack質問サポート", "転職徹底サポート（書類・面接）"],
                                    badge: "2ヶ月分無料"
                                }
                            ].map((plan, index) => (
                                <div 
                                    key={index} 
                                    className={`relative p-8 lg:p-12 rounded-[40px] border ${plan.popular ? 'bg-emerald-500 text-black border-emerald-500' : 'bg-white/5 border-white/10 text-white'}`}
                                >
                                    {(plan.popular || plan.badge) && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-black text-emerald-400 text-xs font-black uppercase rounded-full tracking-widest flex flex-col items-center leading-tight">
                                            {plan.popular && <span>Recommended</span>}
                                            {plan.badge && <span className="text-[10px] text-white/80">{plan.badge}</span>}
                                        </div>
                                    )}
                                    <div className="mb-10">
                                        <div className={`text-lg font-black mb-4 ${plan.popular ? 'text-black/60' : 'text-zinc-500'}`}>{plan.name}</div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl lg:text-5xl font-black">¥{plan.price}</span>
                                            <span className="text-sm font-bold opacity-60">{plan.period}（税込）</span>
                                        </div>
                                        <p className={`mt-6 text-sm leading-relaxed ${plan.popular ? 'text-black/70' : 'text-zinc-400'}`}>{plan.desc}</p>
                                    </div>
                                    <ul className="space-y-4 mb-12">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 font-bold text-sm">
                                                <CheckCircle className={`w-5 h-5 ${plan.popular ? 'text-black' : 'text-emerald-500'}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button 
                                        className={`w-full py-8 text-lg font-black rounded-3xl transition-all ${plan.popular ? 'bg-black text-emerald-400 hover:bg-zinc-900' : 'bg-emerald-500 text-black hover:bg-emerald-400'}`}
                                    >
                                        このプランで始める
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-emerald-500" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h2 className="text-4xl md:text-7xl font-black text-black mb-8 leading-tight tracking-tighter italic">
                            LET'S BULK UP<br />YOUR SKILLS.
                        </h2>
                        <p className="text-black/70 mb-12 max-w-xl mx-auto text-lg font-bold">
                            まずは60分の無料カウンセリング＆体験トレーニングで、<br className="hidden md:block" />
                            あなたの成長を阻む「壁」を特定しましょう。
                        </p>
                        <Button
                            size="lg"
                            className="bg-black text-emerald-400 hover:bg-zinc-900 text-2xl font-black px-12 py-10 rounded-full shadow-2xl transition-all hover:scale-105"
                        >
                            <span className="flex items-center gap-3">
                                無料体験を予約する
                                <ArrowRight className="w-8 h-8" />
                            </span>
                        </Button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-20 bg-black border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Image
                                    src="/general/logo-pc.png"
                                    alt="Plus Commit"
                                    width={140}
                                    height={32}
                                    className="h-8 w-auto invert"
                                />
                                <span className="text-emerald-400 text-[10px] font-black tracking-[0.2em] uppercase bg-emerald-400/10 px-2 py-0.5 rounded">
                                    Gym
                                </span>
                            </div>
                            <p className="text-zinc-600 text-sm">ジュニアエンジニアのためのパーソナルトレーニングジム</p>
                        </div>
                        <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-zinc-500">
                            <Link href="/" className="hover:text-emerald-400 transition-colors">Corporate</Link>
                            <RecruitLink className="hover:text-emerald-400 transition-colors">Recruit</RecruitLink>
                            <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
                        </div>
                    </div>
                    <div className="mt-20 pt-10 border-t border-white/5 text-center text-zinc-700 text-[10px] font-bold tracking-widest">
                        © {new Date().getFullYear()} PLUS COMMIT INC. UNLEASH YOUR POTENTIAL.
                    </div>
                </div>
            </footer>
        </div>
    )
}


