export default function TechSelectionPage() {
    return (
        <div className="max-w-none">
            <h1 className="text-4xl font-black italic tracking-tighter mb-8 text-white">
                技術選定
            </h1>
            
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary-500 pl-4 text-white">選定基準</h2>
                <p className="text-zinc-400 mb-4">技術を採用する際の判断基準です。</p>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>コミュニティの活発さとメンテナンス状況</li>
                    <li>学習コストとチームのスキルセット</li>
                    <li>パフォーマンスとスケーラビリティ</li>
                    <li>エコシステムとの親和性</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary-500 pl-4 text-white">推奨スタック</h2>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>Frontend: Next.js (App Router), React, Tailwind CSS</li>
                    <li>Language: TypeScript</li>
                    <li>UI Components: shadcn/ui</li>
                    <li>Deployment: Vercel</li>
                </ul>
            </section>
        </div>
    )
}

