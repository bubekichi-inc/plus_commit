import Image from "next/image";

export const RepresentativeSection = () => {
  return (
    <section
      id="representative"
      className="py-32 bg-zinc-900 text-white overflow-hidden relative"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-violet-600/30 via-fuchsia-600/20 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="relative">
            <div className="relative z-10 rounded-[48px] overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                alt="代表 青柳 航佑"
                width={600}
                height={800}
                className="object-cover w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
          </div>

          <div>
            <h2 className="text-sm font-black text-violet-400 uppercase tracking-[0.4em] mb-6">
              representative
            </h2>
            <h3 className="text-3xl md:text-5xl font-black mb-10 leading-tight">
              「エンジニアになりたい」という夢を、
              <br />
              夢で終わらせないために。
            </h3>
            <div className="space-y-6 text-lg text-white/70 font-medium leading-relaxed mb-12">
              <p>
                プログラミング学習は、多くの人にとって「人生を変えるきっかけ」になります。しかし、その道のりは決して平坦ではありません。
              </p>
              <p>
                独学での挫折、スクール選びの迷い、実務レベルまでのギャップ。私自身、多くの学習者がこれらの壁にぶつかる姿を見てきました。
              </p>
              <p>
                プラスコミットは、単なる知識の提供ではなく、「やり抜く環境」と「プロの視点」を提供することに特化しています。あなたが今持っている教材を武器に、最短ルートで目標に到達できるよう、私たちが全力で伴走します。
              </p>
              <p>
                あなたの挑戦が、一生モノのスキルと自信に変わるまで。私たちが責任を持ってサポートすることをお約束します。
              </p>
            </div>
            <div>
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-2">
                Representative
              </p>
              <p className="text-3xl font-black italic tracking-tighter">
                青柳 航佑{" "}
                <span className="text-sm font-bold ml-4 text-zinc-500 not-italic uppercase tracking-widest">
                  Kosuke Aoyagi
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

