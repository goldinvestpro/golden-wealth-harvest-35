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
              <>
                <style>
                  {`.pp-R5DVC2GYXJS26{
                    text-align:center;
                    border:none;
                    border-radius:0.25rem;
                    min-width:11.625rem;
                    padding:0 2rem;
                    height:2.625rem;
                    font-weight:bold;
                    background-color:#FFD140;
                    color:#000000;
                    font-family:"Helvetica Neue",Arial,sans-serif;
                    font-size:1rem;
                    line-height:1.25rem;
                    cursor:pointer;
                  }`}
                </style>
                <form 
                  action="https://www.paypal.com/ncp/payment/R5DVC2GYXJS26" 
                  method="post" 
                  target="_top" 
                  style={{
                    display: 'inline-grid',
                    justifyItems: 'center',
                    alignContent: 'start',
                    gap: '0.5rem'
                  }}
                >
                  <input className="pp-R5DVC2GYXJS26" type="submit" value="Buy Now" />
                  <img src="https://www.paypalobjects.com/images/Debit_Credit.svg" alt="cards" />
                  <section>
                    Powered by{' '}
                    <img 
                      src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" 
                      alt="paypal" 
                      style={{ height: '0.875rem', verticalAlign: 'middle' }}
                    />
                  </section>
                </form>
              </>
            ) : (
              <Button type="submit">Confirm {type}</Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}