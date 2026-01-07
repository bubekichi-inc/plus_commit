"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

type FAQItem = {
    category: string
    question: string
    answer: string
}

const faqItems: FAQItem[] = [
    // 選考について
    {
        category: "選考について",
        question: "選考フローを教えてください",
        answer: "書類選考 → カジュアル面談 → 技術面接（職種による） → 最終面接 → 内定 という流れが基本です。ポジションによって変動する場合があります。通常、エントリーから内定まで2〜4週間程度を想定しています。"
    },
    {
        category: "選考について",
        question: "面接はオンラインで受けられますか？",
        answer: "はい、全ての面接をオンラインで実施しています。Google MeetまたはZoomを使用します。ご希望があれば対面での面接も可能です。"
    },
    {
        category: "選考について",
        question: "ポートフォリオは必要ですか？",
        answer: "エンジニア・デザイナー職の場合は、できる限りご提出をお願いしています。GitHubアカウントや個人開発のプロダクト、過去の制作物などがあれば評価の参考にさせていただきます。"
    },
    // 働き方について
    {
        category: "働き方について",
        question: "フルリモートで働けますか？",
        answer: "はい、フルリモートでの勤務が可能です。日本国内であれば、どこからでも働くことができます。コミュニケーションはSlack、Google Meet、Notionを中心に行っています。"
    },
    {
        category: "働き方について",
        question: "勤務時間は決まっていますか？",
        answer: "コアタイムなしのフルフレックス制を採用しています。10:00〜19:00を基本としていますが、個人の生産性が最大化できる時間帯で働いていただけます。ただし、チームMTGなどには参加をお願いしています。"
    },
    {
        category: "働き方について",
        question: "副業はできますか？",
        answer: "はい、本業に支障がなければ副業・複業は自由です。多様な経験がスキルアップにつながると考えています。競合他社での副業のみ事前相談をお願いしています。"
    },
    // 入社後について
    {
        category: "入社後について",
        question: "入社後の研修はありますか？",
        answer: "入社後1週間程度のオンボーディング期間を設けています。会社の文化、使用ツール、プロジェクトの進め方などをお伝えします。その後はメンターがつき、実際のプロジェクトに参加しながらキャッチアップしていただきます。"
    },
    {
        category: "入社後について",
        question: "キャリアパスについて教えてください",
        answer: "スペシャリスト路線（技術を極める）とマネジメント路線（チームを率いる）の両方のキャリアパスを用意しています。定期的な1on1で、あなたの目指すキャリアをサポートします。"
    },
    {
        category: "入社後について",
        question: "技術スタックを教えてください",
        answer: "フロントエンドはReact/Next.js、バックエンドはNode.js/Python、インフラはAWS/Vercelを中心に使用しています。プロジェクトによって最適な技術を選択しています。新しい技術へのチャレンジも歓迎しています。"
    },
    // その他
    {
        category: "その他",
        question: "業務委託から正社員への転換は可能ですか？",
        answer: "はい、可能です。実際に業務委託としてジョインし、お互いの相性を確認した上で正社員に転換した方も多くいます。お気軽にご相談ください。"
    },
    {
        category: "その他",
        question: "経験が浅くても応募できますか？",
        answer: "ポジションによります。インターンや一部のポジションでは、経験よりも学習意欲やポテンシャルを重視しています。まずはお気軽にカジュアル面談にお申し込みください。"
    },
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    
    const categories = Array.from(new Set(faqItems.map(item => item.category)))

    return (
        <>
            {/* Hero */}
            <section className="py-32 px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 to-black" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link 
                            href="/recruit" 
                            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors mb-8"
                        >
                            ← 採用トップへ戻る
                        </Link>
                        <span className="block text-emerald-400 text-sm font-bold tracking-[0.3em] uppercase mb-4">
                            FAQ
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                            よくある質問
                        </h1>
                        <p className="text-white/60 text-lg">
                            採用に関するよくある質問をまとめました。<br />
                            こちらに掲載されていない質問は、お気軽にお問い合わせください。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ List */}
            <section className="py-20 px-8">
                <div className="max-w-4xl mx-auto">
                    {categories.map((category) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-xl font-bold text-emerald-400 mb-6">
                                {category}
                            </h2>
                            <div className="space-y-4">
                                {faqItems
                                    .filter(item => item.category === category)
                                    .map((item, index) => {
                                        const globalIndex = faqItems.indexOf(item)
                                        const isOpen = openIndex === globalIndex

                                        return (
                                            <div
                                                key={index}
                                                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                                                    className="w-full p-6 flex items-center justify-between text-left"
                                                >
                                                    <span className="text-white font-medium pr-4">
                                                        {item.question}
                                                    </span>
                                                    <ChevronDown
                                                        className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform ${
                                                            isOpen ? "rotate-180" : ""
                                                        }`}
                                                    />
                                                </button>
                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ${
                                                        isOpen ? "max-h-96" : "max-h-0"
                                                    }`}
                                                >
                                                    <div className="px-6 pb-6 text-white/60 leading-relaxed">
                                                        {item.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-8 border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            その他のご質問
                        </h2>
                        <p className="text-white/50 mb-8">
                            上記以外のご質問は、エントリーフォームまたはお問い合わせフォームからお気軽にどうぞ。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/recruit/entry"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-bold px-8 py-4 rounded-full hover:from-emerald-400 hover:to-teal-400 transition-all"
                            >
                                エントリーする
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all"
                            >
                                お問い合わせ
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-20 px-8 border-t border-white/10">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link
                            href="/recruit/jobs"
                            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-all"
                        >
                            <span className="text-white/40 text-sm">Previous</span>
                            <h3 className="text-xl font-bold text-white mt-2 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                                ← 募集職種
                            </h3>
                        </Link>
                        <Link
                            href="/recruit/entry"
                            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-all"
                        >
                            <span className="text-white/40 text-sm">Next</span>
                            <h3 className="text-xl font-bold text-white mt-2 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                                エントリー
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </h3>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}









