import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartLine } from "lucide-react";

export const InvestmentSummary = () => {
  return (
    <Card className="md:col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <ChartLine className="h-6 w-6 text-navy-500" />
          <span>Investment Summary</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Invested</span>
            <span className="font-bold text-navy-500">$10,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Current Value</span>
            <span className="font-bold text-green-500">$12,500</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Returns</span>
            <span className="font-bold text-green-500">+25%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Active Plans</span>
            <span className="font-bold">3</span>
          </div>
          <Button className="w-full mt-4" variant="outline">
            View Investment Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};