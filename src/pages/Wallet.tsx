import { useState } from "react";
import { WalletHeader } from "@/components/wallet/WalletHeader";
import { WalletStats } from "@/components/wallet/WalletStats";
import { WalletCharts } from "@/components/wallet/WalletCharts";
import { TransactionHistory } from "@/components/wallet/TransactionHistory";
// Removed PayPalInvestButton import

export default function Wallet() {
  const [isDemoAccount, setIsDemoAccount] = useState(false);

  const stats = {
    demo: {
      pageviews: localStorage.getItem('demoBalance') || "0",
      pageviewsChange: 0,
      profits: "0",
      profitsChange: 0,
      invested: "0",
      investedChange: 0,
    },
    real: {
      pageviews: "0",
      pageviewsChange: 0,
      profits: "0",
      profitsChange: 0,
      invested: "0",
      investedChange: 0,
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

        {/* Removed PayPalInvestButton */}
      </div>
    </div>
  );
}