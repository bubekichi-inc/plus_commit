import { Metadata } from 'next'
import { getPageSetting } from "@/lib/microcms"

const FALLBACK_META = {
    title: '採用情報 | 株式会社PLUS-COMMIT',
    description: '株式会社PLUS-COMMITの採用情報ページです。'
}

export async function generateMetadata(): Promise<Metadata> {
    try {
        const setting = await getPageSetting('recruit')
        return {
            title: setting?.title || FALLBACK_META.title,
            description: setting?.description || FALLBACK_META.description,
        }
    } catch {
        return {
            title: FALLBACK_META.title,
            description: FALLBACK_META.description,
        }
    }
}

export default function RecruitSectionLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="theme-orange contents">{children}</div>
}
