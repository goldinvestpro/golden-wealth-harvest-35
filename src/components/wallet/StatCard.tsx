import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  isPositive: boolean;
  description?: string;
}

export function StatCard({ title, value, change, isPositive, description }: StatCardProps) {
  return (
    <Card className="bg-navy-500 border-white/10">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center gap-2">
          <p className="text-sm text-white/80">{title}</p>
          {description && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-white/60 hover:text-white/80 transition-colors" />
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px] p-3">
                  <p className="text-sm">{description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-xl sm:text-2xl font-bold text-white">{value}</span>
          <span className={`flex items-center text-xs sm:text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            {Math.abs(change)}%
          </span>
        </div>
      </CardContent>
    </Card>
  );
}