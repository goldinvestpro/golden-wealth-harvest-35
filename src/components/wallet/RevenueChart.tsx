import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface RevenueChartProps {
  isDemoAccount?: boolean;
}

interface GoldPriceDataPoint {
  timestamp: string;
  price: number;
}

export function RevenueChart({ isDemoAccount = false }: RevenueChartProps) {
  const [priceHistory, setPriceHistory] = useState<GoldPriceDataPoint[]>([]);
  const [currentPrice, setCurrentPrice] = useState(1925.50);

  // Initialize with demo or real data based on account type
  useEffect(() => {
    const basePrice = isDemoAccount ? 500.25 : 1925.50;
    const initialHistory = Array.from({ length: 24 }, (_, i) => {
      const date = new Date();
      date.setHours(date.getHours() - (23 - i));
      return {
        timestamp: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        price: basePrice + (Math.random() - 0.5) * (isDemoAccount ? 5 : 10)
      };
    });
    setPriceHistory(initialHistory);
    setCurrentPrice(basePrice);
  }, [isDemoAccount]);

  // Update price and add to history
  useEffect(() => {
    const interval = setInterval(() => {
      const variation = isDemoAccount ? 1 : 2;
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
  }, [currentPrice, isDemoAccount]);

  return (
    <Card className="bg-navy-500 border-white/10">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div>
            <p className="text-sm text-gray-400">Gold Price Chart (24h)</p>
            <h2 className="text-2xl sm:text-3xl font-bold">${currentPrice.toFixed(2)}</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-sm">Gold Price (USD/oz)</span>
          </div>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={priceHistory}>
              <defs>
                <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EAB308" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#EAB308" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="timestamp" 
                stroke="#ffffff20"
                tick={{ fill: '#94A3B8' }}
              />
              <YAxis 
                stroke="#ffffff20"
                tick={{ fill: '#94A3B8' }}
                domain={['auto', 'auto']}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1E293B',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#EAB308"
                fillOpacity={1}
                fill="url(#colorGold)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}