import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center justify-between mb-4 p-2 border-b">
      <div>
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-600">${item.price.toLocaleString()} × {item.quantity}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            if (item.quantity === 1) {
              onRemove();
            } else {
              onUpdateQuantity(item.quantity - 1);
            }
          }}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onUpdateQuantity(item.quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}