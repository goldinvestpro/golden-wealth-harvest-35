import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface SessionsChartProps {
  isDemoAccount: boolean;
}

export function SessionsChart({ isDemoAccount }: SessionsChartProps) {
  const data = isDemoAccount ? [
    { name: "Mon", total: 10 },
    { name: "Tue", total: 8 },
    { name: "Wed", total: 12 },
  ] : [
    { name: "Mon", total: 100 },
    { name: "Tue", total: 80 },
    { name: "Wed", total: 120 },
    { name: "Thu", total: 90 },
    { name: "Fri", total: 110 },
    { name: "Sat", total: 70 },
    { name: "Sun", total: 60 },
  ];

  return (
    <div className="rounded-lg border bg-navy-500 border-white/10 p-4">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Daily Sessions</h3>
          <p className="text-sm text-gray-400">User activity per day</p>
        </div>
        <div className="h-[200px] sm:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="name"
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
              />
              <Tooltip />
              <Bar
                dataKey="total"
                fill="#FFD700"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}