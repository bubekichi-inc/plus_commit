import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-zinc-950">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-900/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/50 mb-8 animate-fade-in-up shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                    <Zap className="w-4 h-4 text-primary-500 fill-primary-500" />
                    <span className="text-primary-400 font-bold uppercase tracking-wider text-sm md:text-base">
                        No Pain, No Gain
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter text-white italic uppercase leading-[0.9]">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                        COMMIT TO
                    </span>
                    <span className="block text-primary-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.5)]">
                        YOUR GROWTH
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                    ストイックなエンジニアが<br className="md:hidden" />あなたのモチベーションの炎を復活させます。<br />
                    <span className="text-primary-500 font-black text-2xl">月額9,980円</span>で手に入れる、<br className="md:hidden" />最強の学習環境。
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button size="lg" asChild className="w-full sm:w-auto bg-primary-600 hover:bg-primary-500 text-white text-xl font-black italic px-12 py-8 rounded-none skew-x-[-10deg] shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] border-2 border-primary-400 transition-all duration-300 group">
                        <Link href="#pricing">
                            <span className="skew-x-[10deg] inline-flex items-center gap-2">
                                JOIN NOW
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </Button>
                    <p className="text-sm text-primary-500 font-bold uppercase tracking-widest border-b border-primary-500/30 pb-1">
                        1 Week Free Trial
                    </p>
                </div>
            </div>
        </section>
    )
}
