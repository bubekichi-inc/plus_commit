import { Hero } from "@/app/(main)/(top)/_components/Hero"
import { MissionVisionValue } from "@/app/(main)/(top)/_components/MissionVisionValue"
import { WorksSection } from "@/app/(main)/(top)/_components/WorksSection"
import { NewsSection } from "@/app/(main)/(top)/_components/NewsSection"
import { getNewsList, getPageSetting, getWorks } from "@/lib/microcms"
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const setting = await getPageSetting('top')
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

export default async function HomePage() {
    const { contents: news } = await getNewsList({ limit: 3 })
    const { contents: allWorks } = await getWorks({ limit: 50 })
    const works = allWorks
        .slice()
        .sort((a, b) => {
            const aHasThumb = !!a.thumbnail?.url
            const bHasThumb = !!b.thumbnail?.url
            if (aHasThumb === bHasThumb) return 0
            return aHasThumb ? -1 : 1
        })
        .slice(0, 4)

    return (
        <>
            <main className="min-h-screen pt-0 relative">
                {/* Fixed Grid Background */}
                <div className="fixed inset-0 z-[-1] pointer-events-none bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black)] opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)'
                    }}
                />

                <Hero />

                <MissionVisionValue />

                <WorksSection works={works} />

                <NewsSection news={news} />

            </main>
        </>
    )
}
