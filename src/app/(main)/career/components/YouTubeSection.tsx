import { Play } from "lucide-react";

export const YouTubeSection = () => {
  return (
    <section id="youtube" className="py-32 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video bg-zinc-200 rounded-[64px] overflow-hidden shadow-2xl relative group cursor-pointer border-8 border-white">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Play className="w-12 h-12 fill-current" />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-12 left-0 w-full text-center">
              <p className="text-white font-black text-2xl tracking-tight shadow-sm">
                動画で見るプラスコミット
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

