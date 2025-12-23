import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { technologies, categories } from "@/lib/technologies"

export default function TechnologiesPage() {
    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen pt-20">
                {/* Hero */}
                <section className="py-24 border-b border-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-blue-400 font-bold tracking-wider text-sm mb-4">TECHNOLOGIES</div>
                        <h1 className="text-5xl font-black tracking-tight text-white mb-6">
                            取り扱い技術
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl">
                            最新のテクノロジーを活用し、お客様のビジネス課題に最適なソリューションを提供します。
                        </p>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="py-8 border-b border-slate-800 sticky top-20 bg-slate-950/95 backdrop-blur-md z-40">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap gap-2">
                            <Link 
                                href="#all" 
                                className="px-4 py-2 bg-blue-500 text-white text-sm font-medium"
                            >
                                すべて
                            </Link>
                            {categories.map((cat) => (
                                <Link 
                                    key={cat.id}
                                    href={`#${cat.id}`}
                                    className="px-4 py-2 bg-slate-800 text-slate-400 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors"
                                >
                                    {cat.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technologies by Category */}
                {categories.map((category) => {
                    const categoryTechs = technologies.filter(t => t.category === category.id)
                    return (
                        <section key={category.id} id={category.id} className="py-16 border-b border-slate-800">
                            <div className="container mx-auto px-4">
                                <div className="flex items-center gap-4 mb-8">
                                    <h2 className="text-2xl font-black tracking-tight text-white">
                                        {category.label}
                                    </h2>
                                    <span className="text-sm text-slate-500">
                                        {categoryTechs.length} technologies
                                    </span>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categoryTechs.map((tech) => (
                                        <Link 
                                            key={tech.slug}
                                            href={`/business/technologies/${tech.slug}`}
                                            className="group p-6 bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all"
                                        >
                                            <div className="flex items-start gap-4 mb-4">
                                                <span className="text-4xl">{tech.icon}</span>
                                                <div>
                                                    <div className="text-xs text-blue-400 font-medium mb-1">
                                                        {tech.categoryLabel}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                                        {tech.name}
                                                    </h3>
                                                </div>
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                                {tech.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {tech.features.slice(0, 3).map((feature, i) => (
                                                    <span 
                                                        key={i}
                                                        className="px-2 py-1 bg-slate-800 text-slate-400 text-xs"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )
                })}

                {/* CTA */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-black tracking-tight text-white mb-4">
                            技術選定からご相談ください
                        </h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            プロジェクトの要件に最適な技術スタックをご提案いたします。
                        </p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-12" asChild>
                            <Link href="/business/contact">無料相談する</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <BusinessFooter />
        </>
    )
}

