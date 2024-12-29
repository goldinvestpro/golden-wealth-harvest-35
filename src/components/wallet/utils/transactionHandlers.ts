import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export const handleDemoTransaction = (
  type: 'deposit' | 'withdraw',
  amount: number,
  onSuccess?: () => void
) => {
  const currentBalance = parseFloat(localStorage.getItem('demoBalance') || '0');
  
  if (type === 'withdraw' && amount > currentBalance) {
    toast({
      title: "Insufficient funds",
      description: "You don't have enough balance for this withdrawal.",
      variant: "destructive",
    });
    return;
  }

  const newBalance = type === 'deposit' 
    ? currentBalance + amount 
    : currentBalance - amount;
  
  localStorage.setItem('demoBalance', newBalance.toString());
  
  toast({
    title: `${type === 'deposit' ? 'Deposit' : 'Withdrawal'} successful`,
    description: `$${amount} has been ${type === 'deposit' ? 'added to' : 'withdrawn from'} your demo account.`,
  });
  
  onSuccess?.();
};

export const handleRealTransaction = async (
  type: 'deposit' | 'withdraw',
  amount: number,
  onSuccess?: () => void
) => {
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

    // Ensure we're working with numbers by explicitly parsing the balance
    const currentBalance = Number(wallet?.balance || 0);
    
    if (type === 'withdraw' && amount > currentBalance) {
      toast({
        title: "Insufficient funds",
        description: "You don't have enough balance for this withdrawal.",
        variant: "destructive",
      });
      return;
    }

    const newBalance = type === 'deposit' 
      ? currentBalance + amount 
      : currentBalance - amount;

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
      title: `${type === 'deposit' ? 'Deposit' : 'Withdrawal'} successful`,
      description: `$${amount} has been ${type === 'deposit' ? 'added to' : 'withdrawn from'} your account.`,
    });
    
    onSuccess?.();
  } catch (error) {
    console.error('Transaction error:', error);
    toast({
      title: "Transaction failed",
      description: "An error occurred during the transaction.",
      variant: "destructive",
    });
  }
};