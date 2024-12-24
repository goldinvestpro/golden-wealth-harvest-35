import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  onUpdateQuantity: (id: number, change: number) => void;
}

export function CartItem({ id, name, price, quantity, onUpdateQuantity }: CartItemProps) {
  return (
    <div className="flex items-center justify-between mb-4 p-2 border-b">
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-600">${price.toLocaleString()} × {quantity}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onUpdateQuantity(id, -1)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onUpdateQuantity(id, 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}