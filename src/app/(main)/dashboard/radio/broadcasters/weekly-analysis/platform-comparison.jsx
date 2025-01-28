import React, { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Radio,
  Youtube,
  Smartphone,
  TrendingUp,
  Clock,
  Users,
  DollarSign,
} from "lucide-react";

// Generate platform comparison data
const generatePlatformData = (metric) => {
  const platforms = ["Analog Radio", "Digital Radio", "YouTube"];
  const baseValues = {
    revenue: [15000, 25000, 35000],
    engagement: [2000, 4000, 8000],
    adCount: [150, 200, 250],
  };

  return platforms.map((platform, index) => ({
    platform,
    [metric]: baseValues[metric][index] + Math.floor(Math.random() * 5000),
    growth: Math.floor(Math.random() * 20) + 5,
  }));
};

// Generate time series data
const generateTimeSeriesData = (metric) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const baseValues = {
    revenue: [12000, 15000, 18000],
    engagement: [1500, 2000, 2500],
    adCount: [120, 150, 180],
  };

  return months.map((month) => ({
    month,
    analog: baseValues[metric][0] + Math.floor(Math.random() * 3000),
    digital: baseValues[metric][1] + Math.floor(Math.random() * 4000),
    youtube: baseValues[metric][2] + Math.floor(Math.random() * 5000),
  }));
};

// Generate insights data based on metric
const generateInsights = (metric) => {
  const insights = {
    revenue: {
      topPlatform: "YouTube",
      growth: "+24%",
      forecast: "Upward trend expected",
      recommendation: "Increase YouTube ad inventory",
    },
    engagement: {
      topPlatform: "Digital Radio",
      growth: "+18%",
      forecast: "Steady growth",
      recommendation: "Focus on interactive content",
    },
    adCount: {
      topPlatform: "Analog Radio",
      growth: "+15%",
      forecast: "Stable performance",
      recommendation: "Optimize ad scheduling",
    },
  };
  return insights[metric];
};

const PlatformComparison = () => {
  const [metric, setMetric] = useState("revenue");
  const [platformData, setPlatformData] = useState(
    generatePlatformData(metric)
  );
  const [timeSeriesData, setTimeSeriesData] = useState(
    generateTimeSeriesData(metric)
  );
  const insights = useMemo(() => generateInsights(metric), [metric]);

  const handleMetricChange = (value) => {
    setMetric(value);
    setPlatformData(generatePlatformData(value));
    setTimeSeriesData(generateTimeSeriesData(value));
  };

  const formatValue = (value, metricType) => {
    switch (metricType) {
      case "revenue":
        return `$${value.toLocaleString()}`;
      case "engagement":
        return `${value.toLocaleString()} interactions`;
      case "adCount":
        return `${value.toLocaleString()} ads`;
      default:
        return value;
    }
  };

  const getMetricIcon = () => {
    switch (metric) {
      case "revenue":
        return <DollarSign className="w-5 h-5" />;
      case "engagement":
        return <Users className="w-5 h-5" />;
      case "adCount":
        return <Radio className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 p-6 bg-gray-50">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-center gap-3">
          {getMetricIcon()}
          <h2 className="text-2xl font-medium text-gray-900">
            Platform Analytics
          </h2>
        </div>
        <Select value={metric} onValueChange={handleMetricChange}>
          <SelectTrigger className="w-[200px] bg-gray-50">
            <SelectValue placeholder="Select metric" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="revenue">Revenue</SelectItem>
            <SelectItem value="engagement">Engagement</SelectItem>
            <SelectItem value="adCount">Ad Count</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="col-span-1 bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="space-y-1">
            <CardTitle className="text-sm font-medium text-gray-500">
              Top Platform
            </CardTitle>
            <div className="text-2xl font-semibold">{insights.topPlatform}</div>
          </CardHeader>
        </Card>
        <Card className="col-span-1 bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="space-y-1">
            <CardTitle className="text-sm font-medium text-gray-500">
              Growth Rate
            </CardTitle>
            <div className="text-2xl font-semibold text-green-500">
              {insights.growth}
            </div>
          </CardHeader>
        </Card>
        <Card className="col-span-2 bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="space-y-1">
            <CardTitle className="text-sm font-medium text-gray-500">
              Recommendation
            </CardTitle>
            <div className="text-lg font-medium">{insights.recommendation}</div>
          </CardHeader>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              Performance Trends
            </CardTitle>
            <CardDescription>
              6-month comparison across platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => formatValue(value, metric)} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="analog"
                  name="Analog"
                  stroke="#8884d8"
                />
                <Line
                  type="monotone"
                  dataKey="digital"
                  name="Digital"
                  stroke="#82ca9d"
                />
                <Line
                  type="monotone"
                  dataKey="youtube"
                  name="YouTube"
                  stroke="#ffc658"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              Platform Comparison
            </CardTitle>
            <CardDescription>Current {metric} by platform</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={platformData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="platform" />
                <YAxis />
                <Tooltip formatter={(value) => formatValue(value, metric)} />
                <Legend />
                <Bar dataKey={metric} fill="#8884d8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-2 bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              Platform Analysis
            </CardTitle>
            <CardDescription>Detailed metrics comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Platform</TableHead>
                  <TableHead>Current {metric}</TableHead>
                  <TableHead>Growth Rate</TableHead>
                  <TableHead>Audience Share</TableHead>
                  <TableHead>Peak Performance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="flex items-center gap-2">
                    <Radio className="w-4 h-4" />
                    Analog Radio
                  </TableCell>
                  <TableCell>
                    {formatValue(platformData[0][metric], metric)}
                  </TableCell>
                  <TableCell className="text-green-500">+12%</TableCell>
                  <TableCell>35%</TableCell>
                  <TableCell>Morning</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    Digital Radio
                  </TableCell>
                  <TableCell>
                    {formatValue(platformData[1][metric], metric)}
                  </TableCell>
                  <TableCell className="text-green-500">+18%</TableCell>
                  <TableCell>40%</TableCell>
                  <TableCell>Evening</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="flex items-center gap-2">
                    <Youtube className="w-4 h-4" />
                    YouTube
                  </TableCell>
                  <TableCell>
                    {formatValue(platformData[2][metric], metric)}
                  </TableCell>
                  <TableCell className="text-green-500">+24%</TableCell>
                  <TableCell>25%</TableCell>
                  <TableCell>Night</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlatformComparison;
