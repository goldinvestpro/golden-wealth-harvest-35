import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDemoClick = () => {
    // In a real app, this would interact with a backend
    // For now, we'll store it in localStorage
    const currentBalance = localStorage.getItem('demoBalance');
    if (!currentBalance) {
      localStorage.setItem('demoBalance', '10000');
      localStorage.setItem('isDemoAccount', 'true');
      toast({
        title: "Demo Account Credited!",
        description: "Your demo account has been credited with $10,000 USD. Happy investing!",
        duration: 5000,
      });
    } else {
      toast({
        title: "Demo Account Active",
        description: "You already have a demo account with virtual funds.",
        duration: 3000,
      });
    }
  };

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
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-gold-300 text-navy-500 hover:bg-gold-400 transition-all w-full sm:w-auto"
              size="lg"
              onClick={() => navigate('/shop')}
            >
              Buy Now <ArrowRight className="ml-2" />
            </Button>
            <Button
              className="bg-navy-400 text-gold-300 hover:bg-navy-300 border-2 border-gold-300 transition-all w-full sm:w-auto"
              size="lg"
              onClick={handleDemoClick}
            >
              Try Demo
            </Button>
            <Button
              className="bg-gold-400 text-navy-500 hover:bg-gold-500 transition-all w-full sm:w-auto"
              size="lg"
            >
              Invest
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDAgTDIwMCAxMDAgTDEwMCAyMDAgTDAgMTAwIFoiIGZpbGw9IiNGRkQ3MDAiLz48L3N2Zz4=')]" />
    </div>
  );
};