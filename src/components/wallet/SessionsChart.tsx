import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const sessionData = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  sessions: Math.floor(Math.random() * 300) + 100,
}));

const demoSessionData = sessionData.map(item => ({
  ...item,
  sessions: Math.floor(item.sessions * 0.2)
}));

interface SessionsChartProps {
  isDemoAccount?: boolean;
}

export function SessionsChart({ isDemoAccount = false }: SessionsChartProps) {
  const chartData = isDemoAccount ? demoSessionData : sessionData;
  const totalSessions = isDemoAccount ? "80" : "400";

  return (
    <Card className="bg-navy-500 border-white/10">
      <CardContent className="p-6">
        <div className="mb-4">
          <p className="text-sm text-gray-400">Total sessions</p>
          <h2 className="text-3xl font-bold">{totalSessions}</h2>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis 
                dataKey="hour" 
                stroke="#ffffff20"
                tick={{ fill: '#94A3B8' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1E293B',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Bar 
                dataKey="sessions" 
                fill="#3B82F6"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}