import { useEffect, useState } from "react";
import { Bell, UserPlus, CreditCard, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const activities = [
  {
    message: "just invested in Gold",
    icon: CreditCard,
    amount: ["$1,000", "$2,500", "$5,000", "$10,000"],
  },
  {
    message: "joined GoldInvestPro",
    icon: UserPlus,
    locations: ["New York", "London", "Tokyo", "Singapore", "Dubai", "Hong Kong"],
  },
  {
    message: "received investment returns",
    icon: Bell,
    amount: ["$100", "$250", "$500", "$1,000"],
  },
  {
    message: "left a review",
    icon: MessageCircle,
    rating: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"],
  },
];

const names = [
  // Western European names
  "Müller", "Dupont", "Smith", "O'Connor", "MacDonald", "Evans", "Carter",
  // Southern European names
  "Rossi", "García", "Pereira", "Fernández", "López", "Silva",
  // Eastern European names
  "Petrov",
  // Nordic names
  "Jónsson",
  // Asian names
  "Yamamoto", "Kim", "Patel", "Zhang", "Nguyen",
  // African names
  "Abebe", "Okafor", "Mensah", "Mwangi", "Diop",
  // Middle Eastern names
  "Al-Farsi", "Haddad", "Bakir", "Khan", "Mansouri",
  // British aristocratic-sounding names
  "Harrington", "Sinclair", "Donovan", "Kensington", "Montgomery",
  "Thornton", "Caldwell", "Whitaker", "Pennington", "Ashworth",
  "Langston", "Fairchild", "Prescott", "Abernathy", "Ellington",
  "Winslow", "Radcliffe", "Beaumont", "Hawthorne", "Chamberlain"
];

export const VirtualNotifications = () => {
  const { toast } = useToast();
  const [lastNotificationTime, setLastNotificationTime] = useState(Date.now());

  const generateNotification = () => {
    const activity = activities[Math.floor(Math.random() * activities.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    const Icon = activity.icon;
    
    let message = `${name} ${activity.message}`;
    
    if ('amount' in activity) {
      message += ` ${activity.amount[Math.floor(Math.random() * activity.amount.length)]}`;
    } else if ('locations' in activity) {
      message += ` from ${activity.locations[Math.floor(Math.random() * activity.locations.length)]}`;
    } else if ('rating' in activity) {
      message += ` ${activity.rating[Math.floor(Math.random() * activity.rating.length)]}`;
    }

    toast({
      title: "New Activity",
      description: (
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4" />
          <span>{message}</span>
        </div>
      ),
      duration: 3000,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      if (now - lastNotificationTime >= 5000) { // Show notification every 5 seconds
        generateNotification();
        setLastNotificationTime(now);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [lastNotificationTime]);

  return null; // This component doesn't render anything visible
};