import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-primary-500/20 bg-zinc-950/90 backdrop-blur-md">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <div className="text-2xl font-black italic tracking-tighter text-white flex items-center gap-1">
                    <span className="text-primary-500">プラス</span>
                    <span>コミット</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#about" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-primary-500 transition-colors">
                        Training
                    </Link>
                    <Link href="#comparison" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-primary-500 transition-colors">
                        Stats
                    </Link>
                    <Link href="#pricing" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-primary-500 transition-colors">
                        Membership
                    </Link>
                    <Button size="sm" className="bg-primary-600 hover:bg-primary-500 text-white font-bold italic uppercase rounded-none skew-x-[-10deg] px-6 border-2 border-primary-600 hover:border-primary-400" asChild>
                        <Link href="#pricing">
                            <span className="skew-x-[10deg]">無料体験に参加</span>
                        </Link>
                    </Button>
                </nav>
            </div>
        </header>
    )
}
