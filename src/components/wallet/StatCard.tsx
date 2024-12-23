import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  isPositive: boolean;
}

export function StatCard({ title, value, change, isPositive }: StatCardProps) {
  return (
    <Card className="bg-navy-500 border-white/10">
      <CardContent className="p-4 sm:p-6">
        <p className="text-sm text-gray-400">{title}</p>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-xl sm:text-2xl font-bold">{value}</span>
          <span className={`flex items-center text-xs sm:text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            {Math.abs(change)}%
          </span>
        </div>
      </CardContent>
    </Card>
  );
}