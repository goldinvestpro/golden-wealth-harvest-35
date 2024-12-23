import { Calculator, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    title: "Weekly Returns",
    description: "Perfect for active traders",
    returns: "2-3%",
    period: "Weekly",
    features: ["Weekly profit distribution", "Flexible investment amount", "24/7 market monitoring"],
    icon: Calculator,
  },
  {
    title: "Monthly Growth",
    description: "Balanced investment approach",
    returns: "8-10%",
    period: "Monthly",
    features: ["Monthly profit distribution", "Priority support", "Market analysis reports"],
    icon: Calendar,
  },
  {
    title: "Yearly Wealth",
    description: "Long-term wealth building",
    returns: "25-30%",
    period: "Yearly",
    features: ["Highest return potential", "Dedicated account manager", "Comprehensive portfolio review"],
    icon: TrendingUp,
  },
];

export const InvestmentPlans = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Investment Plans</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose an investment plan that matches your financial goals. Our flexible
          options cater to different investment strategies.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.title} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-50 to-transparent opacity-50" />
              <CardHeader>
                <div className="mb-4">
                  <plan.icon className="w-10 h-10 text-gold-300" />
                </div>
                <CardTitle className="text-2xl">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-navy-500">
                    {plan.returns}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-gold-300 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-navy-500 hover:bg-navy-400">
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};