import { RevenueChart } from "./RevenueChart";
import { SessionsChart } from "./SessionsChart";

interface WalletChartsProps {
  isDemoAccount: boolean;
}

export function WalletCharts({ isDemoAccount }: WalletChartsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div className="col-span-4">
        <RevenueChart isDemoAccount={isDemoAccount} />
      </div>
      <div className="col-span-3">
        <SessionsChart isDemoAccount={isDemoAccount} />
      </div>
    </div>
  );
}