import Link from "next/link"

export function BusinessFooter() {
    return (
        <footer className="py-16 border-t border-slate-800 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <div className="text-2xl font-black tracking-tight text-white flex items-center gap-2 mb-4">
                            <span className="text-blue-500">PLUS</span>
                            <span>COMMIT</span>
                            <span className="text-xs font-medium bg-blue-500 text-white px-2 py-0.5 rounded">BUSINESS</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                            Web制作のプロフェッショナルチームが、貴社のビジネス成長をサポートします。
                            企画・デザイン・開発・運用まで一気通貫で対応いたします。
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4">サービス</h3>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><Link href="/business/services" className="hover:text-blue-400 transition-colors">コーディング代行</Link></li>
                            <li><Link href="/business/services" className="hover:text-blue-400 transition-colors">DXコンサルティング</Link></li>
                            <li><Link href="/business/services" className="hover:text-blue-400 transition-colors">Web制作・開発</Link></li>
                            <li><Link href="/business/services" className="hover:text-blue-400 transition-colors">業務自動化</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4">会社情報</h3>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><Link href="/business/works" className="hover:text-blue-400 transition-colors">制作実績</Link></li>
                            <li><Link href="/business/contact" className="hover:text-blue-400 transition-colors">お問い合わせ</Link></li>
                            <li><Link href="https://plus-commit.com" className="hover:text-blue-400 transition-colors">個人向けサービス</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-600">
                    <p>&copy; {new Date().getFullYear()} Plus Commit Business. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

