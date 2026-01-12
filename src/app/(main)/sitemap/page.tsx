import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import Link from "next/link"
import { Metadata } from 'next'
import { getPageSetting } from "@/lib/microcms"
import { ChevronRight } from "lucide-react"

export async function generateMetadata(): Promise<Metadata> {
    const setting = await getPageSetting('sitemap').catch(() => null)
    return {
        title: setting?.title || 'サイトマップ | 株式会社PLUS-COMMIT',
        description: setting?.description || '株式会社PLUS-COMMITのサイトマップです。各ページへのリンクをご案内します。',
    }
}

const sitemapData = [
    {
        title: "メインコンテンツ",
        links: [
            { label: "ホーム", href: "/" },
            { label: "会社概要", href: "/about" },
            { label: "技術情報", href: "/technologies" },
            { label: "制作実績", href: "/works" },
            { label: "ニュース", href: "/news" },
            { label: "お問い合わせ", href: "/contact" },
        ]
    },
    {
        title: "採用情報",
        links: [
            { label: "採用トップ", href: "/recruit" },
            { label: "会社について", href: "/recruit/company" },
            { label: "募集要項", href: "/recruit/jobs" },
            { label: "カルチャー", href: "/recruit/culture" },
            { label: "よくある質問", href: "/recruit/faq" },
            { label: "エントリー", href: "/recruit/entry" },
        ]
    },
    {
        title: "その他",
        links: [
            { label: "ログイン", href: "/login" },
            { label: "新規会員登録", href: "/register" },
        ]
    }
]

export default function SitemapPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20 bg-white">
                <section className="py-24 border-b border-zinc-100">
                    <div className="container mx-auto px-4">
                        <div className="text-zinc-500 font-bold tracking-wider text-sm mb-4 uppercase">Sitemap</div>
                        <h1 className="text-5xl font-black italic tracking-tighter text-zinc-900 mb-6">
                            サイトマップ
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-2xl">
                            株式会社PLUS-COMMITのウェブサイト各ページへのリンクをご案内します。
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {sitemapData.map((section) => (
                                <div key={section.title} className="space-y-6">
                                    <h2 className="text-xl font-black italic tracking-tighter border-l-4 border-zinc-900 pl-4 text-zinc-900">
                                        {section.title}
                                    </h2>
                                    <ul className="space-y-4">
                                        {section.links.map((link) => (
                                            <li key={link.href}>
                                                <Link 
                                                    href={link.href}
                                                    className="group flex items-center text-zinc-600 hover:text-zinc-900 transition-colors"
                                                >
                                                    <ChevronRight className="w-4 h-4 mr-2 text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                                                    <span className="text-sm font-medium">{link.label}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
