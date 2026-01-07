import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { technologies, categories } from "@/lib/technologies"
import { Metadata } from 'next'
import { getPageSetting } from "@/lib/microcms"

export async function generateMetadata(): Promise<Metadata> {
    const setting = await getPageSetting('technologies')
    return {
        title: setting?.title,
        description: setting?.description,
    }
}

export default function TechnologiesPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20 bg-white">
                <section className="py-24 border-b border-zinc-100 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-zinc-500 font-bold tracking-wider text-sm mb-4">TECHNOLOGIES</div>
                        <h1 className="text-5xl font-black tracking-tight text-zinc-900 mb-6">
                            取り扱い技術
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-2xl">
                            最新のテクノロジーを活用し、お客様のビジネス課題に最適なソリューションを提供します。
                        </p>
                    </div>
                </section>

                <section className="py-8 border-b border-zinc-100 sticky top-20 bg-white/95 backdrop-blur-md z-40">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap gap-2">
                            <Link 
                                href="#all" 
                                className="px-4 py-2 bg-zinc-900 text-white text-sm font-bold rounded"
                            >
                                すべて
                            </Link>
                            {categories.map((cat) => (
                                <Link 
                                    key={cat.id}
                                    href={`#${cat.id}`}
                                    className="px-4 py-2 bg-zinc-50 text-zinc-600 text-sm font-medium hover:bg-zinc-100 hover:text-zinc-900 transition-colors rounded"
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
                        <section key={category.id} id={category.id} className="py-16 border-b border-zinc-100">
                            <div className="container mx-auto px-4">
                                <div className="flex items-center gap-4 mb-8">
                                    <h2 className="text-2xl font-black tracking-tight text-zinc-900">
                                        {category.label}
                                    </h2>
                                    <span className="text-sm text-zinc-400">
                                        {categoryTechs.length} technologies
                                    </span>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categoryTechs.map((tech) => (
                                        <div 
                                            key={tech.slug}
                                            className="group p-6 bg-white border border-zinc-100 transition-all rounded-lg shadow-sm"
                                        >
                                            <div className="flex items-start gap-4 mb-4">
                                                <span className="text-4xl">{tech.icon}</span>
                                                <div>
                                                    <div className="text-xs text-zinc-400 font-medium mb-1">
                                                        {tech.categoryLabel}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-zinc-900 transition-colors">
                                                        {tech.name}
                                                    </h3>
                                                </div>
                                            </div>
                                            <p className="text-zinc-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                                {tech.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {tech.features.slice(0, 3).map((feature, i) => (
                                                    <span 
                                                        key={i}
                                                        className="px-2 py-1 bg-zinc-50 text-zinc-500 text-xs rounded"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )
                })}

                <section className="py-24 bg-zinc-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-black tracking-tight text-zinc-900 mb-4">
                            技術選定からご相談ください
                        </h2>
                        <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
                            プロジェクトの要件に最適な技術スタックをご提案いたします。
                        </p>
                        <Button size="lg" className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-12" asChild>
                            <Link href="/contact">無料相談する</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}






