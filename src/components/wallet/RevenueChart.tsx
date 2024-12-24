import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface RevenueChartProps {
  isDemoAccount: boolean;
}

export function RevenueChart({ isDemoAccount }: RevenueChartProps) {
  const data = isDemoAccount ? [
    { date: "Jan", revenue: 400 },
    { date: "Feb", revenue: 300 },
    { date: "Mar", revenue: 200 },
  ] : [
    { date: "Jan", revenue: 4000 },
    { date: "Feb", revenue: 3000 },
    { date: "Mar", revenue: 2000 },
    { date: "Apr", revenue: 2780 },
    { date: "May", revenue: 1890 },
    { date: "Jun", revenue: 2390 },
  ];

  return (
    <div className="rounded-lg border bg-navy-500 border-white/10 p-4">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Revenue over time</h3>
          <p className="text-sm text-gray-400">Monthly revenue performance</p>
        </div>
        <div className="h-[200px] sm:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis 
                dataKey="date" 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#FFD700"
                fill="#FFD700"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}