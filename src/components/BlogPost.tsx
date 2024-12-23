import React from 'react';
import { Card, CardContent } from './ui/card';

const BlogPost = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6 space-y-8">
          <h1 className="text-3xl font-bold text-navy-500 mb-6">
            Why Invest in Gold? A Guide for Beginners
          </h1>

          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/b958502c-f9ee-4cbc-94c6-8bfc09aa3169.png"
              alt="Gold investment with retirement planning"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Gold has been a cornerstone of wealth preservation for centuries, prized not only for its beauty but also for its unique ability to maintain value over time. Whether you're a seasoned investor or just starting, gold can play a vital role in your portfolio.
          </p>

          <h2 className="text-2xl font-semibold text-navy-500 mt-8 mb-4">
            The Historical Significance of Gold
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Gold has been used as a medium of exchange and a store of value since ancient civilizations. Unlike paper currencies or digital assets, gold is tangible and enduring. Its scarcity and universal appeal make it a reliable asset in times of economic uncertainty, earning its reputation as a "safe haven."
          </p>

          <h2 className="text-2xl font-semibold text-navy-500 mt-8 mb-4">
            Benefits of Gold Investments
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Inflation Hedge: Gold often retains or increases its value during periods of inflation</li>
            <li>Portfolio Diversification: Balances performance of traditional assets</li>
            <li>Liquidity: Easily converted to cash in global markets</li>
            <li>Tangible Asset: Physical asset you can hold and store securely</li>
          </ul>

          <div className="flex justify-center my-8">
            <img 
              src="/lovable-uploads/1a8363b1-189a-4c9b-a8d3-eff0f53aaa69.png"
              alt="Gold investment growth chart"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>

          <h2 className="text-2xl font-semibold text-navy-500 mt-8 mb-4">
            Ways to Invest in Gold
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gold-50 p-4 rounded-lg">
              <h3 className="font-semibold text-navy-500 mb-2">Physical Gold</h3>
              <p className="text-gray-700">Invest in gold coins, bars, or bullion for direct ownership.</p>
            </div>
            <div className="bg-gold-50 p-4 rounded-lg">
              <h3 className="font-semibold text-navy-500 mb-2">Gold IRAs</h3>
              <p className="text-gray-700">Secure your retirement with an IRS-approved Gold IRA.</p>
            </div>
            <div className="bg-gold-50 p-4 rounded-lg">
              <h3 className="font-semibold text-navy-500 mb-2">Gold ETFs</h3>
              <p className="text-gray-700">Invest without physical storage through exchange-traded funds.</p>
            </div>
            <div className="bg-gold-50 p-4 rounded-lg">
              <h3 className="font-semibold text-navy-500 mb-2">Mining Stocks</h3>
              <p className="text-gray-700">Invest in gold mining companies for potential higher returns.</p>
            </div>
          </div>

          <div className="bg-navy-50 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">
              Ready to Start Your Gold Investment Journey?
            </h2>
            <p className="text-gray-700 mb-4">
              Contact us today to learn more about how you can secure your financial future with gold investments.
            </p>
            <button className="bg-gold-400 text-navy-500 px-6 py-2 rounded-lg hover:bg-gold-500 transition-colors">
              Get Started
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPost;