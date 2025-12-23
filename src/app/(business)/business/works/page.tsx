import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const works = [
    {
        id: 1,
        title: "株式会社テックスタート",
        category: "コーポレートサイト",
        description: "IT企業のブランディングを強化するコーポレートサイト。モダンなデザインと高速なパフォーマンスを両立。",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        results: "問い合わせ数 150%増加",
    },
    {
        id: 2,
        title: "美容クリニック様",
        category: "LP制作",
        description: "新規顧客獲得のためのLP制作。ターゲット分析から導線設計まで一貫して対応。",
        technologies: ["React", "GSAP", "Figma"],
        results: "CVR 2.5倍に向上",
    },
    {
        id: 3,
        title: "オーガニック食品ECサイト",
        category: "ECサイト",
        description: "Shopifyをベースにしたオーガニック食品のECサイト。定期購入機能も実装。",
        technologies: ["Shopify", "Liquid", "JavaScript"],
        results: "月商 300万円達成",
    },
    {
        id: 4,
        title: "人材紹介サービス",
        category: "Webアプリケーション",
        description: "求職者と企業をマッチングするWebアプリケーション。管理画面も含めてフルスクラッチで開発。",
        technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
        results: "登録企業 500社突破",
    },
    {
        id: 5,
        title: "スタートアップ企業",
        category: "コーポレートサイト",
        description: "資金調達フェーズのスタートアップ向けに、投資家にアピールするコーポレートサイトを制作。",
        technologies: ["Next.js", "Framer Motion", "Vercel"],
        results: "シリーズA調達に貢献",
    },
    {
        id: 6,
        title: "オンラインスクール",
        category: "LP制作",
        description: "プログラミングスクールの集客LP。説明会予約へのCVを最大化する設計。",
        technologies: ["React", "TypeScript", "Google Tag Manager"],
        results: "説明会予約数 200%増",
    },
]

export default function WorksPage() {
    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen pt-20">
                {/* Hero */}
                <section className="py-24 border-b border-slate-800">
                    <div className="container mx-auto px-4">
                        <div className="text-blue-400 font-medium mb-2 tracking-wider">WORKS</div>
                        <h1 className="text-5xl font-black tracking-tight text-white mb-6">
                            制作実績
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl">
                            これまでに手がけたプロジェクトの一部をご紹介します。
                        </p>
                    </div>
                </section>

                {/* Works Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            {works.map((work) => (
                                <div 
                                    key={work.id}
                                    className="bg-slate-900 border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-colors group"
                                >
                                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                        <span className="text-4xl font-black text-slate-700">0{work.id}</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-blue-400 text-sm font-medium mb-2">{work.category}</div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                            {work.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                            {work.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {work.technologies.map((tech, index) => (
                                                <span 
                                                    key={index}
                                                    className="px-2 py-1 bg-slate-800 text-slate-400 text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="border-t border-slate-800 pt-4">
                                            <div className="text-slate-500 text-xs mb-1">成果</div>
                                            <div className="text-blue-400 font-bold">{work.results}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 border-t border-slate-800 bg-slate-900/50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-black tracking-tight text-white mb-4">
                            次はあなたのプロジェクトを
                        </h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            貴社のビジネス課題に合わせた最適なソリューションをご提案いたします。
                        </p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-12" asChild>
                            <Link href="/business/contact">プロジェクトを相談する</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <BusinessFooter />
        </>
    )
}

