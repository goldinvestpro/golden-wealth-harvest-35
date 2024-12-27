import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { PayPalCheckoutButton } from "@/components/shop/PayPalCheckoutButton";

interface TransactionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  type: "deposit" | "withdraw";
  isDemoAccount: boolean;
  onTransaction: (amount: number) => void;
}

export function TransactionDialog({
  isOpen,
  onClose,
  type,
  isDemoAccount,
  onTransaction,
}: TransactionDialogProps) {
  const [amount, setAmount] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);

    if (isNaN(numAmount) || numAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid positive number.",
        variant: "destructive",
      });
      return;
    }

    onTransaction(numAmount);
    setAmount("");
    onClose();
  };

  const handlePayPalSuccess = () => {
    const numAmount = parseFloat(amount);
    onTransaction(numAmount);
    setAmount("");
    onClose();
    toast({
      title: "Payment Successful",
      description: "Your deposit has been processed successfully.",
    });
  };

  const handlePayPalError = () => {
    toast({
      title: "Payment Failed",
      description: "There was an error processing your payment. Please try again.",
      variant: "destructive",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="capitalize">
            {type} {isDemoAccount ? "(Demo Account)" : ""}
          </DialogTitle>
          <DialogDescription>
            Enter the amount you want to {type}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                type="number"
                step="0.01"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="col-span-4"
              />
            </div>
          </div>
          <DialogFooter className="flex flex-col items-stretch gap-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            {type === "deposit" ? (
              <PayPalCheckoutButton
                amount={parseFloat(amount) || 0}
                onSuccess={handlePayPalSuccess}
                onError={handlePayPalError}
              />
            ) : (
              <Button type="submit">Confirm {type}</Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}