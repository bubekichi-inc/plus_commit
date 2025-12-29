import Image from "next/image";

export const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-32 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">
            comparison
          </h2>
          <h3 className="text-4xl md:text-6xl font-black leading-tight text-zinc-900">
            他社サービスとの比較
          </h3>
        </div>

        <div className="max-w-6xl mx-auto overflow-hidden rounded-[48px] border border-zinc-200 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-zinc-50/50">
                  <th className="p-8 text-left text-zinc-400 text-sm font-black border-b border-zinc-100"></th>
                  <th className="p-8 text-center border-b border-violet-100 bg-violet-50/50">
                    <Image
                      src="/general/career/logopc.svg"
                      alt="プラスコミット"
                      width={200}
                      height={44}
                      className="mx-auto mb-2 h-11 w-auto"
                    />
                    <span className="text-[10px] font-black text-violet-600 uppercase tracking-widest">
                      プラスコミット
                    </span>
                  </th>
                  <th className="p-8 text-center text-zinc-400 text-xs font-black border-b border-zinc-100">
                    A社
                  </th>
                  <th className="p-8 text-center text-zinc-400 text-xs font-black border-b border-zinc-100">
                    B社
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {[
                  {
                    label: "対応可能なスキル",
                    pc: "手持ちの教材で何でも対応可能",
                    a: "特定言語のみ",
                    b: "Web制作のみ",
                  },
                  {
                    label: "教材の自由度",
                    pc: "◎（スクール・書籍・動画等）",
                    a: "×（指定教材のみ）",
                    b: "×（指定教材のみ）",
                  },
                  {
                    label: "サポート体制",
                    pc: "1対1の徹底伴走",
                    a: "集団講義",
                    b: "チャットのみ",
                  },
                  {
                    label: "スタッフによる進捗管理",
                    pc: "◎（毎日確認）",
                    a: "△",
                    b: "×",
                  },
                  {
                    label: "紹介求人数",
                    pc: "20,000件以上",
                    a: "非公開",
                    b: "約500件",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-zinc-50/30 transition-colors"
                  >
                    <td className="p-8 text-left text-zinc-600 font-bold border-b border-zinc-100 bg-zinc-50/20">
                      {row.label}
                    </td>
                    <td className="p-8 border-b border-violet-100 bg-violet-50/30 font-black text-zinc-900 text-lg">
                      {row.pc}
                    </td>
                    <td className="p-8 border-b border-zinc-100 text-zinc-400 font-medium">
                      {row.a}
                    </td>
                    <td className="p-8 border-b border-zinc-100 text-zinc-400 font-medium">
                      {row.b}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

