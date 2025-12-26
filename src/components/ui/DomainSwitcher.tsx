"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function DomainSwitcher() {
    const [isBusiness, setIsBusiness] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            const hostname = window.location.hostname
            const searchParams = new URLSearchParams(window.location.search)
            const isBusinessMode = hostname.startsWith("business.") || searchParams.get("subdomain") === "business"
            setIsBusiness(isBusinessMode)
        }
    }, [])

    const handleToggle = () => {
        if (typeof window === "undefined") return

        const isLocalhost = window.location.hostname.includes("localhost") || window.location.hostname.includes("127.0.0.1")
        
        if (isLocalhost) {
            if (isBusiness) {
                window.location.href = "http://localhost:3000"
            } else {
                window.location.href = "http://localhost:3000?subdomain=business"
            }
        } else {
            if (isBusiness) {
                window.location.href = "https://plus-commit.com"
            } else {
                window.location.href = "https://business.plus-commit.com"
            }
        }
    }

    return (
        <div 
            className="relative flex items-center bg-zinc-900/80 p-1 rounded-full border border-zinc-800 cursor-pointer w-40 h-9 select-none"
            onClick={handleToggle}
        >
            {/* Background Indicator */}
            <motion.div
                className={`absolute h-7 rounded-full z-0 ${isBusiness ? "bg-blue-600" : "bg-primary-600"}`}
                initial={false}
                animate={{
                    x: isBusiness ? 78 : 2,
                    width: isBusiness ? 76 : 76
                }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
            />
            
            {/* Labels */}
            <div className="relative z-10 flex w-full h-full font-black italic text-[10px] tracking-widest">
                <div className={`flex-1 flex items-center justify-center transition-colors duration-200 ${!isBusiness ? "text-white" : "text-zinc-500"}`}>
                    CAREER
                </div>
                <div className={`flex-1 flex items-center justify-center transition-colors duration-200 ${isBusiness ? "text-white" : "text-zinc-500"}`}>
                    BUSINESS
                </div>
            </div>
        </div>
    )
}





