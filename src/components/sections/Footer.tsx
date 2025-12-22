import Link from "next/link"

export function Footer() {
    return (
        <footer className="py-20 border-t border-zinc-900 bg-zinc-950">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <div className="text-2xl font-black italic tracking-tighter text-white flex items-center gap-1 mb-6">
                            <span className="text-primary-500">プラス</span>
                            <span>コミット</span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                            「やり抜く力」を仕組みで解決する。
                            スパルタ学習管理サービスから個人開発支援まで、
                            エンジニアの成長と挑戦をトータルでサポートします。
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li><Link href="/about" className="hover:text-primary-500 transition-colors">会社概要</Link></li>
                            <li><Link href="/members" className="hover:text-primary-500 transition-colors">メンバー</Link></li>
                            <li><Link href="/contact" className="hover:text-primary-500 transition-colors">お問い合わせ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Services</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li><Link href="/#pricing" className="hover:text-primary-500 transition-colors">学習管理サービス</Link></li>
                            <li><Link href="https://k-zoku.com/" target="_blank" className="hover:text-primary-500 transition-colors">K-zoku</Link></li>
                            <li><Link href="https://personal-dev.net/" target="_blank" className="hover:text-primary-500 transition-colors">個人開発研究所</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-zinc-900 text-center text-xs text-zinc-600">
                    <p className="font-medium uppercase tracking-wider">&copy; {new Date().getFullYear()} Plus Commit. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
