"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  LabelList,
} from "recharts";
import {
  TrendingUp,
  Users,
  Tv,
  Share2,
  Map,
  BarChart as ChartBar,
  Download,
} from "lucide-react";
import ViewershipMap from "./viwership-map";
const CHART_COLORS = {
  blue: "#2563eb",
  green: "#16a34a",
  orange: "#ea580c",
  purple: "#9333ea",
  red: "#dc2626",
  gray: "#6b7280",
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="bg-popover p-2 border  rounded-lg shadow-lg">
      <p className="font-medium ">{label}</p>
      {payload.map((entry, index) => (
        <p key={index} style={{ color: entry.color || CHART_COLORS.blue }}>
          {entry.name}: {entry.value.toLocaleString()}
        </p>
      ))}
    </div>
  );
};

const AudienceInsightsReport = () => {
  // [All data arrays remain exactly the same as in your original code]
  const primeTimeData = [
    { time: "Prime Time", viewers: 1000000 },
    { time: "Non-Prime Time", viewers: 500000 },
  ];

  const viewershipByRegion = [
    { region: "Bagmati", viewers: 500000 },
    { region: "Gandaki", viewers: 300000 },
    { region: "Lumbini", viewers: 250000 },
    { region: "Janakpur", viewers: 200000 },
    { region: "Karnali", viewers: 150000 },
  ];

  const urbanVsRural = [
    { name: "Urban", value: 700000 },
    { name: "Rural", value: 300000 },
  ];

  const topGenres = [
    { genre: "News", viewers: 400000 },
    { genre: "Entertainment", viewers: 350000 },
    { genre: "Sports", viewers: 300000 },
    { genre: "Comedy", viewers: 250000 },
    { genre: "Documentaries", viewers: 200000 },
  ];

  const seasonalShifts = [
    { month: "Jan", news: 300, entertainment: 200, sports: 150 },
    { month: "Apr", news: 250, entertainment: 300, sports: 200 },
    { month: "Jul", news: 200, entertainment: 350, sports: 300 },
    { month: "Oct", news: 350, entertainment: 250, sports: 150 },
  ];

  const topPrograms = [
    { program: "Breaking News Live", viewers: 500000 },
    { program: "Comedy Hour", viewers: 400000 },
    { program: "Live Sports Roundup", viewers: 350000 },
    { program: "Talk of the Town", viewers: 300000 },
    { program: "Documentary Specials", viewers: 250000 },
  ];

  const newVsOldPrograms = [
    { name: "New Programs", value: 40 },
    { name: "Old Programs", value: 60 },
  ];

  const averageWatchTime = [
    { program: "News", time: 30 },
    { program: "Comedy", time: 45 },
    { program: "Sports", time: 90 },
    { program: "Documentaries", time: 60 },
    { program: "Talk Shows", time: 40 },
  ];

  const dropOffRates = [
    { program: "News", rate: 10 },
    { program: "Comedy", rate: 15 },
    { program: "Sports", rate: 5 },
    { program: "Documentaries", rate: 20 },
    { program: "Talk Shows", rate: 25 },
  ];

  return (
    <div className="container mx-auto p-8 bg-popover shadow-inner rounded-lg border paper">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-primary">
            Audience Insights Report
          </h1>
          <button className="flex items-center gap-2 p-2 bg-primary text-white rounded-lg hover:bg-blue-700">
            <Download className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-4 text-lg text-muted-foreground">
          Comprehensive analysis of viewer behavior, preferences, and engagement
          patterns across all channels and platforms. Data collected from
          January 2024 to December 2024.
        </p>
      </div>

      {/* Executive Summary */}
      <section className="mb-12 bg-card border p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
        <p className="text-foreground/75 mb-4">
          Our analysis reveals significant viewer engagement during prime time
          hours, with a strong preference for news and entertainment content.
          Urban audiences continue to dominate viewership, while regional
          distribution shows concentrated engagement in the Bagmati and Gandaki
          regions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-600/25 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900">Total Viewership</h3>
            <p className="text-2xl font-bold text-blue-600">1.5M</p>
          </div>
          <div className="bg-emerald-600/25 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900">Average Watch Time</h3>
            <p className="text-2xl font-bold text-green-600">53 mins</p>
          </div>
          <div className="bg-amber-600/25 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-900">Content Retention</h3>
            <p className="text-2xl font-bold text-orange-600">85%</p>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Findings</h2>
        <div className="grid grid-cols-1 gap-8">
          {/* Viewership Distribution */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">
              1. Viewership Distribution
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Prime Time Analysis */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <CardTitle>Prime Time vs Non-Prime Time</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">
                    Prime time viewing accounts for 66.7% of total viewership,
                    indicating strong evening engagement patterns. This suggests
                    optimal scheduling opportunities for premium content.
                  </p>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={primeTimeData}
                          dataKey="viewers"
                          nameKey="time"
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          fill={CHART_COLORS.blue}
                          paddingAngle={5}
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(1)}%`
                          }
                        >
                          {primeTimeData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={Object.values(CHART_COLORS)[index]}
                            />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Urban vs Rural */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <CardTitle>Urban vs Rural Demographics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">
                    Urban viewers represent 70% of our audience, highlighting
                    the need for targeted content strategies for rural market
                    penetration.
                  </p>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={urbanVsRural}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={90}
                          fill={CHART_COLORS.blue}
                          dataKey="value"
                          label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {urbanVsRural.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={Object.values(CHART_COLORS)[index]}
                            />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Content Performance */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">2. Content Performance</h3>
            {/* Top Genres */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ChartBar className="h-4 w-4" />
                  <CardTitle>Genre Performance Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  News and entertainment consistently lead viewer engagement,
                  with documentaries showing potential for growth. Sports
                  content shows strong seasonal variations but maintains a loyal
                  viewer base.
                </p>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topGenres}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="genre" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar
                        dataKey="viewers"
                        fill={CHART_COLORS.green}
                        radius={8}
                      >
                        <LabelList
                          position="center"
                          offset={12}
                          className="fill-foreground"
                          fontSize={16}
                          fontWeight={600}
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Regional Analysis */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">3. Regional Analysis</h3>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Map className="h-4 w-4" />
                  <CardTitle>Geographic Distribution</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Bagmati and Gandaki provinces show the highest engagement
                  levels, suggesting opportunities for region-specific content
                  development and marketing initiatives.
                </p>
                <ViewershipMap data={viewershipByRegion} />
              </CardContent>
            </Card>
          </div>

          {/* Program Performance */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">4. Program Performance</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Programs */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Tv className="h-4 w-4" />
                    <CardTitle>Top Performing Programs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">
                    Breaking News Live and Comedy Hour lead viewership,
                    demonstrating strong audience preference for timely news
                    coverage and entertainment content.
                  </p>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={topPrograms} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="program" type="category" />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="viewers" fill={CHART_COLORS.blue} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Program Mix */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    <CardTitle>Content Mix Analysis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">
                    The current programming mix maintains a healthy balance
                    between established shows and new content, ensuring audience
                    retention while allowing for innovation.
                  </p>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={newVsOldPrograms}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={90}
                          fill={CHART_COLORS.blue}
                          dataKey="value"
                          label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {newVsOldPrograms.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={Object.values(CHART_COLORS)[index]}
                            />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Engagement Metrics */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">5. Engagement Metrics</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Average Watch Time */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <ChartBar className="h-4 w-4" />
                    <CardTitle>Average Watch Time by Genre</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">
                    Sports content maintains the highest average watch time at
                    90 minutes, followed by documentaries at 60 minutes. This
                    indicates strong viewer engagement with long-format content.
                  </p>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={averageWatchTime}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="program" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="time" fill={CHART_COLORS.blue} radius={8}>
                          <LabelList
                            position="center"
                            offset={12}
                            className="fill-foreground"
                            fontSize={16}
                            fontWeight={600}
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Drop-off Rates */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <CardTitle>Content Retention Analysis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">
                    Sports programming shows the lowest drop-off rate at 5%,
                    while talk shows experience the highest at 25%. This
                    suggests opportunities for format optimization in talk show
                    segments.
                  </p>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={dropOffRates}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="program" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar
                          dataKey="rate"
                          fill={CHART_COLORS.orange}
                          radius={8}
                        >
                          <LabelList
                            position="center"
                            offset={12}
                            className="fill-foreground"
                            fontSize={16}
                            fontWeight={600}
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Seasonal Trends */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">6. Seasonal Trends</h3>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <CardTitle>Seasonal Content Performance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Entertainment content peaks during summer months, while news
                  viewership shows stronger performance during winter. Sports
                  viewership demonstrates consistent growth through mid-year
                  with a decline in Q4.
                </p>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={seasonalShifts}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="news"
                        stroke={CHART_COLORS.blue}
                        fill={CHART_COLORS.blue + "80"}
                        strokeWidth={2}
                      >
                        <LabelList
                          position="top"
                          offset={12}
                          className="fill-foreground"
                          fontSize={12}
                        />
                      </Area>
                      <Area
                        type="monotone"
                        dataKey="entertainment"
                        stroke={CHART_COLORS.green}
                        fill={CHART_COLORS.green + "80"}
                        strokeWidth={2}
                      >
                        <LabelList
                          position="top"
                          offset={12}
                          className="fill-foreground"
                          fontSize={12}
                        />
                      </Area>
                      <Area
                        type="monotone"
                        dataKey="sports"
                        stroke={CHART_COLORS.orange}
                        fill={CHART_COLORS.orange + "80"}
                        strokeWidth={2}
                      >
                        <LabelList
                          position="top"
                          offset={12}
                          className="fill-foreground"
                          fontSize={12}
                        />
                      </Area>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* <GRPSunburstChart /> */}

      {/* Recommendations */}
      <section className="mb-12 bg-card border p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
        <div className="space-y-4">
          <div className="p-4 bg-blue-600/25 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">
              Content Strategy
            </h3>
            <p className="text-foreground/75">
              Invest in more sports and documentary content, given their high
              engagement metrics and lower drop-off rates. Consider reformatting
              talk shows to improve retention.
            </p>
          </div>
          <div className="p-4 bg-emerald-600/25 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">
              Regional Focus
            </h3>
            <p className="text-foreground/75">
              Develop targeted content for underserved regions, particularly
              Karnali and Janakpur, to boost viewership and engagement in these
              areas.
            </p>
          </div>
          <div className="p-4 bg-amber-600/25 rounded-lg">
            <h3 className="font-semibold text-orange-900 mb-2">
              Programming Schedule
            </h3>
            <p className="text-foreground/75">
              Optimize prime time slots with high-performing genres and consider
              expanding prime time programming given its strong viewership
              share.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Note */}
      <section className="text-sm text-popover0 mt-8">
        <h2 className="text-lg font-semibold text-foreground/75 mb-2">
          Methodology
        </h2>
        <p>
          This report analyzes viewership data collected through digital
          platforms and traditional rating systems. All metrics are calculated
          based on a 12-month period ending December 2024. Viewer segments and
          engagement metrics are defined according to industry standards.
        </p>
      </section>
    </div>
  );
};

export default AudienceInsightsReport;