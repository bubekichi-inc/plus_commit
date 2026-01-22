import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react"
import { Hero3D } from "@/components/3d/Hero3D"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#020617]">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-primary-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 mix-blend-screen animate-pulse-slow" />
                <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 mix-blend-screen" />
                <Hero3D />
            </div>

            <div className="container relative z-10 px-6 md:px-12 flex flex-col items-center text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-zinc-300 font-medium tracking-wide text-sm">
                        Premium Web & DX Consulting
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 leading-[0.95] animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
                    <span className="block text-white mb-2">Design the</span>
                    <span className="block text-gradient-primary">Future.</span>
                </h1>

                {/* Subtext */}
                <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-16 leading-relaxed font-light animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
                    確かな技術力とデザインで、<br className="md:hidden" />ビジネスの可能性を最大化する。<br />
                    <span className="text-white font-medium">エンジニアリング</span> × <span className="text-white font-medium">デザイン</span>で描く、新しい常識。
                </p>

                {/* CTA Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
                    <Button size="lg" asChild className="h-16 px-10 rounded-full bg-white text-black hover:bg-zinc-200 text-lg font-bold tracking-wide transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] border border-transparent">
                        <Link href="#contact">
                            Start Project
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="h-16 px-10 rounded-full border-zinc-700 text-white hover:bg-white/10 text-lg font-medium tracking-wide backdrop-blur-sm transition-all hover:border-zinc-500">
                        <Link href="#services">
                            View Services
                            <ChevronRight className="ml-1 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s' }}>
                <span className="text-zinc-500 text-xs tracking-[0.2em] uppercase">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-500 to-transparent" />
            </div>
        </section>
    )
}
