import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { UserRound, Camera, MapPin, Mail, Phone, CreditCard, ExternalLink, PencilIcon, Save, ChartLineUp } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
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

  const handleSave = () => {
    setIsEditing(false);
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
              
              {isEditing ? (
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-center font-bold"
                />
              ) : (
                <h2 className="text-2xl font-bold">{name}</h2>
              )}
              
              <div className="bg-navy-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                <CreditCard className="h-4 w-4" />
                <span>Balance: {balance}</span>
              </div>

              <div className="w-full space-y-3 pt-4">
                {isEditing ? (
                  <>
                    <div className="space-y-2">
                      <Label>Location</Label>
                      <Input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone</Label>
                      <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel"
                        className="w-full"
                      />
                    </div>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>

              <Button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="w-full"
              >
                {isEditing ? (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </>
                ) : (
                  <>
                    <PencilIcon className="mr-2 h-4 w-4" /> Edit Profile
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Investment Summary Card */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ChartLineUp className="h-6 w-6 text-navy-500" />
              <span>Investment Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Invested</span>
                <span className="font-bold text-navy-500">$10,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Current Value</span>
                <span className="font-bold text-green-500">$12,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Returns</span>
                <span className="font-bold text-green-500">+25%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Active Plans</span>
                <span className="font-bold">3</span>
              </div>
              <Button className="w-full mt-4" variant="outline">
                View Investment Details
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Shipping Address Card */}
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Shipping Address</CardTitle>
            <Button variant="ghost" size="icon">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </div>
  );
};

export default Profile;