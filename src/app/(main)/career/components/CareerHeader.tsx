import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const CareerHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-zinc-200">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/career" className="flex items-center">
          <Image
            src="/general/career/logopc.svg"
            alt="プラスコミット"
            width={240}
            height={40}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="#service"
            className="text-sm font-black text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            提供サポート
          </Link>
          <Link
            href="#plan"
            className="text-sm font-black text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            料金体系
          </Link>
          <Button
            className="bg-[#06C755] hover:bg-[#05b34c] text-white font-black text-sm px-8 py-6 rounded-full shadow-lg shadow-emerald-100"
            asChild
          >
            <Link
              href="https://line.me/R/ti/p/@your-line-id"
              className="flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              LINEで相談する
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

