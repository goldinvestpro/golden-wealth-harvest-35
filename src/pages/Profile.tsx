import { useState } from "react";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { InvestmentSummary } from "@/components/profile/InvestmentSummary";
import { ShippingAddress } from "@/components/profile/ShippingAddress";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Felecia Burke",
    email: "example@mail.com",
    phone: "+1 (070) 123-4567",
    balance: "$5,000",
    location: "Hong Kong, China"
  });

  const handleProfileUpdate = (data: { name: string; email: string; phone: string; location: string }) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid gap-6 md:grid-cols-2">
        <ProfileCard {...userData} onUpdateProfile={handleProfileUpdate} />
        <InvestmentSummary />
        <ShippingAddress />
      </div>
    </div>
  );
};

export default Profile;