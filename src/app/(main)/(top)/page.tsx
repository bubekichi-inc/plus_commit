import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BusinessHero } from "@/components/business/BusinessHero"
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
            <BusinessHeader />
            <main className="min-h-screen pt-20 bg-white">
                <BusinessHero />

                {/* News Section */}
                <section className="py-20 border-t border-zinc-200">
                    <div className="container mx-auto px-4">
                        <div className="flex items-start justify-between mb-10">
                            <h2 className="text-4xl font-black tracking-tight text-black">NEWS</h2>
                            <Link 
                                href="/news" 
                                className="text-sm text-zinc-500 hover:text-black transition-colors flex items-center gap-2"
                            >
                                ALL
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        
                        <div className="space-y-0">
                            {news.map((item) => (
                                <Link 
                                    key={item.id}
                                    href={`/news/${item.id}`}
                                    className="group flex items-start gap-6 py-6 border-b border-zinc-200 hover:bg-zinc-50 transition-colors -mx-4 px-4"
                                >
                                    <div className="flex items-center gap-4 shrink-0">
                                        <span className="px-3 py-1 bg-zinc-100 text-zinc-500 text-xs font-bold border border-zinc-200 min-w-[100px] text-center">
                                            {item.category?.name || "お知らせ"}
                                        </span>
                                        <span className="text-sm text-zinc-500 min-w-[100px]">
                                            {new Date(item.publishedAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}
                                        </span>
                                    </div>
                                    <p className="text-base text-zinc-700 group-hover:text-black transition-colors flex-1">
                                        {item.title}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-24 border-t border-zinc-200 bg-zinc-50">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-0">
                            {[
                                {
                                    num: "01",
                                    label: "CODING",
                                    title: "コーディングの力で、\nビジネスを形にする。",
                                    description: "デザインカンプからの正確なコーディング、レスポンシブ対応、CMS組み込みまで。",
                                    href: "/services#coding",
                                },
                                {
                                    num: "02",
                                    label: "DX CONSULTING",
                                    title: "デジタルで、\n業務を変革する。",
                                    description: "業務プロセスの可視化からツール選定、導入支援まで。DX推進をサポート。",
                                    href: "/services#dx-consulting",
                                },
                                {
                                    num: "03",
                                    label: "DEVELOPMENT",
                                    title: "テクノロジーで、\n価値を創造する。",
                                    description: "Webサイトからアプリケーションまで、モダンな技術で最適解を提供。",
                                    href: "/services#web-production",
                                },
                            ].map((service) => (
                                <Link
                                    key={service.num}
                                    href={service.href}
                                    className="group relative p-8 lg:p-10 border-r border-zinc-200 last:border-r-0 hover:bg-white transition-all"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-5xl font-black text-zinc-200/50">{service.num}</span>
                                        <span className="text-xs font-bold tracking-wider text-zinc-500">{service.label}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-4 leading-relaxed whitespace-pre-line group-hover:text-zinc-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <span className="text-black text-sm font-medium group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                                        詳しく見る
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PICK UP Section */}
                {pickupNews.length > 0 && (
                    <section className="py-24 border-t border-zinc-800">
                        <div className="container mx-auto px-4">
                            <h2 className="text-4xl font-black tracking-tight text-white mb-12">PICK UP</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {pickupNews.map((item, index) => (
                                    <Link 
                                        key={item.id}
                                        href={`/news/${item.id}`}
                                        className="group"
                                    >
                                        <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 mb-4 flex items-center justify-center relative overflow-hidden">
                                            {item.thumbnail ? (
                                                <img 
                                                    src={item.thumbnail.url} 
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <span className="text-7xl font-black text-zinc-700/50">0{index + 1}</span>
                                            )}
                                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors" />
                                        </div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-xs text-black font-bold">{item.category?.name || "お知らせ"}</span>
                                            <span className="text-xs text-zinc-500">
                                                {new Date(item.publishedAt).toLocaleDateString('ja-JP').replace(/\//g, '.')}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-zinc-800 group-hover:text-black transition-colors leading-relaxed">
                                            {item.title}
                                        </h3>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* About Section */}
                <section className="py-32 border-t border-zinc-200 bg-zinc-50 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center overflow-hidden opacity-[0.03]">
                        <div className="flex whitespace-nowrap animate-scroll text-black">
                            <span className="text-[20vw] font-black mx-8">
                                DIGITAL TRANSFORMATION PARTNER
                            </span>
                            <span className="text-[20vw] font-black mx-8">
                                DIGITAL TRANSFORMATION PARTNER
                            </span>
                        </div>
                    </div>
                    
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-black mb-8 text-center">ABOUT US</h2>
                            
                            <div className="grid md:grid-cols-3 gap-8 mb-16">
                                <div className="text-center">
                                    <div className="text-6xl md:text-7xl font-black text-black mb-2 leading-none">
                                        50<span className="text-3xl align-top">+</span>
                                    </div>
                                    <p className="text-zinc-500 text-sm">支援企業数</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-6xl md:text-7xl font-black text-black mb-2 leading-none">
                                        98<span className="text-3xl align-top">%</span>
                                    </div>
                                    <p className="text-zinc-500 text-sm">顧客満足度</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-6xl md:text-7xl font-black text-black mb-2 leading-none">
                                        200<span className="text-3xl align-top">+</span>
                                    </div>
                                    <p className="text-zinc-500 text-sm">制作実績</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-black font-bold tracking-widest text-sm mb-4">OUR MISSION</p>
                                <p className="text-2xl md:text-4xl text-black font-black leading-tight mb-6 italic">
                                    「1億総エンジニア社会」を創る。
                                </p>
                                <p className="text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                                    私たちは,最新のテクノロジーと確かな技術力で,お客様のビジネス課題を解決するだけでなく,<br className="hidden md:block" />
                                    誰もが技術を武器に活躍できる「1億総エンジニア社会」の実現を目指しています。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="py-24 border-t border-zinc-200">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <div className="text-black font-bold tracking-wider text-sm mb-2">TECHNOLOGIES</div>
                                <h2 className="text-4xl font-black tracking-tight text-black">取り扱い技術</h2>
                            </div>
                            <Link href="/technologies" className="text-sm text-zinc-500 hover:text-black transition-colors flex items-center gap-2">
                                ALL
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
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
                                <Link 
                                    key={index}
                                    href={`/technologies/${tech.slug}`}
                                    className="group p-6 bg-white border border-zinc-200 hover:border-zinc-400 transition-all text-center"
                                >
                                    <span className="text-4xl block mb-3">{tech.icon}</span>
                                    <span className="text-sm text-zinc-600 group-hover:text-black transition-colors font-medium">{tech.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service & Works Cards */}
                <section className="py-24 border-t border-zinc-800 bg-zinc-900/30">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            <Link 
                                href="/services"
                                className="group relative p-10 bg-zinc-900 border border-zinc-800 hover:border-white/30 transition-all overflow-hidden"
                            >
                                <div className="absolute top-4 right-4 text-8xl font-black text-white/5 leading-none">→</div>
                                <div className="relative z-10">
                                    <div className="text-white font-bold tracking-wider text-xs mb-4">SERVICE</div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zinc-300 transition-colors">
                                        事業内容・サービス紹介
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        コーディング代行、DXコンサルティング、Web制作・開発など、<br />
                                        私たちが提供するサービスをご紹介しています。
                                    </p>
                                </div>
                            </Link>
                            <Link 
                                href="/works"
                                className="group relative p-10 bg-zinc-900 border border-zinc-800 hover:border-white/30 transition-all overflow-hidden"
                            >
                                <div className="absolute top-4 right-4 text-8xl font-black text-white/5 leading-none">→</div>
                                <div className="relative z-10">
                                    <div className="text-white font-bold tracking-wider text-xs mb-4">WORKS</div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zinc-300 transition-colors">
                                        制作実績
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        これまでに手がけたプロジェクトの一部をご紹介。<br />
                                        様々な業界・規模のお客様を支援してきました。
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="py-32 border-t border-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-black" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
                                お問い合わせ
                            </h2>
                            <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
                                コーディング代行、DXコンサルティング、Web制作のご相談は<br />
                                お気軽にお問い合わせください。
                            </p>
                            <Button size="lg" className="bg-white hover:bg-zinc-200 text-black font-bold px-16 py-6 text-lg" asChild>
                                <Link href="/contact">問い合わせする</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Owned Products Section */}
                <section className="py-24 border-t border-zinc-800">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="text-zinc-400 font-bold tracking-wider text-xs mb-2">OWNED PRODUCTS & MEDIA</div>
                            <h2 className="text-4xl font-black tracking-tight text-white">自社プロダクト・運営メディア</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* プラスコミット */}
                            <div className="group relative bg-zinc-900 border border-zinc-800 p-10 hover:border-white/30 transition-all">
                                <div className="text-white font-bold mb-4 tracking-widest uppercase text-xs">Skill Support Service</div>
                                <h3 className="text-3xl font-bold text-white mb-4">プラスコミット</h3>
                                <p className="text-zinc-400 mb-6 leading-relaxed">
                                    IT転職・独立を目指す方のためのスキル習得支援サービス。
                                    実践的なスキル習得から転職サポートまで一貫してサポートします。
                                </p>
                            </div>
                            
                            {/* K-zoku */}
                            <div className="group relative bg-zinc-900 border border-zinc-800 p-10 hover:border-white/30 transition-all">
                                <div className="text-white font-bold mb-4 tracking-widest uppercase text-xs">Self-Developed Application</div>
                                <h3 className="text-3xl font-bold text-white mb-4">K-zoku</h3>
                                <p className="text-zinc-400 mb-6 leading-relaxed">
                                    意志に頼らず「仕組み」で解決する、新感覚の努力記録アプリ。
                                    自社開発で培った高度なデータ分析と行動経済学の知見を活用。
                                </p>
                                <Link href="https://k-zoku.com/" target="_blank" className="text-white font-medium hover:underline flex items-center gap-2">
                                    公式サイトを見る 
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>

                            {/* 個人開発研究所 */}
                            <div className="group relative bg-zinc-50 border border-zinc-200 p-10 hover:border-zinc-400 transition-all">
                                <div className="text-black font-bold mb-4 tracking-widest uppercase text-xs">Owned Media</div>
                                <h3 className="text-3xl font-bold text-black mb-4">個人開発研究所</h3>
                                <p className="text-zinc-600 mb-6 leading-relaxed">
                                    エンジニアの挑戦を支える技術メディア。
                                    最新の技術スタックからマネタイズ戦略まで、本物の知見を発信。
                                </p>
                                <Link href="https://personal-dev.net/" target="_blank" className="text-black font-medium hover:underline flex items-center gap-2">
                                    メディアを見る 
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recruit Section */}
                <section className="py-32 border-t border-zinc-200 bg-zinc-50 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black/5 to-transparent" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="text-black font-bold tracking-wider text-xs mb-4">RECRUIT</div>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black mb-8 leading-tight">
                                    自分の成長と、<br />
                                    誰かの幸せに、<br />
                                    本気で挑戦しませんか。
                                </h2>
                                <p className="text-zinc-600 mb-10 leading-relaxed text-lg">
                                    誰かのために、自分のスキルを活かしたり、<br />
                                    未来のために、もっと自分を成長させたい。<br />
                                    そんなマインドと行動力を持った仲間を募集しています。
                                </p>
                                <Button variant="outline" className="border-zinc-300 text-zinc-700 hover:bg-zinc-100 px-8" asChild>
                                    {isRecruitExternal() ? (
                                        <a href={getRecruitUrl()} target="_blank" rel="noopener noreferrer">
                                            採用情報を見る
                                        </a>
                                    ) : (
                                        <Link href={getRecruitUrl()}>
                                            採用情報を見る
                                        </Link>
                                    )}
                                </Button>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-6">募集職種</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { role: "エンジニア", desc: "フロントエンド・バックエンド" },
                                        { role: "コンサルタント", desc: "DX推進・業務改善" },
                                        { role: "ディレクター", desc: "プロジェクト管理" },
                                        { role: "デザイナー", desc: "UI/UXデザイン" },
                                    ].map((job, index) => (
                                        isRecruitExternal() ? (
                                            <a
                                                key={index}
                                                href={getRecruitUrl('/#jobs')}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-5 bg-white border border-zinc-200 hover:border-zinc-400 transition-all"
                                            >
                                                <div className="text-black font-bold mb-1">{job.role}</div>
                                                <div className="text-zinc-500 text-xs">{job.desc}</div>
                                            </a>
                                        ) : (
                                            <Link
                                                key={index}
                                                href={getRecruitUrl('/#jobs')}
                                                className="p-5 bg-white border border-zinc-200 hover:border-zinc-400 transition-all"
                                            >
                                                <div className="text-black font-bold mb-1">{job.role}</div>
                                                <div className="text-zinc-500 text-xs">{job.desc}</div>
                                            </Link>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <BusinessFooter />
        </>
    )
}

