import { useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { UserRound, Camera, MapPin, Mail, Phone, CreditCard, PencilIcon, Save } from "lucide-react";

interface ProfileCardProps {
  name: string;
  email: string;
  phone: string;
  balance: string;
  location: string;
  onUpdateProfile: (data: { name: string; email: string; phone: string; location: string }) => void;
}

export const ProfileCard = ({ name: initialName, email: initialEmail, phone: initialPhone, balance, location: initialLocation, onUpdateProfile }: ProfileCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [location, setLocation] = useState(initialLocation);
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
    onUpdateProfile({ name, email, phone, location });
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  return (
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
  );
};