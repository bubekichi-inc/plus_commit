"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DomainSwitcher } from "@/components/ui/DomainSwitcher"

export function Header() {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

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

    return (
        <header className={`fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/90 backdrop-blur-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/general/top/logo.png"
                            alt="プラスコミット"
                            width={220}
                            height={48}
                            className="h-10 w-auto"
                            priority
                        />
                    </Link>
                    <div className="flex items-center">
                        <DomainSwitcher />
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/about" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/members" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
                        Members
                    </Link>
                    <Link href="/services" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
                        Services
                    </Link>
                    <Link href="/#pricing" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
                        Pricing
                    </Link>
                    <Link href="/contact" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
                        Contact
                    </Link>
                    <Button size="sm" className="bg-white hover:bg-zinc-200 text-black font-bold uppercase rounded-none px-6" asChild>
                        <Link href="/contact">
                            無料相談
                        </Link>
                    </Button>
                </nav>
            </div>
        </header>
    )
}
