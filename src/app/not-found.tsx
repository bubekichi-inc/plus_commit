import Link from "next/link"
import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="min-h-[80vh] flex items-center justify-center bg-white pt-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center mb-8">
                        <div className="p-6 bg-zinc-50 rounded-full">
                            <FileQuestion className="w-16 h-16 text-zinc-400" />
                        </div>
                    </div>
                    <h1 className="text-8xl font-black italic tracking-tighter text-zinc-900 mb-4">
                        404
                    </h1>
                    <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                        ページが見つかりませんでした
                    </h2>
                    <p className="text-zinc-600 max-w-md mx-auto mb-10 leading-relaxed">
                        お探しのページは、移動または削除されたか、<br className="hidden md:block" />
                        URLが間違っている可能性があります。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-8">
                            <Link href="/">
                                トップページに戻る
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-zinc-200 text-zinc-600 hover:bg-zinc-50 font-bold px-8">
                            <Link href="/contact">
                                お問い合わせ
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
