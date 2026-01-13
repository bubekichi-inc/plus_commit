import { Metadata } from 'next'
import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"

export const metadata: Metadata = {
    title: 'プライバシーポリシー | 株式会社プラスコミット',
    description: '株式会社プラスコミットのプライバシーポリシー（個人情報の取り扱いについて）をご確認いただけます。',
}

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-black mb-12">
                        プライバシーポリシー
                    </h1>

                    <div className="prose prose-zinc max-w-none space-y-8">
                        <p className="text-zinc-600 leading-relaxed">
                            株式会社プラスコミット（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と考え、以下のプライバシーポリシーに基づき、適切に取り扱います。
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">1. 個人情報の収集について</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                当社は、お問い合わせ、資料請求、サービスのお申し込み等の際に、お名前、メールアドレス、電話番号、会社名等の個人情報をご提供いただく場合があります。これらの情報は、適法かつ公正な手段により収集いたします。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">2. 個人情報の利用目的</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                当社は、収集した個人情報を以下の目的で利用いたします。
                            </p>
                            <ul className="list-disc list-inside text-zinc-600 space-y-2 pl-4">
                                <li>お問い合わせへの対応</li>
                                <li>サービスの提供・運営</li>
                                <li>サービスに関するご案内・お知らせの送付</li>
                                <li>契約の履行・アフターサービスの提供</li>
                                <li>サービス改善のための調査・分析</li>
                                <li>採用活動における応募者への連絡・選考</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">3. 個人情報の第三者提供</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。ただし、以下の場合はこの限りではありません。
                            </p>
                            <ul className="list-disc list-inside text-zinc-600 space-y-2 pl-4">
                                <li>法令に基づく場合</li>
                                <li>人の生命、身体または財産の保護のために必要な場合</li>
                                <li>公衆衛生の向上または児童の健全な育成の推進のために必要な場合</li>
                                <li>国の機関等への協力が必要な場合</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">4. Cookieの使用について</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                当社のウェブサイトでは、ユーザー体験の向上やアクセス解析のためにCookieを使用しています。Cookieはブラウザの設定により無効化することができますが、一部のサービスが正常に動作しなくなる可能性があります。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">5. 個人情報の安全管理</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切なセキュリティ対策を講じ、個人情報の安全管理に努めます。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">6. お問い合わせ窓口</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。
                            </p>
                            <div className="bg-zinc-50 p-6 rounded-lg">
                                <p className="text-zinc-600">
                                    株式会社プラスコミット<br />
                                    メール: info@plus-commit.com
                                </p>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-black border-b border-zinc-200 pb-2">7. プライバシーポリシーの変更</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                当社は、法令の変更やサービス内容の変更等に伴い、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。
                            </p>
                        </section>

                        <div className="pt-8 border-t border-zinc-200 text-zinc-500 text-sm">
                            <p>制定日: 2024年1月1日</p>
                            <p>最終改定日: 2024年1月1日</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
