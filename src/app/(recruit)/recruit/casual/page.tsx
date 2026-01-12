"use client"


import { Button } from "@/components/ui/button"
import { ArrowLeft, Coffee, Users, MessageCircle, Building2, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CasualInterviewPage() {

    return (
        <div className="min-h-screen bg-zinc-50">
            {/* Header / Hero */}
            <div className="bg-white border-b border-zinc-200">
                <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
                    <Link
                        href="/recruit"
                        className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 text-sm mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        採用トップへ戻る
                    </Link>

                    <div className="text-center max-w-2xl mx-auto">
                        <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-2xl mb-6">
                            <Coffee className="w-8 h-8 text-primary-600" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 font-feature-settings-palt">
                            まずはカジュアルにお話しませんか？
                        </h1>
                        <p className="text-zinc-600 leading-relaxed">
                            選考を受ける前に、株式会社プラスコミットの雰囲気や働き方について<br className="hidden md:block" />
                            ざっくばらんにお話しする場をご用意しています。
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                        <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                            <Users className="w-6 h-6 text-orange-500" />
                        </div>
                        <h3 className="font-bold text-zinc-900 mb-2">チームの雰囲気</h3>
                        <p className="text-sm text-zinc-600">
                            実際に働くメンバーと話すことで、Webサイトだけでは分からないチームのカルチャーを感じていただけます。
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                            <Building2 className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="font-bold text-zinc-900 mb-2">事業や働き方</h3>
                        <p className="text-sm text-zinc-600">
                            具体的な業務内容や、フルリモートワークでの働き方など、気になることを何でもご質問ください。
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                            <MessageCircle className="w-6 h-6 text-green-500" />
                        </div>
                        <h3 className="font-bold text-zinc-900 mb-2">選考とは別枠</h3>
                        <p className="text-sm text-zinc-600">
                            選考要素はありません。ご自身のキャリアについてのご相談なども歓迎です。
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-white border boundary-zinc-200 rounded-3xl p-8 md:p-12 text-center shadow-sm">
                    <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                        カジュアル面談に申し込む
                    </h2>
                    <p className="text-zinc-600 mb-8 max-w-lg mx-auto">
                        お申し込みはメールにて受け付けております。<br />
                        お気軽にご連絡ください。
                    </p>

                    <a href="mailto:recruit@plus-commit.co.jp?subject=カジュアル面談の申し込み&body=氏名：%0D%0A%0D%0A希望日時：%0D%0A%0D%0Aその他質問など：">
                        <Button size="lg" className="w-full md:w-auto min-w-[240px] font-bold py-6 text-base shadow-lg shadow-primary-500/20">
                            <Mail className="w-4 h-4 mr-2" />
                            メールで申し込む
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
