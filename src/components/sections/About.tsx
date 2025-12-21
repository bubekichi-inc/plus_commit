import { MessageCircle, Users, Code2 } from "lucide-react"

const features = [
    {
        icon: Code2,
        title: "CURRICULUM",
        subtitle: "実践的カリキュラム",
        description: "未経験からエンジニアになるために必要な技術を網羅。手を動かしながら学ぶスタイルで、現場で通用するスキルを習得します。",
    },
    {
        icon: Users,
        title: "COMMUNITY",
        subtitle: "エンジニアコミュニティ",
        description: "同じ志を持つ仲間と切磋琢磨できる環境。技術的な質問やキャリアの相談も活発に行われ、モチベーションを維持できます。",
    },
    {
        icon: MessageCircle,
        title: "SUPPORT",
        subtitle: "徹底したサポート体制",
        description: "現役エンジニアによる技術指導とキャリア支援。あなたの目標達成を全力でバックアップします。(※プランにより内容は異なります)",
    },
]

export function About() {
    return (
        <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
                <div className="text-[20vw] font-black italic text-primary-500 leading-none whitespace-nowrap">
                    TRAINING MENU
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-4 text-white tracking-tighter">
                        Training <span className="text-primary-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">Menu</span>
                    </h2>
                    <p className="text-primary-500 font-bold tracking-widest uppercase border-b-2 border-primary-500 inline-block pb-1">
                        プラスコミットが提供する価値
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-zinc-900 border border-zinc-800 hover:border-primary-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/10 rounded-bl-[4rem] transition-all duration-300 group-hover:bg-primary-500/20" />

                            <div className="w-16 h-16 bg-zinc-950 flex items-center justify-center mb-8 border-2 border-zinc-800 group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 text-primary-500 skew-x-[-10deg] shadow-lg">
                                <feature.icon size={32} className="skew-x-[10deg]" />
                            </div>

                            <h3 className="text-2xl font-black italic uppercase mb-2 text-white tracking-tight group-hover:text-primary-500 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-primary-400 font-bold text-sm mb-4 uppercase tracking-wider">
                                {feature.subtitle}
                            </p>
                            <p className="text-zinc-400 leading-relaxed font-medium group-hover:text-zinc-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
