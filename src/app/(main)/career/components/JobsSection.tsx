import { Zap } from "lucide-react";

export const JobsSection = () => {
  return (
    <section id="jobs" className="py-32 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">
            jobs
          </h2>
          <h3 className="text-4xl md:text-6xl font-black leading-tight text-zinc-900">
            紹介可能な求人・案件
          </h3>
          <p className="text-zinc-500 font-medium mt-8 text-lg">
            あなたの市場価値を正しく把握し、高待遇な職場をご提案します
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "自社開発企業：シニアエンジニア候補",
              tags: ["フルリモート", "TypeScript", "Next.js", "Go"],
              salary: "年収 800万〜1200万円",
              desc: "急成長中のSaaSスタートアップ。エンジニア主体でプロダクトを牽引できる、裁量の大きい環境です。",
              gradient: "from-violet-600 to-blue-600",
            },
            {
              title: "制作会社：Webディレクター / PM",
              tags: ["ハイブリッド", "ディレクション", "要件定義"],
              salary: "年収 600万〜950万円",
              desc: "大手企業のDX支援を多数手がける精鋭集団。技術的なバックグラウンドを活かしたマネジメントが可能です。",
              gradient: "from-fuchsia-600 to-pink-600",
            },
            {
              title: "ITコンサル：フロントエンドスペシャリスト",
              tags: ["フレックス制", "React", "大規模開発"],
              salary: "年収 700万〜1100万円",
              desc: "最先端のWeb技術を用いた大規模プロジェクト。パフォーマンス最適化や設計のリードをお任せします。",
              gradient: "from-orange-500 to-red-500",
            },
            {
              title: "スタートアップ：UI/UX Lead Designer",
              tags: ["フルリモート", "Figma", "Design System"],
              salary: "年収 650万〜1000万円",
              desc: "デザイン思考を重視するプロダクト開発チーム。ユーザー体験の設計から実装の橋渡しまで担っていただきます。",
              gradient: "from-emerald-500 to-teal-500",
            },
          ].map((job, i) => (
            <div
              key={i}
              className="group bg-zinc-50 border border-zinc-100 rounded-[40px] p-10 hover:bg-white hover:shadow-2xl hover:border-violet-100 transition-all"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${job.gradient} rounded-[24px] flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-100`}
                >
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-black text-zinc-900 mb-4 group-hover:text-violet-600 transition-colors">
                    {job.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[11px] font-black px-3 py-1.5 bg-zinc-200/50 text-zinc-500 rounded-full uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="bg-violet-50 text-violet-700 font-black text-lg px-6 py-2 rounded-2xl inline-block mb-6">
                    {job.salary}
                  </div>
                  <p className="text-zinc-500 font-medium leading-relaxed">
                    {job.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-zinc-400 font-bold mb-10 italic">
            ※ 常時1,000件以上の非公開求人を保有しています
          </p>
        </div>
      </div>
    </section>
  );
};

