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
      try {
        // Use environment variable instead of database query for client ID
        const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
        
        if (!clientId) {
          console.error('PayPal client ID not found in environment variables');
          toast({
            title: "Configuration Error",
            description: "PayPal configuration is missing. Please add VITE_PAYPAL_CLIENT_ID to your environment variables.",
            variant: "destructive"
          });
          return;
        }

        // Remove any existing PayPal script
        const existingScript = document.getElementById('paypal-script');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }

        // Load PayPal SDK
        const script = document.createElement('script');
        script.id = 'paypal-script';
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
                try {
                  const order = await actions.order.capture();
                  console.log('Payment successful:', order);
                  toast({
                    title: "Payment Successful",
                    description: `Order ID: ${order.id}`,
                  });
                  onSuccess();
                } catch (error) {
                  console.error('PayPal Capture Error:', error);
                  toast({
                    title: "Payment Failed",
                    description: "There was an error processing your payment.",
                    variant: "destructive"
                  });
                  onError();
                }
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

        script.onerror = () => {
          console.error('Failed to load PayPal script');
          toast({
            title: "PayPal Error",
            description: "Failed to load PayPal. Please try again later.",
            variant: "destructive"
          });
        };

        document.body.appendChild(script);

        return () => {
          const script = document.getElementById('paypal-script');
          if (script) {
            document.body.removeChild(script);
          }
        };
      } catch (error) {
        console.error('PayPal Setup Error:', error);
        toast({
          title: "PayPal Error",
          description: "Failed to initialize PayPal. Please try again later.",
          variant: "destructive"
        });
      }
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