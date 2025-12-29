import { CheckCircle } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section id="why-us" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">
            features
          </h2>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900">
            選ばれる理由
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "完全個別指導",
              desc: "あなたのペース、あなたの教材に合わせて、現役プロがマンツーマンで並走します。1対1だからこそ、些細な悩みも解消できます。",
            },
            {
              title: "圧倒的な進捗管理",
              desc: "「今日何をすべきか」を明確にし、毎日の振り返りと催促で挫折を物理的に防ぎます。一人では続かない学習を仕組みで解決します。",
            },
            {
              title: "転職・案件獲得の実績",
              desc: "学習の先にある「稼ぐ」までを、キャリアプランの策定から履歴書の添削、面接対策まで徹底サポートします。",
            },
            {
              title: "教材持ち込み自由",
              desc: "特定の教材を売りつけることはありません。あなたが信じた教材や、今通っているスクールを最大限に活かす方法を提案します。",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-8 p-12 bg-zinc-50 rounded-[48px] border border-zinc-100 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-violet-600 rounded-[24px] flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-100">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-black mb-4 text-zinc-900 leading-tight">
                  {item.title}
                </h4>
                <p className="text-zinc-500 font-medium leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

