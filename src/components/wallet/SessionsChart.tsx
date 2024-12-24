import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface SessionsChartProps {
  isDemoAccount: boolean;
}

export function SessionsChart({ isDemoAccount }: SessionsChartProps) {
  const data = isDemoAccount ? [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 100),
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 100),
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 100),
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 100),
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 100),
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 100),
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 100),
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 100),
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 100),
    },
    {
      name: "Oct",
      total: Math.floor(Math.random() * 100),
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 100),
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 100),
    },
  ] : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sessions</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
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
            <Line
              dataKey="total"
              stroke="#adfa1d"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
