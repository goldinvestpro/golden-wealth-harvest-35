import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Shop = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "1oz Gold Bar",
      price: 2050.00,
      description: "Pure 24k gold bar, perfect for investment.",
      image: "/lovable-uploads/a55adaee-dc91-4f8d-b31e-d1579bf35f4b.png"
    },
    {
      id: 2,
      name: "1kg ABC Fine Gold Bar",
      price: 65000.00,
      description: "Premium 1 kilo gold bar with ABC certification, 999.9 purity.",
      image: "/lovable-uploads/0d420486-9b11-4bec-881f-8305b4d87220.png"
    },
    {
      id: 3,
      name: "Swiss Gold Collection",
      price: 35000.00,
      description: "Set of premium Swiss-made gold bars, perfect for serious investors.",
      image: "/lovable-uploads/dfd8347a-dfdf-4cb3-b722-877d9ad234d9.png"
    },
    {
      id: 4,
      name: "Gold Investment Package",
      price: 5000.00,
      description: "Diversified gold investment package including physical gold and certificates.",
      image: "/lovable-uploads/8cea0754-5101-4f52-b47b-eb63b647a036.png"
    },
    {
      id: 5,
      name: "Premium Gold Bar Set",
      price: 75000.00,
      description: "Exclusive set of three 1kg gold bars from Continental Mint.",
      image: "/lovable-uploads/cca1e34f-dd3b-45f7-851a-787515acd4b3.png"
    },
    {
      id: 6,
      name: "Gold & Coin Collection",
      price: 45000.00,
      description: "Luxury collection featuring gold bars and commemorative coins.",
      image: "/lovable-uploads/13bcaa68-c65c-482d-8270-4e6a7c282463.png"
    }
  ];

  const handleAddToCart = (productId: number, productName: string, price: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { id: productId, name: productName, price, quantity: 1 }];
    });

    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  const updateQuantity = (productId: number, change: number) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === productId) {
          const newQuantity = Math.max(0, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-navy-500">Gold Investment Products</h1>
          <Button
            variant="outline"
            className="relative"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <ShoppingCart className="h-5 w-5" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Button>
        </div>

        {isCartOpen && cart.length > 0 && (
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
            <Button className="w-full mt-4 bg-gold-300 hover:bg-gold-400 text-navy-500">
              Proceed to Checkout
            </Button>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="mt-4 text-xl text-navy-500">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 min-h-[60px]">{product.description}</p>
                <p className="text-xl font-bold text-navy-500 mt-4">
                  ${product.price.toLocaleString()}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button
                  className="w-full bg-gold-300 hover:bg-gold-400 text-navy-500 transition-colors duration-300"
                  onClick={() => handleAddToCart(product.id, product.name, product.price)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;