import Link from "next/link";
import Image from "next/image";

export const CareerFooter = () => {
  return (
    <footer className="py-10 bg-zinc-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row justify-between gap-4">
          <div className="max-w-sm">
            <Image
              src="/general/career/logopc.svg"
              alt="プラスコミット"
              width={260}
              height={56}
              className="h-12 w-auto  invert brightness-0"
            />
          </div>
          <div>
            <ul className="text-sm font-bold flex items-center gap-4">
              <li>
                <Link
                  href="/career/company"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  運営会社
                </Link>
              </li>
              <li>
                <Link
                  href="/career/terms"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="/career/privacy"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/career/legal"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  特定商取引法に基づく表示
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/20 text-xs font-black tracking-widest">
              © {new Date().getFullYear()} PLUS COMMIT LLC.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

