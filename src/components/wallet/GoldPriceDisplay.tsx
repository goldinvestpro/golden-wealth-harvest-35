import React from 'react';

interface GoldPriceDisplayProps {
  currentPrice: number;
}

export function GoldPriceDisplay({ currentPrice }: GoldPriceDisplayProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
      <div>
        <p className="text-sm text-gray-400">Gold Price Chart (24h)</p>
        <h2 className="text-2xl sm:text-3xl font-bold">${currentPrice.toFixed(2)}</h2>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="text-sm">Gold Price (USD/oz)</span>
      </div>
    </div>
  );
}