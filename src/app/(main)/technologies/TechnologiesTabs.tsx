"use client"

import { useState } from "react"
import Link from "next/link"


export type CategoryItem = {
    id: string
    "child-name": string  // カテゴリー名（child-categories APIのフィールド）
    slug?: string
}

export type TechnologyItem = {
    id: string
    title: string
    content: string
    icon?: string
    features?: string
    createdAt: string
    updatedAt: string
    "child-category"?: CategoryItem[]
}

export type GroupedTechnologies = {
    category: CategoryItem
    items: TechnologyItem[]
}

export interface TechnologiesTabsProps {
    groupedTechnologies: GroupedTechnologies[]
}

export function TechnologiesTabs({ groupedTechnologies }: TechnologiesTabsProps) {
    const [activeTab, setActiveTab] = useState<string>("all")

    const filteredGroups = activeTab === "all"
        ? groupedTechnologies
        : groupedTechnologies.filter(group => group.category.id === activeTab)

    return (
        <>
            {/* Tab Navigation */}
            <section className="py-8 border-b border-zinc-100 sticky top-20 bg-white/95 backdrop-blur-md z-40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setActiveTab("all")}
                            className={`px-4 py-2 text-sm font-bold rounded transition-colors ${activeTab === "all"
                                ? "bg-zinc-900 text-white"
                                : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                                }`}
                        >
                            すべて
                        </button>
                        {groupedTechnologies.map((group) => (
                            <button
                                key={group.category.id}
                                onClick={() => setActiveTab(group.category.id)}
                                className={`px-4 py-2 text-sm font-medium rounded transition-colors ${activeTab === group.category.id
                                    ? "bg-zinc-900 text-white"
                                    : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                                    }`}
                            >
                                {group.category["child-name"]}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Cards */}
            {filteredGroups.map((group) => (
                <section key={group.category.id} className="py-16 border-b border-zinc-100">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl font-black tracking-tight text-zinc-900">
                                {group.category["child-name"]}
                            </h2>
                            <span className="text-sm text-zinc-400">
                                {group.items.length} technologies
                            </span>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {group.items.map((tech) => (
                                <Link
                                    href={`/technologies/${tech.id}`}
                                    key={tech.id}
                                    className="group p-6 bg-white border border-zinc-100 transition-all rounded-lg shadow-sm hover:shadow-md block"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <span className="text-4xl">{tech.icon || "🔧"}</span>
                                        <div className="flex-1">
                                            <div className="text-xs text-zinc-400 font-medium mb-1">
                                                {group.category["child-name"]}
                                            </div>
                                            <h3 className="text-xl font-bold text-zinc-900 transition-colors group-hover:text-primary-600 mb-2">
                                                {tech.title}
                                            </h3>
                                            {tech["child-category"] && tech["child-category"].length > 0 && (
                                                <div className="flex flex-wrap gap-1.5">
                                                    {tech["child-category"].map((childCat) => (
                                                        <span
                                                            key={childCat.id}
                                                            className="inline-block px-2 py-0.5 bg-primary-50 text-primary-600 text-xs font-bold rounded-full border border-primary-100"
                                                        >
                                                            {childCat["child-name"]}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className="text-zinc-600 text-sm leading-relaxed mb-4 line-clamp-2"
                                        dangerouslySetInnerHTML={{ __html: tech.content }}
                                    />
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-xs text-zinc-400">作成: {new Date(tech.createdAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}</span>
                                            <span className="text-xs text-zinc-400">更新: {new Date(tech.updatedAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}</span>
                                        </div>
                                    </div>
                                    {tech.features && (
                                        <div className="flex flex-wrap gap-2">
                                            {tech.features.split('\n').slice(0, 3).map((feature, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 bg-zinc-50 text-zinc-500 text-xs rounded"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}
