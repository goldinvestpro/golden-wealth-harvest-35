import { StatCard } from "@/components/wallet/StatCard";

interface WalletStatsProps {
  currentStats: {
    pageviews: string;
    pageviewsChange: number;
    profits: string;
    profitsChange: number;
    invested: string;
    investedChange: number;
  };
}

export function WalletStats({ currentStats }: WalletStatsProps) {
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
  );
}