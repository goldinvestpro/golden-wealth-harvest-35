import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/wallet/StatCard";
import { RevenueChart } from "@/components/wallet/RevenueChart";
import { SessionsChart } from "@/components/wallet/SessionsChart";
import { TransactionHistory } from "@/components/wallet/TransactionHistory";

export default function Wallet() {
  return (
    <div className="min-h-screen bg-navy-500 text-white p-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold">Welcome back, John</h1>
          <div className="flex gap-4">
            <Button variant="outline" className="text-white border-white/20">
              Export data
            </Button>
            <Button className="bg-indigo-500 hover:bg-indigo-600">
              Create report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <StatCard
            title="Pageviews"
            value="50.8K"
            change={28.4}
            isPositive={true}
          />
          <StatCard
            title="Subscriptions"
            value="2.3K"
            change={9.2}
            isPositive={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <SessionsChart />
          </div>
        </div>

        <div className="mt-8">
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}