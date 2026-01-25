import { Metadata } from 'next'
import { getPageSetting } from "@/lib/microcms"

const FALLBACK_META = {
    title: 'お問い合わせ | プラスコミット株式会社',
    description: 'プラスコミット株式会社へのお問い合わせ窓口です。サービス・制作・開発に関するご相談はこちらからご連絡ください。'
}

export async function generateMetadata(): Promise<Metadata> {
    try {
        const setting = await getPageSetting('contact')
        const title = setting?.title || FALLBACK_META.title
        const description = setting?.description || FALLBACK_META.description

        return {
            title,
            description,
            openGraph: {
                title,
                description,
                images: ["/general/ogp.png"],
                type: "website",
            },
            twitter: {
                card: "summary_large_image",
                title,
                description,
                images: ["/general/ogp.png"],
            },
        }
    } catch (error) {
        return {
            title: FALLBACK_META.title,
            description: FALLBACK_META.description,
            openGraph: {
                title: FALLBACK_META.title,
                description: FALLBACK_META.description,
                images: ["/general/ogp.png"],
                type: "website",
            },
            twitter: {
                card: "summary_large_image",
                title: FALLBACK_META.title,
                description: FALLBACK_META.description,
                images: ["/general/ogp.png"],
            },
        }
    }
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
