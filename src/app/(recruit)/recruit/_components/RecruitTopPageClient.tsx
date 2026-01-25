"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"

const RecruitAnimation = dynamic(
    () => import("@/components/3d/RecruitAnimation").then(m => ({ default: m.RecruitAnimation })),
    { ssr: false }
)

gsap.registerPlugin(ScrollTrigger)

export default function RecruitTopPageClient() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const missionRef = useRef<HTMLDivElement>(null)
    const cultureRef = useRef<HTMLDivElement>(null)

    const cultures = [
        {
            subtitle: "リモートワーク可",
            description: "フルリモート勤務が可能。全国どこからでも働けます。",
        },
        {
            subtitle: "フレックスタイム",
            description: "コアタイムなし。自分のペースで働けます。",
        },
        {
            subtitle: "成長支援",
            description: "書籍購入補助、勉強会参加支援など、学びを全力でサポートします。",
        },
    ]

    useGSAP(() => {
        const section = sectionRef.current
        const mission = missionRef.current
        const culture = cultureRef.current

        if (!section || !mission || !culture) return

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
            .fromTo(culture,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.6"
            )

    }, { scope: sectionRef })

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
                {/* 3D Background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <RecruitAnimation />
                </div>

                {/* Subtle Background Accents */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#008CFF]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF9D48]/5 rounded-full blur-3xl" />

                {/* Content */}
                <div className="container mx-auto px-6 relative z-10 py-20 md:py-5">
                    <div className="max-w-3xl">
                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#242422] mb-8 leading-[1.3] tracking-tight animate-fade-in-up opacity-0 animation-delay-300">
                            技術で、未来を<br />
                            <span className="inline-flex items-baseline gap-2">
                                <span className="text-[#008CFF]">共に創る</span>
                                <span className="text-xl sm:text-4xl text-[#242422] font-semibold">仲間を</span>
                            </span>
                            <br />
                            <span className="text-[#FF9D48]">募集</span>
                        </h1>

                        {/* Description */}
                        <p className="text-[#666666] text-sm md:text-base leading-[1.8] max-w-xl mb-10 animate-fade-in-up opacity-0 animation-delay-500">
                            プラスコミットは、確かな技術力と誠実さで、<br className="hidden md:block" />
                            お客様のビジネスを数字で変えていくDXカンパニーです。<br className="hidden md:block" />
                            私たちと一緒に、新しい価値を生み出しませんか？
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up opacity-0 animation-delay-700">
                            <Link
                                href="/recruit/casual"
                                className="btn-arrow inline-flex h-14 items-center justify-center rounded-[5px] bg-[#242422] px-10 text-sm font-medium text-white hover:opacity-80 transition-opacity"
                            >
                                カジュアル面談に申し込む
                                <ArrowRight className="w-4 h-4 ml-3" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values Section */}
            <section ref={sectionRef} className="py-20 md:py-24 bg-[#1a1a1a] text-white border-t border-white/10 overflow-hidden relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col gap-16 md:gap-20">

                        <div ref={missionRef} className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 opacity-0">
                            <div className="md:w-1/4 shrink-0">
                                <h2 className="text-xl md:text-2xl font-black tracking-[0.4em]">MISSION</h2>
                            </div>
                            <div className="md:w-3/4">
                                <div className="space-y-4">
                                    <span className="text-xs font-semibold text-white/70 tracking-[0.3em] block">私たちのミッション</span>
                                    <h3 className="text-xl md:text-2xl font-bold leading-relaxed">
                                        数値改善にコミットし、ビジネスの成長を加速させる。
                                    </h3>
                                    <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">
                                        プラスコミットは、単なる制作・開発会社ではありません。私たちはテクノロジーの力を駆使して企業の課題を本質から解決し、売上や効率といった確かな「成果」を生み出すことで、顧客企業のビジネス、ひいては社会経済全体を前進させる原動力となります。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div ref={cultureRef} className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 opacity-0">
                            <div className="md:w-1/4 shrink-0">
                                <h2 className="text-xl md:text-2xl font-black tracking-[0.4em]">CULTURE</h2>
                            </div>
                            <div className="md:w-3/4">
                                <div className="space-y-4">
                                    <span className="text-xs font-semibold text-white/70 tracking-[0.3em] block">働く環境</span>
                                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                                        自由と責任を両立した、成長できる環境を用意しています。
                                    </p>

                                    <div className="grid gap-6 md:gap-8 md:grid-cols-3">
                                        {cultures.map((culture) => (
                                            <div key={culture.subtitle} className="bg-white/5 rounded-sm border border-white/5 p-5 flex flex-col gap-3">
                                                <h4 className="text-base font-semibold text-white">
                                                    {culture.subtitle}
                                                </h4>
                                                <p className="text-sm text-white/80 leading-relaxed">
                                                    {culture.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#242422] mb-6">
                        まずは気軽にお話ししませんか？
                    </h2>
                    <p className="text-[#666666] text-sm md:text-base leading-[1.8] mb-10">
                        カジュアル面談では、プラスコミットの雰囲気や働き方について<br className="hidden md:block" />
                        気軽にお話しできます。履歴書不要、私服でOKです。
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/recruit/casual"
                            className="btn-arrow inline-flex h-14 items-center justify-center rounded-[5px] bg-[#242422] px-10 text-sm font-medium text-white hover:opacity-80 transition-opacity"
                        >
                            カジュアル面談に申し込む
                            <ArrowRight className="w-4 h-4 ml-3" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
