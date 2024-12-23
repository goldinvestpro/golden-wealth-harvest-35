import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-navy-500 to-navy-400 text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Invest in Gold,{" "}
            <span className="text-gold-300">Secure Your Future</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-200">
            Start your journey in gold investment with GoldInvestPro. Choose your
            preferred investment timeline and watch your wealth grow.
          </p>
          <Button
            className="bg-gold-300 text-navy-500 hover:bg-gold-400 transition-all w-full md:w-auto"
            size="lg"
          >
            Start Investing <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDAgTDIwMCAxMDAgTDEwMCAyMDAgTDAgMTAwIFoiIGZpbGw9IiNGRkQ3MDAiLz48L3N2Zz4=')]" />
    </div>
  );
};