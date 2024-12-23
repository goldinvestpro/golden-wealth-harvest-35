import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

export const GoldPriceDisplay = () => {
  const [price, setPrice] = useState(1925.50);
  const [change, setChange] = useState(12.30);

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = price + (Math.random() - 0.5) * 2;
      const newChange = newPrice - price;
      setPrice(Number(newPrice.toFixed(2)));
      setChange(Number(newChange.toFixed(2)));
    }, 5000);

    return () => clearInterval(interval);
  }, [price]);

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg text-gray-600">Current Gold Price</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-navy-500">
            ${price.toFixed(2)}
          </span>
          <span className={`ml-2 flex items-center ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change >= 0 ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
            {Math.abs(change).toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-2">Per Troy Ounce</p>
      </CardContent>
    </Card>
  );
};