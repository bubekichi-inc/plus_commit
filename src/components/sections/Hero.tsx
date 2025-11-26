import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <h2 className="text-lg md:text-xl font-medium text-zinc-400 mb-6">
                    IT転職・独立・起業を目指している方向けの<br className="md:hidden" />スパルタ学習管理サービス
                </h2>

                <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                        プラスコミット
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    あなたの本気にコミットする。<br />
                    逃げ場のない環境で、確実に目標を達成しませんか？
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" asChild className="w-full sm:w-auto">
                        <Link href="#pricing">今すぐ申し込む</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
