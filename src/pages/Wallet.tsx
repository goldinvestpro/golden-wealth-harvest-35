import { useState } from "react";
import { WalletHeader } from "@/components/wallet/WalletHeader";
import { WalletStats } from "@/components/wallet/WalletStats";
import { WalletCharts } from "@/components/wallet/WalletCharts";
import { TransactionHistory } from "@/components/wallet/TransactionHistory";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

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
    <PayPalScriptProvider options={{ 
      clientId: "AYvK_buyCXDM9qj9XddqPQHq6dO1vb5XY9fCHI5FJAvcfRJ4GEz7Z9vLGZN5HrfLHEx8gqx0ZwkWtNgk", // Replace with your PayPal client ID
      currency: "USD",
      intent: "capture"
    }}>
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
    </PayPalScriptProvider>
  );
}