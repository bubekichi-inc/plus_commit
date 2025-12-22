"use client"

import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const services = [
    {
        id: "coding",
        label: "CODING",
        title: "コーディングの力で、\nビジネスを形にする。",
        description: "デザインカンプからの正確なコーディング、レスポンシブ対応、\nCMS組み込みまで。制作会社様のパートナーとして支援します。",
        link: "/business/services",
    },
    {
        id: "dx",
        label: "DX CONSULTING", 
        title: "デジタルで、\n業務を変革する。",
        description: "業務プロセスの可視化からツール選定、導入支援まで。\n貴社のDX推進をトータルでサポートします。",
        link: "/business/services",
    },
    {
        id: "development",
        label: "DEVELOPMENT",
        title: "テクノロジーで、\n新しい価値を創る。",
        description: "Webサイト制作からWebアプリケーション開発まで。\nモダンな技術スタックで、最適なソリューションを提供します。",
        link: "/business/services",
    },
]

const news = [
    { date: "2025.12.20", category: "お知らせ", title: "年末年始の営業について" },
    { date: "2025.12.15", category: "実績", title: "大手メーカー様のコーポレートサイトリニューアルを担当しました" },
    { date: "2025.12.01", category: "サービス", title: "業務自動化サービスの提供を開始しました" },
    { date: "2025.11.20", category: "お知らせ", title: "DXコンサルティングサービスをリニューアルしました" },
]

const pickups = [
    {
        category: "サービス",
        title: "コーディング代行サービス – デザインを正確にコードへ",
        date: "2025.12.15",
    },
    {
        category: "コラム",
        title: "DX推進で失敗しないための5つのポイント",
        date: "2025.12.10",
    },
    {
        category: "実績",
        title: "ECサイト構築で月商300%アップを実現した事例",
        date: "2025.12.05",
    },
]

