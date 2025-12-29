import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const PlanSection = () => {
  return (
    <section id="plan" className="py-32 relative bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">
            plan
          </h2>
          <h3 className="text-4xl md:text-6xl font-black leading-tight text-zinc-900">
            サービス料金
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {[
            {
              name: "スタンダードプラン",
              price: "199,000",
              period: "（税込）",
              desc: "学習と基本的な転職サポートが含まれる、スタートに最適なプラン。",
              features: [
                "週1回 1on1メンタリング",
                "個別ロードマップ作成",
                "Slack進捗報告・相談",
                "定期的な学習・進路相談",
              ],
              subsidy: "実質 ¥59,700〜",
            },
            {
              name: "プライムプラン",
              price: "364,833",
              period: "（税込）",
              desc: "国の補助金を活用し、徹底した転職支援まで受ける最高峰のパッケージ。",
              features: [
                "週1回 1on1メンタリング",
                "個別ロードマップ作成",
                "Slack進捗報告・相談",
                "転職徹底サポート（書類・面接）",
                "ポートフォリオ制作支援",
              ],
              popular: true,
              badge: "最大70%補助対象",
              subsidy: "実質 ¥109,450〜",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`relative p-12 rounded-[56px] border ${
                plan.popular
                  ? "bg-white border-violet-200 shadow-2xl scale-105 z-10"
                  : "bg-white/50 border-zinc-200"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-black rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}
              <div className="mb-12 text-center">
                <div className="text-sm font-black mb-6 text-zinc-400 uppercase tracking-widest">
                  {plan.name}
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-8">
                  <span className="text-6xl font-black text-zinc-900">
                    ¥{plan.price}
                  </span>
                  <span className="text-sm font-bold text-zinc-400">
                    {plan.period}
                  </span>
                </div>
                <div
                  className={`inline-block px-8 py-4 rounded-3xl font-black text-2xl ${
                    plan.popular
                      ? "bg-violet-600 text-white"
                      : "bg-zinc-100 text-zinc-900"
                  } shadow-inner`}
                >
                  {plan.subsidy}
                </div>
                <p className="mt-10 text-zinc-500 font-medium leading-relaxed px-4">
                  {plan.desc}
                </p>
              </div>
              <ul className="space-y-6 mb-12">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-zinc-600 font-bold"
                  >
                    <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-violet-600" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full py-10 text-xl font-black rounded-[28px] transition-all ${
                  plan.popular
                    ? "bg-[#06C755] hover:bg-[#05b34c] text-white shadow-xl shadow-emerald-100"
                    : "bg-zinc-900 text-white hover:bg-zinc-800"
                }`}
                asChild
              >
                <Link href="https://line.me/R/ti/p/@your-line-id">
                  まずはLINEで相談する
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

