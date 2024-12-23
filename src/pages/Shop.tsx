import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Shop = () => {
  const { toast } = useToast();

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

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-navy-500 mb-8">Gold Investment Products</h1>
        
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
                  onClick={() => handleAddToCart(product.name)}
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