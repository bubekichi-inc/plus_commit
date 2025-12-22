import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DomainSwitcher } from "@/components/ui/DomainSwitcher"

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-primary-500/20 bg-zinc-950/90 backdrop-blur-md">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-2xl font-black italic tracking-tighter text-white flex items-center gap-1">
                        <span className="text-primary-500">プラス</span>
                        <span>コミット</span>
                    </Link>
                    <div className="hidden lg:block">
                        <DomainSwitcher />
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/about" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-primary-500 transition-colors">
                        About
                    </Link>
                    <Link href="/members" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-primary-500 transition-colors">
                        Members
                    </Link>
                    <Link href="/services" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-primary-500 transition-colors">
                        Services
                    </Link>
                    <Link href="/#pricing" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-primary-500 transition-colors">
                        Pricing
                    </Link>
                    <Link href="/contact" className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-primary-500 transition-colors">
                        Contact
                    </Link>
                    <Button size="sm" className="bg-primary-600 hover:bg-primary-500 text-white font-bold italic uppercase rounded-none skew-x-[-10deg] px-6 border-2 border-primary-600 hover:border-primary-400" asChild>
                        <Link href="/contact">
                            <span className="skew-x-[10deg]">無料相談</span>
                        </Link>
                    </Button>
                </nav>
            </div>
        </header>
    )
}
