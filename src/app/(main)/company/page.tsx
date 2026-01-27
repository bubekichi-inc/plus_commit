import Link from "next/link"
import { Metadata } from 'next'
import { getPageSetting } from "@/lib/microcms"

export async function generateMetadata(): Promise<Metadata> {
    const setting = await getPageSetting('company')
    return {
        title: setting?.title || '会社概要 | プラスコミット株式会社',
        description: setting?.description || '株式会社PLUS-COMMITの会社概要です。企業情報、代表メッセージ、事業内容、沿革などをご紹介します。',
        openGraph: {
            title: setting?.title || '会社概要 | プラスコミット株式会社',
            description: setting?.description || '株式会社PLUS-COMMITの会社概要です。企業情報、代表メッセージ、事業内容、沿革などをご紹介します。',
            images: ["/general/ogp.png"],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: setting?.title || '会社概要 | プラスコミット株式会社',
            description: setting?.description || '株式会社PLUS-COMMITの会社概要です。企業情報、代表メッセージ、事業内容、沿革などをご紹介します。',
            images: ["/general/ogp.png"],
        },
    }
}

export default async function CompanyPage() {
    return (
        <>
            <main className="min-h-screen pt-20 bg-white">
                {/* Hero Section */}
                <section className="py-16 md:py-20 border-b border-[#E8E8E8]">
                    <div className="container mx-auto px-6">
                        <p className="text-sm text-[#999999] mb-3 tracking-widest uppercase font-medium">
                            Company
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#242422] tracking-tight mb-6">
                            会社概要
                        </h1>
                        <p className="text-[#666666] text-sm md:text-base leading-[1.8] max-w-2xl">
                            株式会社PLUS-COMMITは、テクノロジーの力でビジネスを加速させ、<br className="hidden md:block" />
                            お客様の成長と成功を全力でサポートする、Web制作・開発・DX支援を行う企業です。
                        </p>
                    </div>
                </section>

                {/* Company Info Section */}
                <section className="py-16 md:py-20 border-b border-[#E8E8E8]">
                    <div className="container mx-auto px-6">
                        <div className="mb-12">
                            <p className="text-sm text-[#999999] mb-3 tracking-widest uppercase font-medium">
                                Info
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#242422] tracking-tight">
                                会社情報
                            </h2>
                        </div>

                        <div className="border-t border-[#E8E8E8]">
                            <div className="divide-y divide-[#E8E8E8]">
                                <div className="py-6 flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                                    <div className="text-[#999999] text-sm font-medium md:w-40 shrink-0">会社名</div>
                                    <div className="text-[#242422] font-medium">株式会社PLUS-COMMIT</div>
                                </div>
                                <div className="py-6 flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                                    <div className="text-[#999999] text-sm font-medium md:w-40 shrink-0">英文社名</div>
                                    <div className="text-[#242422] font-medium">PLUS-COMMIT Inc.</div>
                                </div>
                                <div className="py-6 flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                                    <div className="text-[#999999] text-sm font-medium md:w-40 shrink-0">設立</div>
                                    <div className="text-[#242422] font-medium">2024年4月</div>
                                </div>
                                <div className="py-6 flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                                    <div className="text-[#999999] text-sm font-medium md:w-40 shrink-0">資本金</div>
                                    <div className="text-[#242422] font-medium">100万円</div>
                                </div>
                                <div className="py-6 flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                                    <div className="text-[#999999] text-sm font-medium md:w-40 shrink-0">代表取締役</div>
                                    <div className="text-[#242422] font-medium">田中 太郎</div>
                                </div>
                                <div className="py-6 flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                                    <div className="text-[#999999] text-sm font-medium md:w-40 shrink-0">所在地</div>
                                    <div className="text-[#242422] font-medium">東京都</div>
                                </div>
                                <div className="py-6 flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                                    <div className="text-[#999999] text-sm font-medium md:w-40 shrink-0">お問い合わせ</div>
                                    <div>
                                        <Link href="/contact" className="text-[#008CFF] hover:opacity-70 transition-opacity font-medium link-underline">
                                            お問い合わせフォームへ →
                                        </Link>
                                    </div>
                                </div>
                                <div className="py-6 flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                                    <div className="text-[#999999] text-sm font-medium md:w-40 shrink-0">事業内容</div>
                                    <div className="text-[#242422]">
                                        <ul className="space-y-2">
                                            <li className="font-medium">Web制作・開発事業</li>
                                            <li className="font-medium">DXコンサルティング・導入支援</li>
                                            <li className="font-medium">システムエンジニアリングサービス（SES）</li>
                                            <li className="font-medium">コーディング代行事業</li>
                                            <li className="font-medium">ITコンサルティング事業</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* History Section */}
                <section className="py-16 md:py-20 bg-[#F8F8F8]">
                    <div className="container mx-auto px-6">
                        <div className="mb-12">
                            <p className="text-sm text-[#999999] mb-3 tracking-widest uppercase font-medium">
                                History
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#242422] tracking-tight">
                                沿革
                            </h2>
                        </div>

                        <div className="border-t border-[#E8E8E8]">
                            <div className="divide-y divide-[#E8E8E8]">
                                <div className="py-6 flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                                    <div className="text-[#242422] font-bold md:w-40 shrink-0">2024年4月</div>
                                    <div className="text-[#666666]">株式会社PLUS-COMMIT 設立</div>
                                </div>
                                <div className="py-6 flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                                    <div className="text-[#242422] font-bold md:w-40 shrink-0">2024年5月</div>
                                    <div className="text-[#666666]">Web制作・開発事業 開始</div>
                                </div>
                                <div className="py-6 flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                                    <div className="text-[#242422] font-bold md:w-40 shrink-0">2024年7月</div>
                                    <div className="text-[#666666]">DXコンサルティング事業 開始</div>
                                </div>
                                <div className="py-6 flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                                    <div className="text-[#242422] font-bold md:w-40 shrink-0">2024年10月</div>
                                    <div className="text-[#666666]">SES事業 開始</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
