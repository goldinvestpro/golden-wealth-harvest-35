import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TransactionDialog } from "./TransactionDialog";
import { useToast } from "@/hooks/use-toast";

interface WalletHeaderProps {
  isDemoAccount: boolean;
  setIsDemoAccount: (value: boolean) => void;
}

export function WalletHeader({ isDemoAccount, setIsDemoAccount }: WalletHeaderProps) {
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const { toast } = useToast();

  const handleDeposit = (amount: number) => {
    if (isDemoAccount) {
      const currentBalance = parseFloat(localStorage.getItem('demoBalance') || '0');
      localStorage.setItem('demoBalance', (currentBalance + amount).toString());
      toast({
        title: "Deposit successful",
        description: `$${amount} has been added to your demo account.`,
      });
      window.location.reload(); // Refresh to update balances
    } else {
      toast({
        title: "Real account deposit",
        description: "This would integrate with a payment processor in production.",
      });
    }
  };

  const handleWithdraw = (amount: number) => {
    if (isDemoAccount) {
      const currentBalance = parseFloat(localStorage.getItem('demoBalance') || '0');
      if (amount > currentBalance) {
        toast({
          title: "Insufficient funds",
          description: "You don't have enough balance for this withdrawal.",
          variant: "destructive",
        });
        return;
      }
      localStorage.setItem('demoBalance', (currentBalance - amount).toString());
      toast({
        title: "Withdrawal successful",
        description: `$${amount} has been withdrawn from your demo account.`,
      });
      window.location.reload(); // Refresh to update balances
    } else {
      toast({
        title: "Real account withdrawal",
        description: "This would integrate with a payment processor in production.",
      });
    }
  };

  return (
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
        <Button 
          variant="outline" 
          className="text-white border-white/80 font-medium hover:bg-white/10 hover:text-white"
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