"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle, Users, BookOpen, Briefcase, Target, MessageSquare, Flame, Zap, TrendingUp, MousePointer2, Play, ChevronDown } from "lucide-react"
import { RecruitLink } from "@/components/ui/RecruitLink"

export default function CareerPage() {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    // スクロール制御
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 80) { // Scrolling down
                    setIsVisible(false)
                } else { // Scrolling up
                    setIsVisible(true)
                }
                setLastScrollY(window.scrollY)
            }
        }

        window.addEventListener('scroll', controlNavbar)
        return () => window.removeEventListener('scroll', controlNavbar)
    }, [lastScrollY])

    return (
        <div className="min-h-screen bg-white text-zinc-900 font-sans">
            {/* Header */}
            <header className={`fixed top-0 left-0 w-full z-50 bg-[#E3E3E3]/80 backdrop-blur-xl border-b border-zinc-200 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                    <Link href="/career" className="flex items-center">
                        <Image
                            src="/general/career/pcloco.png"
                            alt="プラスコミット"
                            width={280}
                            height={60}
                            className="h-16 w-auto"
                            priority
                        />
                    </Link>

                    <nav className="hidden md:flex items-center gap-10">
                        <Link href="#service" className="text-sm font-black text-zinc-500 hover:text-zinc-900 transition-colors">
                            サポート内容一覧
                        </Link>
                        <Link href="#plan" className="text-sm font-black text-zinc-500 hover:text-zinc-900 transition-colors">
                            料金体系
                        </Link>
                        <Button className="bg-[#06C755] hover:bg-[#05b34c] text-white font-black text-sm px-8 py-6 rounded-full shadow-lg shadow-emerald-100" asChild>
                            <Link href="https://line.me/R/ti/p/@your-line-id" className="flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 fill-white" />
                                まずはLINEで相談する
                            </Link>
                        </Button>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#E3E3E3]">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="text-left"
                            >
                                <div className="inline-flex items-center gap-3 bg-white/50 border border-white/20 rounded-full px-5 py-2 mb-10">
                                    <span className="w-2 h-2 bg-violet-600 rounded-full animate-pulse" />
                                    <span className="text-zinc-700 text-sm font-bold uppercase tracking-wider">学習が停滞しがちなプログラミング学習中の方へ</span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.3] tracking-tight mb-10 text-zinc-900">
                                    「なかなか進まなかった学習」が<br />
                                    <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent italic text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">どんどん進む</span><br />
                                    「諦めかけた目標」に<br />
                                    <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent italic text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">どんどん近づく</span>
                                </h1>

                                <p className="text-lg text-zinc-600 font-medium leading-relaxed mb-14">
                                    手持ちの教材や、通っているスクールを最大限に活かす。<br /><br />
                                    現役のフリーランスエンジニア達が学習・転職を徹底的にサポートし、<br className="hidden md:block" />
                                    挫折させない伴走体制で先が見えない、諦めそうなあなたの夢を叶えます
                                </p>

                                <div className="flex flex-col sm:flex-row gap-5 mb-16">
                                    <Button
                                        size="lg"
                                        className="bg-[#06C755] hover:bg-[#05b34c] text-white font-black px-12 py-9 text-xl rounded-full shadow-2xl shadow-emerald-200 transition-all hover:scale-105"
                                        asChild
                                    >
                                        <Link href="https://line.me/R/ti/p/@your-line-id" className="flex items-center gap-3">
                                            まずはLINEで相談する
                                            <ArrowRight className="w-6 h-6" />
                                        </Link>
                                    </Button>
                                </div>

                                <div className="flex items-center gap-8 text-zinc-500 font-bold text-sm">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                                        <span>1対1の伴走サポート</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                                        <span>挫折ゼロを目指す管理体制</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: 40 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative hidden lg:block"
                            >
                                <div className="relative z-10 rounded-[64px] overflow-hidden shadow-2xl border-8 border-white">
                                    <Image
                                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
                                        alt="プログラミングを学習する男性"
                                        width={800}
                                        height={1000}
                                        className="object-cover h-[700px] w-full object-top"
                                    />
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-10 -right-10 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
                                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse" />
                            </motion.div>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400">
                        <span className="text-xs tracking-widest uppercase font-black">Scroll</span>
                        <ChevronDown className="w-5 h-5 animate-bounce" />
                    </div>
                </section>

                {/* Trust Signal / Achievement - Hidden for now */}
                {/* 
                <section className="py-16 bg-zinc-50 border-y border-zinc-100">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-10 items-center text-center">
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-zinc-900 mb-2">4/5<span className="text-xl ml-1">人</span></div>
                                <p className="text-sm font-bold text-zinc-500">が年収UPを実現※</p>
                            </div>
                            <div className="border-x border-zinc-200">
                                <div className="text-4xl md:text-5xl font-black text-zinc-900 mb-2">20,000<span className="text-xl ml-1">件</span></div>
                                <p className="text-sm font-bold text-zinc-500">以上の求人・案件数</p>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-zinc-900 mb-2">94<span className="text-xl ml-1">%</span></div>
                                <p className="text-sm font-bold text-zinc-500">の求人紹介満足度</p>
                            </div>
                        </div>
                    </div>
                </section>
                */}

                {/* About Section */}
                <section id="about" className="py-32 relative bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">about</h2>
                                <h3 className="text-4xl md:text-6xl font-black mb-12 leading-tight text-zinc-900 flex flex-col md:flex-row items-center justify-center gap-4">
                                    <Image
                                        src="/general/career/pcloco.png"
                                        alt="プラスコミット"
                                        width={400}
                                        height={100}
                                        className="h-12 md:h-20 w-auto"
                                    />
                                    <span>とは?</span>
                                </h3>
                                <p className="text-xl md:text-2xl text-zinc-500 font-medium leading-loose">
                                    プラスコミットは、「理想のエンジニアになりたい」という全ての方々を応援する、個別指導型の学習管理・転職サポートサービスです。<br /><br />
                                    すでに通われているスクール、購入された教材を使ったカリキュラムの立案・学習の進行をサポートします。<br /><br />
                                    カリキュラム完走後は、転職のプロによる<br className="hidden md:block" />
                                    キャリアプランの設計から履歴書の添削、面接対策といった、<br className="hidden md:block" />
                                    転職活動の最初から最後までを徹底サポートいたします。
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>


                {/* Service Section */}
                <section id="service" className="py-32 relative bg-zinc-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">service</h2>
                            <h3 className="text-4xl md:text-6xl font-black leading-tight text-zinc-900">
                                新たな『学習体験』がここに。
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                            {[
                                {
                                    num: "01",
                                    title: "教材持ち込みで最短ルートを",
                                    desc: "カリキュラムの提供はありません。あなたが今通っているスクールや、購入した書籍、手持ちの教材を最大限に活かし、プロの視点で学習順序や重要度を最適化します。",
                                    gradient: "from-violet-600 to-blue-600"
                                },
                                {
                                    num: "02",
                                    title: "迷いをゼロにするロードマップ",
                                    desc: "現在のスキルレベルと目標に合わせて、手持ちの教材をどう進めるべきか個別のロードマップを作成。今日何をすべきかが明確になり、迷いなく学習に没頭できます。",
                                    gradient: "from-fuchsia-600 to-pink-600"
                                },
                                {
                                    num: "03",
                                    title: "価値を創る仲間と共に",
                                    desc: "業界で活躍する専門講師、挫折させないサポート運営陣、互いに高め合う受講生。同じゴールに向かう仲間と共に、着実にスキルを身につけられます。",
                                    gradient: "from-orange-500 to-red-500"
                                },
                                {
                                    num: "04",
                                    title: "月に1回、1時間程度の個別面談",
                                    desc: "毎月1回、面談を実施します。これからの学習計画の策定や月ごとの振り返りを実施します。コードレビューやエラーの解決は対応できませんが、WEBアプリを公開するまでの一通りの流れのサポートは対応可能です。",
                                    gradient: "from-emerald-500 to-teal-500"
                                },
                                {
                                    num: "05",
                                    title: "毎日のチャットサポート",
                                    desc: "毎日決まった時間に、まずは今日やるタスクや目標の宣言をします。その後、寝る前に今日はどれだけ目標を達成できたかの振り返りをします。これが継続できるように催促します。",
                                    gradient: "from-blue-500 to-indigo-500"
                                },
                                {
                                    num: "06",
                                    title: "監視サポート",
                                    desc: "SNS投稿や、githubの草、筋トレといった継続したいアクションを事前に共有いただければ、それが継続できているか毎日確認させていただきます。3日に1回ジムに行く、といった毎日継続するものでないものも柔軟に対応可能です。",
                                    gradient: "from-amber-500 to-orange-500"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="group relative bg-white border border-zinc-200 rounded-[48px] p-12 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all"
                                >
                                    <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center font-black text-2xl text-white mb-10 shadow-lg`}>
                                        {item.num}
                                </div>
                                    <h4 className="text-2xl font-black mb-6 text-zinc-900 leading-tight">{item.title}</h4>
                                    <p className="text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Voice Section */}
                <section id="voice" className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">voice</h2>
                            <h3 className="text-4xl md:text-6xl font-black leading-tight text-zinc-900">
                                社会に価値提供した<br className="hidden md:block" />受講生の声
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                            {[
                                {
                                    name: "手古 祥太",
                                    title: "9年間勤めた建築業界から大転身！LINE構築事業で独立を実現",
                                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                                },
                                {
                                    name: "杉山 知寿子",
                                    title: "スマホ時間を有効活用して、ゲーム感覚で仕事も日常生活も充実。",
                                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
                                },
                                {
                                    name: "斉藤 紀成",
                                    title: "時間の切り売りから抜け出し、Webマーケターに。",
                                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
                                }
                            ].map((person, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    className="group bg-zinc-50 rounded-[48px] overflow-hidden hover:bg-white border border-transparent hover:border-violet-100 hover:shadow-2xl transition-all"
                                >
                                    <div className="relative h-72 overflow-hidden">
                                        <Image src={person.image} alt={person.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                                    </div>
                                    <div className="p-10">
                                        <h4 className="text-xl font-black mb-4 text-zinc-900 leading-tight group-hover:text-violet-600 transition-colors">{person.title}</h4>
                                        <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">{person.name}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-20 text-center">
                            <Button variant="outline" size="lg" className="border-zinc-200 text-zinc-500 hover:bg-zinc-50 rounded-full px-12 py-8 font-black">
                                もっとみる
                            </Button>
                                </div>
                    </div>
                </section>

                {/* Representative Message Section */}
                <section id="representative" className="py-32 bg-zinc-900 text-white overflow-hidden relative">
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-violet-600/30 via-fuchsia-600/20 to-transparent rounded-full blur-[120px]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="relative z-10 rounded-[48px] overflow-hidden border-4 border-white/10 shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                                        alt="代表 青柳 航佑"
                                        width={600}
                                        height={800}
                                        className="object-cover w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h2 className="text-sm font-black text-violet-400 uppercase tracking-[0.4em] mb-6">representative</h2>
                                <h3 className="text-3xl md:text-5xl font-black mb-10 leading-tight">
                                    「エンジニアになりたい」という夢を、<br />
                                    夢で終わらせないために。
                                </h3>
                                <div className="space-y-6 text-lg text-white/70 font-medium leading-relaxed mb-12">
                                    <p>
                                        プログラミング学習は、多くの人にとって「人生を変えるきっかけ」になります。しかし、その道のりは決して平坦ではありません。
                                    </p>
                                    <p>
                                        独学での挫折、スクール選びの迷い、実務レベルまでのギャップ。私自身、多くの学習者がこれらの壁にぶつかる姿を見てきました。
                                    </p>
                                    <p>
                                        プラスコミットは、単なる知識の提供ではなく、「やり抜く環境」と「プロの視点」を提供することに特化しています。あなたが今持っている教材を武器に、最短ルートで目標に到達できるよう、私たちが全力で伴走します。
                                    </p>
                                    <p>
                                        あなたの挑戦が、一生モノのスキルと自信に変わるまで。私たちが責任を持ってサポートすることをお約束します。
                                    </p>
                                </div>
                                <div>
                                    <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-2">Representative</p>
                                    <p className="text-3xl font-black italic tracking-tighter">
                                        青柳 航佑 <span className="text-sm font-bold ml-4 text-zinc-500 not-italic uppercase tracking-widest">Kosuke Aoyagi</span>
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-32 bg-zinc-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">comparison</h2>
                            <h3 className="text-4xl md:text-6xl font-black leading-tight text-zinc-900">
                                他社サービスとの比較
                            </h3>
                            </div>

                        <div className="max-w-6xl mx-auto overflow-hidden rounded-[48px] border border-zinc-200 bg-white shadow-xl">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-zinc-50/50">
                                            <th className="p-8 text-left text-zinc-400 text-sm font-black border-b border-zinc-100"></th>
                                            <th className="p-8 text-center border-b border-violet-100 bg-violet-50/50">
                                                <Image src="/general/career/pcloco.png" alt="プラスコミット" width={200} height={44} className="mx-auto mb-2 h-11 w-auto" />
                                                <span className="text-[10px] font-black text-violet-600 uppercase tracking-widest">プラスコミット</span>
                                            </th>
                                            <th className="p-8 text-center text-zinc-400 text-xs font-black border-b border-zinc-100">A社</th>
                                            <th className="p-8 text-center text-zinc-400 text-xs font-black border-b border-zinc-100">B社</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        {[
                                            { label: "対応可能なスキル", pc: "手持ちの教材で何でも対応可能", a: "特定言語のみ", b: "Web制作のみ" },
                                            { label: "教材の自由度", pc: "◎（スクール・書籍・動画等）", a: "×（指定教材のみ）", b: "×（指定教材のみ）" },
                                            { label: "サポート体制", pc: "1対1の徹底伴走", a: "集団講義", b: "チャットのみ" },
                                            { label: "スタッフによる進捗管理", pc: "◎（毎日確認）", a: "△", b: "×" },
                                            { label: "紹介求人数", pc: "20,000件以上", a: "非公開", b: "約500件" },
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-zinc-50/30 transition-colors">
                                                <td className="p-8 text-left text-zinc-600 font-bold border-b border-zinc-100 bg-zinc-50/20">{row.label}</td>
                                                <td className="p-8 border-b border-violet-100 bg-violet-50/30 font-black text-zinc-900 text-lg">{row.pc}</td>
                                                <td className="p-8 border-b border-zinc-100 text-zinc-400 font-medium">{row.a}</td>
                                                <td className="p-8 border-b border-zinc-100 text-zinc-400 font-medium">{row.b}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Jobs Section */}
                <section id="jobs" className="py-32 relative bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">jobs</h2>
                            <h3 className="text-4xl md:text-6xl font-black leading-tight text-zinc-900">
                                紹介可能な求人・案件
                            </h3>
                            <p className="text-zinc-500 font-medium mt-8 text-lg">あなたの市場価値を正しく把握し、高待遇な職場をご提案します</p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                            {[
                                {
                                    title: "自社開発企業：シニアエンジニア候補",
                                    tags: ["フルリモート", "TypeScript", "Next.js", "Go"],
                                    salary: "年収 800万〜1200万円",
                                    desc: "急成長中のSaaSスタートアップ。エンジニア主体でプロダクトを牽引できる、裁量の大きい環境です。",
                                    gradient: "from-violet-600 to-blue-600"
                                },
                                {
                                    title: "制作会社：Webディレクター / PM",
                                    tags: ["ハイブリッド", "ディレクション", "要件定義"],
                                    salary: "年収 600万〜950万円",
                                    desc: "大手企業のDX支援を多数手がける精鋭集団。技術的なバックグラウンドを活かしたマネジメントが可能です。",
                                    gradient: "from-fuchsia-600 to-pink-600"
                                },
                                {
                                    title: "ITコンサル：フロントエンドスペシャリスト",
                                    tags: ["フレックス制", "React", "大規模開発"],
                                    salary: "年収 700万〜1100万円",
                                    desc: "最先端のWeb技術を用いた大規模プロジェクト。パフォーマンス最適化や設計のリードをお任せします。",
                                    gradient: "from-orange-500 to-red-500"
                                },
                                {
                                    title: "スタートアップ：UI/UX Lead Designer",
                                    tags: ["フルリモート", "Figma", "Design System"],
                                    salary: "年収 650万〜1000万円",
                                    desc: "デザイン思考を重視するプロダクト開発チーム。ユーザー体験の設計から実装の橋渡しまで担っていただきます。",
                                    gradient: "from-emerald-500 to-teal-500"
                                }
                            ].map((job, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group bg-zinc-50 border border-zinc-100 rounded-[40px] p-10 hover:bg-white hover:shadow-2xl hover:border-violet-100 transition-all"
                                >
                                    <div className="flex flex-col md:flex-row items-start gap-8">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${job.gradient} rounded-[24px] flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-100`}>
                                            <Zap className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-2xl font-black text-zinc-900 mb-4 group-hover:text-violet-600 transition-colors">{job.title}</h4>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {job.tags.map((tag, j) => (
                                                    <span key={j} className="text-[11px] font-black px-3 py-1.5 bg-zinc-200/50 text-zinc-500 rounded-full uppercase tracking-widest">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="bg-violet-50 text-violet-700 font-black text-lg px-6 py-2 rounded-2xl inline-block mb-6">
                                                {job.salary}
                                            </div>
                                            <p className="text-zinc-500 font-medium leading-relaxed">
                                                {job.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-20 text-center">
                            <p className="text-zinc-400 font-bold mb-10 italic">
                                ※ 常時1,000件以上の非公開求人を保有しています
                            </p>
                            <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white font-black px-12 py-9 rounded-full shadow-2xl shadow-emerald-100 transition-all hover:scale-105" asChild>
                                <Link href="https://line.me/R/ti/p/@your-line-id" className="flex items-center gap-3">
                                    まずはLINEで相談する
                                    <ArrowRight className="w-6 h-6" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Plan Section */}
                <section id="plan" className="py-32 relative bg-zinc-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">plan</h2>
                            <h3 className="text-4xl md:text-6xl font-black leading-tight text-zinc-900">
                                サービス料金
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            {[
                                {
                                    name: "スタンダードプラン",
                                    price: "199,000",
                                    period: "（税込）",
                                    desc: "学習と基本的な転職サポートが含まれる、スタートに最適なプラン。",
                                    features: ["週1回 1on1メンタリング", "個別ロードマップ作成", "Slack進捗報告・相談", "定期的な学習・進路相談"],
                                    subsidy: "実質 ¥59,700〜",
                                },
                                {
                                    name: "プライムプラン",
                                    price: "364,833",
                                    period: "（税込）",
                                    desc: "国の補助金を活用し、徹底した転職支援まで受ける最高峰のパッケージ。",
                                    features: ["週1回 1on1メンタリング", "個別ロードマップ作成", "Slack進捗報告・相談", "転職徹底サポート（書類・面接）", "ポートフォリオ制作支援"],
                                    popular: true,
                                    badge: "最大70%補助対象",
                                    subsidy: "実質 ¥109,450〜",
                                }
                            ].map((plan, index) => (
                                <motion.div
                                    key={index} 
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className={`relative p-12 rounded-[56px] border ${plan.popular ? 'bg-white border-violet-200 shadow-2xl scale-105 z-10' : 'bg-white/50 border-zinc-200'}`}
                                >
                                    {plan.badge && (
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-black rounded-full shadow-lg">
                                            {plan.badge}
                                        </div>
                                    )}
                                    <div className="mb-12 text-center">
                                        <div className="text-sm font-black mb-6 text-zinc-400 uppercase tracking-widest">{plan.name}</div>
                                        <div className="flex items-baseline justify-center gap-1 mb-8">
                                            <span className="text-6xl font-black text-zinc-900">¥{plan.price}</span>
                                            <span className="text-sm font-bold text-zinc-400">{plan.period}</span>
                                        </div>
                                        <div className={`inline-block px-8 py-4 rounded-3xl font-black text-2xl ${plan.popular ? 'bg-violet-600 text-white' : 'bg-zinc-100 text-zinc-900'} shadow-inner`}>
                                            {plan.subsidy}
                                        </div>
                                        <p className="mt-10 text-zinc-500 font-medium leading-relaxed px-4">{plan.desc}</p>
                                    </div>
                                    <ul className="space-y-6 mb-12">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-4 text-zinc-600 font-bold">
                                                <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle className="w-4 h-4 text-violet-600" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button 
                                        className={`w-full py-10 text-xl font-black rounded-[28px] transition-all ${plan.popular ? 'bg-[#06C755] hover:bg-[#05b34c] text-white shadow-xl shadow-emerald-100' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}
                                        asChild
                                    >
                                        <Link href="https://line.me/R/ti/p/@your-line-id">
                                            まずはLINEで相談する
                                        </Link>
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Flow Section */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">flow</h2>
                            <h3 className="text-4xl md:text-6xl font-black leading-tight text-zinc-900">
                                入会までの流れ
                            </h3>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-4 gap-12">
                                {[
                                    { step: "01", title: "LINEで相談", desc: "公式LINEを追加し、現在の悩みや目標をご相談ください。" },
                                    { step: "02", title: "個別相談", desc: "必要に応じて、プロのメンターによる詳細なヒアリングを行います。" },
                                    { step: "03", title: "入会手続き", desc: "サポート内容にご納得いただけましたら、お手続きを進めます。" },
                                    { step: "04", title: "サポート開始", desc: "最短当日から、プロによる伴走サポートがスタートします。" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="relative group text-center"
                                    >
                                        <div className="w-24 h-24 bg-zinc-50 rounded-[32px] border border-zinc-100 flex items-center justify-center font-black text-3xl text-zinc-900 mx-auto mb-8 group-hover:bg-violet-600 group-hover:text-white group-hover:shadow-2xl transition-all duration-500">
                                            {item.step}
                                        </div>
                                        <h4 className="text-xl font-black text-zinc-900 mb-4">{item.title}</h4>
                                        <p className="text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                                        {i !== 3 && (
                                            <div className="hidden lg:block absolute top-12 left-[calc(50%+60px)] w-[calc(100%-120px)] border-t-2 border-dashed border-zinc-100" />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ & CTA Section */}
                <section id="contact" className="py-32 bg-zinc-50 relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* FAQ Part */}
                            <div id="faq">
                                <div className="mb-16">
                                    <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">faq</h2>
                                    <h3 className="text-4xl md:text-5xl font-black leading-tight text-zinc-900">
                                        よくいただく相談
                                    </h3>
                                </div>

                                <div className="space-y-6 mb-12">
                                    {[
                                        "エンジニアになりたくて、とりあえずプログラミングを独学で学んでいるが、ゴールが見えない。",
                                        "スクールに入会しようとしているが、IT業界のことに詳しくなく、どのスクールがいいかわからない。",
                                        "教材を購入した・スクールに入ったが、モチベーションが続かず、中断してしまったが諦めたくない。",
                                        "学習、ポートフォリオの作成の次はどうすればいいかわからない"
                                    ].map((text, i) => (
                                        <div key={i} className="flex gap-4 p-6 bg-white border border-zinc-200 rounded-[24px] shadow-sm">
                                            <div className="w-8 h-8 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center font-black flex-shrink-0">
                                                <CheckCircle className="w-5 h-5" />
                                            </div>
                                            <p className="text-zinc-700 font-bold leading-relaxed">{text}</p>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-zinc-500 font-black leading-relaxed text-lg italic">
                                    細かくヒアリングしたのち、ひとりひとりに最適な学習計画・転職対策を提案させていただきます。
                                </p>
                            </div>

                            {/* CTA Part */}
                            <div className="relative">
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-violet-100/40 via-fuchsia-50/20 to-transparent rounded-full blur-[100px]" />
                                </div>
                                
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="bg-white p-12 md:p-16 rounded-[56px] shadow-2xl border border-zinc-100 relative z-10 text-center"
                                >
                                    <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight text-zinc-900 tracking-tight">
                                        まずはLINEで<br /><span className="bg-[#06C755] bg-clip-text text-transparent">相談</span>する
                                    </h2>
                                    <p className="text-zinc-500 font-bold mb-12 text-lg leading-relaxed max-w-md mx-auto">
                                        今持っている教材の活かし方や、<br />
                                        プロの視点からのアドバイスを無料で提供いたします。
                                    </p>
                                    
                                    <div className="flex flex-col gap-6 justify-center items-center">
                                        <Button
                                            size="lg"
                                            className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white text-xl font-black px-12 py-9 rounded-full shadow-2xl shadow-emerald-100 transition-all hover:scale-105"
                                            asChild
                                        >
                                            <Link href="https://line.me/R/ti/p/@your-line-id" className="flex items-center justify-center gap-4">
                                                まずはLINEで相談する
                                                <ArrowRight className="w-6 h-6" />
                                            </Link>
                                        </Button>
                                        <Link href="https://line.me/R/ti/p/@your-line-id" className="text-zinc-400 font-black hover:text-zinc-900 transition-colors border-b border-zinc-200 hover:border-zinc-900 pb-1 text-sm">
                                            今すぐLINEで相談したい方はこちら
                                        </Link>
                                    </div>
                                    
                                    <p className="mt-10 text-xs text-zinc-400 font-bold">
                                        ※ 強引な勧誘は一切ありませんのでご安心ください。
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-10 bg-zinc-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-20">
                        <div className="max-w-sm">
                                <Image
                                src="/general/career/pcloco.png"
                                alt="プラスコミット"
                                width={260}
                                height={56}
                                className="h-14 w-auto mb-1 invert brightness-0"
                            />
                        </div>
                        
                        <div>
                                <ul className="space-y-4 text-sm font-bold flex gap-4">
                                    <li><Link href="#" className="text-white/60 hover:text-white transition-colors">運営会社</Link></li>
                                    <li><Link href="#" className="text-white/60 hover:text-white transition-colors">利用規約</Link></li>
                                    <li><Link href="#" className="text-white/60 hover:text-white transition-colors">プライバシーポリシー</Link></li>
                                    <li><Link href="#" className="text-white/60 hover:text-white transition-colors">特定商取引法に基づく表示</Link></li>
                                </ul>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-white/20 text-xs font-black tracking-widest">
                        © {new Date().getFullYear()} PLUS COMMIT INC. UNLEASH YOUR POTENTIAL.
                        </div>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </div>
    )
}
