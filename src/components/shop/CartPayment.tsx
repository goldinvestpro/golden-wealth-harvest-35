import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { PayPalButtons } from "@paypal/react-paypal-js";

interface CartPaymentProps {
  cartTotal: number;
  onSuccess: () => void;
}

export function CartPayment({ cartTotal, onSuccess }: CartPaymentProps) {
  const { toast } = useToast();

  const handlePaymentSuccess = () => {
    toast({
      title: "Payment Successful",
      description: "Your order has been processed successfully.",
    });
    onSuccess();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mt-4 pt-4 border-t">
        <span className="font-bold">Total:</span>
        <span className="font-bold">${cartTotal.toLocaleString()}</span>
      </div>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  value: cartTotal.toString(),
                  currency_code: "USD"
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          if (actions.order) {
            const details = await actions.order.capture();
            console.log("Payment completed", details);
            handlePaymentSuccess();
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
  );
}