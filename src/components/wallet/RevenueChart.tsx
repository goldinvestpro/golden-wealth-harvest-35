import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { fetchGoldPrice } from "@/services/goldPrice";
import { GoldPriceDisplay } from "./GoldPriceDisplay";
import { GoldPriceChart } from "./GoldPriceChart";

interface RevenueChartProps {
  isDemoAccount?: boolean;
}

export interface GoldPriceDataPoint {
  timestamp: string;
  price: number;
}

export function RevenueChart({ isDemoAccount = false }: RevenueChartProps) {
  const [priceHistory, setPriceHistory] = useState<GoldPriceDataPoint[]>([]);
  const [currentPrice, setCurrentPrice] = useState(1925.50);
  const { toast } = useToast();

  // Initialize with demo or real data based on account type
  useEffect(() => {
    if (isDemoAccount) {
      // Use demo data for demo accounts
      const basePrice = 500.25;
      const initialHistory = Array.from({ length: 24 }, (_, i) => {
        const date = new Date();
        date.setHours(date.getHours() - (23 - i));
        return {
          timestamp: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          price: basePrice + (Math.random() - 0.5) * 5
        };
      });
      setPriceHistory(initialHistory);
      setCurrentPrice(basePrice);
    } else {
      // Fetch real gold price for real accounts
      fetchLatestGoldPrice();
    }
  }, [isDemoAccount]);

  const fetchLatestGoldPrice = async () => {
    try {
      const response = await fetchGoldPrice();
      const goldPrice = response.rates.XAU.USD;
      console.log('Extracted Gold Price:', goldPrice);
      
      setCurrentPrice(goldPrice);
      
      // Update price history with the new price
      setPriceHistory(prev => {
        const newHistory = [...prev.slice(1), {
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          price: goldPrice
        }];
        return newHistory;
      });
    } catch (error) {
      console.error('Error fetching gold price:', error);
      toast({
        title: "Error fetching gold price",
        description: "Could not fetch the latest gold price. Using fallback data.",
        variant: "destructive",
      });
    }
  };

  // Update price periodically
  useEffect(() => {
    if (isDemoAccount) {
      const interval = setInterval(() => {
        const variation = 1;
        const newPrice = currentPrice + (Math.random() - 0.5) * variation;
        setCurrentPrice(Number(newPrice.toFixed(2)));
        
        setPriceHistory(prev => {
          const newHistory = [...prev.slice(1), {
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            price: newPrice
          }];
          return newHistory;
        });
      }, 5000);

      return () => clearInterval(interval);
    } else {
      // For real accounts, fetch new price every 5 seconds
      const interval = setInterval(fetchLatestGoldPrice, 5000);
      return () => clearInterval(interval);
    }
  }, [currentPrice, isDemoAccount]);

  return (
    <Card className="bg-navy-500 border-white/10">
      <CardContent className="p-4 sm:p-6">
        <GoldPriceDisplay currentPrice={currentPrice} />
        <GoldPriceChart priceHistory={priceHistory} />
      </CardContent>
    </Card>
  );
}