"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type TabType = "home" | "culture" | "workflow" | "jobs" | "faq"

export default function RecruitPage() {
    const [activeTab, setActiveTab] = useState<TabType>("home")

    const tabs = [
        { id: "home", label: "TOP", sub: "採用トップ" },
        { id: "culture", label: "CULTURE", sub: "社風・環境" },
        { id: "workflow", label: "WORKFLOW", sub: "開発の流れ" },
        { id: "jobs", label: "JOBS", sub: "募集職種" },
        { id: "faq", label: "FAQ", sub: "よくある質問" },
    ]

    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen pt-20 bg-slate-950 flex flex-col md:flex-row">
                {/* Sidebar Navigation - SPA controller */}
                <nav className="w-full md:w-64 lg:w-80 bg-slate-900/50 border-r border-slate-800 p-8 flex-shrink-0 sticky top-20 h-auto md:h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="mb-12">
                        <div className="text-blue-500 font-bold tracking-tighter text-2xl mb-1">RECRUIT</div>
                        <div className="text-slate-500 text-xs font-bold tracking-widest uppercase">Careers at Plus Commit</div>
                    </div>
                    
                    <ul className="space-y-6">
                        {tabs.map((tab) => (
                            <li key={tab.id}>
                                <button
                                    onClick={() => setActiveTab(tab.id as TabType)}
                                    className={`group flex flex-col items-start w-full text-left transition-all ${
                                        activeTab === tab.id ? "text-white" : "text-slate-500 hover:text-slate-300"
                                    }`}
                                >
                                    <span className="text-xs font-black tracking-widest mb-1">{tab.label}</span>
                                    <span className={`text-sm font-bold transition-all ${
                                        activeTab === tab.id ? "translate-x-2 text-blue-400" : "group-hover:translate-x-1"
                                    }`}>
                                        {tab.sub}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12 pt-12 border-t border-slate-800 hidden md:block">
                        <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold" asChild>
                            <button onClick={() => setActiveTab("jobs")}>エントリーする</button>
                        </Button>
                    </div>
                </nav>

                {/* Main Content Area - SPA contents */}
                <div className="flex-1 p-6 md:p-12 lg:p-20 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="max-w-4xl"
                        >
                            {activeTab === "home" && <RecruitHome />}
                            {activeTab === "culture" && <RecruitCulture />}
                            {activeTab === "workflow" && <RecruitWorkflow />}
                            {activeTab === "jobs" && <RecruitJobs />}
                            {activeTab === "faq" && <RecruitFAQ />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
            <BusinessFooter />
        </>
    )
}

function RecruitHome() {
    return (
        <div className="space-y-16">
            <section>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
                    自ら考え、<br />
                    自ら形にする。<br />
                    <span className="text-blue-500">技術で未来を。</span>
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                    プラスコミットは、単にコードを書く集団ではありません。<br />
                    お客様のビジネス課題を技術で解決し、新しい価値を共に創り上げるパートナーです。<br />
                    プロフェッショナルとしての自律と、飽くなき探究心を持つ仲間を求めています。
                </p>
            </section>

            <section className="grid md:grid-cols-2 gap-12 pt-12">
                <div>
                    <h2 className="text-2xl font-black text-white mb-6 border-l-4 border-blue-500 pl-4">MISSION</h2>
                    <p className="text-slate-400 leading-relaxed">
                        「技術の力で、ビジネスを次のステージへ」<br />
                        私たちは、最新のテクノロジーと徹底したビジネス理解を掛け合わせ、
                        お客様にとって最適なデジタル変革を実現することを使命としています。
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-black text-white mb-6 border-l-4 border-blue-500 pl-4">VALUE</h2>
                    <ul className="space-y-4 text-slate-400">
                        <li><strong className="text-blue-400 block mb-1">01. Output First</strong> 完璧よりも、まずは形にすること。</li>
                        <li><strong className="text-blue-400 block mb-1">02. Stay Professional</strong> 常に最新を学び、最高を提供すること。</li>
                        <li><strong className="text-blue-400 block mb-1">03. Challenge Boundaries</strong> 既成概念にとらわれず挑戦すること。</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

function RecruitCulture() {
    return (
        <div className="space-y-16">
            <section>
                <h2 className="text-4xl font-black text-white mb-8 italic uppercase tracking-tighter">Culture</h2>
                <div className="grid gap-8">
                    <div className="bg-slate-900 border border-slate-800 p-8">
                        <h3 className="text-xl font-bold text-blue-400 mb-4">自律したチーム</h3>
                        <p className="text-slate-400 leading-relaxed">
                            マイクロマネジメントは行いません。各メンバーがプロフェッショナルとして責任を持ち、
                            最適な手法を選択してプロジェクトを進めます。
                        </p>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-8">
                        <h3 className="text-xl font-bold text-blue-400 mb-4">学び続ける環境</h3>
                        <p className="text-slate-400 leading-relaxed">
                            技術の進化は止まりません。書籍購入支援、外部セミナー参加支援など、
                            メンバーが常に最新のスキルをアップデートできる環境を整えています。
                        </p>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-8">
                        <h3 className="text-xl font-bold text-blue-400 mb-4">フラットなコミュニケーション</h3>
                        <p className="text-slate-400 leading-relaxed">
                            役職や年齢に関係なく、良い意見は積極的に採用されます。
                            コードレビューや定例ミーティングを通じて、オープンな議論を推奨しています。
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="text-2xl font-black text-white mb-8 border-l-4 border-blue-500 pl-4 uppercase">Benefits</h3>
                <div className="grid md:grid-cols-2 gap-6 text-slate-400 text-sm">
                    <div className="p-4 border-b border-slate-800 flex justify-between">
                        <span>フルリモート・フレックス制</span>
                        <span className="text-white">導入済み</span>
                    </div>
                    <div className="p-4 border-b border-slate-800 flex justify-between">
                        <span>最新MacBook Pro貸与</span>
                        <span className="text-white">支給</span>
                    </div>
                    <div className="p-4 border-b border-slate-800 flex justify-between">
                        <span>書籍・セミナー費用</span>
                        <span className="text-white">全額会社負担</span>
                    </div>
                    <div className="p-4 border-b border-slate-800 flex justify-between">
                        <span>各種社会保険</span>
                        <span className="text-white">完備</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

function RecruitWorkflow() {
    return (
        <div className="space-y-16">
            <section>
                <h2 className="text-4xl font-black text-white mb-8 italic uppercase tracking-tighter">Workflow</h2>
                <p className="text-slate-400 mb-12">
                    私たちは「論理的な開発」を重視します。感覚に頼らず、根拠に基づいた設計と実装を行います。
                </p>

                <div className="relative border-l-2 border-blue-500 ml-4 pl-8 space-y-12">
                    <div>
                        <div className="absolute -left-2.5 top-0 w-5 h-5 bg-blue-500 rounded-full" />
                        <h3 className="text-xl font-bold text-white mb-2">01. ヒアリング & 要件定義</h3>
                        <p className="text-slate-400 text-sm">
                            お客様のビジネスモデルを深く理解し、真の課題を特定します。
                            単なる要望の御用聞きではなく、専門家として最適な解決策を提案します。
                        </p>
                    </div>
                    <div>
                        <div className="absolute -left-2.5 top-[108px] w-5 h-5 bg-blue-500 rounded-full" />
                        <h3 className="text-xl font-bold text-white mb-2">02. 設計 & 技術選定</h3>
                        <p className="text-slate-400 text-sm">
                            拡張性、保守性、パフォーマンスを考慮し、最適なアーキテクチャを設計します。
                            プロジェクトごとに最適な言語・フレームワークを選択します。
                        </p>
                    </div>
                    <div>
                        <div className="absolute -left-2.5 top-[216px] w-5 h-5 bg-blue-500 rounded-full" />
                        <h3 className="text-xl font-bold text-white mb-2">03. 実装 & レビュー</h3>
                        <p className="text-slate-400 text-sm">
                            「誰が読んでも理解できるコード」を基準に実装を進めます。
                            全てのコードはピアレビューを通過する必要があります。
                        </p>
                    </div>
                    <div>
                        <div className="absolute -left-2.5 top-[324px] w-5 h-5 bg-blue-500 rounded-full" />
                        <h3 className="text-xl font-bold text-white mb-2">04. 納品 & 運用改善</h3>
                        <p className="text-slate-400 text-sm">
                            リリースして終わりではありません。実際の利用状況を分析し、
                            継続的なパフォーマンス改善や機能追加を行います。
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

function RecruitJobs() {
    return (
        <div className="space-y-16">
            <section>
                <h2 className="text-4xl font-black text-white mb-8 italic uppercase tracking-tighter">Job Openings</h2>
                <div className="space-y-6">
                    <div className="bg-slate-900 border border-slate-800 p-8 hover:border-blue-500 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold text-white">エンジニア</h3>
                            <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest">Full Time</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            フロントエンドからバックエンドまで、フルスタックな開発に携わっていただきます。
                            モダンな技術スタック（Next.js, TypeScript, Go等）を駆使し、
                            高品質なプロダクトを構築します。
                        </p>
                        <ul className="text-xs text-slate-500 flex gap-4 mb-8">
                            <li>#Next.js</li>
                            <li>#TypeScript</li>
                            <li>#AWS</li>
                            <li>#Go</li>
                        </ul>
                        <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8">応募詳細を見る</Button>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 p-8 hover:border-blue-500 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold text-white">DXコンサルタント</h3>
                            <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest">Full Time</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            お客様のデジタル課題を特定し、解決に向けた戦略立案から導入支援までを担当します。
                            技術的なバックグラウンドを活かした論理的な提案が求められます。
                        </p>
                        <ul className="text-xs text-slate-500 flex gap-4 mb-8">
                            <li>#IT戦略</li>
                            <li>#業務改善</li>
                            <li>#SaaS</li>
                        </ul>
                        <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8">応募詳細を見る</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

function RecruitFAQ() {
    return (
        <div className="space-y-16">
            <section>
                <h2 className="text-4xl font-black text-white mb-8 italic uppercase tracking-tighter">FAQ</h2>
                <div className="divide-y divide-slate-800">
                    <div className="py-8">
                        <h4 className="text-lg font-bold text-blue-400 mb-2">Q. 未経験からの応募は可能ですか？</h4>
                        <p className="text-slate-400">
                            ポテンシャル採用も行っていますが、プログラミングの基礎知識や、
                            自ら学習を進めている姿勢を重視します。
                        </p>
                    </div>
                    <div className="py-8">
                        <h4 className="text-lg font-bold text-blue-400 mb-2">Q. 試用期間はありますか？</h4>
                        <p className="text-slate-400">
                            3ヶ月間の試用期間を設けています。待遇は正社員登用後と変わりません。
                        </p>
                    </div>
                    <div className="py-8">
                        <h4 className="text-lg font-bold text-blue-400 mb-2">Q. 副業は可能ですか？</h4>
                        <p className="text-slate-400">
                            可能です。個人のスキルアップや新しい挑戦を尊重しています（申請制）。
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

