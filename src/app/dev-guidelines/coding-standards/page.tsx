export default function CodingStandardsPage() {
    return (
        <div className="max-w-none">
            <h1 className="text-4xl font-black italic tracking-tighter mb-8 text-white">
                コーディング規約
            </h1>
            
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary-500 pl-4 text-white">基本原則</h2>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>可読性を最優先する</li>
                    <li>型安全性を追求する (TypeScript)</li>
                    <li>コンポーネントは小さく保つ</li>
                    <li>早期リターンを活用する</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary-500 pl-4 text-white">命名規則</h2>
                <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                    <pre className="text-sm overflow-x-auto text-zinc-300">
                        <code>
{`// コンポーネント: PascalCase
export function UserProfile() { ... }

// 関数・変数: camelCase
const userData = fetchData();

// 定数: SCREAMING_SNAKE_CASE
const MAX_RETRY_COUNT = 3;`}
                        </code>
                    </pre>
                </div>
            </section>
        </div>
    )
}

