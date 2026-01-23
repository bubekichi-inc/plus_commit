import Link from "next/link"
import Image from "next/image"
import { RecruitLink } from "@/components/ui/RecruitLink"

export function Footer() {
    return (
        <footer className="bg-white border-t border-[#E8E8E8] pt-16 pb-8">
            <div className="container mx-auto px-6">
                {/* Main Footer */}
                <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="md:max-w-xs">
                        <div className="mb-6">
                            <Image
                                src="/general/logo.svg"
                                alt="プラスコミット"
                                width={140}
                                height={32}
                                className="h-7 w-auto"
                            />
                        </div>
                        <p className="text-[#666666] text-sm leading-[1.8]">
                            テクノロジーの力で、あらゆるビジネスの<br />
                            デジタル変革を支援します。
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm">
                        <Link href="/technologies" className="text-[#666666] hover:text-[#242422] transition-colors">
                            取り扱い技術
                        </Link>
                        <Link href="/company" className="text-[#666666] hover:text-[#242422] transition-colors">
                            会社概要
                        </Link>
                        <Link href="/works" className="text-[#666666] hover:text-[#242422] transition-colors">
                            導入事例
                        </Link>
                        <Link href="/contact" className="text-[#666666] hover:text-[#242422] transition-colors">
                            お問い合わせ
                        </Link>
                        <RecruitLink className="text-[#666666] hover:text-[#242422] transition-colors">
                            採用情報
                        </RecruitLink>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#E8E8E8] pt-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <p className="text-xs text-[#999999]">
                            &copy; {new Date().getFullYear()} PlusCommit Inc.
                        </p>
                        <div className="flex flex-wrap gap-6 text-xs text-[#999999]">
                            <Link href="/sitemap" className="hover:text-[#666666] transition-colors">
                                サイトマップ
                            </Link>
                            <Link href="/privacy" className="hover:text-[#666666] transition-colors">
                                プライバシーポリシー
                            </Link>
                            <Link href="/personal-info" className="hover:text-[#666666] transition-colors">
                                個人情報保護方針
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
