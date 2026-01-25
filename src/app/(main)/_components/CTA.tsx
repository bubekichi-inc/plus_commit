import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTA() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Contact Card */}
                    <div className="bg-blue-500 p-8 md:p-12 text-white rounded-[5px]">
                        <p className="text-sm text-white/70 mb-3 tracking-widest uppercase font-medium">
                            Contact
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                            お問い合わせ
                        </h2>
                        <p className="text-white/80 text-sm leading-[1.8] mb-8">
                            Web制作、システム開発など、<br />
                            お気軽にお問い合わせください。<br />
                            最適なプランをご提案いたします。
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-[5px] bg-white text-blue-500 text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                            お問い合わせ
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>

                    {/* Recruit Card */}
                    <div className="bg-gray-900 p-8 md:p-12 text-white rounded-[5px]">
                        <p className="text-sm text-white/50 mb-3 tracking-widest uppercase font-medium">
                            Recruit
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                            採用情報
                        </h2>
                        <p className="text-white/70 text-sm leading-[1.8] mb-8">
                            採用サイトで私たちの魅力を<br />
                            ご覧ください。<br />
                            みなさまのご応募お待ちしております。
                        </p>
                        <Link
                            href="/recruit"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-[5px] bg-white text-gray-900 text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                            採用情報を見る
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
