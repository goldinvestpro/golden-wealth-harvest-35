import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { PayPalCheckoutButton } from "./PayPalCheckoutButton";
import { CartItem } from "@/types/shop";

interface CartPanelProps {
  cart: CartItem[];
  updateQuantity: (productId: number, change: number) => void;
  cartTotal: number;
  onCheckoutSuccess: () => void;
}

export function CartPanel({ cart, updateQuantity, cartTotal, onCheckoutSuccess }: CartPanelProps) {
  return (
    <div className="mb-8 p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-4 p-2 border-b">
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-gray-600">${item.price.toLocaleString()} × {item.quantity}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(item.id, -1)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(item.id, 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center mt-4 pt-4 border-t">
        <span className="font-bold">Total:</span>
        <span className="font-bold">${cartTotal.toLocaleString()}</span>
      </div>
      <PayPalCheckoutButton 
        amount={cartTotal}
        onSuccess={onCheckoutSuccess}
        onError={() => {}}
      />
    </div>
  );
}