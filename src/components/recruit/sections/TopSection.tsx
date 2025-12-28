"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

type TopSectionProps = {
    onNavigate: (sectionId: string) => void
}

export function TopSection({ onNavigate }: TopSectionProps) {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-black to-black" />
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="relative z-10 text-center px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8"
                    >
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-emerald-400 text-sm font-medium">Now Hiring</span>
                    </motion.div>
                    
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-8">
                        <span className="block">1億総エンジニア</span>
                        <span className="block italic text-emerald-400">社会を創る。</span>
                    </h1>
                    
                    <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-12">
                        プラスコミットは、誰もが技術を武器に自由に生きられる社会を目指しています。<br className="hidden md:block" />
                        自ら考え、自ら形にする。そのマインドを持った仲間と共に、新しい未来を創り上げます。
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold px-8 py-6 text-lg rounded-full"
                            onClick={() => onNavigate("jobs")}
                        >
                            募集職種を見る
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
                            onClick={() => onNavigate("about")}
                        >
                            会社を知る
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                onClick={() => onNavigate("about")}
            >
                <ChevronDown className="w-8 h-8 text-white/30 animate-bounce" />
            </motion.button>
        </section>
    )
}


