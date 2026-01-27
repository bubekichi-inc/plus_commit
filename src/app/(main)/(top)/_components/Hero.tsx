"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"

const MetalAnimation = dynamic(
    () => import("@/components/3d/MetalAnimation").then(m => ({ default: m.MetalAnimation })),
    { ssr: false }
)


export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <MetalAnimation />
            </div>

            {/* Subtle Background Accents */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(var(--color-primary-500-rgb), 0.05)" }}
            />
            <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl md:h-[0px]"
                style={{ backgroundColor: "rgba(var(--color-accent-rgb), 0.05)" }}
            />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 pt-10 md:py-5">
                <div className="max-w-3xl">

                    {/* Main Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-8 leading-[1.3] tracking-tight animate-fade-in-up opacity-0 animation-delay-300">
                        プラスコミットは、<br />
                        <span className="inline-flex items-baseline gap-2">
                            <span className="text-[var(--color-primary-500)]">数字</span>
                            <span className="text-xl sm:text-4xl text-[var(--color-text-primary)] font-semibold">に</span>
                        </span>
                        <span className="mx-2"></span>
                        <span className="inline-flex items-baseline gap-2">
                            <span className="text-[var(--color-accent)]">コミット</span>
                            <span className="text-xl sm:text-4xl text-[var(--color-text-primary)] font-semibold">する</span>
                        </span>
                        <br />DXカンパニーです
                    </h1>

                    {/* Description */}
                    <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-[1.8] max-w-xl mb-10 animate-fade-in-up opacity-0 animation-delay-500">
                        テクノロジーが急速に進化し、価値観が多様化する時代。<br className="hidden md:block" />
                        私たちは、技術力と誠実さを掛け合わせ、<br className="hidden md:block" />
                        お客様と共に未来を創り出す「共創」のパートナーです。
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up opacity-0 animation-delay-700">
                        <Link
                            href="/contact"
                            className="btn-arrow inline-flex h-14 items-center justify-center rounded-[5px] bg-[var(--color-background-dark)] px-10 text-sm font-medium text-white hover:opacity-80 transition-opacity"
                        >
                            お問い合わせ
                            <ArrowRight className="w-4 h-4 ml-3" />
                        </Link>
                        <Link
                            href="/works"
                            className="inline-flex h-14 items-center justify-center rounded-[5px] border border-[var(--color-border)] bg-white px-10 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-background-dark)] hover:text-white hover:border-[var(--color-background-dark)] transition-all"
                        >
                            導入事例を見る
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
