import { CheckCircle } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section id="problem" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">
            problem
          </h2>
          <h3 className="text-4xl md:text-5xl font-black leading-tight text-zinc-900">
            悩みありませんか？
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {[
            "エンジニアになりたくて、とりあえずプログラミングを独学で学んでいるが、ゴールが見えない。",
            "スクールに入会しようとしているが、IT業界のことに詳しくなく、どのスクールがいいかわからない。",
            "教材を購入した・スクールに入ったが、モチベーションが続かず、中断してしまったが諦めたくない。",
            "学習、ポートフォリオの作成の次はどうすればいいかわからない",
          ].map((text, i) => (
            <div
              key={i}
              className="flex gap-4 p-8 bg-zinc-50 border border-zinc-200 rounded-[32px] shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-black flex-shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <p className="text-zinc-700 font-bold leading-relaxed text-lg">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-zinc-500 font-black leading-relaxed text-xl italic max-w-3xl mx-auto">
            細かくヒアリングしたのち、ひとりひとりに最適な学習計画・転職対策を提案させていただきます。
          </p>
        </div>
      </div>
    </section>
  );
};

