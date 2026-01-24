"use client"

import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/sections/Header"
import { Footer } from "@/app/(main)/_components/Footer"
import { CTA } from "@/app/(main)/_components/CTA"

export default function MainLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname() || ''

    const showCTA = !pathname.startsWith('/contact')
    const showFooter = !pathname.startsWith('/contact')

    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            {showCTA && <CTA />}
            {showFooter && <Footer />}
        </>
    )
}
