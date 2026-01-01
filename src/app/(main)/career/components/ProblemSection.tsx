"use client";

import Image from "next/image";

export const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-[#d8dde6] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* 上部：目標セクション */}
        <div className="relative mb-16">
          {/* タグ */}
          <div className="flex justify-center gap-3 mb-6">
            {["転職", "複業", "フリーランス..."].map((tag, i) => (
              <span
                key={i}
                className="px-5 py-2 bg-[#3b82f6] text-white text-sm font-black rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 吹き出しとイラスト */}
          <div className="flex items-start justify-center gap-4">
            {/* 黄色ダイヤモンド装飾 */}
            <div className="hidden md:block w-6 h-6 bg-[#fbbf24] rotate-45 mt-8" />
            
            {/* 吹き出し */}
            <div className="relative bg-white rounded-[32px] px-12 py-10 shadow-lg max-w-xl">
              <p className="text-2xl md:text-3xl font-black text-[#3b4a5c] text-center leading-relaxed">
                プログラミンを学んで
                <br />
                エンジニアとして働きたい！
              </p>
              {/* 吹き出しの尻尾 */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rotate-45" />
            </div>

            {/* はしごを登る人のイラスト */}
            <div className="hidden md:flex flex-col items-center relative">
              <div className="text-6xl">⭐</div>
              <div className="relative w-24 h-32">
                {/* 雲 */}
                <div className="absolute top-4 left-0 w-20 h-10 bg-[#87ceeb]/60 rounded-full" />
                <div className="absolute top-8 left-4 w-16 h-8 bg-[#87ceeb]/40 rounded-full" />
                {/* はしご */}
                <svg className="absolute top-0 left-8 w-16 h-32" viewBox="0 0 60 120">
                  <rect x="5" y="0" width="4" height="120" fill="#e67e22" />
                  <rect x="45" y="0" width="4" height="120" fill="#e67e22" />
                  <rect x="5" y="20" width="44" height="4" fill="#e67e22" />
                  <rect x="5" y="45" width="44" height="4" fill="#e67e22" />
                  <rect x="5" y="70" width="44" height="4" fill="#e67e22" />
                  <rect x="5" y="95" width="44" height="4" fill="#e67e22" />
                </svg>
                {/* 登る人 */}
                <div className="absolute top-6 left-12 text-4xl">🧗</div>
              </div>
            </div>
          </div>
        </div>

        {/* 中央：問いかけ */}
        <div className="text-center mb-16">
          <p className="text-2xl font-black text-[#3b4a5c] mb-4">だけど...</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#3b4a5c]">
            こんなお悩みありませんか？
          </h2>
        </div>

        {/* 下部：3つの悩み */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 items-end">
            {/* 悩み1: 何から始めたらいいかわからない */}
            <div className="flex flex-col items-center">
              <div className="relative bg-white rounded-full w-56 h-56 flex items-center justify-center p-6 shadow-lg mb-4">
                <p className="text-base font-black text-[#3b4a5c] text-center leading-relaxed">
                  エンジニアになりたいけど、
                  <br />
                  何から始めたらいいか
                  <br />
                  わからない
                </p>
                {/* 吹き出しの尻尾 */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45" />
              </div>
              {/* イラスト画像 */}
              <div className="h-40 flex items-end">
                <Image
                  src="/general/career/problem1.png"
                  alt="何から始めたらいいかわからない"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
            </div>

            {/* 悩み2: 学習が続けられず諦めた */}
            <div className="flex flex-col items-center">
              <div className="relative bg-white rounded-full w-64 h-64 flex items-center justify-center p-6 shadow-lg mb-4">
                <p className="text-base font-black text-[#3b4a5c] text-center leading-relaxed">
                  教材やスクールに
                  <br />
                  投資してきたが、
                  <br />
                  学習が続けられず、
                  <br />
                  諦めてしまった
                </p>
                {/* 吹き出しの尻尾 */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45" />
              </div>
              {/* イラスト画像 */}
              <div className="h-40 flex items-end">
                <Image
                  src="/general/career/problem2.png"
                  alt="学習が続けられず諦めた"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </div>

            {/* 悩み3: キャリア迷子 */}
            <div className="flex flex-col items-center">
              <div className="relative bg-white rounded-full w-56 h-56 flex items-center justify-center p-6 shadow-lg mb-4">
                <p className="text-base font-black text-[#3b4a5c] text-center leading-relaxed">
                  スクールを卒業したが、
                  <br />
                  理想の企業に転職できず
                  <br />
                  キャリア迷子に...
                </p>
                {/* 吹き出しの尻尾 */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45" />
              </div>
              {/* イラスト画像 */}
              <div className="h-40 flex items-end">
                <Image
                  src="/general/career/problem3.png"
                  alt="キャリア迷子"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
