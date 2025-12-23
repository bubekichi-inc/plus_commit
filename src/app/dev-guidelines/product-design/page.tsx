export default function ProductDesignPage() {
    return (
        <div className="max-w-none">
            <h1 className="text-4xl font-black italic tracking-tighter mb-8 text-white">
                プロダクト設計
            </h1>
            
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary-500 pl-4 text-white">ディレクトリ構造</h2>
                <p className="text-zinc-400 mb-4">Next.js App Routerに基づいた推奨構造です。</p>
                <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                    <pre className="text-sm overflow-x-auto text-zinc-300">
                        <code>
{`src/
  app/          # ルーティング
  components/   # コンポーネント
    ui/         # 汎用部品 (shadcn/uiなど)
    sections/   # ページ固有のセクション
    features/   # 特定の機能に関連する部品
  hooks/        # カスタムフック
  lib/          # 外部ライブラリ設定
  types/        # 型定義`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary-500 pl-4 text-white">ステート管理</h2>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>サーバーコンポーネントを優先し、必要な場合のみクライアントコンポーネントを使用する</li>
                    <li>局所的なステートには useState / useReducer を使用する</li>
                    <li>広域的なステートには React Context または Zustand を検討する</li>
                </ul>
            </section>
        </div>
    )
}

