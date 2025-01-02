"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Download,
  TrendingUp,
  DollarSign,
  Clock,
  Tv,
  Users,
  AlertTriangle,
  Zap,
  Calendar,
} from "lucide-react";

// Mock data (replace with actual data in a real application)
const revenueData = [
  { month: "Jan", revenue: 1200000 },
  { month: "Feb", revenue: 1350000 },
  { month: "Mar", revenue: 1500000 },
  { month: "Apr", revenue: 1400000 },
  { month: "May", revenue: 1600000 },
  { month: "Jun", revenue: 1800000 },
  { month: "Jul", revenue: 2000000 },
  { month: "Aug", revenue: 2200000 },
  { month: "Sep", revenue: 2100000 },
  { month: "Oct", revenue: 2300000 },
  { month: "Nov", revenue: 2500000 },
  { month: "Dec", revenue: 2700000 },
];

const genreRevenueData = [
  { genre: "News", revenue: 5000000 },
  { genre: "Entertainment", revenue: 7000000 },
  { genre: "Sports", revenue: 6000000 },
  { genre: "Drama", revenue: 4500000 },
  { genre: "Documentary", revenue: 2500000 },
];

const timeSlotRevenueData = [
  { slot: "Morning (6AM-12PM)", revenue: 4000000 },
  { slot: "Afternoon (12PM-6PM)", revenue: 5500000 },
  { slot: "Prime Time (6PM-10PM)", revenue: 9000000 },
  { slot: "Late Night (10PM-6AM)", revenue: 3500000 },
];

const topAdvertisers = [
  { name: "Nepal Telecom", spend: 1500000 },
  { name: "Ncell", spend: 1300000 },
  { name: "Coca-Cola", spend: 1100000 },
  { name: "Dabur Nepal", spend: 900000 },
  { name: "Unilever Nepal", spend: 800000 },
];

const industryDistribution = [
  { industry: "Telecom", percentage: 25 },
  { industry: "FMCG", percentage: 30 },
  { industry: "Banking", percentage: 15 },
  { industry: "Automotive", percentage: 10 },
  { industry: "E-commerce", percentage: 12 },
  { industry: "Others", percentage: 8 },
];

const topAdvertisersByGenre = [
  { genre: "News", advertiser: "Nepal Telecom", spend: 800000 },
  { genre: "Entertainment", advertiser: "Coca-Cola", spend: 750000 },
  { genre: "Sports", advertiser: "Ncell", spend: 700000 },
  { genre: "Drama", advertiser: "Unilever Nepal", spend: 500000 },
  { genre: "Documentary", advertiser: "Dabur Nepal", spend: 300000 },
];

const topPerformingPrograms = [
  { name: "Prime Time News", revenue: 1200000 },
  { name: "Nepal Idol", revenue: 1000000 },
  { name: "Weekend Movie Special", revenue: 900000 },
  { name: "Morning Show", revenue: 800000 },
  { name: "Sports Highlights", revenue: 750000 },
];

const underperformingPrograms = [
  { name: "Late Night Talk Show", revenue: 200000, potentialRevenue: 400000 },
  { name: "Afternoon Drama", revenue: 300000, potentialRevenue: 500000 },
  { name: "Weekend Documentary", revenue: 150000, potentialRevenue: 300000 },
];

const keyEvents = [
  { event: "New Year's Eve", revenue: 500000, normalRevenue: 200000 },
  { event: "Dashain Festival", revenue: 800000, normalRevenue: 300000 },
  { event: "Cricket World Cup Final", revenue: 1000000, normalRevenue: 400000 },
];

const futureEvents = [
  { event: "Tihar Festival", projectedRevenue: 700000, normalRevenue: 300000 },
  {
    event: "National Elections",
    projectedRevenue: 900000,
    normalRevenue: 400000,
  },
  {
    event: "Nepal vs India Cricket Match",
    projectedRevenue: 600000,
    normalRevenue: 250000,
  },
];

const CHART_COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
  "hsl(var(--chart-6))",
];

