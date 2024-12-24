import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface RevenueChartProps {
  isDemoAccount: boolean;
}

export function RevenueChart({ isDemoAccount }: RevenueChartProps) {
  const data = isDemoAccount ? [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000),
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5000),
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000),
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 5000),
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 5000),
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000),
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000),
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 5000),
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 5000),
    },
    {
      name: "Oct",
      total: Math.floor(Math.random() * 5000),
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000),
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 5000),
    },
  ] : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
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
              tickFormatter={(value) => `$${value}`}
            />
            <Bar
              dataKey="total"
              fill="#adfa1d"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
