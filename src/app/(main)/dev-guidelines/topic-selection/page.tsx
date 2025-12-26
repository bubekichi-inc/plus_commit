export default function TopicSelectionPage() {
    return (
        <div className="max-w-none">
            <h1 className="text-4xl font-black italic tracking-tighter mb-8 text-white">
                題材選定
            </h1>
            
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary-500 pl-4 text-white">アイデアの評価</h2>
                <p className="text-zinc-400 mb-4">どのようなプロダクトを作るべきかを評価する基準です。</p>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>実用性と解決する問題の明確さ</li>
                    <li>独自性と市場の空白地帯</li>
                    <li>実装の実現可能性とスピード</li>
                    <li>将来の拡張性と発展性</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary-500 pl-4 text-white">重点領域</h2>
                <p className="text-zinc-400 mb-4">私たちが注力するテーマや分野です。</p>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>開発者体験 (DX) の向上</li>
                    <li>AIを活用した生産性向上ツール</li>
                    <li>オープンソースソフトウェアへの貢献</li>
                </ul>
            </section>
        </div>
    )
}





