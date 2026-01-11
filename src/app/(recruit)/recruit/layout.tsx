"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Home, Building2, Heart, Briefcase, HelpCircle, ChevronDown, User, LogOut, BookOpen } from "lucide-react"
import { ReactNode, useState, useEffect } from "react"
import { AuthProvider, useAuth } from "@/components/auth/AuthProvider"

type NavItem = {
    id: string
    label: string
    href: string
    icon: React.ElementType
}

const navItems: NavItem[] = [
    { id: "top", label: "ホーム", href: "/recruit", icon: Home },
    { id: "process", label: "選考について", href: "/recruit/selection", icon: HelpCircle },
]

const bottomNavItems = [
    { id: "jobs-list", label: "募集要項", href: "/recruit/jobs", variant: "outline" },
    { id: "casual", label: "カジュアル面談", href: "/recruit/casual", variant: "outline" },
]

function RecruitLayoutContent({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const { user, loading, isConfigured, signOut, profile } = useAuth()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY && currentScrollY > 60) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            setLastScrollY(currentScrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    // パス名からアクティブなナビアイテムを判定
    const getActiveItem = () => {
        if (pathname === "/recruit" || pathname === "/recruit/") return "top"
        for (const item of navItems) {
            if (item.href !== "/recruit" && pathname.startsWith(item.href)) {
                return item.id
            }
        }
        return ""
    }

    const activeItem = getActiveItem()

    return (
        <div className="min-h-screen bg-zinc-50">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-white border-r border-zinc-200 flex-col z-50 overflow-y-auto">
                {/* Logo */}
                <div className="p-6">
                    <Link href="/recruit" className="flex flex-col gap-2">
                        <Image
                            src="/general/logo.svg"
                            alt="プラスコミット"
                            width={140}
                            height={34}
                            className="h-8 w-auto"
                            priority
                        />
                        <span className="text-sm font-bold text-center text-primary-600">マイページ</span>
                    </Link>
                </div>

                {/* User Auth Section */}
                <div className="px-6 pb-6 border-b border-zinc-100">
                    {isConfigured && !loading && (
                        user ? (
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center border border-primary-100">
                                        <User className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-zinc-900 text-sm font-bold truncate">
                                            {profile?.name || user.email?.split('@')[0]}
                                        </p>
                                        <p className="text-zinc-500 text-xs truncate">{user.email}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Link
                                        href="/recruit/mypage"
                                        className="flex-1 flex items-center justify-center gap-1 py-2 bg-zinc-50 border border-zinc-200 rounded text-xs font-bold text-zinc-600 hover:bg-zinc-100 transition-colors"
                                    >
                                        <BookOpen className="w-3 h-3" />
                                        マイページ
                                    </Link>
                                    <button
                                        onClick={() => signOut()}
                                        className="flex items-center justify-center gap-1 px-3 py-2 bg-zinc-50 border border-zinc-200 rounded text-xs font-bold text-zinc-600 hover:bg-zinc-100 transition-colors"
                                    >
                                        <LogOut className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <Link
                                    href="/recruit/login"
                                    className="block w-full text-center py-2.5 bg-zinc-50 border border-zinc-200 rounded text-sm font-bold text-zinc-700 hover:bg-zinc-100 transition-colors"
                                >
                                    ログイン
                                </Link>
                                <Link
                                    href="/recruit/register"
                                    className="block w-full text-center py-2.5 bg-gray-600 rounded text-sm font-bold text-white hover:bg-primary-700 transition-colors shadow-sm"
                                >
                                    会員登録
                                </Link>
                            </div>
                        )
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex-1">
                    <ul className="space-y-0.5 pt-4">
                        {navItems.map((item) => {
                            const isActive = activeItem === item.id
                            const Icon = item.icon

                            return (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-all duration-200 group ${isActive
                                            ? "bg-primary-50 text-primary-600 border-r-2 border-primary-600"
                                            : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                                            }`}
                                    >
                                        <Icon className={`w-4 h-4 ${isActive ? "text-primary-600" : "text-zinc-400 group-hover:text-zinc-600"}`} />
                                        <span className="font-bold text-sm tracking-tight">{item.label}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    {/* 会員限定コンテンツ */}
                    {user && (
                        <div className="mt-6 px-6">
                            <p className="text-[10px] font-bold text-primary-600/60 uppercase tracking-widest mb-3">
                                会員限定コンテンツ
                            </p>
                            <ul className="space-y-1">
                                <li>
                                    <Link
                                        href="/recruit/member-contents"
                                        className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-200 bg-primary-50 border border-primary-100 rounded-lg text-primary-700 hover:bg-primary-100"
                                    >
                                        <BookOpen className="w-4 h-4" />
                                        <span className="font-bold text-sm">限定記事を読む</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}

                    <div className="mt-8 px-6">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
                            募集中の職種に応募する
                        </p>
                        <ul className="space-y-2 pb-8">
                            {bottomNavItems.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className={`block w-full text-center py-2.5 rounded text-sm font-bold transition-all ${item.variant === "solid"
                                            ? "bg-primary-600 text-white hover:bg-primary-700 shadow-sm"
                                            : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-zinc-100">
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-zinc-400 hover:text-zinc-600 text-[10px] font-bold transition-colors"
                    >
                        <ChevronDown className="w-3 h-3 rotate-90" />
                        <span>コーポレートサイト</span>
                    </Link>
                </div>
            </aside>

            {/* Mobile Header */}
            <header className={`lg:hidden fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 h-14 flex items-center justify-between px-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <Link href="/recruit" className="flex items-center gap-2">
                    <Image
                        src="/general/logo.svg"
                        alt="プラスコミット"
                        width={110}
                        height={28}
                        className="h-7 w-auto"
                    />
                    <span className="text-xs font-bold text-primary-600">採用情報</span>
                </Link>
                {isConfigured && !loading && (
                    user ? (
                        <Link href="/recruit/mypage" className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center border border-primary-100">
                            <User className="w-4 h-4 text-primary-600" />
                        </Link>
                    ) : (
                        <Link href="/recruit/login" className="text-xs font-bold text-primary-600">
                            ログイン
                        </Link>
                    )
                )}
            </header>

            {/* Main Content */}
            <main className="lg:ml-64 pt-14 lg:pt-0">
                {children}
            </main>

            {/* Footer */}
            <footer className="lg:ml-64 border-t border-zinc-200 py-12 px-8 bg-zinc-50 text-center">
                <p className="text-zinc-400 text-xs">
                    © {new Date().getFullYear()} 株式会社プラスコミット All rights reserved.
                </p>
            </footer>
        </div>
    )
}

export default function RecruitLayout({ children }: { children: ReactNode }) {
    return (
        <AuthProvider>
            <RecruitLayoutContent>{children}</RecruitLayoutContent>
        </AuthProvider>
    )
}
