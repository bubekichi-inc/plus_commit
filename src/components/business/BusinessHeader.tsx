import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BusinessHeader() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-blue-500/20 bg-slate-950/90 backdrop-blur-md">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/business" className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                    <span className="text-blue-500">PLUS</span>
                    <span>COMMIT</span>
                    <span className="text-xs font-medium bg-blue-500 text-white px-2 py-0.5 rounded">BUSINESS</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/business/services" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">
                        サービス
                    </Link>
                    <Link href="/business/works" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">
                        制作実績
                    </Link>
                    <Link href="/business/contact" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">
                        お問い合わせ
                    </Link>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6" asChild>
                        <Link href="/business/contact">
                            無料相談
                        </Link>
                    </Button>
                </nav>
            </div>
        </header>
    )
}

