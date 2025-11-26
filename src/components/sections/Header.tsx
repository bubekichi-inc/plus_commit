import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="text-xl font-black bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                    Plus Commit
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="#comparison" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        Comparison
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        Pricing
                    </Link>
                    <Button size="sm" asChild>
                        <Link href="#contact">お申し込み</Link>
                    </Button>
                </nav>
            </div>
        </header>
    )
}
