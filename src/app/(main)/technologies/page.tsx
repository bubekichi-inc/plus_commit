import { getPageSetting, getAllTechnologies } from "@/lib/microcms"
import { Metadata } from 'next'
import { TechnologiesTabs, type GroupedTechnologies as TabsGroupedTechnologies } from "./TechnologiesTabs"
import type { News, NewsCategory } from "@/types/microcms"

export async function generateMetadata(): Promise<Metadata> {
    const setting = await getPageSetting('technologies')
    return {
        title: setting?.title,
        description: setting?.description,
        openGraph: {
            title: setting?.title,
            description: setting?.description,
            images: ["/general/ogp.png"],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: setting?.title,
            description: setting?.description,
            images: ["/general/ogp.png"],
        },
    }
}

type GroupedTechnologies = {
    category: NewsCategory;
    items: News[];
}

export default async function TechnologiesPage({
    searchParams,
}: {
    searchParams?: { category?: string }
}) {
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

    const initialCategoryId = searchParams?.category && tabGroups.some(group => group.category.id === searchParams.category)
        ? searchParams.category
        : "all"

    return (
        <>
            <main className="min-h-screen pt-20 bg-white">
                {/* Hero Section */}
                <section className="py-16 md:py-20 border-b border-[#E8E8E8]">
                    <div className="container mx-auto px-6">
                        <p className="text-sm text-[#999999] mb-3 tracking-widest uppercase font-medium">
                            Technologies
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#242422] tracking-tight mb-6">
                            取り扱い技術
                        </h1>
                        <p className="text-[#666666] text-sm md:text-base leading-[1.8] max-w-2xl">
                            最新のテクノロジーを活用し、お客様のビジネス課題に最適なソリューションを提供します。
                        </p>
                    </div>
                </section>

                <TechnologiesTabs groupedTechnologies={tabGroups} initialActiveCategoryId={initialCategoryId} />
            </main>
        </>
    )
}






