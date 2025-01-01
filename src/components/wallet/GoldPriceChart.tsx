import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { GoldPriceDataPoint } from './RevenueChart';

interface GoldPriceChartProps {
  priceHistory: GoldPriceDataPoint[];
}

export function GoldPriceChart({ priceHistory }: GoldPriceChartProps) {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={priceHistory}>
          <defs>
            <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EAB308" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#EAB308" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="timestamp" 
            stroke="#ffffff20"
            tick={{ fill: '#94A3B8' }}
          />
          <YAxis 
            stroke="#ffffff20"
            tick={{ fill: '#94A3B8' }}
            domain={['auto', 'auto']}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1E293B',
              border: 'none',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#EAB308"
            fillOpacity={1}
            fill="url(#colorGold)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}