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
    <div className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Investment Plans</h2>
        <p className="text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          Choose an investment plan that matches your financial goals. Our flexible
          options cater to different investment strategies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan) => (
            <Card key={plan.title} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-50 to-transparent opacity-50" />
              <CardHeader>
                <div className="mb-4">
                  <plan.icon className="w-10 h-10 text-gold-300" />
                </div>
                <CardTitle className="text-xl md:text-2xl">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-navy-500">
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

        <div className="mt-20 md:mt-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            <span className="text-navy-500">Inspired</span>{" "}
            <span className="text-gold-300">Insights</span>{" "}
            <span className="text-navy-500">and Timeless</span>{" "}
            <span className="text-gold-300">Wisdom</span>{" "}
            <span className="text-navy-500">on Investment</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-20">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gold-300 mb-4">SOLID SAFE</h3>
              <p className="text-gray-600 text-base md:text-lg">
                Smart thinking you need to proceed forward in precious metals.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gold-300 mb-4">MARKET INSIGHTS</h3>
              <p className="text-gray-600 text-base md:text-lg">
                Practice-based tips reveal, unlocking the secrets of successful metal investing.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gold-300 mb-4">PROVEN METAL</h3>
              <p className="text-gray-600 text-base md:text-lg">
                Navigate the metals market, strategies for successful gold and silver investing.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gold-300 mb-4">INVESTMENT GUIDE</h3>
              <p className="text-gray-600 text-base md:text-lg">
                The art of precious metals: why investing in gold will help create wealth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
