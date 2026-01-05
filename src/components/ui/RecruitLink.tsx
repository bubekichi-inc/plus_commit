"use client"

import Link from "next/link"
import { getRecruitUrl, isRecruitExternal } from "@/lib/site-config"
import { ReactNode } from "react"

interface RecruitLinkProps {
    children: ReactNode
    path?: string
    className?: string
}

/**
 * 採用サイトへのリンクコンポーネント
 * 環境変数に基づいて、内部リンク（Link）または外部リンク（a）を自動選択
 */
export function RecruitLink({ children, path = '', className }: RecruitLinkProps) {
    const href = getRecruitUrl(path)
    
    if (isRecruitExternal()) {
        return (
            <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={className}
            >
                {children}
            </a>
        )
    }
    
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    )
}






