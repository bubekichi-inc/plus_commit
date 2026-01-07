import { Metadata } from 'next'
import { getPageSetting } from "@/lib/microcms"

export async function generateMetadata(): Promise<Metadata> {
    const setting = await getPageSetting('recruit')
    return {
        title: setting?.title || '採用情報 | 株式会社PLUS-COMMIT',
        description: setting?.description || '株式会社PLUS-COMMITの採用情報ページです。',
    }
}

export default function RecruitSectionLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="theme-orange contents">{children}</div>
}
