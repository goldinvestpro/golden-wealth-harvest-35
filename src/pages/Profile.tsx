import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { UserRound, Camera, MapPin, Mail, Phone, CreditCard, ExternalLink } from "lucide-react";
import { useState, useRef } from "react";

const Profile = () => {
  const [name, setName] = useState("Felecia Burke");
  const [email, setEmail] = useState("example@mail.com");
  const [phone, setPhone] = useState("+1 (070) 123-4567");
  const [balance, setBalance] = useState("$5,000");
  const [location, setLocation] = useState("Hong Kong, China");
  const [avatarUrl, setAvatarUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
        toast({
          title: "Profile picture updated",
          description: "Your profile picture has been successfully updated.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Profile Card */}
        <Card className="md:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative cursor-pointer" onClick={handleAvatarClick}>
                <Avatar className="h-24 w-24">
                  <AvatarImage src={avatarUrl} />
                  <AvatarFallback>
                    <UserRound className="h-12 w-12" />
                  </AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 bg-navy-500 rounded-full p-2">
                  <Camera className="h-4 w-4 text-white" />
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
              
              <h2 className="text-2xl font-bold">{name}</h2>
              
              <div className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                <CreditCard className="h-4 w-4" />
                <span>Balance: {balance}</span>
              </div>

              <div className="w-full space-y-3 pt-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>{email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{phone}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shipping Address Card */}
        <Card className="md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Shipping Address</CardTitle>
            <Button variant="ghost" size="icon">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-gray-500">Address</Label>
                <p>898 Joanne Lane Street</p>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-500">City</Label>
                <p>Hong Kong</p>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-500">Country</Label>
                <p>China</p>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-500">Zip Code</Label>
                <p>02110</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wish List Card */}
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Wish List</CardTitle>
            <Button variant="link" className="text-blue-500">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/d0cd4ca2-db1b-49a6-a3ff-3f4f0e32e5bb.png" 
                alt="Apple Watch" 
                className="w-24 h-24 object-contain"
              />
              <div className="flex-1">
                <h3 className="font-semibold">Apple Watch Series 4</h3>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>Product ID: 790841</p>
                  <p>Color: Gold</p>
                  <p>Size: 44mm</p>
                  <p>Price: $399</p>
                </div>
              </div>
              <Button className="bg-blue-500 text-white">In Stock</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;