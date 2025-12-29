"use client";

import { CareerHeader } from "../components/CareerHeader";
import { CareerFooter } from "../components/CareerFooter";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <CareerHeader />

      <main className="pt-48 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-black mb-12 border-b-4 border-zinc-900 pb-4">
            プライバシーポリシー
          </h1>

          <div className="space-y-12 leading-relaxed text-zinc-600 font-medium">
            <section>
              <p>
                株式会社プラスコミット（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス（以下，「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-zinc-900">
                <span className="bg-zinc-900 text-white px-3 py-1 rounded-xl text-sm font-black">第1条</span>
                個人情報
              </h2>
              <p>
                「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別符号）を指します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-zinc-900">
                <span className="bg-zinc-900 text-white px-3 py-1 rounded-xl text-sm font-black">第2条</span>
                個人情報の収集方法
              </h2>
              <p>
                当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-zinc-900">
                <span className="bg-zinc-900 text-white px-3 py-1 rounded-xl text-sm font-black">第3条</span>
                個人情報を収集・利用する目的
              </h2>
              <p className="mb-4">当社が個人情報を収集・利用する目的は，以下のとおりです。</p>
              <ul className="list-decimal ml-6 space-y-2">
                <li>当社サービスの提供・運営のため</li>
                <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                <li>ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                <li>メンテナンス，重要なお知らせなど必要に応じたご連絡のため</li>
                <li>利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため</li>
                <li>ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況ের閲覧を行っていただくため</li>
                <li>有料サービスにおいて，ユーザーに利用料金を請求するため</li>
                <li>上記の利用目的に付随する目的</li>
              </ul>
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
