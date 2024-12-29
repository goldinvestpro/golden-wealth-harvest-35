import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TransactionDialog } from "./TransactionDialog";
import { AccountModeSwitch } from "./AccountModeSwitch";
import { handleDemoTransaction, handleRealTransaction } from "./utils/transactionHandlers";

interface WalletHeaderProps {
  isDemoAccount: boolean;
  setIsDemoAccount: (value: boolean) => void;
}

export function WalletHeader({ isDemoAccount, setIsDemoAccount }: WalletHeaderProps) {
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  const handleDeposit = (amount: number) => {
    if (isDemoAccount) {
      handleDemoTransaction('deposit', amount, () => window.location.reload());
    } else {
      handleRealTransaction('deposit', amount, () => window.location.reload());
    }
  };

  const handleWithdraw = (amount: number) => {
    if (isDemoAccount) {
      handleDemoTransaction('withdraw', amount, () => window.location.reload());
    } else {
      handleRealTransaction('withdraw', amount, () => window.location.reload());
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:text-gold-300 transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <AccountModeSwitch 
          isDemoAccount={isDemoAccount}
          setIsDemoAccount={setIsDemoAccount}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <Button 
          variant="outline" 
          className="text-black border-white/80 font-medium hover:bg-white/10 hover:text-white"
          onClick={() => setIsDepositOpen(true)}
        >
          Deposit
        </Button>
        <Button 
          className="bg-gold-300 hover:bg-gold-400 text-navy-500 font-medium"
          onClick={() => setIsWithdrawOpen(true)}
        >
          Withdraw
        </Button>
      </div>

      <TransactionDialog
        isOpen={isDepositOpen}
        onClose={() => setIsDepositOpen(false)}
        type="deposit"
        isDemoAccount={isDemoAccount}
        onTransaction={handleDeposit}
      />

      <TransactionDialog
        isOpen={isWithdrawOpen}
        onClose={() => setIsWithdrawOpen(false)}
        type="withdraw"
        isDemoAccount={isDemoAccount}
        onTransaction={handleWithdraw}
      />
    </div>
  );
}