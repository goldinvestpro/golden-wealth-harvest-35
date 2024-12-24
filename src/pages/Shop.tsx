import { useState } from "react";
import { ProductCard } from "@/components/shop/ProductCard";
import { CartItem } from "@/components/shop/CartItem";
import { CartPayment } from "@/components/shop/CartPayment";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const products = [
  {
    id: 1,
    name: "Gold Bar - 1oz",
    price: 1999.99,
    description: "24K Gold Bar - 1 ounce of pure gold",
    image: "/lovable-uploads/0d420486-9b11-4bec-881f-8305b4d87220.png"
  },
  {
    id: 2,
    name: "Gold Coin - 1oz",
    price: 2099.99,
    description: "American Eagle Gold Coin - 1 ounce",
    image: "/lovable-uploads/13bcaa68-c65c-482d-8270-4e6a7c282463.png"
  },
  {
    id: 3,
    name: "Gold Bar - 10oz",
    price: 19999.99,
    description: "24K Gold Bar - 10 ounces of pure gold",
    image: "/lovable-uploads/63dbfe72-3441-4a6f-bdf6-927cdc424708.png"
  }
];

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function Shop() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === productId);
      if (existingItem) {
        return currentCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <PayPalScriptProvider options={{ 
      clientId: "test",
      currency: "USD" 
    }}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => addToCart(product.id)}
            />
          ))}
        </div>

        {isCartOpen && (
          <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-xl">
            <div className="h-full flex flex-col">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Shopping Cart</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {cart.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={(quantity) => updateQuantity(item.id, quantity)}
                    onRemove={() => removeFromCart(item.id)}
                  />
                ))}
              </div>

              {cart.length > 0 && (
                <div className="border-t p-4">
                  <CartPayment total={total} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </PayPalScriptProvider>
  );
}