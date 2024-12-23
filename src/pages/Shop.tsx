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
      name: "Gold Investment Package",
      price: 5000.00,
      description: "Diversified gold investment package including physical gold and certificates.",
      image: "/lovable-uploads/8cea0754-5101-4f52-b47b-eb63b647a036.png"
    },
    {
      id: 3,
      name: "Gold Savings Plan",
      price: 250.00,
      description: "Monthly gold savings plan with flexible contributions.",
      image: "/lovable-uploads/afbac699-1c61-46ae-aa14-cdad00f12e75.png"
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
            <Card key={product.id} className="flex flex-col">
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="mt-4 text-xl text-navy-500">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-xl font-bold text-navy-500 mt-4">
                  ${product.price.toLocaleString()}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button
                  className="w-full bg-gold-300 hover:bg-gold-400 text-navy-500"
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