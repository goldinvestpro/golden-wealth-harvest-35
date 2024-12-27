import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { WalletHeader } from "@/components/wallet/WalletHeader";
import { WalletStats } from "@/components/wallet/WalletStats";
import { WalletCharts } from "@/components/wallet/WalletCharts";
import { TransactionHistory } from "@/components/wallet/TransactionHistory";
import { TransactionDialog } from "@/components/wallet/TransactionDialog";

export default function Wallet() {
  const [isDemoAccount, setIsDemoAccount] = useState(false);
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [searchParams] = useSearchParams();

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

  useEffect(() => {
    if (searchParams.get('action') === 'deposit') {
      setIsDepositOpen(true);
    }
  }, [searchParams]);

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

        <TransactionDialog
          isOpen={isDepositOpen}
          onClose={() => setIsDepositOpen(false)}
          type="deposit"
          isDemoAccount={isDemoAccount}
          onTransaction={(amount) => {
            console.log('Transaction:', amount);
            // Handle transaction logic here
          }}
        />
      </div>
    </div>
  );
}