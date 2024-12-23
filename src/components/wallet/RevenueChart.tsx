import { Card, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 25000, expenses: 20000 },
  { month: "Feb", revenue: 15000, expenses: 22000 },
  { month: "Mar", revenue: 30000, expenses: 25000 },
  { month: "Apr", revenue: 45000, expenses: 30000 },
  { month: "May", revenue: 90000, expenses: 45000 },
  { month: "Jun", revenue: 100000, expenses: 55000 },
  { month: "Jul", revenue: 125000, expenses: 65000 },
  { month: "Aug", revenue: 150000, expenses: 85000 },
  { month: "Sep", revenue: 200000, expenses: 95000 },
  { month: "Oct", revenue: 220000, expenses: 100000 },
  { month: "Nov", revenue: 215000, expenses: 110000 },
  { month: "Dec", revenue: 240000, expenses: 115000 },
];

const demoData = data.map(item => ({
  ...item,
  revenue: item.revenue * 0.1,
  expenses: item.expenses * 0.1
}));

interface RevenueChartProps {
  isDemoAccount?: boolean;
}

export function RevenueChart({ isDemoAccount = false }: RevenueChartProps) {
  const chartData = isDemoAccount ? demoData : data;
  const totalRevenue = isDemoAccount ? "24.0K" : "240.8K";

  return (
    <Card className="bg-navy-500 border-white/10">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div>
            <p className="text-sm text-gray-400">Total revenue</p>
            <h2 className="text-2xl sm:text-3xl font-bold">${totalRevenue}</h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-300/50" />
              <span className="text-sm">Expenses</span>
            </div>
          </div>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#93C5FD" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#93C5FD" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="month" 
                stroke="#ffffff20"
                tick={{ fill: '#94A3B8' }}
              />
              <YAxis 
                stroke="#ffffff20"
                tick={{ fill: '#94A3B8' }}
                tickFormatter={(value) => `${value/1000}K`}
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
                dataKey="revenue"
                stroke="#3B82F6"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stroke="#93C5FD"
                fillOpacity={1}
                fill="url(#colorExpenses)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}