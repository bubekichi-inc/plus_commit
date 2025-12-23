import Link from "next/link"

export function RecruitFooter() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/recruit" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-lg">+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black tracking-tight text-lg leading-none">
                  PLUS COMMIT
                </span>
                <span className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                  Careers
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              私たちは、技術の力でビジネスを次のステージへ導くプロフェッショナル集団です。
              常に学び、挑戦し続ける仲間を募集しています。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              採用情報
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/recruit#culture" className="text-white/50 hover:text-emerald-400 text-sm transition-colors">
                  社風・環境
                </Link>
              </li>
              <li>
                <Link href="/recruit#workflow" className="text-white/50 hover:text-emerald-400 text-sm transition-colors">
                  開発の流れ
                </Link>
              </li>
              <li>
                <Link href="/recruit#jobs" className="text-white/50 hover:text-emerald-400 text-sm transition-colors">
                  募集職種
                </Link>
              </li>
              <li>
                <Link href="/recruit#faq" className="text-white/50 hover:text-emerald-400 text-sm transition-colors">
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              会社情報
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="https://plus-commit.com" className="text-white/50 hover:text-emerald-400 text-sm transition-colors">
                  コーポレートサイト
                </a>
              </li>
              <li>
                <a href="https://business.plus-commit.com" className="text-white/50 hover:text-emerald-400 text-sm transition-colors">
                  事業紹介サイト
                </a>
              </li>
              <li>
                <a href="https://business.plus-commit.com/contact" className="text-white/50 hover:text-emerald-400 text-sm transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Plus Commit Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/30 hover:text-white/50 text-xs transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-white/30 hover:text-white/50 text-xs transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

