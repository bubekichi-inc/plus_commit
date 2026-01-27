import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Works } from "@/types/microcms"

type WorksSectionProps = {
    works: Works[]
}

export function WorksSection({ works }: WorksSectionProps) {
    return (
        <section className="py-20 md:py-28 bg-[var(--color-background)]">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <p className="text-sm text-muted mb-3 tracking-widest uppercase font-medium">
                        Works
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] tracking-tight">
                            導入事例
                        </h2>
                        <Link
                            href="/works/"
                            className="btn-arrow hidden md:inline-flex items-center text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors font-medium link-underline"
                        >
                            すべての事例を見る
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>

                {/* Works Grid - 3 columns, smaller cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12">
                    {works.map((work) => (
                        <Link
                            key={work.id}
                            href={`/works/${work.id}`}
                            className="group block border border-[var(--color-border-subtle)] hover:border-[var(--color-border)] transition-colors rounded-[5px] overflow-hidden"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-background-subtle)]">
                                <Image
                                    src={work.thumbnail?.url || "/general/ogp.png"}
                                    alt={work.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-base font-bold text-[var(--color-text-primary)] leading-snug group-hover:opacity-70 transition-opacity line-clamp-2">
                                    {work.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="md:hidden text-center">
                    <Link
                        href="/works"
                        className="btn-arrow inline-flex items-center justify-center h-14 px-10 rounded-[5px] bg-[var(--color-background-dark)] text-white text-sm font-medium hover:opacity-80 transition-opacity"
                    >
                        すべての事例を見る
                        <ArrowRight className="w-4 h-4 ml-3" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
