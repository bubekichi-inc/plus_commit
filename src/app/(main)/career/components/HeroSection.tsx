import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#E3E3E3] px-32">
      <div className="w-full relative z-10">
        <div className="flex justify-between gap-12 items-center">
          <div className="w-full text-left lg:col-span-2">
            <div className="inline-flex items-center gap-3 bg-white/50 border border-white/20 rounded-full px-5 py-2 mb-10">
              <span className="text-zinc-700 text-sm font-bold uppercase tracking-wider">
                学習が停滞しがちなプログラミング学習中のあなたへ
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.3] tracking-tight mb-10 text-zinc-900">
              「進まなかった学習」が
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent italic text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">
                どんどん進む
              </span>
              <br />
              「諦めかけた目標」に
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent italic text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">
                どんどん近づく
              </span>
            </h1>

            <div className="space-y-4 mb-14">
              {[
                "業界最安級",
                "受講生1人に2人のメンター",
                "転職・案件獲得の実績多数",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xl font-black text-zinc-800 tracking-tight">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <Button
                size="lg"
                className="bg-[#06C755] hover:bg-[#05b34c] text-white font-black px-12 py-9 text-xl rounded-full shadow-2xl shadow-emerald-200 transition-all hover:scale-105"
                asChild
              >
                <Link
                  href="https://line.me/R/ti/p/@your-line-id"
                  className="flex items-center gap-3"
                >
                  まずはLINEで無料相談
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative w-[90%] flex justify-end">
            <div className="w-[80%] relative z-10 rounded-[64px] overflow-hidden shadow-2xl">
              <Image
                src="/general/career/fv.jpg"
                alt="プラスコミットで学習する様子"
                width={1000}
                height={750}
                className="object-cover h-[550px] w-full object-center"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-16 -left-2 w-54 h-54 z-10 opacity-100 scale-x-[-1] rotate-12">
              <Image
                src="/general/career/fv2.svg"
                alt=""
                width={256}
                height={256}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400">
        <span className="text-xs tracking-widest uppercase font-black">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
};

