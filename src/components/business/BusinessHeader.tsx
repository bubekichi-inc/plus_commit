"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import { getRecruitUrl, isRecruitExternal } from "@/lib/site-config"
import { useAuth } from "@/components/auth/AuthProvider"
import { User, LogOut, Settings, BookOpen, ChevronDown } from "lucide-react"

type MenuItem = {
    label: string
    href: string
    external?: boolean
    isRecruit?: boolean
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
        href: getRecruitUrl(),
        isRecruit: true,
        external: isRecruitExternal(),
    },
]

export function BusinessHeader() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const userMenuRef = useRef<HTMLDivElement>(null)
    const { user, profile, loading, isConfigured, signOut } = useAuth()

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

    // ユーザーメニュー外クリックで閉じる
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setIsUserMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSignOut = async () => {
        await signOut()
        setIsUserMenuOpen(false)
    }

    return (
        <header className={`fixed top-0 left-0 w-full z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/general/top/logo.png"
                            alt="プラスコミット"
                            width={220}
                            height={48}
                            className="h-8 w-auto"
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
                                    className="px-5 py-8 text-sm font-medium text-zinc-600 hover:text-black transition-colors flex items-center gap-1"
                                >
                                    {item.label}
                                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            ) : (
                                <Link 
                                    href={item.href} 
                                    className="px-5 py-8 text-sm font-medium text-zinc-600 hover:text-black transition-colors flex items-center gap-1"
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
                                <div className="absolute top-full left-0 w-56 bg-white border border-zinc-200 shadow-xl">
                                    {item.submenu.map((subitem) => (
                                        <Link
                                            key={subitem.label}
                                            href={subitem.href}
                                            className="block px-5 py-3 text-sm text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors"
                                        >
                                            {subitem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    
                    <div className="ml-4 flex items-center gap-3">
                        <Button size="sm" className="bg-black hover:bg-zinc-800 text-white font-bold px-6 rounded-none" asChild>
                            <Link href="/contact">
                                お問い合わせ
                            </Link>
                        </Button>

                        {/* 認証エリア */}
                        {isConfigured && !loading && (
                            user ? (
                                <div className="relative" ref={userMenuRef}>
                                    <button
                                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-100 transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-black text-sm font-bold">
                                            {profile?.name?.charAt(0) || user.email?.charAt(0)?.toUpperCase() || 'U'}
                                        </div>
                                        <ChevronDown className={`w-4 h-4 text-zinc-600 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* User Dropdown Menu */}
                                    {isUserMenuOpen && (
                                        <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-zinc-200 rounded-lg shadow-xl overflow-hidden">
                                            <div className="px-4 py-3 border-b border-zinc-200">
                                                <div className="text-black font-medium text-sm truncate">
                                                    {profile?.name || 'ユーザー'}
                                                </div>
                                                <div className="text-zinc-500 text-xs truncate">
                                                    {user.email}
                                                </div>
                                            </div>
                                            <div className="py-2">
                                                <Link
                                                    href="/mypage"
                                                    onClick={() => setIsUserMenuOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors"
                                                >
                                                    <User className="w-4 h-4" />
                                                    マイページ
                                                </Link>
                                                <Link
                                                    href="/mypage/contents"
                                                    onClick={() => setIsUserMenuOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors"
                                                >
                                                    <BookOpen className="w-4 h-4" />
                                                    限定コンテンツ
                                                </Link>
                                                <Link
                                                    href="/mypage?tab=settings"
                                                    onClick={() => setIsUserMenuOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors"
                                                >
                                                    <Settings className="w-4 h-4" />
                                                    設定
                                                </Link>
                                            </div>
                                            <div className="py-2 border-t border-zinc-200">
                                                <button
                                                    onClick={handleSignOut}
                                                    className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-zinc-100 transition-colors"
                                                >
                                                    <LogOut className="w-4 h-4" />
                                                    ログアウト
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Link href="/login">
                                        <Button size="sm" variant="ghost" className="text-zinc-600 hover:text-black hover:bg-zinc-100">
                                            ログイン
                                        </Button>
                                    </Link>
                                    <Link href="/register">
                                        <Button size="sm" variant="outline" className="border-zinc-200 text-zinc-600 hover:bg-zinc-100">
                                            新規登録
                                        </Button>
                                    </Link>
                                </div>
                            )
                        )}
                    </div>
                </nav>

                {/* Mobile menu button */}
                <button className="md:hidden text-zinc-600 hover:text-black">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    )
}
