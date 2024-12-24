import { useState } from "react";
import { WalletHeader } from "@/components/wallet/WalletHeader";
import { WalletStats } from "@/components/wallet/WalletStats";
import { WalletCharts } from "@/components/wallet/WalletCharts";
import { TransactionHistory } from "@/components/wallet/TransactionHistory";

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

  return (
    <div className="min-h-screen bg-navy-500 text-white p-4 sm:p-8">
      <div className="max-w-[1400px] mx-auto">
        <WalletHeader 
          isDemoAccount={isDemoAccount}
          setIsDemoAccount={setIsDemoAccount}
        />
        
        <WalletStats currentStats={currentStats} />
        
        <WalletCharts isDemoAccount={isDemoAccount} />

        <div className="mt-8">
          <TransactionHistory isDemoAccount={isDemoAccount} />
        </div>
      </div>
    </div>
  );
}