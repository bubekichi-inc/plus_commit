"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ExternalLink } from "lucide-react"

type MenuItem = {
    label: string
    href: string
    external?: boolean
    isRecruit?: boolean
    submenu?: { label: string; href: string }[]
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
        label: "導入事例",
        href: "/works",
    },
    {
        label: "採用情報",
        href: "/recruit",
    },
]

export function Header() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [isVisible, setIsVisible] = useState(true)
    const lastScrollYRef = useRef(0)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // スクロール制御
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window === 'undefined') return

            const currentY = window.scrollY

            if (currentY > lastScrollYRef.current && currentY > 80) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            // scrolled state for header style
            setIsScrolled(currentY > 50)

            lastScrollYRef.current = currentY
        }

        window.addEventListener('scroll', controlNavbar, { passive: true })
        return () => window.removeEventListener('scroll', controlNavbar)
    }, [])

    // モバイルメニューが開いているときはスクロールをロック
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-white/95 backdrop-blur py-3' : 'bg-white py-3 md:py-5'}`}>
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
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
                            const submenuItems = item.submenu ?? []

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
                                            className="px-5 py-6 text-sm font-medium text-[#666666] hover:text-[#242422] transition-colors flex items-center gap-1 tracking-wide"
                                        >
                                            <span className="link-underline">{item.label}</span>
                                            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="px-5 py-6 text-sm font-medium text-[#666666] hover:text-[#242422] transition-colors flex items-center gap-1 tracking-wide"
                                            target={item.isRecruit ? "_blank" : undefined}
                                            rel={item.isRecruit ? "noopener noreferrer" : undefined}
                                        >
                                            <span className="link-underline">{item.label}</span>
                                            {item.isRecruit ? (
                                                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            ) : hasSubmenu && (
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
                            <Link
                                href="/contact"
                                className="inline-flex h-10 items-center justify-center rounded-[5px] bg-[#242422] px-6 text-sm font-medium text-white hover:opacity-80 transition-opacity"
                            >
                                お問い合わせ
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-zinc-800 hover:text-primary-500 transition-colors z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full pt-24 px-6 pb-12 overflow-y-auto">
                    <nav className="flex flex-col space-y-6">
                        {menuItems.map((item) => (
                            <div key={item.label} className="border-b border-zinc-100 pb-4">
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="flex items-center justify-between text-lg font-bold text-zinc-900"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        target={item.isRecruit ? "_blank" : undefined}
                                        rel={item.isRecruit ? "noopener noreferrer" : undefined}
                                    >
                                        <span className="flex items-center gap-2">
                                            {item.label}
                                            {item.external && <ExternalLink className="w-4 h-4 ml-1 text-zinc-400" />}
                                            {item.isRecruit && <ExternalLink className="w-4 h-4 ml-1 text-zinc-400" />}
                                        </span>
                                    </Link>
                                ) : (
                                    <div className="text-lg font-bold text-zinc-900">
                                        {item.label}
                                    </div>
                                )}

                                {item.submenu && item.submenu.length > 0 && (
                                    <div className="mt-4 flex flex-col space-y-3 pl-4 border-l-2 border-zinc-100">
                                        {item.submenu.map((subitem) => (
                                            <Link
                                                key={subitem.label}
                                                href={subitem.href}
                                                className="text-sm font-medium text-zinc-600 hover:text-primary-600"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {subitem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="mt-auto pt-8">
                        <Link
                            href="/contact"
                            className="flex items-center justify-center w-full h-12 rounded-[5px] bg-[#242422] text-white font-bold hover:opacity-90 transition-opacity"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            お問い合わせ
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
