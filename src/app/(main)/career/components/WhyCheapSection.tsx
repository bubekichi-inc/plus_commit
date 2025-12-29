export const WhyCheapSection = () => {
  return (
    <section id="why-cheap" className="py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">
          Reason
        </h2>
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-zinc-900">
          なぜ、プラスコミットは安価なのか？
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="p-12 bg-zinc-50 rounded-[48px] border border-zinc-100 shadow-sm">
            <div className="text-violet-600 font-black text-2xl mb-6">
              01. 広告費の徹底削減
            </div>
            <p className="text-zinc-500 font-medium leading-relaxed text-lg">
              高額な広告運用をせず、SNSや口コミを中心とした集客を行うことで、その分を受講費用に還元しています。
            </p>
          </div>
          <div className="p-12 bg-zinc-50 rounded-[48px] border border-zinc-100 shadow-sm">
            <div className="text-violet-600 font-black text-2xl mb-6">
              02. 固定費を最小限に
            </div>
            <p className="text-zinc-500 font-medium leading-relaxed text-lg">
              実店舗を持たないオンライン特化型の運営により、賃料などの固定費を極限まで削ぎ落としています。
            </p>
          </div>
          <div className="p-12 bg-zinc-50 rounded-[48px] border border-zinc-100 shadow-sm">
            <div className="text-violet-600 font-black text-2xl mb-6">
              03. 既存教材の最大活用
            </div>
            <p className="text-zinc-500 font-medium leading-relaxed text-lg">
              自社カリキュラム開発にコストをかけず、世の中にある優れた既存教材を活用する「管理型」だからこそ実現できる価格です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

