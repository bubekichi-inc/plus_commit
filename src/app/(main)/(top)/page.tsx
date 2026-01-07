import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BusinessHero } from "@/components/business/BusinessHero"
import { ArrowRight, ChevronRight, Check, Zap, ExternalLink } from "lucide-react"
import { getNewsList, getPageSetting } from "@/lib/microcms"
import { getRecruitUrl, isRecruitExternal } from "@/lib/site-config"
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const setting = await getPageSetting('top')
    return {
        title: setting?.title,
        description: setting?.description,
    }
}

export default async function HomePage() {
    const { contents: news } = await getNewsList({ limit: 5 })

    // 特選記事かどうかを判定するヘルパー関数
    // microCMSのカスタムフィールドはオブジェクト形式 {fieldId: "special", special: true/false} で返される
    const isSpecialArticle = (item: typeof news[0]) => {
        if (typeof item.special === 'boolean') {
            return item.special === true
        }
        if (typeof item.special === 'object' && item.special !== null) {
            return (item.special as { special?: boolean }).special === true
        }
        return false
    }

    // PICK UP用：special記事を取得
    const pickupNews = news.filter(isSpecialArticle).slice(0, 3)

    return (
        <>
            <Header />
            <main className="min-h-screen pt-0 bg-white">
                <BusinessHero />

                {/* News Section */}
                <section className="py-24 border-t border-zinc-100 relative">
                    <div className="container mx-auto px-6">
                        <div className="flex items-end justify-between mb-12">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black">NEWS</h2>
                            <Link href="/news" className="group text-sm text-zinc-500 hover:text-primary-500 transition-colors flex items-center gap-2 font-bold">
                                VIEW ALL <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {news.map((item) => (
                                <Link key={item.id} href={`/news/${item.id}`} className="group flex items-center gap-6 py-6 border-b border-zinc-100 hover:bg-zinc-50 transition-all px-6 rounded-xl">
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 shrink-0">
                                        <span className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-bold border border-zinc-200 rounded min-w-[100px] text-center">{item.category?.name || "お知らせ"}</span>
                                        <span className="text-sm text-zinc-500 font-mono">{new Date(item.publishedAt).toLocaleDateString('en-US').replace(/\//g, '.')}</span>
                                    </div>
                                    <p className="text-base text-zinc-800 group-hover:text-primary-600 transition-colors flex-1 font-bold">{item.title}</p>
                                    <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-primary-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-32 border-t border-zinc-100 bg-zinc-50/50">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {[
                                { num: "01", label: "CODING", title: "コーディングの力で、\nビジネスを形にする。", description: "デザインカンプからの正確なコーディング、レスポンシブ対応、CMS組み込みまで。", href: "/services#coding" },
                                { num: "02", label: "DX CONSULTING", title: "デジタルで、\n業務を変革する。", description: "業務プロセスの可視化からツール選定、導入支援まで。DX推進をサポート。", href: "/services#dx-consulting" },
                                { num: "03", label: "DEVELOPMENT", title: "テクノロジーで、\n価値を創造する。", description: "Webサイトからアプリケーションまで、モダンな技術で最適解を提供。", href: "/services#web-production" },
                            ].map((service) => (
                                <Link key={service.num} href={service.href} className="group relative p-10 bg-white border border-zinc-200 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500 overflow-hidden rounded-2xl">
                                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="w-8 h-8 text-primary-500 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                    </div>
                                    <div className="flex flex-col h-full">
                                        <span className="text-sm font-bold tracking-widest text-primary-600 mb-4">{service.label}</span>
                                        <h3 className="text-2xl font-bold text-zinc-900 mb-6 leading-relaxed whitespace-pre-line">{service.title}</h3>
                                        <p className="text-zinc-600 text-sm leading-relaxed mb-8 flex-1 font-medium">{service.description}</p>
                                        <div className="text-6xl font-black text-zinc-100 group-hover:text-primary-50 transition-colors self-end">{service.num}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-32 border-t border-zinc-100 bg-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none">
                        <div className="flex whitespace-nowrap animate-scroll text-black">
                            <span className="text-[15vw] font-black mx-8">DIGITAL TRANSFORMATION PARTNER</span>
                            <span className="text-[15vw] font-black mx-8">DIGITAL TRANSFORMATION PARTNER</span>
                        </div>
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pt-20">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-accent mb-6">ABOUT US</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-black mb-16 leading-tight">
                                「<span className="text-gradient-primary">1億総エンジニア社会</span>」を創る。
                            </h3>
                            <div className="grid md:grid-cols-3 gap-12 mb-20 divide-zinc-200 md:divide-x">
                                <div className="text-center">
                                    <div className="text-5xl md:text-6xl font-black text-black mb-2">50<span className="text-accent text-3xl">+</span></div>
                                    <p className="text-zinc-500 text-xs font-bold tracking-widest bg-zinc-100 py-1 px-3 rounded-full inline-block mt-2">支援企業数</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-5xl md:text-6xl font-black text-black mb-2">98<span className="text-accent text-3xl">%</span></div>
                                    <p className="text-zinc-500 text-xs font-bold tracking-widest bg-zinc-100 py-1 px-3 rounded-full inline-block mt-2">顧客満足度</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-5xl md:text-6xl font-black text-black mb-2">200<span className="text-accent text-3xl">+</span></div>
                                    <p className="text-zinc-500 text-xs font-bold tracking-widest bg-zinc-100 py-1 px-3 rounded-full inline-block mt-2">制作実績</p>
                                </div>
                            </div>
                            <Button variant="outline" className="border-zinc-300 text-zinc-900 hover:bg-black hover:text-white rounded-full px-10 h-12 font-bold transition-all" asChild>
                                <Link href="/about">Read More About Us</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Technologies */}
                <section className="py-24 border-t border-zinc-100 bg-zinc-50/30">
                    <div className="container mx-auto px-6">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black">Technologies</h2>
                            <Link href="/technologies" className="group text-sm text-zinc-500 hover:text-primary-500 transition-colors flex items-center gap-2 font-bold">
                                VIEW ALL <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                { icon: "⚛️", name: "React", slug: "react" },
                                { icon: "▲", name: "Next.js", slug: "nextjs" },
                                { icon: "📘", name: "TypeScript", slug: "typescript" },
                                { icon: "🟢", name: "Node.js", slug: "nodejs" },
                                { icon: "☁️", name: "AWS", slug: "aws" },
                                { icon: "🐳", name: "Docker", slug: "docker" },
                            ].map((tech, index) => (
                                <Link key={index} href={`/technologies/${tech.slug}`} className="group p-6 bg-white border border-zinc-200 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5 transition-all text-center rounded-xl">
                                    <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0">{tech.icon}</span>
                                    <span className="text-sm text-zinc-600 group-hover:text-primary-600 transition-colors font-bold">{tech.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service & Works Cards */}
                <section className="py-24 border-t border-zinc-100">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <Link href="/services" className="group relative p-12 bg-zinc-50 border border-zinc-200 hover:border-primary-300 hover:bg-white hover:shadow-xl hover:shadow-primary-500/5 transition-all overflow-hidden rounded-2xl">
                                <div className="absolute top-8 right-8 text-8xl font-black text-zinc-100 leading-none transition-transform group-hover:scale-110 group-hover:text-primary-50">→</div>
                                <div className="relative z-10">
                                    <div className="text-primary-600 font-bold tracking-wider text-xs mb-4">SERVICE</div>
                                    <h3 className="text-3xl font-bold text-zinc-900 mb-4">事業内容・サービス紹介</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed max-w-sm font-medium">コーディング代行、DXコンサルティング、Web制作・開発など、私たちが提供するサービスをご紹介しています。</p>
                                </div>
                            </Link>
                            <Link href="/works" className="group relative p-12 bg-zinc-50 border border-zinc-200 hover:border-accent hover:bg-white hover:shadow-xl hover:shadow-accent/5 transition-all overflow-hidden rounded-2xl">
                                <div className="absolute top-8 right-8 text-8xl font-black text-zinc-100 leading-none transition-transform group-hover:scale-110 group-hover:text-accent-light/10">→</div>
                                <div className="relative z-10">
                                    <div className="text-accent font-bold tracking-wider text-xs mb-4">WORKS</div>
                                    <h3 className="text-3xl font-bold text-zinc-900 mb-4">制作実績</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed max-w-sm font-medium">これまでに手がけたプロジェクトの一部をご紹介。様々な業界・規模のお客様を支援してきました。</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Owned Products Section */}
                <section className="py-24 border-t border-zinc-100 bg-zinc-50/50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <div className="text-accent font-bold tracking-wider text-xs mb-2">OWNED PRODUCTS & MEDIA</div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black">自社プロダクト・運営メディア</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Plus Commit */}
                            <div className="group relative bg-white border border-zinc-200 p-10 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5 transition-all rounded-2xl">
                                <div className="text-zinc-400 font-bold mb-4 tracking-widest uppercase text-xs group-hover:text-primary-500 transition-colors">Skill Support Service</div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-4">プラスコミット</h3>
                                <p className="text-zinc-600 mb-6 leading-relaxed text-sm font-medium">
                                    IT転職・独立を目指す方のためのスキル習得支援サービス。
                                    実践的なスキル習得から転職サポートまで一貫してサポートします。
                                </p>
                            </div>

                            {/* K-zoku */}
                            <div className="group relative bg-white border border-zinc-200 p-10 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5 transition-all rounded-2xl">
                                <div className="text-zinc-400 font-bold mb-4 tracking-widest uppercase text-xs group-hover:text-primary-500 transition-colors">Self-Developed Application</div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-4">K-zoku</h3>
                                <p className="text-zinc-600 mb-6 leading-relaxed text-sm font-medium">
                                    意志に頼らず「仕組み」で解決する、新感覚の努力記録アプリ。
                                    自社開発で培った高度なデータ分析と行動経済学の知見を活用。
                                </p>
                                <Link href="https://k-zoku.com/" target="_blank" className="text-primary-600 font-bold hover:text-primary-700 transition-colors flex items-center gap-2 text-sm">
                                    公式サイトを見る
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Personal Dev */}
                            <div className="group relative bg-white border border-zinc-200 p-10 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5 transition-all rounded-2xl">
                                <div className="text-zinc-400 font-bold mb-4 tracking-widest uppercase text-xs group-hover:text-primary-500 transition-colors">Owned Media</div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-4">個人開発研究所</h3>
                                <p className="text-zinc-600 mb-6 leading-relaxed text-sm font-medium">
                                    エンジニアの挑戦を支える技術メディア。
                                    最新の技術スタックからマネタイズ戦略まで、本物の知見を発信。
                                </p>
                                <Link href="https://personal-dev.net/" target="_blank" className="text-primary-600 font-bold hover:text-primary-700 transition-colors flex items-center gap-2 text-sm">
                                    メディアを見る
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recruit CTA */}
                <section className="py-32 border-t border-zinc-100 bg-gradient-premium relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-white/10 blur-3xl rounded-full translate-x-1/2" />
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-8">
                            Join Our Team
                        </h2>
                        <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto font-medium">
                            自分の成長と、誰かの幸せに、本気で挑戦しませんか。<br />
                            PlusCommitでは、熱い想いを持った仲間を募集しています。
                        </p>
                        <Button size="lg" className="bg-white text-primary-600 hover:bg-zinc-100 font-bold px-12 h-14 rounded-full shadow-lg shadow-black/10" asChild>
                            <Link href={getRecruitUrl()} target={isRecruitExternal() ? "_blank" : undefined}>
                                View Open Positions
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

