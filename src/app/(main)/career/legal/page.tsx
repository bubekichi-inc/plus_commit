"use client";

import { CareerHeader } from "../components/CareerHeader";
import { CareerFooter } from "../components/CareerFooter";

export default function LegalPage() {
  const legalInfo = [
    { label: "販売業者", value: "株式会社プラスコミット" },
    { label: "代表責任者", value: "青柳 航佑" },
    { label: "所在地", value: "〒150-0000 東京都渋谷区" },
    { label: "電話番号", value: "請求があったら遅滞なく開示します" },
    { label: "メールアドレス", value: "請求があったら遅滞なく開示します" },
    { label: "販売価格", value: "各プランの紹介ページに表示された金額（税込）" },
    {
      label: "商品代金以外の必要料金",
      value:
        "銀行振込の場合、振込手数料。インターネット接続料金その他の電気通信回線の通信に関する費用（価格はお客様が契約した各事業者様が定める通り）",
    },
    { label: "お支払方法", value: "クレジットカード、銀行振込" },
    {
      label: "代金の支払時期",
      value: "クレジットカード：各カード会社の引き落とし日。銀行振込：お申し込みから1週間以内",
    },
    { label: "役務の提供時期", value: "入会手続き完了後、即時" },
    {
      label: "返品・キャンセルについて",
      value: "サービスの性質上、返品・返金は承っておりません。途中解約については利用規約をご確認ください。",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <CareerHeader />

      <main className="pt-48 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-black mb-12 border-b-4 border-zinc-900 pb-4">
            特定商取引法に基づく表示
          </h1>

          <div className="bg-zinc-50 border border-zinc-200 rounded-[40px] overflow-hidden shadow-sm">
            <dl className="divide-y divide-zinc-200">
              {legalInfo.map((info, index) => (
                <div key={index} className="grid md:grid-cols-3 p-10 gap-4">
                  <dt className="text-zinc-400 font-black text-xs tracking-[0.2em] uppercase">
                    {info.label}
                  </dt>
                  <dd className="md:col-span-2 text-zinc-900 font-bold leading-relaxed text-lg">
                    {info.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-12 text-zinc-400 text-sm font-bold leading-relaxed italic text-center">
            <p>※ 上記以外の事項に関しては、お取引の際に請求があれば遅滞なく提示いたします。</p>
          </div>
        </div>
      </main>

      <CareerFooter />
    </div>
  );
}
