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
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-200/20 via-transparent to-transparent" />
            
            {/* Animated background elements */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-zinc-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-zinc-200/20 rounded-full blur-3xl" />
            
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
                                            ? "bg-black text-white"
                                            : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                                    }`}
                                >
                                    {service.label}
                                </button>
                            ))}
                        </div>
                        
                        <div className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-2 mb-8">
                            <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                            <span className="text-black text-sm font-bold tracking-wider">1億総エンジニア社会の実現へ</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-black leading-tight whitespace-pre-line">
                            {services[activeService].title}
                        </h1>
                        <p className="text-lg text-zinc-600 mb-8 leading-relaxed whitespace-pre-line">
                            {services[activeService].description}
                        </p>
                        <Link 
                            href={services[activeService].link}
                            className="inline-flex items-center gap-2 text-black font-bold hover:text-zinc-600 transition-colors"
                        >
                            サービスを詳しく見る
                            <span className="text-xl">→</span>
                        </Link>
                    </div>
                    
                    {/* Service indicator */}
                    <div className="hidden lg:flex justify-end">
                        <div className="text-right">
                            <div className="text-[12rem] font-black text-zinc-100 leading-none">
                                0{activeService + 1}
                            </div>
                            <div className="text-zinc-400 font-medium -mt-8">
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
                                    ? "w-12 bg-black"
                                    : "w-6 bg-zinc-200 hover:bg-zinc-300"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

