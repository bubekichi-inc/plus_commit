"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Home, Building2, Heart, Briefcase, HelpCircle, ChevronDown } from "lucide-react"
import { ReactNode, useState, useEffect } from "react"

type NavItem = {
    id: string
    label: string
    href: string
    icon: React.ElementType
}

const navItems: NavItem[] = [
    { id: "top", label: "ホーム", href: "/recruit", icon: Home },
    { id: "about", label: "1ページでわかるプラスコミット", href: "/recruit/about", icon: HelpCircle },
    { id: "company", label: "会社", href: "/recruit/company", icon: Building2 },
    { id: "jobs", label: "仕事", href: "/recruit/jobs", icon: Briefcase },
    { id: "members", label: "社員", href: "/recruit/members", icon: Heart },
    { id: "culture", label: "職場", href: "/recruit/culture", icon: Building2 },
    { id: "process", label: "選考", href: "/recruit/process", icon: HelpCircle },
]

const bottomNavItems = [
    { id: "jobs-list", label: "募集要項", href: "/recruit/jobs", variant: "outline" },
    { id: "casual", label: "カジュアル面談", href: "/recruit/casual", variant: "outline" },
    { id: "entry", label: "エントリー", href: "/recruit/entry", variant: "solid" },
]

export default function RecruitLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

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
        <div className="min-h-screen bg-[#0a0a0a]">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-[#111] border-r border-white/10 flex-col z-50 overflow-y-auto">
                {/* Logo */}
                <div className="p-6">
                    <Link href="/recruit" className="flex items-center gap-2">
                        <Image
                            src="/general/logo-pc.png"
                            alt="Plus Commit"
                            width={100}
                            height={24}
                            className="h-6 w-auto invert"
                            priority
                        />
                        <span className="text-sm font-bold text-white/80">採用情報</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1">
                    <ul className="space-y-0.5">
                        {navItems.map((item) => {
                            const isActive = activeItem === item.id
                            const Icon = item.icon

                            return (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-all duration-200 group ${
                                            isActive
                                                ? "bg-emerald-500/20 text-emerald-400"
                                                : "text-white/60 hover:bg-white/5 hover:text-white"
                                        }`}
                                    >
                                        <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-white/40"}`} />
                                        <span className="font-bold text-sm tracking-tight">{item.label}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="mt-12 px-6">
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">
                            募集中の職種に応募する
                        </p>
                        <ul className="space-y-2 pb-8">
                            {bottomNavItems.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className={`block w-full text-center py-2.5 rounded text-sm font-bold transition-all ${
                                            item.variant === "solid"
                                                ? "bg-emerald-500 text-black hover:bg-emerald-400"
                                                : "bg-white/5 border border-white/20 text-white hover:bg-white/10"
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
                <div className="p-6 border-t border-white/10">
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-white/40 hover:text-white/60 text-[10px] font-bold transition-colors"
                    >
                        <ChevronDown className="w-3 h-3 rotate-90" />
                        <span>コーポレートサイト</span>
                    </Link>
                </div>
            </aside>

            {/* Mobile Header (Simplified for now) */}
            <header className="lg:hidden fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 h-14 flex items-center px-4">
                <Link href="/recruit" className="flex items-center gap-2">
                    <Image
                        src="/general/logo-pc.png"
                        alt="Plus Commit"
                        width={80}
                        height={20}
                        className="h-5 w-auto invert"
                    />
                    <span className="text-xs font-bold text-white/80">採用情報</span>
                </Link>
            </header>

            {/* Main Content */}
            <main className="lg:ml-64 pt-14 lg:pt-0">
                {children}
            </main>

            {/* Footer */}
            <footer className="lg:ml-64 border-t border-white/10 py-12 px-8 bg-black text-center">
                <p className="text-white/40 text-xs">
                    © {new Date().getFullYear()} Plus Commit Inc. All rights reserved.
                </p>
            </footer>
        </div>
    )
}