const RevenueInsights = () => {
  const [timeFrame, setTimeFrame] = useState("Monthly");

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-4 border rounded shadow-lg">
          <p className="font-bold">{label}</p>
          <p>{`Revenue: $${payload[0].value.toLocaleString()}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto p-8 bg-popover shadow-inner rounded-lg border">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-primary">Revenue Insights</h1>
          <Button className="flex items-center gap-2 p-2 bg-primary text-white rounded-lg hover:bg-blue-700">
            <Download className="h-4 w-4" />
            Download Report
          </Button>
        </div>
        <p className="mt-4 text-lg text-muted-foreground">
          Comprehensive analysis of revenue streams, advertiser performance, and
          content monetization strategies.
        </p>
      </div>

      {/* Executive Summary */}
      <section className="mb-12 bg-card border p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
        <p className="text-foreground/75 mb-4">
          Our revenue analysis reveals strong growth trends, with significant
          contributions from entertainment and sports genres. Prime time slots
          continue to be our most lucrative, while key events drive substantial
          revenue spikes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-600/25 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900">
              Total Annual Revenue
            </h3>
            <p className="text-2xl font-bold text-blue-600">$22.65M</p>
          </div>
          <div className="bg-emerald-600/25 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900">
              Top Performing Genre
            </h3>
            <p className="text-2xl font-bold text-green-600">Entertainment</p>
          </div>
          <div className="bg-amber-600/25 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-900">
              Prime Time Revenue
            </h3>
            <p className="text-2xl font-bold text-orange-600">$9M</p>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Findings</h2>
        <div className="grid grid-cols-1 gap-8">
          {/* Revenue Trends */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">1. Revenue Trends</h3>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Revenue Trends
                  </CardTitle>
                  <Select value={timeFrame} onValueChange={setTimeFrame}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Time Frame" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Monthly">Monthly</SelectItem>
                      <SelectItem value="Quarterly">Quarterly</SelectItem>
                      <SelectItem value="Yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke={CHART_COLORS[0]}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue by Genre and Time Slot */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">
              2. Revenue by Genre and Time Slot
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tv className="h-5 w-5" />
                    Revenue by Genre
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={genreRevenueData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="revenue"
                          label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {genreRevenueData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={CHART_COLORS[index % CHART_COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Revenue by Time Slot
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={timeSlotRevenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="slot" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" fill={CHART_COLORS[1]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Top Advertisers and Industry Distribution */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">
              3. Top Advertisers and Industry Distribution
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Top Advertisers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Advertiser</TableHead>
                        <TableHead>Spend</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topAdvertisers.map((advertiser, index) => (
                        <TableRow key={index}>
                          <TableCell>{advertiser.name}</TableCell>
                          <TableCell>
                            ${advertiser.spend.toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Industry-wise Advertiser Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={industryDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="percentage"
                          label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {industryDistribution.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={CHART_COLORS[index % CHART_COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Top and Underperforming Programs */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">
              4. Top and Underperforming Programs
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Top Performing Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={topPerformingPrograms} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" width={150} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" fill={CHART_COLORS[2]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Underperforming Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={underperformingPrograms}
                        layout="vertical"
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" width={150} />
                        <Tooltip />
                        <Legend />
                        <Bar
                          dataKey="revenue"
                          fill={CHART_COLORS[3]}
                          name="Current Revenue"
                        />
                        <Bar
                          dataKey="potentialRevenue"
                          fill={CHART_COLORS[4]}
                          name="Potential Revenue"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Event-based Revenue Analysis */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">
              5. Event-based Revenue Analysis
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Revenue Spikes During Key Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={keyEvents}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="event" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                          dataKey="revenue"
                          fill={CHART_COLORS[5]}
                          name="Event Revenue"
                        />
                        <Bar
                          dataKey="normalRevenue"
                          fill={CHART_COLORS[0]}
                          name="Normal Revenue"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Projected Revenue for Future Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={futureEvents}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="event" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                          dataKey="projectedRevenue"
                          fill={CHART_COLORS[1]}
                          name="Projected Event Revenue"
                        />
                        <Bar
                          dataKey="normalRevenue"
                          fill={CHART_COLORS[2]}
                          name="Normal Revenue"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="mb-12 bg-card border p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
        <div className="space-y-4">
          <div className="p-4 bg-blue-600/25 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">
              Optimize Prime Time Content
            </h3>
            <p className="text-foreground/75">
              Focus on enhancing prime time (6PM-10PM) content quality and ad
              strategies to maximize revenue during this peak viewing period.
            </p>
          </div>
          <div className="p-4 bg-emerald-600/25 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">
              Boost Underperforming Programs
            </h3>
            <p className="text-foreground/75">
              Develop strategies to improve the Late Night Talk Show and Weekend
              Documentary, aiming to bridge the gap between current and
              potential revenue.
            </p>
          </div>
          <div className="p-4 bg-amber-600/25 rounded-lg">
            <h3 className="font-semibold text-orange-900 mb-2">
              Leverage High-Impact Events
            </h3>
            <p className="text-foreground/75">
              Create special programming and targeted ad packages for upcoming
              events like Tihar Festival and National Elections to capitalize on
              potential revenue spikes.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Note */}
      <section className="text-sm text-muted-foreground mt-8">
        <h2 className="text-lg font-semibold mb-2">Methodology</h2>
        <p>
          This report analyzes revenue data collected from our internal
          financial systems, advertiser contracts, and viewership metrics. The
          data covers the most recent fiscal year and is compared against
          historical trends where applicable. All financial figures are in USD,
          and percentages are rounded to the nearest whole number.
        </p>
      </section>
    </div>
  );
};

export default RevenueInsights;
