"use client";

import { CareerHeader } from "./components/CareerHeader";
import { HeroSection } from "./components/HeroSection";
import { VoiceSection } from "./components/VoiceSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { WhyCheapSection } from "./components/WhyCheapSection";
import { CTASection } from "./components/CTASection";
import { YouTubeSection } from "./components/YouTubeSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { JobsSection } from "./components/JobsSection";
import { PlanSection } from "./components/PlanSection";
import { RepresentativeSection } from "./components/RepresentativeSection";
import { CareerFooter } from "./components/CareerFooter";

export default function CareerPage() {
    return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <CareerHeader />

            <main>
        {/* 1. FV (Hero Section) */}
        <HeroSection />

        {/* 3. 受講生の声 (Voice Section) */}
        <VoiceSection />

        {/* 4. 悩みありませんか？ */}
        <ProblemSection />

        {/* 5. こんな解決策用意しました (Service) */}
        <SolutionSection />

        {/* 6. 実際の学習計画・転職プラン */}
        <RoadmapSection />

        {/* 7. なぜ安いかの説明 */}
        <WhyCheapSection />

        {/* 7. CTA */}
        <CTASection />

        {/* 8. YouTube動画 */}
        <YouTubeSection />

        {/* 9. 選ばれる理由 */}
        <FeaturesSection />

        {/* 10. CTA */}
        <CTASection />

        {/* 11. 他者との比較 */}
        <ComparisonSection />

        {/* 12. 求人一覧(信頼性向上) */}
        <JobsSection />

        {/* 13. 料金体系 (Plan Section) */}
        <PlanSection />

        {/* 14. 代表者の声 */}
        <RepresentativeSection />

        {/* 15. CTA */}
        <CTASection />
            </main>

      <CareerFooter />

            <style jsx>{`
                @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </div>
  );
}
