"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export function MissionVisionValue() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const missionRef = useRef<HTMLDivElement>(null)
    const visionRef = useRef<HTMLDivElement>(null)
    const valueRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const section = sectionRef.current
        const mission = missionRef.current
        const vision = visionRef.current
        const value = valueRef.current

        if (!section || !mission || !vision || !value) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 70%",
            }
        })

        tl.fromTo(mission,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
            .fromTo(vision,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.4"
            )
            .fromTo(value,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.4"
            )

    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="py-32 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto">

                    {/* Level 1: MISSION */}
                    <div ref={missionRef} className="w-full md:w-2/3 lg:w-1/2 opacity-0">
                        <div className="bg-white p-10 rounded-2xl border border-zinc-200 shadow-xl shadow-primary-500/5 text-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                            <div className="text-primary-600 font-black tracking-[0.2em] text-sm mb-4">MISSION</div>
                            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 leading-relaxed">
                                テクノロジーで、<br />
                                ビジネスの可能性を<br />
                                最大化する。
                            </h3>
                            <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                                最新技術とデザインの力で、顧客の課題を解決し、<br className="hidden md:block" />
                                事業成長を加速させるパートナーであり続けます。
                            </p>
                        </div>
                    </div>

                    {/* Level 2: VISION */}
                    <div ref={visionRef} className="w-full md:w-4/5 lg:w-3/4 opacity-0">
                        <div className="bg-white p-10 rounded-2xl border border-zinc-200 shadow-xl shadow-accent/5 text-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light"></div>
                            <div className="text-accent font-black tracking-[0.2em] text-sm mb-4">VISION</div>
                            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 leading-relaxed">
                                「1億総エンジニア社会」の実現へ。
                            </h3>
                            <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                                誰もがテクノロジーを自由に使いこなし、自らのアイデアを形にできる。<br className="hidden md:block" />
                                そんな創造性あふれる社会を目指します。
                            </p>
                        </div>
                    </div>

                    {/* Level 3: VALUE */}
                    <div ref={valueRef} className="w-full opacity-0">
                        <div className="bg-white p-10 rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-500/5 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-400 to-zinc-600"></div>
                            <div className="text-center mb-10">
                                <div className="text-zinc-500 font-black tracking-[0.2em] text-sm">VALUE</div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center px-4">
                                    <div className="text-xl font-black text-zinc-900 mb-3 group-hover:text-primary-600 transition-colors">User First</div>
                                    <p className="text-zinc-600 text-xs font-medium leading-relaxed">
                                        常にユーザーの視点に立ち、<br />
                                        本質的な価値を徹底的に追求する。
                                    </p>
                                </div>
                                <div className="text-center px-4 border-t md:border-t-0 md:border-l border-zinc-100 pt-6 md:pt-0">
                                    <div className="text-xl font-black text-zinc-900 mb-3 group-hover:text-primary-600 transition-colors">Professional</div>
                                    <p className="text-zinc-600 text-xs font-medium leading-relaxed">
                                        プロフェッショナルとして、<br />
                                        妥協のない最高品質を提供する。
                                    </p>
                                </div>
                                <div className="text-center px-4 border-t md:border-t-0 md:border-l border-zinc-100 pt-6 md:pt-0">
                                    <div className="text-xl font-black text-zinc-900 mb-3 group-hover:text-primary-600 transition-colors">Challenge</div>
                                    <p className="text-zinc-600 text-xs font-medium leading-relaxed">
                                        変化を恐れず、常に新しい<br />
                                        技術や手法に果敢に挑戦する。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
