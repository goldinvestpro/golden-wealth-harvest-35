import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Label } from "@/components/ui/label";

export const ShippingAddress = () => {
  return (
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
  );
};