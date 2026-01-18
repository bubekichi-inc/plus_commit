import { Metadata } from 'next'
import { getPageSetting } from "@/lib/microcms"

export async function generateMetadata(): Promise<Metadata> {
    const setting = await getPageSetting('contact')
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

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
