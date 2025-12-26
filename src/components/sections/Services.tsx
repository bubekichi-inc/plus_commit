import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Services() {
    return (
        <section id="services" className="py-24 bg-zinc-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4 text-white">
                        OUR <span className="text-primary-500">SERVICES</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        プラスコミットが展開する、自社プロダクトと運営メディアのご紹介。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* K-zoku */}
                    <div className="group relative bg-zinc-900 border border-zinc-800 p-8 hover:border-primary-500/50 transition-all overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-8xl font-black italic">01</span>
                        </div>
                        <div className="relative z-10">
                            <div className="text-primary-500 font-bold mb-2 tracking-widest uppercase text-sm">Product</div>
                            <h3 className="text-3xl font-bold text-white mb-4">K-zoku</h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                「あなたの人生、そんなもんですか。」<br />
                                意志に頼らず仕組みで解決する、新感覚の努力記録アプリ。
                                ドーパミンをハックする現代社会において、継続を科学し、理想の自分への到達をサポートします。
                            </p>
                            <ul className="space-y-2 mb-8 text-sm text-zinc-500">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                    直感的な努力記録
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                    詳細なデータ分析
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                    継続レベルシステム
                                </li>
                            </ul>
                            <Button className="bg-primary-600 hover:bg-primary-500 text-white font-bold italic uppercase rounded-none skew-x-[-10deg] px-8" asChild>
                                <Link href="https://k-zoku.com/" target="_blank">
                                    <span className="skew-x-[10deg]">サイトを見る</span>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* 個人開発研究所 */}
                    <div className="group relative bg-zinc-900 border border-zinc-800 p-8 hover:border-primary-500/50 transition-all overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-8xl font-black italic">02</span>
                        </div>
                        <div className="relative z-10">
                            <div className="text-primary-500 font-bold mb-2 tracking-widest uppercase text-sm">Media</div>
                            <h3 className="text-3xl font-bold text-white mb-4">個人開発研究所</h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                「個人開発を、科学する。」<br />
                                最新の技術スタック、マネタイズ戦略、グロースの知見まで。
                                挑戦するエンジニアを応援し、成功へのヒントを発信するナレッジ共有メディア。
                            </p>
                            <ul className="space-y-2 mb-8 text-sm text-zinc-500">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                    最先端の技術スタック紹介
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                    収益化・マーケティング戦略
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                    週刊ニュースレター配信
                                </li>
                            </ul>
                            <Button className="bg-primary-600 hover:bg-primary-500 text-white font-bold italic uppercase rounded-none skew-x-[-10deg] px-8" asChild>
                                <Link href="https://personal-dev.net/" target="_blank">
                                    <span className="skew-x-[10deg]">サイトを見る</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Link href="/services" className="text-primary-500 font-bold hover:underline">
                        すべてのサービスを見る →
                    </Link>
                </div>
            </div>
        </section>
    )
}





