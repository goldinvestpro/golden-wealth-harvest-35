import { RevenueChart } from "@/components/wallet/RevenueChart";
import { SessionsChart } from "@/components/wallet/SessionsChart";

interface WalletChartsProps {
  isDemoAccount: boolean;
}

export function WalletCharts({ isDemoAccount }: WalletChartsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 mb-8">
      <div className="lg:col-span-2">
        <RevenueChart isDemoAccount={isDemoAccount} />
      </div>
      <div>
        <SessionsChart isDemoAccount={isDemoAccount} />
      </div>
    </div>
  );
}