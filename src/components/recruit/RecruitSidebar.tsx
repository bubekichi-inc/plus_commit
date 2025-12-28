"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Home, Users, Briefcase, HelpCircle, Mail, ChevronRight } from "lucide-react"

type NavItem = {
    id: string
    label: string
    icon: React.ElementType
}

const navItems: NavItem[] = [
    { id: "top", label: "TOP", icon: Home },
    { id: "about", label: "私たちについて", icon: Users },
    { id: "culture", label: "カルチャー", icon: Users },
    { id: "jobs", label: "募集職種", icon: Briefcase },
    { id: "faq", label: "FAQ", icon: HelpCircle },
    { id: "entry", label: "エントリー", icon: Mail },
]

type RecruitSidebarProps = {
    activeSection: string
    onNavigate: (sectionId: string) => void
}

export function RecruitSidebar({ activeSection, onNavigate }: RecruitSidebarProps) {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <aside className="fixed left-0 top-0 h-screen w-72 bg-black border-r border-white/10 flex flex-col z-50">
            {/* Logo */}
            <div className={`p-6 border-b border-white/10 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>
                <Link href="/" className="block mb-4">
                    <Image
                        src="/general/logo-pc.png"
                        alt="Plus Commit"
                        width={140}
                        height={32}
                        className="h-8 w-auto"
                        priority
                    />
                </Link>
                <div className="flex items-center gap-2">
                    <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
                        Recruit
                    </span>
                    <span className="text-white/30 text-xs">採用サイト</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 overflow-y-auto">
                <ul className="space-y-1 px-3">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id
                        const Icon = item.icon
                        
                        return (
                            <li key={item.id}>
                                <button
                                    onClick={() => onNavigate(item.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group ${
                                        isActive
                                            ? "bg-emerald-500/20 text-emerald-400"
                                            : "text-white/60 hover:bg-white/5 hover:text-white"
                                    }`}
                                >
                                    <Icon className={`w-5 h-5 transition-colors ${
                                        isActive ? "text-emerald-400" : "text-white/40 group-hover:text-white/60"
                                    }`} />
                                    <span className="font-medium text-sm">{item.label}</span>
                                    {isActive && (
                                        <ChevronRight className="w-4 h-4 ml-auto text-emerald-400" />
                                    )}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-white/10">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-white/40 hover:text-white/60 text-xs transition-colors"
                >
                    <span>← コーポレートサイトへ</span>
                </Link>
            </div>
        </aside>
    )
}


