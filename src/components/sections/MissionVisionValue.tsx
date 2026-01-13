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
        <section ref={sectionRef} className="py-32 bg-zinc-50 border-t border-zinc-100 overflow-hidden relative">
            {/* Background noise/texture if needed, kept simple for now */}

            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col gap-24 md:gap-32">

                    {/* MISSION */}
                    <div ref={missionRef} className="flex flex-col md:flex-row md:items-start gap-8 md:gap-24 opacity-0">
                        <div className="md:w-1/4 shrink-0">
                            <h2 className="text-3xl md:text-4xl font-black tracking-wider text-black">MISSION</h2>
                        </div>
                        <div className="md:w-3/4">
                            <div className="mb-6">
                                <span className="text-sm font-bold text-zinc-900 tracking-wider block mb-4">社会的使命</span>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-8">
                                    数値改善にコミットし、<br />ビジネスの成長を加速させる。
                                </h3>
                                <p className="text-black font-medium leading-relaxed text-lg max-w-2xl">
                                    プラスコミットは、単なる制作・開発会社ではありません。<br />
                                    私たちはテクノロジーの力を駆使して企業の課題を本質から解決し、売上や効率といった確かな「成果」を生み出すことで、顧客企業のビジネス、ひいては社会経済全体を前進させる原動力となります。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* VISION */}
                    <div ref={visionRef} className="flex flex-col md:flex-row md:items-start gap-8 md:gap-24 opacity-0">
                        <div className="md:w-1/4 shrink-0">
                            <h2 className="text-3xl md:text-4xl font-black tracking-wider text-black">VISION</h2>
                        </div>
                        <div className="md:w-3/4">
                            <div className="mb-6">
                                <span className="text-sm font-bold text-zinc-900 tracking-wider block mb-4">中長期的な理想像</span>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-8">
                                    テクノロジーの力で、<br />すべての企業のポテンシャルを<br />解き放つ未来。
                                </h3>
                                <div className="space-y-6 text-black font-medium leading-relaxed text-lg max-w-2xl">
                                    <p>
                                        日本には、まだ本来の力を発揮できていない素晴らしい企業や事業が数多く存在します。
                                    </p>
                                    <p>
                                        私たちは、本質的なDX（デジタルトランスフォーメーション）の推進を通じて、テクノロジーが事業の障壁ではなく強力な武器となる世界を実現し、あらゆる企業が持つ可能性を最大限に解き放つ未来を創ります。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VALUE */}
                    <div ref={valueRef} className="flex flex-col md:flex-row md:items-start gap-8 md:gap-24 opacity-0">
                        <div className="md:w-1/4 shrink-0">
                            <h2 className="text-3xl md:text-4xl font-black tracking-wider text-black">VALUE</h2>
                        </div>
                        <div className="md:w-3/4">
                            <div className="mb-16">
                                <span className="text-sm font-bold text-zinc-900 tracking-wider block mb-4">行動指針</span>
                                <p className="text-black font-medium leading-relaxed text-lg mb-12">
                                    プラスコミットでは、ミッションの実現のために、私たちが大切にする独自の価値観を行動指針として定めています。
                                </p>

                                <div className="space-y-20">
                                    {/* Value Item 1 */}
                                    <div>
                                        <h4 className="text-4xl md:text-6xl font-black text-primary-500 mb-6 tracking-tight leading-none break-words">
                                            OBSESS OVER RESULTS
                                        </h4>
                                        <h5 className="text-xl md:text-2xl font-bold text-black mb-6">
                                            数字から目をそらさず、成果で語ろう
                                        </h5>
                                        <div className="text-black font-medium leading-relaxed space-y-2">
                                            <p>私たちの仕事は、「作る」ことではなく「事業を伸ばす」ことだ。</p>
                                            <p>それがビジネスにどう貢献したか、数字という客観的事実に向き合う勇気を持とう。</p>
                                            <p>プロフェッショナルとして、常に期待を超える「プラス」の成果にコミットし続ける。</p>
                                        </div>
                                    </div>

                                    {/* Value Item 2 */}
                                    <div>
                                        <h4 className="text-4xl md:text-6xl font-black text-primary-500 mb-6 tracking-tight leading-none break-words">
                                            TECHNOLOGY AS A MEANS
                                        </h4>
                                        <h5 className="text-xl md:text-2xl font-bold text-black mb-6">
                                            最先端の技術を、最適な武器に変える
                                        </h5>
                                        <div className="text-black font-medium leading-relaxed space-y-2">
                                            <p>モダンな技術を追求するのは、流行だからではない。</p>
                                            <p>それがクライアントの事業成長を最速で実現するための「手段」だからだ。</p>
                                            <p>常に学び続け、技術の本質を見極め、ビジネスの現場で使いこなすエンジニアリングを目指そう。</p>
                                        </div>
                                    </div>

                                    {/* Value Item 3 */}
                                    <div>
                                        <h4 className="text-4xl md:text-6xl font-black text-primary-500 mb-6 tracking-tight leading-none break-words">
                                            RESPECT THE INDIVIDUAL,<br className="hidden md:block" /> BUILD TOGETHER
                                        </h4>
                                        <h5 className="text-xl md:text-2xl font-bold text-black mb-6">
                                            「個」を磨き、「共」に創る
                                        </h5>
                                        <div className="text-black font-medium leading-relaxed space-y-2">
                                            <p>わたしたちは、自律したプロフェッショナルの集団だ。</p>
                                            <p>一人ひとりが自身のスキルと市場価値を高める挑戦を尊重しよう。</p>
                                            <p>そして、互いの知見をオープンに共有し、フラットに議論し、助け合うことで、一人では到達できない高みを目指す最強のチームであろう。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
