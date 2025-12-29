"use client";

import { CareerHeader } from "../components/CareerHeader";
import { CareerFooter } from "../components/CareerFooter";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <CareerHeader />

      <main className="pt-48 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-black mb-12 border-b-4 border-zinc-900 pb-4">
            利用規約
          </h1>

          <div className="space-y-12 leading-relaxed">
            <section>
              <p className="text-zinc-600 mb-6 font-medium">
                この利用規約（以下，「本規約」といいます。）は，株式会社プラスコミット（以下，「当社」といいます。）が提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録希望者および利用者の皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-zinc-900">
                <span className="bg-zinc-900 text-white px-3 py-1 rounded-xl text-sm font-black">第1条</span>
                適用
              </h2>
              <p className="text-zinc-600 font-medium">
                本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。当社は本サービスに関し，本規約のほか，各種の規定（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-zinc-900">
                <span className="bg-zinc-900 text-white px-3 py-1 rounded-xl text-sm font-black">第2条</span>
                利用登録
              </h2>
              <p className="text-zinc-600 mb-4 font-medium">
                本サービスにおいては，登録希望者が本規約に同意の上，当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。
              </p>
              <p className="text-zinc-600 font-medium">
                当社は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2 text-zinc-600 font-medium">
                <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                <li>本規約に違反したことがある者からの申請である場合</li>
                <li>その他，当社が利用登録を相当でないと判断した場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-zinc-900">
                <span className="bg-zinc-900 text-white px-3 py-1 rounded-xl text-sm font-black">第3条</span>
                禁止事項
              </h2>
              <p className="text-zinc-600 mb-4 font-medium">
                ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
              </p>
              <ul className="list-disc ml-6 space-y-2 text-zinc-600 font-medium">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社，本サービスの他のユーザー，または第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正アクセスをし，またはこれを試みる行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当社のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>当社，本サービスの他のユーザー，または第三者の知的財産権，肖像権，プライバシー，名誉その他の権利または利益を侵害する行為</li>
                <li>その他，当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-zinc-900">
                <span className="bg-zinc-900 text-white px-3 py-1 rounded-xl text-sm font-black">第4条</span>
                本サービスの提供の停止等
              </h2>
              <p className="text-zinc-600 font-medium">
                当社は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2 text-zinc-600 font-medium">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他，当社が本サービスの提供が困難と判断した場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-zinc-900">
                <span className="bg-zinc-900 text-white px-3 py-1 rounded-xl text-sm font-black">第5条</span>
                保証の否認および免責事項
              </h2>
              <p className="text-zinc-600 mb-4 font-medium">
                当社は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティ等に関する欠陥，エラーやバグ，権利侵害等を含みます。）がないことを明示的にも黙示的にも保証しておりません。
              </p>
              <p className="text-zinc-600 font-medium">
                当社は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし，本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-zinc-900">
                <span className="bg-zinc-900 text-white px-3 py-1 rounded-xl text-sm font-black">第6条</span>
                規約の変更
              </h2>
              <p className="text-zinc-600 font-medium">
                当社は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-zinc-900">
                <span className="bg-zinc-900 text-white px-3 py-1 rounded-xl text-sm font-black">第7条</span>
                準拠法・裁判管轄
              </h2>
              <p className="text-zinc-600 font-medium">
                本規約の解釈にあたっては，日本法を準拠法とします。本サービスに関して紛争が生じた場合には，当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </section>

            <div className="pt-12 text-right text-zinc-400 text-sm font-bold">
              <p>2024年1月1日 制定</p>
            </div>
          </div>
        </div>
      </main>

      <CareerFooter />
    </div>
  );
}
