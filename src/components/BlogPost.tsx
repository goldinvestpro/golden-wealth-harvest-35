import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BlogPost = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-navy-500 mb-4">
            Why Invest in Gold? A Guide for Beginners
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Main Image */}
          <div className="relative h-[400px] w-full mb-8">
            <img
              src="/lovable-uploads/34f31baf-4267-4339-b8c9-e1490d6c0337.png"
              alt="Gold investment growth chart"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Gold has been a cornerstone of wealth preservation for centuries, prized not only for its beauty but also for its unique ability to maintain value over time. Whether you're a seasoned investor or just starting, gold can play a vital role in your portfolio. Here's why you should consider gold as part of your investment strategy:
            </p>

            <h2 className="text-2xl font-semibold text-navy-500 mt-8 mb-4">
              The Historical Significance of Gold
            </h2>
            <p className="text-gray-700 mb-6">
              Gold has been used as a medium of exchange and a store of value since ancient civilizations. Unlike paper currencies or digital assets, gold is tangible and enduring. Its scarcity and universal appeal make it a reliable asset in times of economic uncertainty, earning its reputation as a "safe haven."
            </p>

            <h2 className="text-2xl font-semibold text-navy-500 mt-8 mb-4">
              Benefits of Gold Investments
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Inflation Hedge:</strong> Gold often retains or increases its value during periods of inflation, protecting your purchasing power.</li>
              <li><strong>Portfolio Diversification:</strong> Adding gold to your investments reduces overall risk by balancing the performance of traditional assets like stocks and bonds.</li>
              <li><strong>Liquidity:</strong> Gold is highly liquid and can be easily converted to cash in global markets.</li>
              <li><strong>Tangible Asset:</strong> Unlike digital investments, gold is a physical asset you can hold and store securely.</li>
            </ul>

            {/* Second Image */}
            <div className="relative h-[400px] w-full my-8">
              <img
                src="/lovable-uploads/5cff7dcf-9544-48f8-9ff1-66b5a1b0b954.png"
                alt="Gold retirement investment"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-semibold text-navy-500 mt-8 mb-4">
              Ways to Invest in Gold
            </h2>
            <p className="text-gray-700 mb-4">
              Gold offers flexibility for different investment preferences and goals. Here are some popular options:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Physical Gold:</strong> Invest in gold coins, bars, or bullion for direct ownership.</li>
              <li><strong>Gold IRAs:</strong> Secure your retirement by holding physical gold within an IRS-approved Individual Retirement Account.</li>
              <li><strong>Gold ETFs:</strong> Exchange-traded funds offer a convenient and cost-effective solution.</li>
              <li><strong>Gold Mining Stocks:</strong> Invest in companies that mine and produce gold.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy-500 mt-8 mb-4">
              Gold IRA vs. Traditional IRA: Which Is Right for You?
            </h2>
            <p className="text-gray-700 mb-6">
              When planning for retirement, choosing the right investment vehicle is crucial. Traditional IRAs are well-known options, but Gold IRAs are gaining popularity as a robust alternative.
            </p>

            <div className="bg-gold-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-navy-500 mb-4">
                Why Choose GoldInvestPro?
              </h3>
              <p className="text-gray-700">
                At GoldInvestPro, we specialize in making gold investing accessible and rewarding. Our team of experts is here to guide you through every step, whether you're purchasing your first gold coin or setting up a Gold IRA.
              </p>
              <button className="mt-4 bg-gold-300 hover:bg-gold-400 text-navy-500 font-bold py-2 px-6 rounded-full transition-colors">
                Contact Us Today
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};