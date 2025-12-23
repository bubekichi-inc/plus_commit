export default function GuidelinesPage() {
    return (
        <div className="max-w-none">
            <h1 className="text-4xl font-black italic tracking-tighter mb-8">
                <span className="text-primary-500">Dev</span> Guidelines
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12">
                このガイドラインは、私たちのプロダクト開発におけるベストプラクティスをまとめたものです。
                高品質なコード、一貫した設計、そして効率的な開発プロセスを実現するための指針を提供します。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-zinc-800 bg-zinc-900/50 hover:border-primary-500/50 transition-colors group">
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">コーディング規約</h2>
                    <p className="text-zinc-400 text-sm mb-4">TypeScript, React, CSSの命名規則や実装パターンについてのガイドライン。</p>
                    <a href="/dev-guidelines/coding-standards" className="text-primary-500 text-sm font-bold uppercase tracking-wider">詳しく見る →</a>
                </div>
                <div className="p-6 border border-zinc-800 bg-zinc-900/50 hover:border-primary-500/50 transition-colors group">
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">プロダクト設計</h2>
                    <p className="text-zinc-400 text-sm mb-4">アーキテクチャ、ディレクトリ構造、ステート管理の考え方についてのガイドライン。</p>
                    <a href="/dev-guidelines/product-design" className="text-primary-500 text-sm font-bold uppercase tracking-wider">詳しく見る →</a>
                </div>
                <div className="p-6 border border-zinc-800 bg-zinc-900/50 hover:border-primary-500/50 transition-colors group">
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">マーケティング</h2>
                    <p className="text-zinc-400 text-sm mb-4">ターゲット設定、価値提案、市場分析などのマーケティング戦略の指針。</p>
                    <a href="/dev-guidelines/marketing" className="text-primary-500 text-sm font-bold uppercase tracking-wider">詳しく見る →</a>
                </div>
                <div className="p-6 border border-zinc-800 bg-zinc-900/50 hover:border-primary-500/50 transition-colors group">
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">技術選定</h2>
                    <p className="text-zinc-400 text-sm mb-4">使用する技術スタックの選定基準や、推奨されるライブラリのガイドライン。</p>
                    <a href="/dev-guidelines/tech-selection" className="text-primary-500 text-sm font-bold uppercase tracking-wider">詳しく見る →</a>
                </div>
                <div className="p-6 border border-zinc-800 bg-zinc-900/50 hover:border-primary-500/50 transition-colors group">
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">題材選定</h2>
                    <p className="text-zinc-400 text-sm mb-4">開発するプロダクトのアイデア評価や、注力すべき領域の選定基準。</p>
                    <a href="/dev-guidelines/topic-selection" className="text-primary-500 text-sm font-bold uppercase tracking-wider">詳しく見る →</a>
                </div>
            </div>
        </div>
    )
}

