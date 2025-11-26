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

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    {/* Normal Plan */}
                    <div className="p-8 rounded-2xl bg-zinc-950 border border-white/5 flex flex-col">
                        <div className="mb-8 text-center pb-8 border-b border-white/5">
                            <h3 className="text-xl font-bold mb-4">通常プラン</h3>
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

                    {/* Stoic Plan */}
                    <div className="p-8 rounded-2xl bg-zinc-950/50 border border-zinc-800 flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-zinc-800 text-zinc-300 text-xs font-bold px-4 py-1 rounded-b-lg">
                            限定枠
                        </div>

                        <div className="mb-8 text-center pb-8 border-b border-white/5 pt-4">
                            <h3 className="text-xl font-bold mb-4">ストイックプラン</h3>
                            <div className="flex items-baseline justify-center gap-1 mb-2">
                                <span className="text-4xl font-black">¥299,800</span>
                                <span className="text-zinc-400">(一括)</span>
                            </div>
                            <p className="text-xs text-zinc-500">※3分割まで対応</p>
                            <p className="text-xs text-red-400 mt-2 font-medium">※毎月若干名のみ募集</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "1年間のチャットサポート",
                                "面談チケット30回分 (1年間有効)",
                                "会員限定コンテンツ閲覧",
                                "オフラインイベント参加権",
                                "現役エンジニアによるマネタイズ技術サポート"
                            ].map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 flex-shrink-0">
                                        <Check size={12} />
                                    </div>
                                    <span className="text-zinc-300">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white" asChild>
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
