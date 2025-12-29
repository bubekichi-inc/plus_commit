export const SolutionSection = () => {
  return (
    <section id="service" className="py-32 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">
            solution
          </h2>
          <h3 className="text-4xl md:text-6xl font-black leading-tight text-zinc-900">
            こんな解決策用意しました
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            {
              num: "01",
              title: "教材持ち込みで最短ルートを",
              desc: "カリキュラムの提供はありません。あなたが今通っているスクールや、購入した書籍、手持ちの教材を最大限に活かし、プロの視点で学習順序や重要度を最適化します。",
              gradient: "from-violet-600 to-blue-600",
            },
            {
              num: "02",
              title: "迷いをゼロにするロードマップ",
              desc: "現在のスキルレベルと目標に合わせて、手持ちの教材をどう進めるべきか個別のロードマップを作成。今日何をすべきかが明確になり、迷いなく学習に没頭できます。",
              gradient: "from-fuchsia-600 to-pink-600",
            },
            {
              num: "03",
              title: "価値を創る仲間と共に",
              desc: "業界で活躍する専門講師、挫折させないサポート運営陣、互いに高め合う受講生。同じゴールに向かう仲間と共に、着実にスキルを身につけられます。",
              gradient: "from-orange-500 to-red-500",
            },
            {
              num: "04",
              title: "月に1回、1時間程度の個別面談",
              desc: "毎月1回、面談を実施します。これからの学習計画の策定や月ごとの振り返りを実施します。コードレビューやエラーの解決は対応できませんが、WEBアプリを公開するまでの一通りの流れのサポートは対応可能です。",
              gradient: "from-emerald-500 to-teal-500",
            },
            {
              num: "05",
              title: "毎日のチャットサポート",
              desc: "毎日決まった時間に、まずは今日やるタスクや目標の宣言をします。その後、寝る前に今日はどれだけ目標を達成できたかの振り返りをします。これが継続できるように催促します。",
              gradient: "from-blue-500 to-indigo-500",
            },
            {
              num: "06",
              title: "監視サポート",
              desc: "SNS投稿や、githubの草、筋トレといった継続したいアクションを事前に共有いただければ、それが継続できているか毎日確認させていただきます。3日に1回ジムに行く、といった毎日継続するものでないものも柔軟に対応可能です。",
              gradient: "from-amber-500 to-orange-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-white border border-zinc-200 rounded-[48px] p-12 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <div
                className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center font-black text-2xl text-white mb-10 shadow-lg`}
              >
                {item.num}
              </div>
              <h4 className="text-2xl font-black mb-6 text-zinc-900 leading-tight">
                {item.title}
              </h4>
              <p className="text-zinc-500 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

