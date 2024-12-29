import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface AccountModeSwitchProps {
  isDemoAccount: boolean;
  setIsDemoAccount: (value: boolean) => void;
}

export function AccountModeSwitch({ isDemoAccount, setIsDemoAccount }: AccountModeSwitchProps) {
  return (
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
  );
}