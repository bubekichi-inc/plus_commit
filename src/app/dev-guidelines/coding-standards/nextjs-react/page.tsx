export default function NextJsReactPage() {
    return (
        <div className="max-w-none">
            <h1 className="text-4xl font-black italic tracking-tighter mb-8 text-white">
                Next.js + React 開発規約
            </h1>
            
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary-500 pl-4 text-white">コンポーネント設計</h2>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>Server Components をデフォルトとして使用し、インタラクティブ性が必要な場合のみ "use client" を使用する</li>
                    <li>データフェッチは可能な限り Server Components で行い、Props で Client Components に渡す</li>
                    <li>巨大なコンポーネントは <code>features/</code> ディレクトリ内で機能単位に分割する</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary-500 pl-4 text-white">パフォーマンス最適化</h2>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>画像の最適化には <code>next/image</code> を必ず使用する</li>
                    <li>レイアウトシフト（CLS）を防ぐため、Image コンポーネントには width/height を指定する</li>
                    <li>重いライブラリの読み込みには <code>next/dynamic</code> による遅延読み込みを検討する</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary-500 pl-4 text-white">実装例</h2>
                <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                    <pre className="text-sm overflow-x-auto text-zinc-300">
                        <code>
{`// Server Component (Default)
async function ProductList() {
  const products = await getProducts();
  return (
    <ul>
      {products.map(p => <ProductCard key={p.id} item={p} />)}
    </ul>
  );
}

// Client Component
"use client"
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}`}
                        </code>
                    </pre>
                </div>
            </section>
        </div>
    )
}

