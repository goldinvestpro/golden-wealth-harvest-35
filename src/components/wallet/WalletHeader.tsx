import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TransactionDialog } from "./TransactionDialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface WalletHeaderProps {
  isDemoAccount: boolean;
  setIsDemoAccount: (value: boolean) => void;
}

export function WalletHeader({ isDemoAccount, setIsDemoAccount }: WalletHeaderProps) {
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const { toast } = useToast();

  const handleDeposit = async (amount: number) => {
    if (isDemoAccount) {
      const currentBalance = parseFloat(localStorage.getItem('demoBalance') || '0');
      localStorage.setItem('demoBalance', (currentBalance + amount).toString());
      toast({
        title: "Deposit successful",
        description: `$${amount} has been added to your demo account.`,
      });
      window.location.reload();
    } else {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          toast({
            title: "Authentication required",
            description: "Please sign in to make transactions.",
            variant: "destructive",
          });
          return;
        }

        const { data: wallet, error: fetchError } = await supabase
          .from('wallets')
          .select('balance')
          .eq('user_id', user.id)
          .single();

        if (fetchError) {
          console.error('Error fetching wallet:', fetchError);
          toast({
            title: "Error",
            description: "Could not fetch wallet details.",
            variant: "destructive",
          });
          return;
        }

        const newBalance = (parseFloat(wallet.balance) || 0) + amount;

        const { error: updateError } = await supabase
          .from('wallets')
          .update({ balance: newBalance })
          .eq('user_id', user.id);

        if (updateError) {
          console.error('Error updating wallet:', updateError);
          toast({
            title: "Error",
            description: "Failed to update wallet balance.",
            variant: "destructive",
          });
          return;
        }

        toast({
          title: "Deposit successful",
          description: `$${amount} has been added to your account.`,
        });
        window.location.reload();
      } catch (error) {
        console.error('Transaction error:', error);
        toast({
          title: "Transaction failed",
          description: "An error occurred during the transaction.",
          variant: "destructive",
        });
      }
    }
  };

  const handleWithdraw = async (amount: number) => {
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
      window.location.reload();
    } else {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          toast({
            title: "Authentication required",
            description: "Please sign in to make transactions.",
            variant: "destructive",
          });
          return;
        }

        const { data: wallet, error: fetchError } = await supabase
          .from('wallets')
          .select('balance')
          .eq('user_id', user.id)
          .single();

        if (fetchError) {
          console.error('Error fetching wallet:', fetchError);
          toast({
            title: "Error",
            description: "Could not fetch wallet details.",
            variant: "destructive",
          });
          return;
        }

        const currentBalance = parseFloat(wallet.balance) || 0;
        if (amount > currentBalance) {
          toast({
            title: "Insufficient funds",
            description: "You don't have enough balance for this withdrawal.",
            variant: "destructive",
          });
          return;
        }

        const { error: updateError } = await supabase
          .from('wallets')
          .update({ balance: currentBalance - amount })
          .eq('user_id', user.id);

        if (updateError) {
          console.error('Error updating wallet:', updateError);
          toast({
            title: "Error",
            description: "Failed to update wallet balance.",
            variant: "destructive",
          });
          return;
        }

        toast({
          title: "Withdrawal successful",
          description: `$${amount} has been withdrawn from your account.`,
        });
        window.location.reload();
      } catch (error) {
        console.error('Transaction error:', error);
        toast({
          title: "Transaction failed",
          description: "An error occurred during the transaction.",
          variant: "destructive",
        });
      }
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