import { Metadata } from 'next'
import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"

export const metadata: Metadata = {
    title: '個人情報保護方針 | 株式会社プラスコミット',
    description: '株式会社プラスコミットの個人情報保護方針をご確認いただけます。',
}

export default function PersonalInfoPolicyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-black mb-12">
                        個人情報保護方針
                    </h1>

                    <div className="prose prose-zinc max-w-none space-y-8">
                        <p className="text-zinc-600 leading-relaxed">
                            株式会社プラスコミット（以下「当社」といいます）は、個人情報保護の重要性を認識し、個人情報の保護に関する法律（個人情報保護法）およびその他の関連法令を遵守し、以下の方針に基づき個人情報の適切な取り扱いと保護に努めます。
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">1. 基本方針</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                当社は、個人情報の重要性を認識し、その収集、利用、管理について、個人情報保護法をはじめとする関連法令および社内規程を遵守し、個人情報の適切な取り扱いに努めます。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">2. 個人情報の取得</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                当社は、個人情報を取得する際には、利用目的を明確にし、適法かつ公正な手段によって取得します。また、取得した個人情報は、利用目的の達成に必要な範囲内で取り扱います。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">3. 個人情報の利用</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                当社は、取得した個人情報を、あらかじめ明示した利用目的の範囲内でのみ利用します。利用目的を変更する場合は、ご本人に通知または公表いたします。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">4. 安全管理措置</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                当社は、個人情報への不正アクセス、個人情報の紛失、破壊、改ざんおよび漏洩等を防止するため、必要かつ適切なセキュリティ対策を講じ、個人情報の安全管理に努めます。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">5. 従業員の監督</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                当社は、個人情報を取り扱う従業員に対し、個人情報の適切な取り扱いについて教育・監督を行い、個人情報保護に関する意識の向上に努めます。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">6. 委託先の監督</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                当社は、個人情報の取り扱いを外部に委託する場合は、委託先に対し適切な監督を行い、個人情報の安全管理が図られるよう必要かつ適切な措置を講じます。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">7. 開示・訂正・削除等の請求</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                当社は、ご本人から個人情報の開示、訂正、追加、削除、利用停止等のご請求があった場合は、ご本人確認を行った上で、法令に従い適切に対応いたします。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">8. 継続的改善</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                当社は、個人情報の取り扱いに関する運用状況を適宜見直し、継続的な改善に努めます。また、必要に応じて本方針を変更することがあります。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">9. お問い合わせ窓口</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                個人情報の取り扱いに関するお問い合わせ、苦情、ご相談等は、以下の窓口までご連絡ください。
                            </p>
                            <div className="bg-zinc-50 p-6 rounded-lg">
                                <p className="text-zinc-600">
                                    株式会社プラスコミット<br />
                                    個人情報保護管理責任者<br />
                                    メール: info@plus-commit.com
                                </p>
                            </div>
                        </section>

                        <div className="pt-8 border-t border-zinc-200 text-zinc-500 text-sm">
                            <p>制定日: 2024年1月1日</p>
                            <p>株式会社プラスコミット</p>
                            <p>代表取締役</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
