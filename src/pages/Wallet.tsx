import { Card, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const sessionData = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  sessions: Math.floor(Math.random() * 300) + 100,
}));

export default function Wallet() {
  return (
    <div className="min-h-screen bg-navy-500 text-white p-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold">Welcome back, John</h1>
          <div className="flex gap-4">
            <Button variant="outline" className="text-white border-white/20">
              Export data
            </Button>
            <Button className="bg-indigo-500 hover:bg-indigo-600">
              Create report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Pageviews"
            value="50.8K"
            change={28.4}
            isPositive={true}
          />
          <StatCard
            title="Monthly users"
            value="23.6K"
            change={-4.3}
            isPositive={false}
          />
          <StatCard
            title="New sign ups"
            value="756"
            change={17.2}
            isPositive={true}
          />
          <StatCard
            title="Subscriptions"
            value="2.3K"
            change={9.2}
            isPositive={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-navy-500 border-white/10">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <p className="text-sm text-gray-400">Total revenue</p>
                    <h2 className="text-3xl font-bold">$240.8K</h2>
                  </div>
                  <div className="flex items-center gap-4">
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
                    <AreaChart data={data}>
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
          </div>

          <div className="space-y-8">
            <Card className="bg-navy-500 border-white/10">
              <CardContent className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-gray-400">Total sessions</p>
                  <h2 className="text-3xl font-bold">400</h2>
                </div>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sessionData}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  isPositive: boolean;
}

function StatCard({ title, value, change, isPositive }: StatCardProps) {
  return (
    <Card className="bg-navy-500 border-white/10">
      <CardContent className="p-6">
        <p className="text-sm text-gray-400">{title}</p>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-2xl font-bold">{value}</span>
          <span className={`flex items-center text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            {Math.abs(change)}%
          </span>
        </div>
      </CardContent>
    </Card>
  );
}