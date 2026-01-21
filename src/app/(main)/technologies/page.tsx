import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from 'next'
import { getPageSetting, getAllTechnologies } from "@/lib/microcms"
import { News, NewsCategory } from "@/types/microcms"
import { TechnologiesTabs, type GroupedTechnologies as TabsGroupedTechnologies } from "./TechnologiesTabs"

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

    // TechnologiesTabs 用に、表示に必要な最小限のフィールドへマッピング
    const tabGroups: TabsGroupedTechnologies[] = groupedTechnologies.map((group) => ({
        category: {
            id: group.category.id,
            "child-name": group.category["child-name"] || group.category.title || group.category.name,
            slug: group.category.slug,
        },
        items: group.items.map((tech) => ({
            id: tech.id,
            title: tech.title,
            content: tech.content,
            icon: tech.icon,
            features: tech.features,
            createdAt: tech.createdAt,
            updatedAt: tech.updatedAt,
            "child-category": tech["child-category"]?.map((child) => ({
                id: child.id,
                "child-name": child["child-name"] || child.title || child.name,
                slug: child.slug,
            })),
        })),
    }))

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
                <TechnologiesTabs groupedTechnologies={tabGroups} />

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






