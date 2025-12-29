"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Voice {
  id: number;
  name: string;
  role: string;
  course: string;
  catchphrase: string;
  before: string;
  after: string;
  image: string;
  details: string;
}

const VOICES: Voice[] = [
  {
    id: 1,
    name: "SHINSUKE",
    role: "デザイナー",
    course: "WEBデザインコース",
    catchphrase: "15年間勤めたアパレル業界から 心機一転フリーランスとして独立！",
    before: "アパレル販売員",
    after: "フリーランスWebデザイナーとして独立！",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    details: "15年間勤めたアパレル業界から、未経験でWebデザインの世界へ。プラスコミットの個別指導で、デザインの基礎から案件獲得の方法まで徹底的に学びました。現在はフリーランスとして、複数の企業のWebサイト制作を担当しています。自分のペースで働ける理想のライフスタイルを実現できました。"
  },
  {
    id: 2,
    name: "SHOTA",
    role: "エンジニア",
    course: "WEBエンジニアコース",
    catchphrase: "9年間勤めた建築業界から大転身！LINE構築事業で独立を実現",
    before: "建築業界 営業職",
    after: "LINE構築エンジニアとして独立！",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    details: "建築業界での営業経験を活かし、プログラミングを習得。特にニーズの高いLINE構築に特化することで、卒業後すぐに案件を獲得し、独立することができました。プラスコミットのメンターには、技術だけでなく営業のアドバイスもいただき、非常に感謝しています。"
  },
  {
    id: 3,
    name: "CHIZUKO",
    role: "マーケター",
    course: "WEBマーケティングコース",
    catchphrase: "スマホ時間を有効活用して、ゲーム感覚で仕事も日常生活も充実。",
    before: "一般事務職",
    after: "Webマーケターとしてキャリアアップ！",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    details: "事務職から未経験でマーケティングに挑戦しました。数字が動く楽しさを知り、現在は広告代理店でSNS広告の運用を担当しています。プラスコミットで学んだ論理的な思考は、仕事だけでなく日常生活の意思決定にも役立っています。"
  },
  {
    id: 4,
    name: "NORINARI",
    role: "エンジニア",
    course: "WEBエンジニアコース",
    catchphrase: "時間の切り売りから抜け出し、場所を選ばない働き方を手に入れた。",
    before: "飲食店店長",
    after: "フロントエンドエンジニアに転職！",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    details: "飲食店の店長として忙しい日々を送っていましたが、将来に不安を感じエンジニアへの転職を決意。仕事を続けながらの学習でしたが、プラスコミットの徹底した進捗管理のおかげで挫折せずに続けられました。現在は自社開発企業でフルリモート勤務をしています。"
  },
  {
    id: 5,
    name: "HARUKA",
    role: "ディレクター",
    course: "WEBデザインコース",
    catchphrase: "「私には無理」から「私ならできる」へ。自信を持ってキャリアを歩む。",
    before: "接客・販売員",
    after: "Webディレクターとして活躍！",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    details: "PC操作も不慣れな状態からのスタートでしたが、マンツーマンの指導で一つずつ壁を乗り越えていきました。現在はWebディレクターとして、制作チームの管理をしています。プラスコミットで得たのはスキルだけでなく、新しいことに挑戦する自信でした。"
  }
];

