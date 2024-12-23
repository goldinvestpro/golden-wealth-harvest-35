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
      subscriptions: "156",
      subscriptionsChange: 8.1,
    },
    real: {
      pageviews: "50.8K",
      pageviewsChange: 28.4,
      subscriptions: "2.3K",
      subscriptionsChange: 9.2,
    }
  };

  const currentStats = isDemoAccount ? stats.demo : stats.real;

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
            <Button variant="outline" className="text-white border-white/20">
              Export data
            </Button>
            <Button className="bg-indigo-500 hover:bg-indigo-600">
              Create report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <StatCard
            title="Current Balance"
            value={currentStats.pageviews}
            change={currentStats.pageviewsChange}
            isPositive={true}
          />
          <StatCard
            title="Subscriptions"
            value={currentStats.subscriptions}
            change={currentStats.subscriptionsChange}
            isPositive={true}
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