import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"

const members = [
    {
        name: "青柳 航佑",
        role: "CEO / Founder",
        description: "元大手IT企業のエンジニア。10年以上の開発経験を活かし、実践的な学習カリキュラムを設計。「本気で変わりたい人を本気でサポートする」をモットーに活動中。",
        skills: ["React", "TypeScript", "Node.js", "AWS"],
    },
    {
        name: "田中 美咲",
        role: "CTO",
        description: "スタートアップCTOを経験後、プラスコミットに参画。技術選定からアーキテクチャ設計まで幅広くカバー。受講生の技術的な質問に的確に回答。",
        skills: ["Go", "Kubernetes", "GCP", "システム設計"],
    },
    {
        name: "鈴木 大輔",
        role: "Learning Coach",
        description: "キャリアコンサルタント資格保持者。100名以上のIT転職をサポートした実績を持つ。モチベーション管理と目標設定のプロフェッショナル。",
        skills: ["キャリア設計", "メンタリング", "目標管理"],
    },
    {
        name: "佐藤 理恵",
        role: "Content Director",
        description: "教育系スタートアップで学習コンテンツの企画・制作を担当。分かりやすく、実践的な教材作りにこだわりを持つ。",
        skills: ["教材設計", "UX", "動画編集"],
    },
]

export default function MembersPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="py-24 border-b border-zinc-800">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-6">
                            <span className="text-primary-500">メンバー</span>紹介
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl">
                            あなたの目標達成をサポートする、経験豊富なプロフェッショナルチーム。
                        </p>
                    </div>
                </section>

                {/* Members Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            {members.map((member, index) => (
                                <div 
                                    key={index}
                                    className="bg-zinc-900 border border-zinc-800 p-8 hover:border-primary-500/50 transition-colors group"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="w-20 h-20 bg-zinc-800 border-2 border-primary-500 flex items-center justify-center text-2xl font-black italic text-primary-500 shrink-0">
                                            {member.name.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-primary-500 text-sm font-bold uppercase tracking-wider mb-1">
                                                {member.role}
                                            </div>
                                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                                                {member.name}
                                            </h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                                {member.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {member.skills.map((skill, skillIndex) => (
                                                    <span 
                                                        key={skillIndex}
                                                        className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-wider"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Join Us Section */}
                <section className="py-20 border-t border-zinc-800 bg-zinc-900/50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-black italic tracking-tighter mb-6">
                            <span className="text-primary-500">一緒に</span>働きませんか？
                        </h2>
                        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                            プラスコミットでは、本気で人の成長をサポートしたい仲間を募集しています。
                        </p>
                        <a 
                            href="/contact"
                            className="inline-block bg-primary-600 hover:bg-primary-500 text-white font-bold italic uppercase px-8 py-4 skew-x-[-10deg] border-2 border-primary-600 hover:border-primary-400 transition-colors"
                        >
                            <span className="skew-x-[10deg] block">採用情報を見る</span>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}




