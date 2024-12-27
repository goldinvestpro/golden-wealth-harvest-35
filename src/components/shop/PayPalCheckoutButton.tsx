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
        const { data, error } = await supabase
          .from('secrets')
          .select('value')
          .eq('name', 'PAYPAL_CLIENT_ID')
          .maybeSingle();

        if (error) {
          console.error('Error fetching PayPal client ID:', error);
          toast({
            title: "Configuration Error",
            description: "Unable to load PayPal configuration. Please try again later.",
            variant: "destructive"
          });
          return;
        }

        if (!data) {
          console.error('PayPal client ID not found');
          toast({
            title: "Configuration Error",
            description: "PayPal configuration is missing. Please add the PAYPAL_CLIENT_ID secret.",
            variant: "destructive"
          });
          return;
        }

        // Load PayPal SDK
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=${data.value}&currency=USD`;
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
          toast({
            title: "PayPal Error",
            description: "Failed to load PayPal. Please try again later.",
            variant: "destructive"
          });
        };

        document.body.appendChild(script);

        return () => {
          if (document.body.contains(script)) {
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