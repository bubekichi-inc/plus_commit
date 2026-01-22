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
                    </div>

                    <div>
<Link href="/technologies" className="space-y-4 text-sm text-zinc-600">取り扱い技術</Link>

                    </div>

                    <div>
                        <ul className="space-y-4 text-sm text-zinc-600">
                            <li><Link href="/company" className="hover:text-primary-500 transition-colors">会社概要</Link></li>
                            <li><Link href="/works" className="hover:text-primary-500 transition-colors">制作実績</Link></li>
                            <li><Link href="/contact" className="hover:text-primary-500 transition-colors">お問い合わせ</Link></li>
                        </ul>
                    </div>

                    <div>

                        <ul className="space-y-4 text-sm text-zinc-600">
                            <li>
                                <RecruitLink className="hover:text-primary-500 transition-colors">
                                    採用情報
                                </RecruitLink>
                            </li>
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
                            <Link href="/sitemap" className="hover:text-zinc-800 transition-colors">サイトマップ</Link>
                            <Link href="/privacy" className="hover:text-zinc-800 transition-colors">プライバシーポリシー</Link>
                            <Link href="/personal-info" className="hover:text-zinc-800 transition-colors">個人情報保護方針</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
