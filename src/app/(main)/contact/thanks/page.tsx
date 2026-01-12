import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
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
            <Header />
            <main className="min-h-screen pt-20 bg-white">
                <section className="py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            {/* 成功アイコン */}
                            <div className="mb-8 flex justify-center">
                                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                                </div>
                            </div>

                            {/* タイトル */}
                            <h1 className="text-4xl font-black tracking-tight text-zinc-900 mb-4">
                                お問い合わせを受け付けました
                            </h1>
                            <p className="text-lg text-zinc-600 mb-12">
                                この度はお問い合わせいただき、誠にありがとうございます。
                            </p>

                            {/* 案内カード */}
                            <div className="bg-zinc-50 rounded-xl p-8 mb-12 text-left">
                                <h2 className="text-lg font-bold text-zinc-900 mb-6">
                                    今後の流れ
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-zinc-200">
                                            <Mail className="w-5 h-5 text-zinc-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-zinc-900 mb-1">
                                                自動返信メールをお送りしました
                                            </h3>
                                            <p className="text-sm text-zinc-600">
                                                ご入力いただいたメールアドレスに確認メールをお送りしました。届いていない場合は迷惑メールフォルダをご確認ください。
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-zinc-200">
                                            <Clock className="w-5 h-5 text-zinc-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-zinc-900 mb-1">
                                                2営業日以内にご連絡いたします
                                            </h3>
                                            <p className="text-sm text-zinc-600">
                                                担当者がお問い合わせ内容を確認し、改めてご連絡させていただきます。お急ぎの場合はお電話でもお問い合わせいただけます。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ボタン */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button 
                                    size="lg" 
                                    className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-8"
                                    asChild
                                >
                                    <Link href="/">
                                        トップページへ戻る
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-zinc-300 hover:bg-zinc-50 font-bold px-8"
                                    asChild
                                >
                                    <Link href="/works">
                                        制作実績を見る
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
