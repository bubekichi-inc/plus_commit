"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { DomainSwitcher } from "@/components/ui/DomainSwitcher"

const menuItems = [
    {
        label: "事業紹介",
        href: "/business/services",
        submenu: [
            { label: "コーディング代行", href: "/business/services#coding" },
            { label: "DXコンサルティング", href: "/business/services#dx-consulting" },
            { label: "Web制作・開発", href: "/business/services#web-production" },
            { label: "業務自動化", href: "/business/services#automation" },
        ],
    },
    {
        label: "取り扱い技術",
        href: "/business/technologies",
        submenu: [
            { label: "フロントエンド", href: "/business/technologies#frontend" },
            { label: "バックエンド", href: "/business/technologies#backend" },
            { label: "インフラ", href: "/business/technologies#infrastructure" },
            { label: "CMS", href: "/business/technologies#cms" },
        ],
    },
    {
        label: "制作実績",
        href: "/business/works",
    },
    {
        label: "採用情報",
        href: "/business/recruit",
    },
]

export function BusinessHeader() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)

    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/business" className="text-xl font-black tracking-tight text-white flex items-center gap-2">
                        <span className="text-blue-500">PLUS</span>
                        <span>COMMIT</span>
                    </Link>
                    <div className="flex items-center">
                        <DomainSwitcher />
                    </div>
                </div>

                <nav className="hidden md:flex items-center">
                    {menuItems.map((item) => (
                        <div
                            key={item.label}
                            className="relative"
                            onMouseEnter={() => item.submenu && setActiveMenu(item.label)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
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
                            <Link href="/business/contact">
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
