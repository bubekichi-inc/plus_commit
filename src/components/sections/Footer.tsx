import Link from "next/link"
import Image from "next/image"
import { RecruitLink } from "@/components/ui/RecruitLink"

export function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-zinc-50 pt-20 pb-10">
            {/* Main Footer */}
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-6 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <div className="mb-8">
                            <Image
                                src="/general/logo.svg"
                                alt="プラスコミット"
                                width={160}
                                height={36}
                                className="h-8 w-auto"
                            />
                        </div>
                        <p className="text-zinc-600 text-sm leading-relaxed mb-8 font-medium">
                            テクノロジーの力で、あらゆるビジネスの<br />
                            デジタル変革を支援します。
                        </p>
                        {/* Social links */}
                        <div className="flex gap-4">
                            <a href="#" className="text-zinc-400 hover:text-primary-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="#" className="text-zinc-400 hover:text-primary-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-black font-bold mb-6 text-sm tracking-wider">事業紹介</h3>
                        <ul className="space-y-4 text-sm text-zinc-600">
                            <li><Link href="/services#coding" className="hover:text-primary-500 transition-colors">コーディング代行</Link></li>
                            <li><Link href="/services#dx-consulting" className="hover:text-primary-500 transition-colors">DXコンサルティング</Link></li>
                            <li><Link href="/services#web-production" className="hover:text-primary-500 transition-colors">Web制作・開発</Link></li>
                            <li><Link href="/services#automation" className="hover:text-primary-500 transition-colors">業務自動化</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-black font-bold mb-6 text-sm tracking-wider">取り扱い技術</h3>
                        <ul className="space-y-4 text-sm text-zinc-600">
                            <li><Link href="/technologies#frontend" className="hover:text-primary-500 transition-colors">フロントエンド</Link></li>
                            <li><Link href="/technologies#backend" className="hover:text-primary-500 transition-colors">バックエンド</Link></li>
                            <li><Link href="/technologies#infrastructure" className="hover:text-primary-500 transition-colors">インフラ</Link></li>
                            <li><Link href="/technologies#cms" className="hover:text-primary-500 transition-colors">CMS</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-black font-bold mb-6 text-sm tracking-wider">会社情報</h3>
                        <ul className="space-y-4 text-sm text-zinc-600">
                            <li><Link href="/company" className="hover:text-primary-500 transition-colors">会社概要</Link></li>
                            <li><Link href="/works" className="hover:text-primary-500 transition-colors">制作実績</Link></li>
                            <li><Link href="/contact" className="hover:text-primary-500 transition-colors">お問い合わせ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-black font-bold mb-6 text-sm tracking-wider">採用情報</h3>
                        <ul className="space-y-4 text-sm text-zinc-600">
                            <li><RecruitLink className="hover:text-primary-500 transition-colors">採用トップ</RecruitLink></li>
                            <li><RecruitLink path="/#jobs" className="hover:text-primary-500 transition-colors">募集職種</RecruitLink></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-zinc-200 pt-8 mt-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-zinc-500">
                            &copy; {new Date().getFullYear()} PlusCommit Inc.
                        </p>
                        <div className="flex gap-6 text-xs text-zinc-500">
                            <Link href="/privacy" className="hover:text-zinc-800 transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-zinc-800 transition-colors">Terms of Service</Link>
                            <Link href="/legal" className="hover:text-zinc-800 transition-colors">Legal</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
