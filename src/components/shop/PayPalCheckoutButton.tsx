import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PayPalCheckoutButtonProps {
  amount: number;
  onSuccess: () => void;
  onError: () => void;
}

declare global {
  interface Window {
    paypal?: any;
  }
}

export function PayPalCheckoutButton({ amount, onSuccess, onError }: PayPalCheckoutButtonProps) {
  const { toast } = useToast();

  useEffect(() => {
    const loadPayPalScript = async () => {
      // Get client ID from Supabase
      const { data: { value: clientId }, error: clientIdError } = await supabase
        .from('secrets')
        .select('value')
        .eq('name', 'PAYPAL_CLIENT_ID')
        .single();

      if (clientIdError) {
        console.error('Error fetching PayPal client ID:', clientIdError);
        return;
      }

      // Load PayPal SDK
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
      script.async = true;

      script.onload = () => {
        if (window.paypal) {
          window.paypal.Buttons({
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: amount.toString(),
                    currency_code: 'USD'
                  }
                }]
              });
            },
            onApprove: async (data: any, actions: any) => {
              const order = await actions.order.capture();
              toast({
                title: "Payment Successful",
                description: `Order ID: ${order.id}`,
              });
              onSuccess();
            },
            onError: (err: any) => {
              console.error('PayPal Error:', err);
              toast({
                title: "Payment Failed",
                description: "There was an error processing your payment.",
                variant: "destructive"
              });
              onError();
            }
          }).render('#paypal-button-container');
        }
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    loadPayPalScript();
  }, [amount, onSuccess, onError, toast]);

  return (
    <div id="paypal-button-container" className="w-full mt-4">
      <Button className="w-full" disabled>
        Loading PayPal...
      </Button>
    </div>
  );
}