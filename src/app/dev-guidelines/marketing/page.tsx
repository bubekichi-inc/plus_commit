export default function MarketingPage() {
    return (
        <div className="max-w-none">
            <h1 className="text-4xl font-black italic tracking-tighter mb-8 text-white">
                マーケティング
            </h1>
            
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary-500 pl-4 text-white">ターゲットユーザー</h2>
                <p className="text-zinc-400 mb-4">プロダクトが誰のためのものかを明確にします。</p>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>ペルソナの設定</li>
                    <li>ユーザーの課題と解決策の定義</li>
                    <li>市場規模と競合の分析</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary-500 pl-4 text-white">価値提案 (Value Proposition)</h2>
                <p className="text-zinc-400 mb-4">プロダクトが提供する独自の価値を定義します。</p>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>コアバリューの明確化</li>
                    <li>キャッチコピーとメッセージング</li>
                    <li>差別化ポイント</li>
                </ul>
            </section>
        </div>
    )
}