export const VoiceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % VOICES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + VOICES.length) % VOICES.length);
  };

  const getVoiceByIndex = (index: number) => {
    const i = (index + VOICES.length) % VOICES.length;
    return VOICES[i];
  };

  return (
    <section id="voice" className="pb-32 bg-[#E3E3E3] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-zinc-900">
            目標を叶えた受講生の方々
          </h2>
        </div>

        <div className="relative w-full max-w-7xl mx-auto">
          {/* Slider Container */}
          <div className="relative flex items-center justify-center gap-4 md:gap-8 min-h-[600px]">
            {[-1, 0, 1].map((offset) => {
              const voice = getVoiceByIndex(currentIndex + offset);
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={`${voice.id}-${offset}`}
                  initial={false}
                  animate={{
                    scale: isCenter ? 1 : 0.9,
                    opacity: isCenter ? 1 : 0.4,
                    x: offset * 20,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`relative flex-shrink-0 w-full md:w-[800px] bg-white rounded-[32px] shadow-2xl border border-zinc-100 p-8 md:p-16 ${
                    !isCenter ? "hidden md:block blur-[2px] cursor-pointer" : "z-10"
                  }`}
                  onClick={() => !isCenter && (offset === -1 ? prevSlide() : nextSlide())}
                >
                  {/* Header Info */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-4">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 md:w-24 md:h-24 relative rounded-full overflow-hidden border-4 border-zinc-50 shadow-lg">
                        <Image
                          src={voice.image}
                          alt={voice.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-zinc-500 font-bold mb-1 text-sm md:text-base">{voice.role}</p>
                        <h4 className="text-xl md:text-2xl font-black text-zinc-900">
                          {voice.name} <span className="text-sm md:text-lg font-bold">さん</span>
                        </h4>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-4 md:px-8 py-2 md:py-4 rounded-xl font-black text-sm md:text-lg shadow-lg">
                      {voice.course}
                    </div>
                  </div>

                  <div className="w-full h-1 border-t-2 border-dashed border-zinc-200 my-4" />

                  <div className="text-center py-4">
                    <div className="text-xl md:text-3xl font-black text-zinc-900 mb-8 md:mb-12 inline-block relative leading-snug">
                      {voice.catchphrase}
                      <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-200/50 -z-10" />
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8 md:mb-12">
                      <div className="w-full md:w-64 bg-amber-50 rounded-2xl p-4 md:p-6 relative">
                        <div className="absolute -top-3 md:-top-4 left-4 bg-amber-400 text-white px-3 md:px-4 py-0.5 md:py-1 rounded-lg text-xs md:text-sm font-black">
                          Before
                        </div>
                        <div className="text-base md:text-lg font-black text-zinc-700 mt-1 md:mt-2">
                          {voice.before}
                        </div>
                      </div>

                      <div className="flex gap-1 text-red-300 transform rotate-90 md:rotate-0">
                        {[1, 2, 3].map((i) => (
                          <ChevronRight key={i} className="w-6 h-6 md:w-8 md:h-8" />
                        ))}
                      </div>

                      <div className="w-full md:w-64 bg-rose-50 rounded-2xl p-4 md:p-6 relative">
                        <div className="absolute -top-3 md:-top-4 left-4 bg-rose-400 text-white px-3 md:px-4 py-0.5 md:py-1 rounded-lg text-xs md:text-sm font-black">
                          After
                        </div>
                        <div className="text-base md:text-lg font-black text-zinc-700 mt-1 md:mt-2 relative inline-block">
                          {voice.after}
                          <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-200/50 -z-10" />
                        </div>
                      </div>
                    </div>

                    {isCenter && (
                      <div className="text-right">
                        <button
                          onClick={() => setSelectedVoice(voice)}
                          className="group inline-flex items-center gap-4 text-rose-400 font-black text-lg md:text-xl border-b-2 border-rose-200 pb-1 hover:text-rose-500 hover:border-rose-500 transition-all"
                        >
                          詳しくみる
                          <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                              <ChevronRight key={i} className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                            ))}
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 md:left-4 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors z-30 border border-zinc-100"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 md:right-4 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors z-30 border border-zinc-100"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {VOICES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentIndex ? "bg-violet-600 w-8" : "bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVoice && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
              onClick={() => setSelectedVoice(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-[40px] w-full max-w-2xl overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedVoice(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 relative rounded-full overflow-hidden">
                      <Image
                        src={selectedVoice.image}
                        alt={selectedVoice.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-zinc-500 font-bold mb-1">{selectedVoice.role}</p>
                      <h4 className="text-2xl font-black text-zinc-900">
                        {selectedVoice.name} <span className="text-lg font-bold">さん</span>
                      </h4>
                    </div>
                  </div>

                  <h5 className="text-2xl font-black text-zinc-900 mb-8 leading-tight">
                    {selectedVoice.catchphrase}
                  </h5>

                  <div className="bg-zinc-50 rounded-3xl p-8 mb-8">
                    <div className="text-zinc-600 font-medium leading-loose whitespace-pre-wrap">
                      {selectedVoice.details}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1 bg-amber-50 p-4 rounded-2xl">
                      <p className="text-xs font-black text-amber-500 uppercase tracking-widest mb-1">Before</p>
                      <p className="font-bold text-zinc-700">{selectedVoice.before}</p>
                    </div>
                    <div className="flex-1 bg-rose-50 p-4 rounded-2xl">
                      <p className="text-xs font-black text-rose-500 uppercase tracking-widest mb-1">After</p>
                      <p className="font-bold text-zinc-700">{selectedVoice.after}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
