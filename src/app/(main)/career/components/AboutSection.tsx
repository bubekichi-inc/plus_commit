import Image from "next/image";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-sm font-black text-violet-600 uppercase tracking-[0.4em] mb-6">
              about
            </h2>
            <h3 className="text-4xl md:text-6xl font-black mb-12 leading-tight text-zinc-900 flex flex-col md:flex-row items-center justify-center gap-4">
              <Image
                src="/general/career/logopc.svg"
                alt="プラスコミット"
                width={400}
                height={100}
                className="h-12 md:h-20 w-auto"
              />
              <span>とは?</span>
            </h3>
            <p className="text-xl md:text-2xl text-zinc-500 font-medium leading-loose">
              プラスコミットは、「理想のエンジニアになりたい」という全ての方々を応援する、個別指導型の学習管理・転職サポートサービスです。
              <br />
              <br />
              すでに通われているスクール、購入された教材を使ったカリキュラムの立案・学習の進行をサポートします。
              <br />
              <br />
              カリキュラム完走後は、転職のプロによる
              <br className="hidden md:block" />
              キャリアプランの設計から履歴書の添削、面接対策といった、
              <br className="hidden md:block" />
              転職活動の最初から最後までを徹底サポートいたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

