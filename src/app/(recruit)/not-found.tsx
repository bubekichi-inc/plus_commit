"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RecruitNotFound() {
    const router = useRouter()

    useEffect(() => {
        // 3秒後に自動的にrecruitトップにリダイレクト
        const timer = setTimeout(() => {
            router.push("/recruit")
        }, 3000)

        return () => clearTimeout(timer)
    }, [router])

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <h1 className="text-6xl font-black text-zinc-900 mb-4">404</h1>
                    <h2 className="text-2xl font-bold text-zinc-900 mb-2">
                        ページが見つかりません
                    </h2>
                    <p className="text-zinc-600">
                        お探しのページは存在しないか、移動された可能性があります。
                    </p>
                </div>

                <div className="space-y-3">
                    <Link href="/recruit">
                        <Button className="w-full bg-primary-600 hover:bg-primary-700 !text-white font-bold rounded-lg">
                            <Home className="w-5 h-5 mr-2" />
                            採用トップページへ
                        </Button>
                    </Link>
                    <Link href="/recruit">
                        <Button variant="outline" className="w-full border-zinc-300 text-zinc-700 hover:bg-zinc-100 font-medium rounded-lg">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            前のページに戻る
                        </Button>
                    </Link>
                </div>

                <p className="mt-8 text-sm text-zinc-500">
                    3秒後に自動的に採用トップページへ移動します...
                </p>
            </div>
        </div>
    )
}
