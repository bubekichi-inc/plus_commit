import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { technologies, categories } from "@/lib/technologies"

export default function TechnologiesPage() {
    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen pt-20 bg-black">
                <section className="py-24 border-b border-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-zinc-400 font-bold tracking-wider text-sm mb-4">TECHNOLOGIES</div>
                        <h1 className="text-5xl font-black tracking-tight text-white mb-6">
                            取り扱い技術
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl">
                            最新のテクノロジーを活用し、お客様のビジネス課題に最適なソリューションを提供します。
                        </p>
                    </div>
                </section>

                <section className="py-8 border-b border-zinc-800 sticky top-20 bg-black/95 backdrop-blur-md z-40">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap gap-2">
                            <Link 
                                href="#all" 
                                className="px-4 py-2 bg-white text-black text-sm font-bold"
                            >
                                すべて
                            </Link>
                            {categories.map((cat) => (
                                <Link 
                                    key={cat.id}
                                    href={`#${cat.id}`}
                                    className="px-4 py-2 bg-zinc-900 text-zinc-400 text-sm font-medium hover:bg-zinc-800 hover:text-white transition-colors"
                                >
                                    {cat.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {categories.map((category) => {
                    const categoryTechs = technologies.filter(t => t.category === category.id)
                    return (
                        <section key={category.id} id={category.id} className="py-16 border-b border-zinc-800">
                            <div className="container mx-auto px-4">
                                <div className="flex items-center gap-4 mb-8">
                                    <h2 className="text-2xl font-black tracking-tight text-white">
                                        {category.label}
                                    </h2>
                                    <span className="text-sm text-zinc-500">
                                        {categoryTechs.length} technologies
                                    </span>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categoryTechs.map((tech) => (
                                        <Link 
                                            key={tech.slug}
                                            href={`/technologies/${tech.slug}`}
                                            className="group p-6 bg-zinc-900 border border-zinc-800 hover:border-white/30 transition-all"
                                        >
                                            <div className="flex items-start gap-4 mb-4">
                                                <span className="text-4xl">{tech.icon}</span>
                                                <div>
                                                    <div className="text-xs text-zinc-400 font-medium mb-1">
                                                        {tech.categoryLabel}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white group-hover:text-zinc-300 transition-colors">
                                                        {tech.name}
                                                    </h3>
                                                </div>
                                            </div>
                                            <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                                {tech.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {tech.features.slice(0, 3).map((feature, i) => (
                                                    <span 
                                                        key={i}
                                                        className="px-2 py-1 bg-zinc-800 text-zinc-500 text-xs"
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

                <section className="py-24 bg-zinc-900/50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-black tracking-tight text-white mb-4">
                            技術選定からご相談ください
                        </h2>
                        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                            プロジェクトの要件に最適な技術スタックをご提案いたします。
                        </p>
                        <Button size="lg" className="bg-white hover:bg-zinc-200 text-black font-bold px-12" asChild>
                            <Link href="/contact">無料相談する</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <BusinessFooter />
        </>
    )
}





