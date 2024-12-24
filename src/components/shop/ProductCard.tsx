import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  onAddToCart: (id: number, name: string, price: number) => void;
}

export function ProductCard({ id, name, price, description, image, onAddToCart }: ProductCardProps) {
  return (
    <Card className="flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardTitle className="mt-4 text-xl text-navy-500">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 min-h-[60px]">{description}</p>
        <p className="text-xl font-bold text-navy-500 mt-4">
          ${price.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          className="w-full bg-gold-300 hover:bg-gold-400 text-navy-500 transition-colors duration-300"
          onClick={() => onAddToCart(id, name, price)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}