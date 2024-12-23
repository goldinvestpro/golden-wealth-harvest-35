import { Calculator, Users, Award, Shield } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Calculator,
      title: "Who We Are",
      description:
        "GoldInvestPro is a leading provider of gold investment services, offering a range of products tailored to suit diverse investment needs.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "With over a decade of experience, our advisors and analysts provide personalized insights to help you make informed investment choices.",
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description:
        "Over 10 years of industry experience and a track record of success in gold investment services.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description:
        "Clear, honest communication with no hidden fees or surprises, ensuring a trustworthy investment experience.",
    },
  ];

  return (
    <div className="bg-navy-500 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gold-300 mb-6">
          About GoldInvestPro
        </h2>
        <p className="text-gray-300 text-center max-w-4xl mx-auto mb-16 text-lg">
          We specialize in empowering individuals to secure their financial future through strategic
          investments in gold and precious metals. Since our founding in 2010, we have been a trusted
          partner for investors worldwide.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-gold-300/20 bg-navy-400/20 hover:bg-navy-400/40 transition-colors"
            >
              <feature.icon className="w-10 h-10 text-gold-300 mb-4" />
              <h3 className="text-xl font-semibold text-gold-300 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};