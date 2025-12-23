"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

type MenuItem = {
    label: string
    href: string
    external?: boolean
    submenu?: { label: string; href: string }[]
}

const menuItems: MenuItem[] = [
    {
        label: "NEWS",
        href: "/news",
        submenu: [
            { label: "お知らせ", href: "/news" },
        ],
    },
    {
        label: "事業紹介",
        href: "/services",
        submenu: [
            { label: "コーディング代行", href: "/services#coding" },
            { label: "DXコンサルティング", href: "/services#dx-consulting" },
            { label: "Web制作・開発", href: "/services#web-production" },
            { label: "業務自動化", href: "/services#automation" },
        ],
    },
    {
        label: "取り扱い技術",
        href: "/technologies",
        submenu: [
            { label: "フロントエンド", href: "/technologies#frontend" },
            { label: "バックエンド", href: "/technologies#backend" },
            { label: "インフラ", href: "/technologies#infrastructure" },
            { label: "CMS", href: "/technologies#cms" },
        ],
    },
    {
        label: "制作実績",
        href: "/works",
    },
    {
        label: "採用情報",
        href: "https://recruit.plus-commit.com",
        external: true,
    },
]

export function BusinessHeader() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)

    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/general/logo-pc.png"
                            alt="Plus Commit"
                            width={180}
                            height={40}
                            className="h-10 w-auto"
                            priority
                        />
                    </Link>
                </div>

                <nav className="hidden md:flex items-center">
                    {menuItems.map((item) => (
                        <div
                            key={item.label}
                            className="relative"
                            onMouseEnter={() => item.submenu && setActiveMenu(item.label)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            {item.external ? (
                                <a 
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-8 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                                >
                                    {item.label}
                                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            ) : (
                                <Link 
                                    href={item.href} 
                                    className="px-5 py-8 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                                >
                                    {item.label}
                                    {item.submenu && (
                                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>
                            )}
                            
                            {/* Dropdown menu */}
                            {item.submenu && activeMenu === item.label && (
                                <div className="absolute top-full left-0 w-56 bg-slate-900 border border-slate-800 shadow-xl">
                                    {item.submenu.map((subitem) => (
                                        <Link
                                            key={subitem.label}
                                            href={subitem.href}
                                            className="block px-5 py-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                                        >
                                            {subitem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    
                    <div className="ml-4 flex items-center gap-3">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 rounded-none" asChild>
                            <Link href="/contact">
                                お問い合わせ
                            </Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile menu button */}
                <button className="md:hidden text-slate-300 hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    )
}
