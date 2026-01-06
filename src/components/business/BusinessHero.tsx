"use client"

import Link from "next/link"

export function BusinessHero() {
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
                        <div className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-2 mb-8">
                            <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                            <span className="text-black text-sm font-bold tracking-wider">1億総エンジニア社会の実現へ</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-black leading-tight">
                            テクノロジーで、<br />
                            ビジネスを革新する。
                        </h1>
                        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                            株式会社PLUS-COMMITは、コーディング代行、DXコンサルティング、<br />
                            Web制作・開発を通じて、企業のデジタル変革を支援します。<br />
                            最新のテクノロジーと確かな技術力で、ビジネス課題を解決します。
                        </p>
                        <Link 
                            href="/contact"
                            className="inline-flex items-center gap-2 text-black font-bold hover:text-zinc-600 transition-colors"
                        >
                            お問い合わせ
                            <span className="text-xl">→</span>
                        </Link>
                    </div>
                    
                    {/* Right side - empty for now */}
                    <div className="hidden lg:block">
                    </div>
                </div>
            </div>
        </section>
    )
}

