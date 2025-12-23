import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { technologies, getTechnologyBySlug, getRelatedTechnologies } from "@/lib/technologies"

export async function generateStaticParams() {
    return technologies.map((tech) => ({
        slug: tech.slug,
    }))
}

export default async function TechnologyDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const technology = getTechnologyBySlug(slug)

    if (!technology) {
        notFound()
    }

    const relatedTechs = getRelatedTechnologies(technology.relatedTech)

    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen pt-20">
                <section className="py-24 border-b border-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <Link 
                                href="/technologies"
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                取り扱い技術
                            </Link>
                            <span className="text-slate-600">/</span>
                            <span className="text-blue-400">{technology.categoryLabel}</span>
                        </div>
                        <div className="flex items-start gap-6">
                            <span className="text-7xl">{technology.icon}</span>
                            <div>
                                <div className="text-blue-400 font-bold tracking-wider text-sm mb-2">
                                    {technology.categoryLabel}
                                </div>
                                <h1 className="text-5xl font-black tracking-tight text-white mb-4">
                                    {technology.name}
                                </h1>
                                <p className="text-xl text-slate-400 max-w-2xl">
                                    {technology.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 border-b border-slate-800">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
                                    主な特徴
                                </h2>
                                <ul className="space-y-4">
                                    {technology.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                                                {index + 1}
                                            </span>
                                            <span className="text-slate-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
                                    活用シーン
                                </h2>
                                <ul className="space-y-4">
                                    {technology.useCases.map((useCase, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                            <span className="text-slate-300">{useCase}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 border-b border-slate-800 bg-slate-900/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">
                            {technology.name}での開発実績
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-900 border border-slate-800">
                                <div className="text-4xl font-black text-blue-500 mb-2">30+</div>
                                <p className="text-slate-400">プロジェクト実績</p>
                            </div>
                            <div className="p-6 bg-slate-900 border border-slate-800">
                                <div className="text-4xl font-black text-blue-500 mb-2">5年+</div>
                                <p className="text-slate-400">技術採用歴</p>
                            </div>
                            <div className="p-6 bg-slate-900 border border-slate-800">
                                <div className="text-4xl font-black text-blue-500 mb-2">98%</div>
                                <p className="text-slate-400">顧客満足度</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 border-b border-slate-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">
                            {technology.name}を活用したサービス
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link 
                                href="/services"
                                className="group p-6 bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all"
                            >
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    Web制作・開発
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    {technology.name}を活用したWebサイト・Webアプリケーションの開発を承ります。
                                </p>
                            </Link>
                            <Link 
                                href="/services"
                                className="group p-6 bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all"
                            >
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    コーディング代行
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    デザインカンプからの{technology.name}コーディングを代行いたします。
                                </p>
                            </Link>
                        </div>
                    </div>
                </section>

                {relatedTechs.length > 0 && (
                    <section className="py-16 border-b border-slate-800">
                        <div className="container mx-auto px-4">
                            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">
                                関連技術
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedTechs.map((tech) => (
                                    <Link 
                                        key={tech.slug}
                                        href={`/technologies/${tech.slug}`}
                                        className="group p-6 bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-3xl">{tech.icon}</span>
                                            <div>
                                                <div className="text-xs text-blue-400 font-medium">
                                                    {tech.categoryLabel}
                                                </div>
                                                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                                                    {tech.name}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-sm line-clamp-2">
                                            {tech.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-black tracking-tight text-white mb-4">
                            {technology.name}での開発をお考えですか？
                        </h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            プロジェクトの要件をお聞かせください。最適なソリューションをご提案いたします。
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-12" asChild>
                                <Link href="/contact">無料相談する</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800" asChild>
                                <Link href="/technologies">技術一覧に戻る</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <BusinessFooter />
        </>
    )
}

