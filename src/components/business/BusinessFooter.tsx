import Link from "next/link"
import Image from "next/image"
import { RecruitLink } from "@/components/ui/RecruitLink"

export function BusinessFooter() {
    return (
        <footer className="border-t border-zinc-800 bg-black">
            {/* Contact Banner */}
            <div className="border-b border-zinc-800">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link 
                            href="/contact"
                            className="flex items-center justify-between p-6 bg-zinc-900 border border-zinc-800 hover:border-white/30 transition-colors group"
                        >
                            <div>
                                <div className="text-zinc-500 text-sm mb-1">お問い合わせ</div>
                                <div className="text-white font-bold group-hover:text-zinc-300 transition-colors">
                                    コーディング代行・DXコンサルティングのご相談
                                </div>
                            </div>
                            <span className="text-white text-2xl">→</span>
                        </Link>
                        <Link 
                            href="/career"
                            className="flex items-center justify-between p-6 bg-zinc-900 border border-zinc-800 hover:border-white/30 transition-colors group"
                        >
                            <div>
                                <div className="text-zinc-500 text-sm mb-1">個人向けサービス</div>
                                <div className="text-white font-bold group-hover:text-zinc-300 transition-colors">
                                    IT学習・スキル習得支援サービス
                                </div>
                            </div>
                            <span className="text-white text-2xl">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-6 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <div className="mb-6">
                            <Image
                                src="/general/top/logo.png"
                                alt="プラスコミット"
                                width={160}
                                height={36}
                                className="h-9 w-auto"
                            />
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                            テクノロジーの力で、あらゆるビジネスの<br />
                            デジタル変革を支援します。
                        </p>
                        {/* Social links */}
                        <div className="flex gap-4">
                            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm">事業紹介</h3>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li><Link href="/services#coding" className="hover:text-white transition-colors">コーディング代行</Link></li>
                            <li><Link href="/services#dx-consulting" className="hover:text-white transition-colors">DXコンサルティング</Link></li>
                            <li><Link href="/services#web-production" className="hover:text-white transition-colors">Web制作・開発</Link></li>
                            <li><Link href="/services#automation" className="hover:text-white transition-colors">業務自動化</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm">取り扱い技術</h3>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li><Link href="/technologies#frontend" className="hover:text-white transition-colors">フロントエンド</Link></li>
                            <li><Link href="/technologies#backend" className="hover:text-white transition-colors">バックエンド</Link></li>
                            <li><Link href="/technologies#infrastructure" className="hover:text-white transition-colors">インフラ</Link></li>
                            <li><Link href="/technologies#cms" className="hover:text-white transition-colors">CMS</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm">会社情報</h3>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li><Link href="/company" className="hover:text-white transition-colors">会社概要</Link></li>
                            <li><Link href="/works" className="hover:text-white transition-colors">制作実績</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm">採用情報</h3>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li><RecruitLink className="hover:text-white transition-colors">採用トップ</RecruitLink></li>
                            <li><RecruitLink path="/#jobs" className="hover:text-white transition-colors">募集職種</RecruitLink></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-zinc-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-zinc-600">
                            &copy; {new Date().getFullYear()} 株式会社プラスコミット
                        </p>
                        <div className="flex gap-6 text-xs text-zinc-600">
                            <Link href="/privacy" className="hover:text-zinc-400 transition-colors">プライバシーポリシー</Link>
                            <Link href="/terms" className="hover:text-zinc-400 transition-colors">利用規約</Link>
                            <Link href="/legal" className="hover:text-zinc-400 transition-colors">特定商取引法に基づく表示</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
