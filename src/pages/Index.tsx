import { HeroSection } from "@/components/HeroSection";
import { InvestmentPlans } from "@/components/InvestmentPlans";
import { GoldPriceDisplay } from "@/components/GoldPriceDisplay";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <div className="container mx-auto px-4 -mt-10 mb-10">
        <GoldPriceDisplay />
      </div>
      <AboutSection />
      <InvestmentPlans />
    </div>
  );
};

export default Index;