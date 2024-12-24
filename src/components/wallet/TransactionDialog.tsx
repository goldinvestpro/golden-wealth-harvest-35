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
import { PayPalButtons } from "@paypal/react-paypal-js";

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="capitalize">
            {type} {isDemoAccount ? "(Demo Account)" : ""}
          </DialogTitle>
          <DialogDescription>
            {type === "deposit" 
              ? "Choose your preferred deposit method and enter the amount."
              : "Enter the amount you want to withdraw."}
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
            {type === "deposit" && !isDemoAccount && (
              <div className="mt-4">
                <PayPalButtons
                  createOrder={(data, actions) => {
                    const numAmount = parseFloat(amount);
                    if (isNaN(numAmount) || numAmount <= 0) {
                      toast({
                        title: "Invalid amount",
                        description: "Please enter a valid amount first.",
                        variant: "destructive",
                      });
                      return Promise.reject();
                    }
                    return actions.order.create({
                      intent: "CAPTURE",
                      purchase_units: [
                        {
                          amount: {
                            value: numAmount.toString(),
                            currency_code: "USD",
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    if (actions.order) {
                      const details = await actions.order.capture();
                      console.log("Payment completed", details);
                      const numAmount = parseFloat(amount);
                      onTransaction(numAmount);
                      setAmount("");
                      onClose();
                      toast({
                        title: "Payment Successful",
                        description: "Your deposit has been processed successfully.",
                      });
                    }
                  }}
                  onError={() => {
                    toast({
                      title: "Payment Error",
                      description: "There was an error processing your payment. Please try again.",
                      variant: "destructive",
                    });
                  }}
                  style={{ layout: "horizontal" }}
                />
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {type === "deposit" && isDemoAccount ? "Demo Deposit" : type === "withdraw" ? "Withdraw" : "Manual Deposit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}