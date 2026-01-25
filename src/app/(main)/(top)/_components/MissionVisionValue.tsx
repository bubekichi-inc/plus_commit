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

    const values = [
        {
            subtitle: "成果で語ろう",
            description: [
                "私たちの仕事は、『作る』ことではなく『事業を伸ばす』ことだ。",
            ],
        },
        {
            subtitle: "最先端の技術を武器に",
            description: [
                "常に学び続け、技術の本質を見極め、ビジネスの現場で使いこなすエンジニアリングを目指そう。",
            ],
        },
        {
            subtitle: "「個」を磨き、「共」に創る",
            description: [
                "一人ひとりが自身のスキルと市場価値を高める挑戦を尊重しよう。",
            ],
        },
    ]

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
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
            .fromTo(vision,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.6"
            )
            .fromTo(value,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.6"
            )

    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="py-20 md:py-24 bg-[var(--color-background-hero)] text-white border-t border-white/10 overflow-hidden relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col gap-16 md:gap-20">

                    <div ref={missionRef} className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 opacity-0">
                        <div className="md:w-1/4 shrink-0">
                            <h2 className="text-xl md:text-2xl font-black tracking-[0.4em]">MISSION</h2>
                        </div>
                        <div className="md:w-3/4">
                            <div className="space-y-4">
                                <span className="text-xs font-semibold text-white/70 tracking-[0.3em] block">社会的使命</span>
                                <h3 className="text-xl md:text-2xl font-bold leading-relaxed">
                                    数値改善にコミットし、ビジネスの成長を加速させる。
                                </h3>
                                <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">
                                    プラスコミットは、単なる制作・開発会社ではありません。私たちはテクノロジーの力を駆使して企業の課題を本質から解決し、売上や効率といった確かな「成果」を生み出すことで、顧客企業のビジネス、ひいては社会経済全体を前進させる原動力となります。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div ref={visionRef} className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 opacity-0">
                        <div className="md:w-1/4 shrink-0">
                            <h2 className="text-xl md:text-2xl font-black tracking-[0.4em]">VISION</h2>
                        </div>
                        <div className="md:w-3/4">
                            <div className="space-y-4">
                                <span className="text-xs font-semibold text-white/70 tracking-[0.3em] block">中長期的な理想像</span>
                                <h3 className="text-xl md:text-2xl font-bold leading-relaxed">
                                    テクノロジーの力で、すべての企業のポテンシャルを解き放つ未来。
                                </h3>
                                <div className="space-y-3 text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">
                                    <p>日本には、まだ本来の力を発揮できていない素晴らしい企業や事業が数多く存在します。</p>
                                    <p>私たちは、本質的なDXの推進を通じて、テクノロジーが事業の障壁ではなく強力な武器となる世界を実現し、あらゆる企業が持つ可能性を最大限に解き放つ未来を創ります。</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={valueRef} className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 opacity-0">
                        <div className="md:w-1/4 shrink-0">
                            <h2 className="text-xl md:text-2xl font-black tracking-[0.4em]">VALUE</h2>
                        </div>
                        <div className="md:w-3/4">
                            <div className="space-y-4">
                                <span className="text-xs font-semibold text-white/70 tracking-[0.3em] block">行動指針</span>
                                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                                    プラスコミットでは、ミッションの実現のために、私たちが大切にする独自の価値観を行動指針として定めています。
                                </p>

                                <div className="grid gap-6 md:gap-8 md:grid-cols-3">
                                    {values.map((value) => (
                                        <div key={value.subtitle} className="bg-white/5 rounded-sm border border-white/5 p-5 flex flex-col gap-3">
                                            <h4 className="text-base font-semibold text-white">
                                                {value.subtitle}
                                            </h4>
                                            <div className="text-sm text-white/80 leading-relaxed space-y-2">
                                                {value.description.map((sentence) => (
                                                    <p key={sentence}>{sentence}</p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
