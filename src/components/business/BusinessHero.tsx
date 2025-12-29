"use client"

import { useState } from "react"
import Link from "next/link"

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

export function BusinessHero() {
    const [activeService, setActiveService] = useState(0)

    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
            
            {/* Animated background elements */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-zinc-400/5 rounded-full blur-3xl" />
            
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
                                            ? "bg-white text-black"
                                            : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800"
                                    }`}
                                >
                                    {service.label}
                                </button>
                            ))}
                        </div>
                        
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            <span className="text-white text-sm font-bold tracking-wider">1億総エンジニア社会の実現へ</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white leading-tight whitespace-pre-line">
                            {services[activeService].title}
                        </h1>
                        <p className="text-lg text-zinc-400 mb-8 leading-relaxed whitespace-pre-line">
                            {services[activeService].description}
                        </p>
                        <Link 
                            href={services[activeService].link}
                            className="inline-flex items-center gap-2 text-white font-bold hover:text-zinc-300 transition-colors"
                        >
                            サービスを詳しく見る
                            <span className="text-xl">→</span>
                        </Link>
                    </div>
                    
                    {/* Service indicator */}
                    <div className="hidden lg:flex justify-end">
                        <div className="text-right">
                            <div className="text-[12rem] font-black text-white/5 leading-none">
                                0{activeService + 1}
                            </div>
                            <div className="text-zinc-500 font-medium -mt-8">
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
                                    ? "w-12 bg-white"
                                    : "w-6 bg-zinc-800 hover:bg-zinc-700"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

