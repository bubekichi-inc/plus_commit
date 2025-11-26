

const comparisonData = [
    {
        feature: "強制力",
        plusCommit: { text: "◎ (スパルタ)", value: true },
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
        plusCommit: { text: "◎ (月額9,980円〜)", value: true },
        companyA: { text: "△ (50万円〜)", value: "partial" },
        companyB: { text: "◎ (0円〜)", value: true },
    },
    {
        feature: "柔軟性",
        plusCommit: { text: "◎ (個人の目標に合わせる)", value: true },
        companyA: { text: "△ (固定カリキュラム)", value: "partial" },
        companyB: { text: "◎ (自由)", value: true },
    },
]

export function Comparison() {
    return (
        <section id="comparison" className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Comparison</h2>
                    <p className="text-zinc-400">他社サービスとの比較</p>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-[800px] bg-zinc-900/50 rounded-2xl border border-white/5 p-8">
                        <div className="grid grid-cols-4 gap-4 mb-6 pb-6 border-b border-white/5 text-center font-bold">
                            <div className="text-left pl-4">特徴</div>
                            <div className="text-blue-400 text-lg">Plus Commit</div>
                            <div className="text-zinc-400">A社 (スクール)</div>
                            <div className="text-zinc-400">B社 (独学)</div>
                        </div>

                        <div className="space-y-6">
                            {comparisonData.map((row, index) => (
                                <div key={index} className="grid grid-cols-4 gap-4 items-center text-center">
                                    <div className="text-left pl-4 font-medium">{row.feature}</div>

                                    <div className="bg-blue-500/10 py-3 rounded-lg text-blue-400 font-bold border border-blue-500/20">
                                        {row.plusCommit.text}
                                    </div>

                                    <div className="text-zinc-400">
                                        {row.companyA.text}
                                    </div>

                                    <div className="text-zinc-400">
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
