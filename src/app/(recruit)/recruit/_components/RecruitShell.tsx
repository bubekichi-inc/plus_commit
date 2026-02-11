"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { User } from "lucide-react"
import { useAuth } from "@/components/auth/AuthProvider"

export type RecruitShellProps = {
    sidebar: ReactNode
    children: ReactNode
}

export default function RecruitShell({ sidebar, children }: RecruitShellProps) {
    const { user, loading, isConfigured } = useAuth()
    const [isVisible, setIsVisible] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-zinc-50">
            {sidebar}

            <header className={`lg:hidden fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 h-14 flex items-center justify-between px-4 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
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
                        <Link href="/recruit" className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center border border-primary-100">
                            <User className="w-4 h-4 text-primary-600" />
                        </Link>
                    ) : (
                        <Link href="/recruit/login" className="text-xs font-bold text-primary-600">
                            ログイン
                        </Link>
                    )
                )}
            </header>

            <main className="lg:ml-64 pt-14 lg:pt-0">
                {children}
            </main>
        </div>
    )
}
