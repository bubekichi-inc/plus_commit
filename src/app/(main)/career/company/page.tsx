"use client";

import { CareerHeader } from "../components/CareerHeader";
import { CareerFooter } from "../components/CareerFooter";

export default function CompanyPage() {
  const companyInfo = [
                                    { label: "会社名", value: "株式会社プラスコミット" },
    { label: "代表取締役", value: "青柳 航佑" },
    { label: "設立", value: "2023年" },
    { label: "事業内容", value: "プログラミング学習支援、キャリア支援事業、WEB制作・開発事業" },
                                    { label: "所在地", value: "〒150-0000 東京都渋谷区" },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <CareerHeader />

      <main className="pt-48 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-black mb-12 border-b-4 border-zinc-900 pb-4">
            運営会社
          </h1>

          <div className="bg-zinc-50 border border-zinc-200 rounded-[40px] overflow-hidden shadow-sm">
            <dl className="divide-y divide-zinc-200">
              {companyInfo.map((info, index) => (
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
                            </div>
      </main>

      <CareerFooter />
                            </div>
  );
}
