import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ProductCard } from "@/components/shop/ProductCard";
import { CartItem } from "@/components/shop/CartItem";
import { CartPayment } from "@/components/shop/CartPayment";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Shop = () => {
  useEffect(() => {
    document.title = "Gold Investment Products - GoldInvestPro Shop";
  }, []);

  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "1oz Gold Bar",
      price: 2050.00,
      description: "Pure 24k gold bar, perfect for investment.",
      image: "/lovable-uploads/7e2790ff-1e0f-4dd6-9880-7a22be7bb381.png"
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

  const handlePaymentSuccess = () => {
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <PayPalScriptProvider options={{ 
      "client-id": "test", // Replace with your PayPal client ID
      currency: "USD"
    }}>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Gold Investment Products - GoldInvestPro Shop</title>
          <meta name="description" content="Browse our premium selection of gold bars and investment packages. Secure your financial future with GoldInvestPro's certified gold products." />
          <meta name="keywords" content="gold bars, gold investment, physical gold, premium gold, gold collection" />
        </Helmet>

        <main className="flex-grow container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-navy-500">Gold Investment Products</h1>
            <p className="text-gray-600 mt-2">Secure your future with our premium selection of gold products</p>
          </header>

          <div className="flex justify-end mb-8">
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
                <CartItem
                  key={item.id}
                  {...item}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
              <CartPayment cartTotal={cartTotal} onSuccess={handlePaymentSuccess} />
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </PayPalScriptProvider>
  );
};

export default Shop;