export default function BusinessHomePage() {
    const [activeService, setActiveService] = useState(0)

    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen pt-20">
                {/* Hero Section - Nyle style with tabs */}
                <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
                    
                    {/* Animated background elements */}
                    <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
                    
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                {/* Service tabs */}
                                <div className="flex gap-1 mb-8">
                                    {services.map((service, index) => (
                                        <button
                                            key={service.id}
                                            onClick={() => setActiveService(index)}
                                            className={`px-4 py-2 text-xs font-bold tracking-wider transition-all ${
                                                activeService === index
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-slate-800/50 text-slate-400 hover:bg-slate-800"
                                            }`}
                                        >
                                            {service.label}
                                        </button>
                                    ))}
                                </div>
                                
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white leading-tight whitespace-pre-line">
                                    {services[activeService].title}
                                </h1>
                                <p className="text-lg text-slate-400 mb-8 leading-relaxed whitespace-pre-line">
                                    {services[activeService].description}
                                </p>
                                <Link 
                                    href={services[activeService].link}
                                    className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors"
                                >
                                    サービスを詳しく見る
                                    <span className="text-xl">→</span>
                                </Link>
                            </div>
                            
                            {/* Service indicator */}
                            <div className="hidden lg:flex justify-end">
                                <div className="text-right">
                                    <div className="text-[12rem] font-black text-blue-500/10 leading-none">
                                        0{activeService + 1}
                                    </div>
                                    <div className="text-slate-500 font-medium -mt-8">
                                        / 0{services.length}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Service navigation dots */}
                        <div className="flex gap-2 mt-12">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveService(index)}
                                    className={`h-1 transition-all ${
                                        activeService === index
                                            ? "w-12 bg-blue-500"
                                            : "w-6 bg-slate-700 hover:bg-slate-600"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* News Section */}
                <section className="py-16 border-t border-slate-800">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-black tracking-tight text-white">NEWS</h2>
                            <Link href="/business/news" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                                ALL →
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {news.map((item, index) => (
                                <Link 
                                    key={index}
                                    href="#"
                                    className="group p-4 bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs text-blue-400 font-medium">{item.category}</span>
                                        <span className="text-xs text-slate-500">{item.date}</span>
                                    </div>
                                    <p className="text-sm text-slate-300 group-hover:text-white transition-colors line-clamp-2">
                                        {item.title}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Section - Numbers showcase like Nyle */}
                <section className="py-24 border-t border-slate-800 bg-slate-900/30 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-black tracking-tight text-white mb-4">ABOUT US</h2>
                        </div>
                        
                        {/* Scrolling text effect */}
                        <div className="relative mb-16 overflow-hidden">
                            <div className="flex whitespace-nowrap animate-scroll">
                                <span className="text-6xl md:text-8xl font-black text-slate-800/50 mx-8">
                                    DIGITAL TRANSFORMATION PARTNER
                                </span>
                                <span className="text-6xl md:text-8xl font-black text-slate-800/50 mx-8">
                                    DIGITAL TRANSFORMATION PARTNER
                                </span>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <div className="text-center">
                                <div className="text-6xl md:text-7xl font-black text-blue-500 mb-2">50<span className="text-3xl">+</span></div>
                                <p className="text-slate-400">支援企業数</p>
                            </div>
                            <div className="text-center">
                                <div className="text-6xl md:text-7xl font-black text-blue-500 mb-2">98<span className="text-3xl">%</span></div>
                                <p className="text-slate-400">顧客満足度</p>
                            </div>
                            <div className="text-center">
                                <div className="text-6xl md:text-7xl font-black text-blue-500 mb-2">200<span className="text-3xl">+</span></div>
                                <p className="text-slate-400">制作実績</p>
                            </div>
                        </div>

                        {/* Mission statement */}
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
                                私たちは、<span className="text-blue-400 font-bold">テクノロジーの力</span>で<br />
                                あらゆるビジネスの<span className="text-blue-400 font-bold">デジタル変革</span>を支援します。
                            </p>
                            <div className="flex justify-center gap-4">
                                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800" asChild>
                                    <Link href="/business/services">事業紹介</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pick Up Section */}
                <section className="py-24 border-t border-slate-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-black tracking-tight text-white mb-12">PICK UP</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {pickups.map((item, index) => (
                                <Link 
                                    key={index}
                                    href="#"
                                    className="group"
                                >
                                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 mb-4 flex items-center justify-center relative overflow-hidden">
                                        <span className="text-6xl font-black text-slate-700/50">0{index + 1}</span>
                                        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors" />
                                    </div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs text-blue-400 font-medium">{item.category}</span>
                                        <span className="text-xs text-slate-500">{item.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="py-24 border-t border-slate-800 bg-slate-900/30">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <div className="text-blue-400 font-bold tracking-wider text-sm mb-2">TECHNOLOGIES</div>
                                <h2 className="text-3xl font-black tracking-tight text-white">取り扱い技術</h2>
                            </div>
                            <Link href="/business/technologies" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                                ALL →
                            </Link>
                        </div>
                        
                        {/* Tech categories */}
                        <div className="grid md:grid-cols-5 gap-4 mb-12">
                            {[
                                { label: "フロントエンド", count: 4, color: "blue" },
                                { label: "バックエンド", count: 3, color: "green" },
                                { label: "インフラ", count: 3, color: "purple" },
                                { label: "開発ツール", count: 2, color: "orange" },
                                { label: "CMS", count: 3, color: "pink" },
                            ].map((cat, index) => (
                                <div key={index} className="p-4 bg-slate-800/50 border border-slate-700 text-center">
                                    <div className="text-white font-bold mb-1">{cat.label}</div>
                                    <div className="text-slate-500 text-sm">{cat.count} technologies</div>
                                </div>
                            ))}
                        </div>

                        {/* Featured techs */}
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                            {[
                                { icon: "⚛️", name: "React", slug: "react" },
                                { icon: "▲", name: "Next.js", slug: "nextjs" },
                                { icon: "📘", name: "TypeScript", slug: "typescript" },
                                { icon: "🟢", name: "Node.js", slug: "nodejs" },
                                { icon: "☁️", name: "AWS", slug: "aws" },
                                { icon: "🐳", name: "Docker", slug: "docker" },
                            ].map((tech, index) => (
                                <Link 
                                    key={index}
                                    href={`/business/technologies/${tech.slug}`}
                                    className="group p-4 bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all text-center"
                                >
                                    <span className="text-3xl block mb-2">{tech.icon}</span>
                                    <span className="text-sm text-slate-300 group-hover:text-blue-400 transition-colors">{tech.name}</span>
                                </Link>
                            ))}
                        </div>
                        
                        <div className="text-center mt-8">
                            <Link 
                                href="/business/technologies"
                                className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors"
                            >
                                すべての技術を見る
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Services Grid - Card style */}
                <section className="py-24 border-t border-slate-800">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            <Link 
                                href="/business/services"
                                className="group p-8 bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all"
                            >
                                <div className="text-blue-400 font-bold tracking-wider text-sm mb-4">SERVICE</div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    事業内容・サービス紹介
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    コーディング代行、DXコンサルティング、Web制作・開発など、<br />
                                    私たちが提供するサービスをご紹介しています。
                                </p>
                                <span className="text-blue-400 font-medium">詳しく見る →</span>
                            </Link>
                            <Link 
                                href="/business/works"
                                className="group p-8 bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all"
                            >
                                <div className="text-blue-400 font-bold tracking-wider text-sm mb-4">WORKS</div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    制作実績
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    これまでに手がけたプロジェクトの一部をご紹介。<br />
                                    様々な業界・規模のお客様を支援してきました。
                                </p>
                                <span className="text-blue-400 font-medium">詳しく見る →</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Contact CTA - Large */}
                <section className="py-24 border-t border-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/50 to-slate-950" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
                                お問い合わせ
                            </h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                コーディング代行、DXコンサルティング、Web制作のご相談は<br />
                                お気軽にお問い合わせください。
                            </p>
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-12" asChild>
                                <Link href="/business/contact">問い合わせする</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Owned Products Section */}
                <section className="py-24 border-t border-slate-800">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="text-blue-400 font-bold tracking-wider text-sm mb-2">OWNED PRODUCTS & MEDIA</div>
                            <h2 className="text-4xl font-black tracking-tight text-white">自社プロダクト・運営メディア</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* K-zoku */}
                            <div className="group relative bg-slate-900 border border-slate-800 p-8 hover:border-blue-500/50 transition-all">
                                <div className="text-blue-500 font-bold mb-4 tracking-widest uppercase text-xs">Self-Developed Application</div>
                                <h3 className="text-3xl font-bold text-white mb-4">K-zoku</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    意志に頼らず「仕組み」で解決する、新感覚の努力記録アプリ。
                                    自社開発で培った高度なデータ分析と行動経済学の知見を、受託開発にも還元しています。
                                </p>
                                <Link href="https://k-zoku.com/" target="_blank" className="text-blue-400 font-medium hover:underline flex items-center gap-2">
                                    公式サイトを見る <span className="text-xl">→</span>
                                </Link>
                            </div>

                            {/* 個人開発研究所 */}
                            <div className="group relative bg-slate-900 border border-slate-800 p-8 hover:border-blue-500/50 transition-all">
                                <div className="text-blue-500 font-bold mb-4 tracking-widest uppercase text-xs">Owned Media</div>
                                <h3 className="text-3xl font-bold text-white mb-4">個人開発研究所</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    エンジニアの挑戦を支える技術メディア。
                                    最新の技術スタックからマネタイズ戦略まで、自社での検証結果に基づいた「本物の知見」を発信しています。
                                </p>
                                <Link href="https://personal-dev.net/" target="_blank" className="text-blue-400 font-medium hover:underline flex items-center gap-2">
                                    メディアを見る <span className="text-xl">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recruit Section */}
                <section className="py-24 border-t border-slate-800 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="text-blue-400 font-bold tracking-wider text-sm mb-4">RECRUIT</div>
                                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-6 leading-tight">
                                    一緒に、<br />
                                    未来を作りませんか。
                                </h2>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    私たちは、テクノロジーでビジネスを変革する仲間を募集しています。<br />
                                    経験やスキルよりも、成長意欲とチャレンジ精神を重視します。
                                </p>
                                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800" asChild>
                                    <Link href="/business/recruit">採用情報を見る</Link>
                                </Button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { role: "エンジニア", desc: "フロントエンド・バックエンド" },
                                    { role: "コンサルタント", desc: "DX推進・業務改善" },
                                    { role: "ディレクター", desc: "プロジェクト管理" },
                                    { role: "デザイナー", desc: "UI/UXデザイン" },
                                ].map((job, index) => (
                                    <div key={index} className="p-4 bg-slate-800/50 border border-slate-700">
                                        <div className="text-white font-bold mb-1">{job.role}</div>
                                        <div className="text-slate-500 text-xs">{job.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <BusinessFooter />
            
            {/* CSS for scroll animation */}
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
            `}</style>
        </>
    )
}
