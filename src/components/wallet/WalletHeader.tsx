import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface WalletHeaderProps {
  isDemoAccount: boolean;
  setIsDemoAccount: (value: boolean) => void;
}

export function WalletHeader({ isDemoAccount, setIsDemoAccount }: WalletHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:text-gold-300 transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <div className="flex items-center gap-2">
          <Switch
            id="account-mode"
            checked={isDemoAccount}
            onCheckedChange={setIsDemoAccount}
          />
          <Label htmlFor="account-mode" className="text-sm text-gray-300">
            {isDemoAccount ? "Demo Account" : "Real Account"}
          </Label>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <Button variant="outline" className="text-white border-white/80 font-medium hover:bg-white/10 hover:text-white">
          Deposit
        </Button>
        <Button className="bg-gold-300 hover:bg-gold-400 text-navy-500 font-medium">
          Withdraw
        </Button>
      </div>
    </div>
  );
}