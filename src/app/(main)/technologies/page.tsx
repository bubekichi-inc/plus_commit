import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from 'next'
import { getPageSetting, getAllTechnologies } from "@/lib/microcms"
import { News, NewsCategory } from "@/types/microcms"

export async function generateMetadata(): Promise<Metadata> {
    const setting = await getPageSetting('technologies')
    return {
        title: setting?.title,
        description: setting?.description,
    }
}

type GroupedTechnologies = {
    category: NewsCategory;
    items: News[];
}

export default async function TechnologiesPage() {
    const { contents: technologies } = await getAllTechnologies();

    // 子カテゴリーごとにグルーピング
    const groupedTechnologies: GroupedTechnologies[] = [];
    const processedChildCategoryIds = new Set<string>();

    const uncategorizedItems: News[] = [];

    technologies.forEach(tech => {
        const childCategories = tech["child-category"];
        if (childCategories && childCategories.length > 0) {
            childCategories.forEach(childCat => {
                if (!processedChildCategoryIds.has(childCat.id)) {
                    // この子カテゴリーを持つ技術を全て抽出
                    const items = technologies.filter(t =>
                        t["child-category"]?.some(c => c.id === childCat.id)
                    );

                    groupedTechnologies.push({
                        category: childCat,
                        items: items
                    });
                    processedChildCategoryIds.add(childCat.id);
                }
            });
        } else {
            // 子カテゴリーがない場合は「その他」にまとめる
            uncategorizedItems.push(tech);
        }
    });

    // 「その他」カテゴリーを追加
    if (uncategorizedItems.length > 0) {
        groupedTechnologies.push({
            category: {
                id: 'others',
                name: 'その他',
                slug: 'others',
                createdAt: '',
                updatedAt: '',
                publishedAt: '',
                revisedAt: ''
            },
            items: uncategorizedItems
        });
    }

    // 必要に応じてソート（例: カテゴリ作成順など。ここでは取得順/出現順）

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
                            {groupedTechnologies.map((group) => (
                                <Link
                                    key={group.category.id}
                                    href={`#${group.category.id}`}
                                    className="px-4 py-2 bg-zinc-50 text-zinc-600 text-sm font-medium hover:bg-zinc-100 hover:text-zinc-900 transition-colors rounded"
                                >
                                    {group.category.title || group.category.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {groupedTechnologies.map((group) => {
                    return (
                        <section key={group.category.id} id={group.category.id} className="py-16 border-b border-zinc-100">
                            <div className="container mx-auto px-4">
                                <div className="flex items-center gap-4 mb-8">
                                    <h2 className="text-2xl font-black tracking-tight text-zinc-900">
                                        {group.category.title || group.category.name}
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
                                                <div>
                                                    <div className="text-xs text-zinc-400 font-medium mb-1">
                                                        {group.category.title || group.category.name}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-zinc-900 transition-colors group-hover:text-primary-600">
                                                        {tech.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div
                                                className="text-zinc-600 text-sm leading-relaxed mb-4 line-clamp-2"
                                                dangerouslySetInnerHTML={{ __html: tech.content }}
                                            />
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






