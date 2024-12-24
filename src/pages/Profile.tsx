import { ProfileCard } from "@/components/profile/ProfileCard";
import { InvestmentSummary } from "@/components/profile/InvestmentSummary";
import { ShippingAddress } from "@/components/profile/ShippingAddress";

const Profile = () => {
  const handleProfileUpdate = (data: { name: string; email: string; phone: string; location: string }) => {
    console.log("Profile updated:", data);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid gap-6 md:grid-cols-2">
        <ProfileCard
          name="Felecia Burke"
          email="example@mail.com"
          phone="+1 (070) 123-4567"
          balance="$5,000"
          location="Hong Kong, China"
          onUpdateProfile={handleProfileUpdate}
        />
        <InvestmentSummary />
        <ShippingAddress />
      </div>
    </div>
  );
};

export default Profile;