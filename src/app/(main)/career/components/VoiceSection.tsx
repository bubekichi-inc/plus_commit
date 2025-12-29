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
    <section id="voice" className="relative pb-24 bg-[#E3E3E3] overflow-visible">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black leading-tight text-zinc-900">
            目標を叶えた受講生の方々
          </h2>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          {/* Slider Container */}
          <div className="relative flex items-center justify-center gap-3 md:gap-6 min-h-[280px]">
            {[-1, 0, 1].map((offset) => {
              const voice = getVoiceByIndex(currentIndex + offset);
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={`${voice.id}-${offset}`}
                  initial={false}
                  animate={{
                    scale: isCenter ? 1 : 1,
                    opacity: isCenter ? 1 : 1,
                    x: offset * 10,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`relative flex-shrink-0 w-full max-w-[480px] md:w-[480px] bg-white rounded-[24px] shadow-xl border border-zinc-100 p-5 md:p-8 ${
                    !isCenter ? "hidden md:block cursor-pointer" : "z-10"
                  }`}
                  onClick={() => !isCenter && (offset === -1 ? prevSlide() : nextSlide())}
                >
                  {/* Header Info */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 relative rounded-full overflow-hidden border-2 border-zinc-50 shadow-md">
                        <Image
                          src={voice.image}
                          alt={voice.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-zinc-500 font-bold text-xs md:text-sm">{voice.role}</p>
                        <h4 className="text-base md:text-lg font-black text-zinc-900">
                          {voice.name} <span className="text-xs md:text-sm font-bold">さん</span>
                        </h4>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-3 md:px-5 py-1.5 md:py-2 rounded-lg font-black text-xs md:text-sm shadow-md">
                      {voice.course}
                    </div>
                  </div>

                  <div className="w-full border-t border-dashed border-zinc-200 my-3" />

                  <div className="text-center py-2">
                    <div className="text-base md:text-xl font-black text-zinc-900 mb-5 md:mb-6 inline-block relative leading-snug">
                      {voice.catchphrase}
                      <span className="absolute -bottom-0.5 md:-bottom-1 left-0 w-full h-2 md:h-3 bg-yellow-200/50 -z-10" />
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-5 md:mb-6">
                      <div className="w-full md:w-48 bg-amber-50 rounded-xl p-3 md:p-4 relative">
                        <div className="absolute -top-2.5 left-3 bg-amber-400 text-white px-2 md:px-3 py-0.5 rounded-md text-[10px] md:text-xs font-black">
                          Before
                        </div>
                        <div className="text-sm md:text-base font-black text-zinc-700 mt-1">
                          {voice.before}
                        </div>
                      </div>

                      <div className="flex gap-0.5 text-red-300 transform rotate-90 md:rotate-0">
                        {[1, 2, 3].map((i) => (
                          <ChevronRight key={i} className="w-4 h-4 md:w-5 md:h-5" />
                        ))}
                      </div>

                      <div className="w-full md:w-48 bg-rose-50 rounded-xl p-3 md:p-4 relative">
                        <div className="absolute -top-2.5 left-3 bg-rose-400 text-white px-2 md:px-3 py-0.5 rounded-md text-[10px] md:text-xs font-black">
                          After
                        </div>
                        <div className="text-sm md:text-base font-black text-zinc-700 mt-1 relative inline-block">
                          {voice.after}
                          <span className="absolute -bottom-0.5 left-0 w-full h-1.5 bg-yellow-200/50 -z-10" />
                        </div>
                      </div>
                    </div>

                    {isCenter && (
                      <div className="text-right">
                        <button
                          onClick={() => setSelectedVoice(voice)}
                          className="group inline-flex items-center gap-2 text-rose-400 font-black text-sm md:text-base border-b-2 border-rose-200 pb-0.5 hover:text-rose-500 hover:border-rose-500 transition-all"
                        >
                          詳しくみる
                          <div className="flex -space-x-1.5">
                            {[1, 2, 3].map((i) => (
                              <ChevronRight key={i} className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
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
            className="absolute top-1/2 left-0 md:left-2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors z-30 border border-zinc-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 md:right-2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors z-30 border border-zinc-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {VOICES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentIndex ? "bg-violet-600 w-6" : "bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Triangle shape at bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full h-24 bg-[#E3E3E3]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          transform: "translateY(100%)",
        }}
      />

      <AnimatePresence>
        {selectedVoice && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
              onClick={() => setSelectedVoice(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-[28px] w-full max-w-xl overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedVoice(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 relative rounded-full overflow-hidden">
                      <Image
                        src={selectedVoice.image}
                        alt={selectedVoice.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-zinc-500 font-bold text-sm">{selectedVoice.role}</p>
                      <h4 className="text-xl font-black text-zinc-900">
                        {selectedVoice.name} <span className="text-sm font-bold">さん</span>
                      </h4>
                    </div>
                  </div>

                  <h5 className="text-lg font-black text-zinc-900 mb-6 leading-tight">
                    {selectedVoice.catchphrase}
                  </h5>

                  <div className="bg-zinc-50 rounded-2xl p-5 mb-6">
                    <div className="text-zinc-600 font-medium leading-relaxed text-sm whitespace-pre-wrap">
                      {selectedVoice.details}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 bg-amber-50 p-3 rounded-xl">
                      <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-1">Before</p>
                      <p className="font-bold text-zinc-700 text-sm">{selectedVoice.before}</p>
                    </div>
                    <div className="flex-1 bg-rose-50 p-3 rounded-xl">
                      <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1">After</p>
                      <p className="font-bold text-zinc-700 text-sm">{selectedVoice.after}</p>
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
