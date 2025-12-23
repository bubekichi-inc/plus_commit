"use client"

import { useState, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export function NewsSearchSidebar() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentQuery = searchParams.get("q") || ""
    const [query, setQuery] = useState(currentQuery)

    const handleSearch = useCallback((e: React.FormEvent) => {
        e.preventDefault()
        const params = new URLSearchParams()
        if (query.trim()) {
            params.set("q", query.trim())
        }
        router.push(`/news${params.toString() ? `?${params.toString()}` : ""}`)
    }, [query, router])

    const handleClear = useCallback(() => {
        setQuery("")
        router.push("/news")
    }, [router])

    return (
        <aside className="w-full lg:w-80 shrink-0">
            <div className="sticky top-24 space-y-6">
                {/* 検索ボックス */}
                <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <svg 
                            className="w-5 h-5 text-blue-400" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                            />
                        </svg>
                        記事を検索
                    </h3>
                    <form onSubmit={handleSearch} className="space-y-3">
                        <div className="relative">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="キーワードを入力..."
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            />
                            {query && (
                                <button
                                    type="button"
                                    onClick={() => setQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors flex items-center justify-center gap-2"
                        >
                            <svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                                />
                            </svg>
                            検索する
                        </button>
                    </form>
                    
                    {/* 検索中の状態表示 */}
                    {currentQuery && (
                        <div className="mt-4 pt-4 border-t border-slate-700">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-400">
                                    検索中: <span className="text-blue-400 font-medium">&ldquo;{currentQuery}&rdquo;</span>
                                </span>
                                <button
                                    onClick={handleClear}
                                    className="text-slate-500 hover:text-red-400 transition-colors text-xs underline"
                                >
                                    クリア
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* 検索のヒント */}
                <div className="bg-slate-900/50 border border-slate-800/50 p-5 text-sm">
                    <h4 className="text-slate-300 font-medium mb-3">検索のヒント</h4>
                    <ul className="space-y-2 text-slate-500">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            タイトルや本文からキーワード検索ができます
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            複数のキーワードはスペースで区切って入力できます
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
