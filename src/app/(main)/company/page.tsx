import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen pt-20 bg-black">
                {/* Hero Section */}
                <section className="py-24 border-b border-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-transparent" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-zinc-400 font-medium mb-2 tracking-wider">ABOUT US</div>
                        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
                            会社概要
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                            プラスコミットは、テクノロジーの力であらゆるビジネスの<br className="hidden md:block" />
                            デジタル変革を支援する企業です。
                        </p>
                    </div>
                </section>

                {/* Mission / Vision / Value */}
                <section className="py-24 border-b border-zinc-800 bg-zinc-900/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="text-zinc-400 font-bold tracking-wider text-sm mb-2">PHILOSOPHY</div>
                            <h2 className="text-4xl font-black tracking-tight text-white">企業理念</h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Mission */}
                            <div className="relative bg-zinc-900 border border-zinc-800 p-10 group hover:border-white/30 transition-all">
                                <div className="absolute top-6 right-6 text-7xl font-black text-white/5">01</div>
                                <div className="relative z-10">
                                    <div className="text-white font-bold tracking-wider text-xs mb-4">MISSION</div>
                                    <h3 className="text-2xl font-bold text-white mb-6">
                                        「1億総エンジニア社会」<br />を創る。
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        誰もが技術を武器に活躍できる社会の実現を目指します。
                                        テクノロジーの民主化を推進し、すべての人がデジタルスキルを持つ未来を創造します。
                                    </p>
                                </div>
                            </div>

                            {/* Vision */}
                            <div className="relative bg-zinc-900 border border-zinc-800 p-10 group hover:border-white/30 transition-all">
                                <div className="absolute top-6 right-6 text-7xl font-black text-white/5">02</div>
                                <div className="relative z-10">
                                    <div className="text-white font-bold tracking-wider text-xs mb-4">VISION</div>
                                    <h3 className="text-2xl font-bold text-white mb-6">
                                        デジタル変革の<br />最高のパートナーへ。
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        お客様のビジネス課題を深く理解し、最適なテクノロジーソリューションを提供。
                                        共に成長し、共に成功する真のパートナーであり続けます。
                                    </p>
                                </div>
                            </div>

                            {/* Value */}
                            <div className="relative bg-zinc-900 border border-zinc-800 p-10 group hover:border-white/30 transition-all">
                                <div className="absolute top-6 right-6 text-7xl font-black text-white/5">03</div>
                                <div className="relative z-10">
                                    <div className="text-white font-bold tracking-wider text-xs mb-4">VALUE</div>
                                    <h3 className="text-2xl font-bold text-white mb-6">
                                        挑戦し続け、<br />やり抜く。
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        困難な課題にも果敢に挑み、最後まで責任を持ってやり抜きます。
                                        常に学び続け、技術と人間性の両面で成長を追求します。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Representative Message */}
                <section className="py-24 border-b border-slate-800">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="text-blue-400 font-bold tracking-wider text-sm mb-4">MESSAGE</div>
                                <h2 className="text-4xl font-black tracking-tight text-white mb-8">代表メッセージ</h2>
                                <div className="space-y-6 text-slate-400 leading-relaxed">
                                    <p>
                                        私たちプラスコミットは、「テクノロジーで社会をより良くする」という信念のもと、
                                        2024年に創業しました。
                                    </p>
                                    <p>
                                        現代のビジネス環境において、デジタル技術の活用は選択ではなく必須となっています。
                                        しかし、多くの企業がデジタル化の必要性を感じながらも、
                                        「何から始めればいいかわからない」「技術的なハードルが高い」といった課題を抱えています。
                                    </p>
                                    <p>
                                        私たちは、そうした企業の皆様に寄り添い、
                                        コーディング代行からDXコンサルティング、システム開発まで、
                                        ワンストップでサポートいたします。
                                    </p>
                                    <p>
                                        また、個人の方々に向けては、IT学習・スキル習得支援サービスを通じて、
                                        エンジニアとしての第一歩を踏み出すお手伝いをしています。
                                    </p>
                                    <p className="text-white font-medium">
                                        「1億総エンジニア社会」の実現に向けて、<br />
                                        私たちは挑戦し続けます。
                                    </p>
                                </div>
                                <div className="mt-10">
                                    <p className="text-slate-500 text-sm mb-2">代表取締役</p>
                                    <p className="text-2xl font-bold text-white">青柳 航佑</p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                                    <div className="text-center">
                                        <div className="text-8xl mb-4">👤</div>
                                        <p className="text-slate-600 text-sm">CEO Photo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Numbers */}
                <section className="py-24 border-b border-zinc-800 bg-zinc-900/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="text-zinc-400 font-bold tracking-wider text-sm mb-2">NUMBERS</div>
                            <h2 className="text-4xl font-black tracking-tight text-white">数字で見るプラスコミット</h2>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { number: "50+", label: "支援企業数", suffix: "" },
                                { number: "200+", label: "制作実績", suffix: "" },
                                { number: "98", label: "顧客満足度", suffix: "%" },
                                { number: "2024", label: "設立年", suffix: "" },
                            ].map((item, index) => (
                                <div key={index} className="text-center p-8 bg-zinc-900 border border-zinc-800">
                                    <div className="text-5xl md:text-6xl font-black text-white mb-2">
                                        {item.number}
                                        <span className="text-2xl">{item.suffix}</span>
                                    </div>
                                    <p className="text-zinc-400">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Company Info */}
                <section className="py-24 border-b border-zinc-800">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-1 h-8 bg-white"></div>
                            <h2 className="text-3xl font-bold text-white">会社情報</h2>
                        </div>

                        <div className="bg-zinc-900 border border-zinc-800">
                            <div className="divide-y divide-zinc-800">
                                {                                [
                                    { label: "会社名", value: "株式会社プラスコミット" },
                                    { label: "設立", value: "2024年1月" },
                                    { label: "代表者", value: "代表取締役 青柳 航佑" },
                                    { label: "所在地", value: "〒150-0000 東京都渋谷区" },
                                    { 
                                        label: "事業内容", 
                                        value: [
                                            "コーディング代行",
                                            "DXコンサルティング",
                                            "Web制作・開発",
                                            "業務自動化支援",
                                            "IT学習・スキル習得支援サービス",
                                            "自社プロダクト開発・運営",
                                        ]
                                    },
                                    { label: "取引銀行", value: "みずほ銀行 渋谷支店" },
                                ].map((item, index) => (
                                    <div key={index} className="grid md:grid-cols-4 gap-4 p-6">
                                        <div className="text-zinc-500 font-bold text-sm tracking-wider">
                                            {item.label}
                                        </div>
                                        <div className="md:col-span-3 text-zinc-200">
                                            {Array.isArray(item.value) ? (
                                                <ul className="space-y-2">
                                                    {item.value.map((v, i) => (
                                                        <li key={i} className="flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0" />
                                                            {v}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                item.value
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* History */}
                <section className="py-24 border-b border-zinc-800 bg-zinc-900/30">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-1 h-8 bg-white"></div>
                            <h2 className="text-3xl font-bold text-white">沿革</h2>
                        </div>

                        <div className="max-w-3xl">
                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-zinc-800" />
                                
                                <div className="space-y-8">
                                    {[
                                        { date: "2024年1月", event: "株式会社プラスコミット設立" },
                                        { date: "2024年2月", event: "コーディング代行サービス開始" },
                                        { date: "2024年4月", event: "DXコンサルティング事業開始" },
                                        { date: "2024年6月", event: "自社プロダクト「K-zoku」リリース" },
                                        { date: "2024年8月", event: "IT学習・スキル習得支援サービス「プラスコミット」開始" },
                                        { date: "2024年10月", event: "オウンドメディア「個人開発研究所」開設" },
                                    ].map((item, index) => (
                                        <div key={index} className="flex gap-6 relative">
                                            <div className="w-4 h-4 bg-white rounded-full shrink-0 mt-1 relative z-10" />
                                            <div>
                                                <div className="text-zinc-400 font-bold text-sm mb-1">{item.date}</div>
                                                <div className="text-zinc-200">{item.event}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-black" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-6">
                                お気軽にご相談ください
                            </h2>
                            <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
                                コーディング代行、DXコンサルティング、Web制作のご相談は<br className="hidden md:block" />
                                お問い合わせフォームよりお気軽にどうぞ。
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white hover:bg-zinc-200 text-black font-bold px-12" asChild>
                                    <Link href="/contact">お問い合わせ</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 px-12" asChild>
                                    <Link href="/services">事業紹介を見る</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <BusinessFooter />
        </>
    )
}
