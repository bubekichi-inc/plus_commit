"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { getRecruitUrl } from "@/lib/site-config"

type MenuItem = {
    label: string
    href: string
    external?: boolean
    isRecruit?: boolean
    submenu?: { label: string; href: string }[]
}

type TechnologyCategory = {
    id: string
    name: string
}

const menuItems: MenuItem[] = [
    {
        label: "会社概要",
        href: "/company",
    },
    {
        label: "取り扱い技術",
        href: "/technologies",
    },
    {
        label: "制作実績",
        href: "/works",
    },
    {
        label: "採用情報",
        href: getRecruitUrl(),
        isRecruit: true,
    },
]

export function Header() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [techCategories, setTechCategories] = useState<TechnologyCategory[]>([])

    // スクロール制御
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 80) { // Scrolling down
                    setIsVisible(false)
                } else { // Scrolling up
                    setIsVisible(true)
                }
                setLastScrollY(window.scrollY)
            }
        }

        window.addEventListener('scroll', controlNavbar)
        return () => window.removeEventListener('scroll', controlNavbar)
    }, [lastScrollY])

    // 取り扱い技術のサブメニューをmicroCMSベースで動的取得
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("/api/technologies/categories")
                if (!res.ok) return
                const data = await res.json()
                if (Array.isArray(data.categories)) {
                    setTechCategories(
                        data.categories.map((cat: any) => ({
                            id: cat.id,
                            name: cat.name,
                        }))
                    )
                }
            } catch (e) {
                console.error("Failed to load technology categories for header", e)
            }
        }

        fetchCategories()
    }, [])

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${lastScrollY > 50 ? 'glass-header py-2' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center group">
                        <Image
                            src="/general/logo.svg"
                            alt="プラスコミット"
                            width={140}
                            height={30}
                            className="h-6 w-auto transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                    </Link>
                </div>

                <nav className="hidden md:flex items-center">
                    {menuItems.map((item) => {
                        const isTechnologiesMenu = item.label === "取り扱い技術"
                        const submenuItems = isTechnologiesMenu
                            ? techCategories.map((cat) => ({
                                label: cat.name,
                                href: `/technologies?category=${encodeURIComponent(cat.id)}`,
                            }))
                            : item.submenu ?? []

                        const hasSubmenu = submenuItems.length > 0

                        return (
                            <div
                                key={item.label}
                                className="relative group/menu"
                                onMouseEnter={() => {
                                    if (hasSubmenu) setActiveMenu(item.label)
                                }}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                {item.external ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-6 text-sm font-bold text-zinc-600 hover:text-primary-500 transition-colors flex items-center gap-1 tracking-wide"
                                    >
                                        {item.label}
                                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="px-5 py-6 text-sm font-bold text-zinc-600 hover:text-primary-500 transition-colors flex items-center gap-1 tracking-wide"
                                    >
                                        {item.label}
                                        {hasSubmenu && (
                                            <svg className="w-3 h-3 ml-1 transition-transform duration-300 group-hover/menu:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </Link>
                                )}

                                {hasSubmenu && activeMenu === item.label && (
                                    <div className="absolute top-full left-0 w-64 bg-white border border-zinc-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] rounded-xl overflow-hidden animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
                                        {submenuItems.map((subitem) => (
                                            <Link
                                                key={subitem.label}
                                                href={subitem.href}
                                                className="block px-6 py-4 text-sm font-medium text-zinc-500 hover:text-primary-500 hover:bg-zinc-50 transition-all border-b border-zinc-50 last:border-0"
                                            >
                                                {subitem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}

                    <div className="ml-4 flex items-center gap-3">
                        <Button size="sm" className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/20" asChild>
                            <Link href="/contact">
                                お問い合わせ
                            </Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile menu button */}
                <button className="md:hidden text-zinc-800 hover:text-primary-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    )
}
