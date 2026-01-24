import Link from "next/link"
import { CheckCircle, Mail, Clock, ArrowRight } from "lucide-react"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'お問い合わせ完了 | 株式会社PLUS-COMMIT',
    description: 'お問い合わせありがとうございます。担当者より2営業日以内にご連絡いたします。',
}

export default function ContactThanksPage() {
    return (
        <>
            <main className="min-h-screen pt-20 bg-white">
                <section className="py-20 md:py-28">
                    <div className="container mx-auto px-6">
                        <div className="max-w-2xl mx-auto">
                            {/* Success Icon */}
                            <div className="mb-8 flex justify-center">
                                <div className="w-16 h-16 bg-[#008CFF]/10 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-8 h-8 text-[#008CFF]" />
                                </div>
                            </div>

                            {/* Title */}
                            <div className="text-center mb-12">
                                <p className="text-sm text-[#999999] mb-3 tracking-widest uppercase font-medium">
                                    Complete
                                </p>
                                <h1 className="text-2xl md:text-3xl font-bold text-[#242422] tracking-tight mb-4">
                                    お問い合わせを受け付けました
                                </h1>
                                <p className="text-[#666666] text-sm md:text-base leading-[1.8]">
                                    この度はお問い合わせいただき、誠にありがとうございます。
                                </p>
                            </div>

                            {/* Info Card */}
                            <div className="bg-[#F8F8F8] p-6 md:p-8 mb-12">
                                <h2 className="text-lg font-bold text-[#242422] mb-6">
                                    今後の流れ
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white border border-[#E8E8E8] flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-[#666666]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#242422] mb-1">
                                                自動返信メールをお送りしました
                                            </h3>
                                            <p className="text-sm text-[#666666] leading-[1.8]">
                                                ご入力いただいたメールアドレスに確認メールをお送りしました。届いていない場合は迷惑メールフォルダをご確認ください。
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white border border-[#E8E8E8] flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-[#666666]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#242422] mb-1">
                                                2営業日以内にご連絡いたします
                                            </h3>
                                            <p className="text-sm text-[#666666] leading-[1.8]">
                                                担当者がお問い合わせ内容を確認し、改めてご連絡させていただきます。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/"
                                    className="btn-arrow inline-flex h-14 items-center justify-center rounded-[5px] bg-[#242422] px-8 text-sm font-medium text-white hover:opacity-80 transition-opacity"
                                >
                                    トップページへ戻る
                                    <ArrowRight className="w-4 h-4 ml-3" />
                                </Link>
                                <Link
                                    href="/works"
                                    className="inline-flex h-14 items-center justify-center rounded-[5px] border border-[#DDDDDD] bg-white px-8 text-sm font-medium text-[#242422] hover:bg-[#242422] hover:text-white hover:border-[#242422] transition-all"
                                >
                                    導入事例を見る
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
