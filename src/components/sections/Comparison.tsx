import { Check } from "lucide-react"

const comparisonData = [
    {
        feature: "強制力",
        plusCommit: { text: "◎ (ストイック)", value: true },
        companyA: { text: "△ (自主性任せ)", value: "partial" },
        companyB: { text: "× (なし)", value: false },
    },
    {
        feature: "サポート",
        plusCommit: { text: "◎ (個別徹底)", value: true },
        companyA: { text: "○ (カリキュラム内)", value: "partial" },
        companyB: { text: "× (なし)", value: false },
    },
    {
        feature: "コスト",
        plusCommit: { text: "◎ (9,980円/月)", value: true },
        companyA: { text: "△ (50万円〜)", value: "partial" },
        companyB: { text: "◎ (0円〜)", value: true },
    },
    {
        feature: "柔軟性",
        plusCommit: { text: "◎ (個人メニュー)", value: true },
        companyA: { text: "△ (固定メニュー)", value: "partial" },
        companyB: { text: "◎ (自由)", value: true },
    },
]

export function Comparison() {
    return (
        <section id="comparison" className="py-24 bg-zinc-950 border-y border-primary-500/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-4 text-white tracking-tighter">
                        Vs <span className="text-primary-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">Others</span>
                    </h2>
                    <p className="text-primary-500 font-bold tracking-widest uppercase border-b-2 border-primary-500 inline-block pb-1">
                        他社サービスとの比較
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-[800px]">
                        {/* Header */}
                        <div className="grid grid-cols-4 gap-4 mb-4 px-6 py-4 bg-zinc-900 border-l-4 border-primary-500 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
                            <div className="font-bold text-zinc-500 uppercase tracking-wider text-sm">Feature</div>
                            <div className="font-black italic text-2xl text-primary-500 uppercase tracking-tighter drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]">プラスコミット</div>
                            <div className="font-bold text-zinc-500 uppercase tracking-wider text-sm">School A</div>
                            <div className="font-bold text-zinc-500 uppercase tracking-wider text-sm">Self Study</div>
                        </div>

                        {/* Rows */}
                        <div className="space-y-2">
                            {comparisonData.map((row, index) => (
                                <div key={index} className="grid grid-cols-4 gap-4 items-center px-6 py-6 bg-zinc-900/30 hover:bg-zinc-900 transition-colors border-l-4 border-transparent hover:border-primary-500 group">
                                    <div className="font-bold text-white group-hover:text-primary-500 transition-colors">{row.feature}</div>

                                    <div className="text-primary-500 font-bold text-lg flex items-center gap-2 drop-shadow-[0_0_5px_rgba(249,115,22,0.3)]">
                                        <Check className="w-5 h-5" strokeWidth={3} />
                                        {row.plusCommit.text}
                                    </div>

                                    <div className="text-zinc-500 font-medium">
                                        {row.companyA.text}
                                    </div>

                                    <div className="text-zinc-500 font-medium">
                                        {row.companyB.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
