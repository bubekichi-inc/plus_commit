import { Metadata } from 'next'
import { getPageSetting } from "@/lib/microcms"

export async function generateMetadata(): Promise<Metadata> {
    const setting = await getPageSetting('contact')
    return {
        title: setting?.title,
        description: setting?.description,
    }
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
