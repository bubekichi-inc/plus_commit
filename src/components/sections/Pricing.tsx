import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-zinc-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
                    <p className="text-zinc-400">プラン紹介</p>
                </div>

                <div className="max-w-md mx-auto mb-16">
                    {/* Single Plan */}
                    <div className="p-8 rounded-2xl bg-zinc-950 border border-white/5 flex flex-col">
                        <div className="mb-8 text-center pb-8 border-b border-white/5">
                            <h3 className="text-xl font-bold mb-4">月額プラン</h3>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-4xl font-black">¥9,980</span>
                                <span className="text-zinc-400">/月</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "チャットサポート",
                                "月2回の面談",
                                "タスク進捗管理"
                            ].map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                                        <Check size={12} />
                                    </div>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button variant="outline" className="w-full" asChild>
                            <Link href="#">申し込む</Link>
                        </Button>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto text-center p-6 rounded-xl bg-zinc-950 border border-white/5">
                    <p className="text-zinc-400">
                        コードレビューや就活対策、チーム開発を重視する方には{" "}
                        <a
                            href="https://shiftb.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline font-medium"
                        >
                            ShiftB
                        </a>
                        {" "}をお勧めします。
                    </p>
                </div>
            </div>
        </section>
    )
}
