import Link from "next/link"
import { Check, Zap, Crown } from "lucide-react"
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
                        選べる3つのプラン
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
                    {/* Light Plan */}
                    <div className="relative group">
                        <div className="p-1 bg-zinc-900 border border-zinc-800 rounded-[2rem] hover:border-primary-500/50 transition-colors">
                            <div className="bg-zinc-950 rounded-[1.8rem] p-8 h-full flex flex-col">
                                <div className="mb-8 pb-8 border-b border-zinc-800">
                                    <h3 className="text-2xl font-black italic uppercase text-white mb-2 tracking-tight">Light</h3>
                                    <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-6">Self-Paced Learning</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black text-white italic tracking-tighter">¥99,800</span>
                                        <span className="text-zinc-500 font-bold text-xs block text-left pl-1">(税込)</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-10 flex-1">
                                    {[
                                        "コンテンツ永久閲覧",
                                        "コミュニティ永久参加",
                                        "チャットサポート(1年間) ※技術なし",
                                        "K-zoku無料利用",
                                    ].map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 flex-shrink-0">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-zinc-400 font-medium text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>


                            </div>
                        </div>
                    </div>

                    {/* Standard Plan */}
                    <div className="relative group lg:-mt-8">
                        <div className="absolute inset-0 bg-primary-500 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                        <div className="relative p-1 bg-gradient-to-b from-primary-500 to-zinc-900 rounded-[2rem]">
                            <div className="bg-zinc-950 rounded-[1.8rem] p-8 h-full flex flex-col relative overflow-hidden">
                                {/* Badge */}
                                <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-bl-xl skew-x-[-10deg] translate-x-2 -translate-y-1 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                                    <span className="skew-x-[10deg] block">MOST POPULAR</span>
                                </div>

                                <div className="mb-8 pb-8 border-b border-zinc-800">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Zap className="w-6 h-6 text-primary-500 fill-primary-500" />
                                        <h3 className="text-3xl font-black italic uppercase text-white tracking-tight">Standard</h3>
                                    </div>
                                    <p className="text-primary-500 text-sm font-bold uppercase tracking-wider mb-6">Career Change Focus</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-black text-primary-500 italic tracking-tighter drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]">¥299,800</span>
                                        <span className="text-zinc-500 font-bold text-xs block text-left pl-1">(税込)</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-10 flex-1">
                                    {[
                                        "Lightプランの全機能",
                                        "週1回の個別面談(1年間)",
                                        "チャットサポート(1年間)",
                                        "技術・キャリア相談",
                                        "ポートフォリオ添削",
                                    ].map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 flex-shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-zinc-300 font-medium text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>


                            </div>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="relative group">
                        <div className="p-1 bg-zinc-900 border border-zinc-800 rounded-[2rem] hover:border-primary-500/50 transition-colors">
                            <div className="bg-zinc-950 rounded-[1.8rem] p-8 h-full flex flex-col">
                                <div className="mb-8 pb-8 border-b border-zinc-800">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Crown className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                                        <h3 className="text-2xl font-black italic uppercase text-white tracking-tight">Premium</h3>
                                    </div>
                                    <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-6">Lifetime Support</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-black text-white italic tracking-tighter">¥596,000</span>
                                        <span className="text-zinc-500 font-bold text-xs block text-left pl-1">(税込)</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-10 flex-1">
                                    {[
                                        "Standardプランの全機能",
                                        "無期限のチャットサポート",
                                        "無期限の個別面談サポート",
                                        "フリーランス独立支援",
                                        "生涯のキャリアパートナー",
                                    ].map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 flex-shrink-0">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-zinc-400 font-medium text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
