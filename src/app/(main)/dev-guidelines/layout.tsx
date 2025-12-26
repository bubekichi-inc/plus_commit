import Link from "next/link"
import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { ChevronDown } from "lucide-react"

export default function GuidelinesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const navItems = [
        { title: "概要", href: "/dev-guidelines" },
        {
            title: "コーディング規約",
            href: "/dev-guidelines/coding-standards",
            children: [
                { title: "Next.js + React", href: "/dev-guidelines/coding-standards/nextjs-react" },
            ]
        },
        { title: "プロダクト設計", href: "/dev-guidelines/product-design" },
    ]

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 flex pt-20">
                {/* Sidebar */}
                <aside className="w-64 border-r border-zinc-800 hidden md:block overflow-y-auto h-[calc(100vh-5rem)] sticky top-20">
                    <nav className="p-6 space-y-1">
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 px-3">
                            Guidelines
                        </p>
                        {navItems.map((item) => (
                            <div key={item.href} className="group relative">
                                <Link
                                    href={item.href}
                                    className="flex items-center justify-between px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 rounded transition-colors"
                                >
                                    <span>{item.title}</span>
                                    {item.children && (
                                        <ChevronDown className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-transform group-hover:rotate-180" />
                                    )}
                                </Link>

                                {item.children && (
                                    <div className="hidden group-hover:block ml-4 mt-1 space-y-1">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-3 py-2 text-xs text-zinc-500 hover:text-white hover:bg-zinc-900 rounded transition-colors"
                                            >
                                                {child.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8 md:p-12 max-w-4xl mx-auto">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

