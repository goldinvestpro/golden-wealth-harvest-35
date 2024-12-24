import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/wallet/StatCard";
import { RevenueChart } from "@/components/wallet/RevenueChart";
import { SessionsChart } from "@/components/wallet/SessionsChart";
import { TransactionHistory } from "@/components/wallet/TransactionHistory";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Wallet() {
  const [isDemoAccount, setIsDemoAccount] = useState(false);

  const stats = {
    demo: {
      pageviews: "2.1K",
      pageviewsChange: 12.3,
      profits: "156",
      profitsChange: 8.1,
      invested: "1.8K",
      investedChange: 15.2,
    },
    real: {
      pageviews: "50.8K",
      pageviewsChange: 28.4,
      profits: "2.3K",
      profitsChange: 9.2,
      invested: "45.2K",
      investedChange: 22.5,
    }
  };

  const currentStats = isDemoAccount ? stats.demo : stats.real;

  const currentBalanceDescription = 
    "The Current Balance reflects your total financial standing, including initial contributions, " +
    "returns generated over time, and any additional deposits. When you make a deposit, funds are " +
    "immediately added to your Current Balance, ensuring an up-to-date and accurate account value. " +
    "This metric is essential for tracking your investment performance, progress, and overall account activity.";

  const investedBalanceDescription = 
    "The Invested Balance shows the portion of your Current Balance that is actively invested in our plans. " +
    "When you invest in a plan, that amount is automatically deducted from your Current Balance and added " +
    "to your Invested Balance. This helps you track how much of your capital is currently working for you " +
    "versus available for new investments.";

  return (
    <div className="min-h-screen bg-navy-500 text-white p-4 sm:p-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-gold-300 transition-colors">
              <ChevronLeft className="h-6 w-6" />
            </Link>
            <div className="flex items-center gap-2">
              <Switch
                id="account-mode"
                checked={isDemoAccount}
                onCheckedChange={setIsDemoAccount}
              />
              <Label htmlFor="account-mode" className="text-sm text-gray-300">
                {isDemoAccount ? "Demo Account" : "Real Account"}
              </Label>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button variant="outline" className="text-white border-white/80 font-medium hover:bg-white/10 hover:text-white">
              Deposit
            </Button>
            <Button className="bg-gold-300 hover:bg-gold-400 text-navy-500 font-medium">
              Withdraw
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <StatCard
            title="Current Balance"
            value={currentStats.pageviews}
            change={currentStats.pageviewsChange}
            isPositive={true}
            description={currentBalanceDescription}
          />
          <StatCard
            title="Profits"
            value={currentStats.profits}
            change={currentStats.profitsChange}
            isPositive={true}
          />
          <StatCard
            title="Invested Balance"
            value={currentStats.invested}
            change={currentStats.investedChange}
            isPositive={true}
            description={investedBalanceDescription}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 mb-8">
          <div className="lg:col-span-2">
            <RevenueChart isDemoAccount={isDemoAccount} />
          </div>
          <div>
            <SessionsChart isDemoAccount={isDemoAccount} />
          </div>
        </div>

        <div className="mt-8">
          <TransactionHistory isDemoAccount={isDemoAccount} />
        </div>
      </div>
    </div>
  );
}