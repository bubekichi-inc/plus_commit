import Link from "next/link"
import { Check, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-zinc-950 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-4 text-white tracking-tighter">
                        Membership <span className="text-primary-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">Plans</span>
                    </h2>
                    <p className="text-primary-500 font-bold tracking-widest uppercase border-b-2 border-primary-500 inline-block pb-1">
                        選べる料金プラン
                    </p>
                </div>

                <div className="max-w-2xl mx-auto items-start">
                    {/* Basic Plan */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary-500 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                        <div className="relative p-1 bg-gradient-to-b from-primary-500 to-zinc-900 rounded-[2rem]">
                            <div className="bg-zinc-950 rounded-[1.8rem] p-8 h-full flex flex-col relative overflow-hidden">
                                {/* Badge */}
                                <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-bl-xl skew-x-[-10deg] translate-x-2 -translate-y-1 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                                    <span className="skew-x-[10deg] block">1 Week Free</span>
                                </div>

                                <div className="mb-8 pb-8 border-b border-zinc-800">
                                    <h3 className="text-2xl font-black italic uppercase text-white mb-2 tracking-tight">Basic Plan</h3>
                                    <p className="text-primary-500 text-sm font-bold uppercase tracking-wider mb-6">For Starters</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-black text-primary-500 italic tracking-tighter drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]">¥9,980</span>
                                        <span className="text-zinc-500 font-bold">/ MONTH</span>
                                    </div>
                                </div>

                                <ul className="space-y-5 mb-10 flex-1">
                                    {[
                                        "進捗管理・ケツ叩き",
                                        "月2回のオンライン面談(無料)",
                                        "学習計画の作成サポート",
                                        "チャットでの進捗報告",
                                    ].map((feature) => (
                                        <li key={feature} className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 flex-shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="text-zinc-300 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button className="w-full bg-primary-600 hover:bg-primary-500 text-white font-black italic uppercase py-8 text-lg rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300 border border-primary-400/50" asChild>
                                    <Link href="#">START FREE TRIAL</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
