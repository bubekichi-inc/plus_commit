import { Briefcase, TrendingUp } from "lucide-react";

export const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">
            Roadmap
          </h2>
          <h3 className="text-4xl md:text-6xl font-black leading-tight text-zinc-900">
            実際の学習計画・
            <br className="md:hidden" />
            転職プラン
          </h3>
          <p className="text-zinc-500 font-medium mt-8 text-lg max-w-2xl mx-auto">
            一人ひとりの目標や現在の状況に合わせて、最適なロードマップを作成します。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Pattern 1: 未経験からエンジニア転職 */}
          <div className="bg-zinc-50 rounded-[56px] p-10 md:p-16 border border-zinc-100">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-violet-600 rounded-3xl flex items-center justify-center text-white">
                <Briefcase className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-zinc-900">
                  未経験からのエンジニア転職
                </h4>
                <p className="text-zinc-500 font-bold">20代後半 / 営業職から転身</p>
              </div>
            </div>

            <div className="space-y-10 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-200">
              {[
                {
                  step: "1-2ヶ月目",
                  title: "基礎固め & 環境構築",
                  desc: "お持ちの教材（Progateやドットインストール等）を使用。毎日2時間の学習を徹底管理。まずはHTML/CSS/JSの基礎を完璧に。",
                },
                {
                  step: "3-5ヶ月目",
                  title: "フレームワーク & 成果物制作",
                  desc: "React/Next.jsを用いたWebアプリ開発。週1回の面談で設計の考え方をアドバイス。GitHubへの草を生やす習慣化。",
                },
                {
                  step: "6ヶ月目〜",
                  title: "転職対策 & キャリア設計",
                  desc: "2万件以上の求人から最適な企業を選定。履歴書・職務経歴書の添削、エンジニア目線の模擬面接を繰り返し実施。",
                },
              ].map((item, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-10 h-10 bg-white border-2 border-violet-600 rounded-full flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 bg-violet-600 rounded-full" />
                  </div>
                  <div className="text-sm font-black text-violet-600 mb-2">
                    {item.step}
                  </div>
                  <h5 className="text-xl font-black text-zinc-900 mb-3">
                    {item.title}
                  </h5>
                  <p className="text-zinc-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pattern 2: 副業・フリーランス案件獲得 */}
          <div className="bg-zinc-900 rounded-[56px] p-10 md:p-16 text-white">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-2xl font-black">副業・フリーランス案件獲得</h4>
                <p className="text-zinc-400 font-bold">30代前半 / 働きながらの挑戦</p>
              </div>
            </div>

            <div className="space-y-10 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
              {[
                {
                  step: "1-2ヶ月目",
                  title: "実務スキルの最適化",
                  desc: "Web制作（WordPress, Shopify等）に特化した教材選定。案件獲得に必要な最低限のスキルセットを最短で習得。",
                },
                {
                  step: "3-4ヶ月目",
                  title: "ポートフォリオ & 営業準備",
                  desc: "クライアントに刺さるポートフォリオサイトの構築。クラウドソーシングのプロフィール添削と提案文の作成支援。",
                },
                {
                  step: "5ヶ月目〜",
                  title: "案件獲得 & 実務サポート",
                  desc: "実際の案件獲得に向けた並走サポート。初案件の進め方や、クライアントワークの作法まで細かくアドバイス。",
                },
              ].map((item, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-10 h-10 bg-zinc-800 border-2 border-blue-600 rounded-full flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
                  </div>
                  <div className="text-sm font-black text-blue-400 mb-2">
                    {item.step}
                  </div>
                  <h5 className="text-xl font-black mb-3">{item.title}</h5>
                  <p className="text-zinc-400 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

