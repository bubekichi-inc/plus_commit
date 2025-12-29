import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const CTASection = () => (
  <section className="py-32 bg-zinc-50 relative overflow-hidden">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* FAQ Part */}
        <div id="faq">
          <div className="mb-16">
            <h3 className="text-4xl md:text-5xl font-black leading-tight text-zinc-900">
              よくいただく相談
            </h3>
          </div>

          <div className="space-y-6 mb-12">
            {[
              "エンジニアになりたくて、とりあえずプログラミングを独学で学んでいるが、ゴールが見えない。",
              "スクールに入会しようとしているが、IT業界のことに詳しくなく、どのスクールがいいかわからない。",
              "教材を購入した・スクールに入ったが、モチベーションが続かず、中断してしまったが諦めたくない。",
              "学習、ポートフォリオの作成の次はどうすればいいかわからない",
            ].map((text, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 bg-white border border-zinc-200 rounded-[24px] shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center font-black flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-zinc-700 font-bold leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <p className="text-zinc-500 font-black leading-relaxed text-lg italic">
            細かくヒアリングしたのち、ひとりひとりに最適な学習計画・転職対策を提案させていただきます。
          </p>
        </div>

        {/* CTA Part */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-violet-100/40 via-fuchsia-50/20 to-transparent rounded-full blur-[100px]" />
          </div>

          <div className="bg-white p-12 md:p-16 rounded-[56px] shadow-2xl border border-zinc-100 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight text-zinc-900 tracking-tight">
              まずはLINEで
              <br />
              <span className="bg-[#06C755] bg-clip-text text-transparent">
                相談
              </span>
              する
            </h2>
            <p className="text-zinc-500 font-bold mb-12 text-lg leading-relaxed max-w-md mx-auto">
              今持っている教材の活かし方や、
              <br />
              プロの視点からのアドバイスを無料で提供いたします。
            </p>

            <div className="flex flex-col gap-6 justify-center items-center">
              <Button
                size="lg"
                className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white text-xl font-black px-12 py-9 rounded-full shadow-2xl shadow-emerald-100 transition-all hover:scale-105"
                asChild
              >
                <Link
                  href="https://line.me/R/ti/p/@your-line-id"
                  className="flex items-center justify-center gap-4"
                >
                  まずはLINEで相談する
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
              <Link
                href="https://line.me/R/ti/p/@your-line-id"
                className="text-zinc-400 font-black hover:text-zinc-900 transition-colors border-b border-zinc-200 hover:border-zinc-900 pb-1 text-sm"
              >
                今すぐLINEで相談したい方はこちら
              </Link>
            </div>

            <p className="mt-10 text-xs text-zinc-400 font-bold">
              ※ 強引な勧誘は一切ありませんのでご安心ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

