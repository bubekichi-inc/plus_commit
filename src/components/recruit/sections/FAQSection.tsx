"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        q: "未経験からの応募は可能ですか？",
        a: "ポテンシャル採用も行っていますが、プログラミングの基礎知識や、自ら学習を進めている姿勢を重視します。個人開発やポートフォリオがあると評価の対象になります。"
    },
    {
        q: "試用期間はありますか？",
        a: "3ヶ月間の試用期間を設けています。待遇は正社員登用後と変わりません。試用期間中も通常通りプロジェクトに参加いただきます。"
    },
    {
        q: "副業は可能ですか？",
        a: "可能です（申請制）。個人のスキルアップや新しい挑戦を尊重しています。ただし、競合他社での業務は禁止しています。"
    },
    {
        q: "リモートワークは可能ですか？",
        a: "フルリモート勤務が可能です。フレックス制も導入しており、コアタイムなしで柔軟な働き方ができます。必要に応じてオンラインミーティングを実施します。"
    },
    {
        q: "選考プロセスを教えてください",
        a: "書類選考 → カジュアル面談 → 技術面接 → 最終面接 → 内定 の流れです。技術面接ではコーディングテストまたはポートフォリオレビューを実施します。"
    },
    {
        q: "入社後の研修はありますか？",
        a: "オンボーディングプログラムを用意しています。会社の文化や開発フロー、使用ツールの説明を行い、スムーズに業務に入れるようサポートします。"
    },
    {
        q: "評価制度について教えてください",
        a: "半期ごとの目標設定と振り返りを行います。成果だけでなく、技術力の向上やチームへの貢献も評価対象です。昇給・昇格のチャンスは年2回あります。"
    },
]

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="min-h-screen py-32 relative">
            <div className="max-w-4xl mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-emerald-400 text-sm font-bold tracking-[0.3em] uppercase">
                        FAQ
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-8">
                        よくある質問
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.q}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="border border-white/10 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-white font-medium pr-4">{faq.q}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-200 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-white/60 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}







