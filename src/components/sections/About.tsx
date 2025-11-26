import { MessageCircle, CheckSquare, Flame } from "lucide-react"

const features = [
    {
        icon: MessageCircle,
        title: "チャットサポート",
        description: "24時間以内の返信を保証。技術的な質問からキャリア相談まで、いつでも相談可能です。",
    },
    {
        icon: CheckSquare,
        title: "タスク管理",
        description: "目標から逆算した日々のタスクを徹底管理。進捗の遅れは許しません。",
    },
    {
        icon: Flame,
        title: "モチベーション管理",
        description: "挫折しそうな時こそ、厳しくも温かいサポートであなたを鼓舞します。",
    },
]

export function About() {
    return (
        <section id="about" className="py-24 bg-zinc-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Service</h2>
                    <p className="text-zinc-400">プラスコミットが提供する価値</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-zinc-950 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
