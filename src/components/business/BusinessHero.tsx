import Link from "next/link"
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react"

export function BusinessHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
            {/* Ambient Background Effects (Light Theme) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-primary-100/40 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-3 bg-white border border-zinc-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] rounded-full pl-3 pr-5 py-2 mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
                        <span className="flex h-2.5 w-2.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                        </span>
                        <span className="text-zinc-500 text-xs font-bold tracking-wider">1億総エンジニア社会の実現へ</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-black leading-[1] animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
                        Design the<br />
                        <span className="text-gradient-primary">Future.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-600 mb-12 leading-relaxed font-medium max-w-2xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
                        テクノロジーとデザインの力で、<br className="md:hidden" />
                        ビジネスの可能性を最大化する。<br />
                        <span className="text-primary-600 font-bold">エンジニアリング</span> × <span className="text-accent font-bold">デザイン</span>で描く、新しい常識。
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary-500 text-white font-bold hover:bg-primary-600 hover:scale-105 transition-all duration-300 group shadow-lg shadow-primary-500/30"
                        >
                            Start Project
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/services"
                            className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-10 rounded-full border border-zinc-200 text-zinc-600 font-bold hover:bg-zinc-50 transition-colors"
                        >
                            View Services
                            <ChevronRight className="w-5 h-5 ml-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
