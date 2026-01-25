"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { BookOpen, ChevronDown, LogOut, User } from "lucide-react"
import { useAuth } from "@/components/auth/AuthProvider"

type NavItem = {
    id: string
    label: string
    href: string
}

type BottomNavItem = {
    id: string
    label: string
    href: string
    variant: "solid" | "outline"
}

const navItems: NavItem[] = [
    { id: "top", label: "ホーム", href: "/recruit" },
]

const bottomNavItems: BottomNavItem[] = [
    { id: "casual", label: "カジュアル面談", href: "/recruit/casual", variant: "outline" },
]

export default function RecruitSidebar() {
    const pathname = usePathname()
    const { user, loading, isConfigured, signOut, profile } = useAuth()

    const activeItem = (() => {
        if (pathname === "/recruit" || pathname === "/recruit/") return "top"
        for (const item of navItems) {
            if (item.href !== "/recruit" && pathname.startsWith(item.href)) {
                return item.id
            }
        }
        return ""
    })()

    return (
        <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-white border-r border-zinc-200 flex-col z-50 overflow-y-auto">
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
                                        {profile?.name || user.email?.split("@")[0]}
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
                            {profile?.role === "ADMIN" ? null : null}
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

            <nav className="flex-1">
                <ul className="space-y-0.5 pt-4">
                    {navItems.map((item) => {
                        const isActive = activeItem === item.id
                        return (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-all duration-200 group ${isActive
                                        ? "bg-primary-50 text-primary-600 border-r-2 border-primary-600"
                                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"}`}
                                >
                                    <span className="font-bold text-sm tracking-tight">{item.label}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <div className="mt-8 px-6 pb-6 border-b border-zinc-100">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
                        募集中の職種に応募する
                    </p>
                    <ul className="space-y-2 mb-4">
                        {bottomNavItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={`block w-full text-center py-2.5 rounded text-sm font-bold transition-all ${item.variant === "solid"
                                        ? "bg-primary-600 text-white hover:bg-primary-700 shadow-sm"
                                        : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300"}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-3 border-t border-zinc-100 space-y-2">
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-zinc-400">
                            <Link href="/privacy" className="hover:text-zinc-700 transition-colors">
                                プライバシーポリシー
                            </Link>
                            <span className="text-zinc-300">/</span>
                            <Link href="/personal-info" className="hover:text-zinc-700 transition-colors">
                                個人情報保護方針
                            </Link>
                        </div>
                        <p className="text-[10px] text-zinc-400">
                            © {new Date().getFullYear()} 株式会社プラスコミット
                        </p>
                    </div>
                </div>
            </nav>

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
    )
}
