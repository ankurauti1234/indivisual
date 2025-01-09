"use client";

import {
  TrendingUp,
  Users,
  Tv,
  Share2,
  Map,
  BarChartIcon as ChartBar,
  Download,
} from "lucide-react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const COLORS = {
  primary: "hsl(var(--chart-1))",
  secondary: "hsl(var(--chart-2))",
  accent1: "hsl(var(--chart-3))",
  accent2: "hsl(var(--chart-4))",
  accent3: "hsl(var(--chart-5))",
  muted: "hsl(var(--chart-6))",
};

// Static data
const data = {
  topPrograms: [
    { program_title: "Breaking News Live", viewer_percentage: 15.2 },
    { program_title: "Comedy Hour", viewer_percentage: 12.8 },
    { program_title: "Global Updates", viewer_percentage: 11.5 },
    { program_title: "Laugh Out Loud", viewer_percentage: 10.3 },
    { program_title: "Talk of the Town", viewer_percentage: 9.7 },
  ],
  channelRatings: [
    { channel_name: "NTV", average_rating: 4.5 },
    { channel_name: "Kantipur TV", average_rating: 3.8 },
    { channel_name: "AP1 TV", average_rating: 3.2 },
    { channel_name: "Himalaya TV", average_rating: 2.9 },
    { channel_name: "TV Today HD", average_rating: 2.7 },
  ],
  channelShares: [
    { channel_name: "NTV", share_percentage: 25 },
    { channel_name: "Kantipur TV", share_percentage: 20 },
    { channel_name: "AP1 TV", share_percentage: 15 },
    { channel_name: "Himalaya TV", share_percentage: 12 },
    { channel_name: "TV Today HD", share_percentage: 10 },
    { channel_name: "Others", share_percentage: 18 },
  ],
  ageDistribution: [
    { channel_name: "NTV", age_group: "3-17", percentage: 15 },
    { channel_name: "NTV", age_group: "18-29", percentage: 30 },
    { channel_name: "NTV", age_group: "30-64", percentage: 40 },
    { channel_name: "NTV", age_group: "65+", percentage: 15 },
    { channel_name: "Kantipur TV", age_group: "3-17", percentage: 20 },
    { channel_name: "Kantipur TV", age_group: "18-29", percentage: 35 },
    { channel_name: "Kantipur TV", age_group: "30-64", percentage: 35 },
    { channel_name: "Kantipur TV", age_group: "65+", percentage: 10 },
    { channel_name: "AP1 TV", age_group: "3-17", percentage: 25 },
    { channel_name: "AP1 TV", age_group: "18-29", percentage: 40 },
    { channel_name: "AP1 TV", age_group: "30-64", percentage: 30 },
    { channel_name: "AP1 TV", age_group: "65+", percentage: 5 },
    { channel_name: "Himalaya TV", age_group: "3-17", percentage: 22 },
    { channel_name: "Himalaya TV", age_group: "18-29", percentage: 38 },
    { channel_name: "Himalaya TV", age_group: "30-64", percentage: 32 },
    { channel_name: "Himalaya TV", age_group: "65+", percentage: 8 },
    { channel_name: "TV Today HD", age_group: "3-17", percentage: 18 },
    { channel_name: "TV Today HD", age_group: "18-29", percentage: 42 },
    { channel_name: "TV Today HD", age_group: "30-64", percentage: 28 },
    { channel_name: "TV Today HD", age_group: "65+", percentage: 12 },
  ],
  genderDistribution: [
    { channel_name: "NTV", gender: "Male", percentage: 55 },
    { channel_name: "NTV", gender: "Female", percentage: 45 },
    { channel_name: "Kantipur TV", gender: "Male", percentage: 48 },
    { channel_name: "Kantipur TV", gender: "Female", percentage: 52 },
    { channel_name: "AP1 TV", gender: "Male", percentage: 52 },
    { channel_name: "AP1 TV", gender: "Female", percentage: 48 },
    { channel_name: "Himalaya TV", gender: "Male", percentage: 51 },
    { channel_name: "Himalaya TV", gender: "Female", percentage: 49 },
    { channel_name: "TV Today HD", gender: "Male", percentage: 53 },
    { channel_name: "TV Today HD", gender: "Female", percentage: 47 },
  ],
  regionDistribution: [
    { channel_name: "NTV", region: "Bagmati", percentage: 30 },
    { channel_name: "NTV", region: "Gandaki", percentage: 25 },
    { channel_name: "NTV", region: "Lumbini", percentage: 20 },
    { channel_name: "NTV", region: "Janakpur", percentage: 15 },
    { channel_name: "NTV", region: "Karnali", percentage: 10 },
    { channel_name: "Kantipur TV", region: "Bagmati", percentage: 28 },
    { channel_name: "Kantipur TV", region: "Gandaki", percentage: 27 },
    { channel_name: "Kantipur TV", region: "Lumbini", percentage: 22 },
    { channel_name: "Kantipur TV", region: "Janakpur", percentage: 13 },
    { channel_name: "Kantipur TV", region: "Karnali", percentage: 10 },
    { channel_name: "AP1 TV", region: "Bagmati", percentage: 26 },
    { channel_name: "AP1 TV", region: "Gandaki", percentage: 24 },
    { channel_name: "AP1 TV", region: "Lumbini", percentage: 25 },
    { channel_name: "AP1 TV", region: "Janakpur", percentage: 15 },
    { channel_name: "AP1 TV", region: "Karnali", percentage: 10 },
    { channel_name: "Himalaya TV", region: "Bagmati", percentage: 29 },
    { channel_name: "Himalaya TV", region: "Gandaki", percentage: 26 },
    { channel_name: "Himalaya TV", region: "Lumbini", percentage: 23 },
    { channel_name: "Himalaya TV", region: "Janakpur", percentage: 12 },
    { channel_name: "Himalaya TV", region: "Karnali", percentage: 10 },
    { channel_name: "TV Today HD", region: "Bagmati", percentage: 27 },
    { channel_name: "TV Today HD", region: "Gandaki", percentage: 25 },
    { channel_name: "TV Today HD", region: "Lumbini", percentage: 24 },
    { channel_name: "TV Today HD", region: "Janakpur", percentage: 14 },
    { channel_name: "TV Today HD", region: "Karnali", percentage: 10 },
  ],
};

const TopProgramsChart = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Tv className="h-4 w-4" />
          <CardTitle>Top Programs</CardTitle>
        </div>
        <CardDescription>Most watched programs across channels</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={600}>
          <BarChart
            accessibilityLayer
            data={data.topPrograms}
            layout="vertical"
            margin={{
              right: 48,
            }}
          >
            <YAxis
              type="category"
              hide
              dataKey="program_title"
              tickLine={true}
              axisLine={true}
            />
            <XAxis type="number" />
            <Tooltip />
            <Bar
              dataKey="viewer_percentage"
              fill={COLORS.primary}
              radius={[0, 4, 4, 0]}
            >
              <LabelList
                dataKey="program_title"
                position="center"
                fontSize={14}
                fontWeight={700}
                fill="white"
              />
              <LabelList
                dataKey="viewer_percentage"
                position="right"
                fontSize={14}
                fontWeight={700}
                className="fill-foreground"
                formatter={(value) => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Showing viewer percentage for top programs
      </CardFooter>
    </Card>
  );
};

const ChannelRatingsChart = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <ChartBar className="h-4 w-4" />
          <CardTitle>Channel Ratings</CardTitle>
        </div>
        <CardDescription>Average ratings by channel</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data.channelRatings}
            margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="category"
              dataKey="channel_name"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              type="number"
              tickFormatter={(value) => `${value}%`}
              allowDecimals={false}
            />
            <Tooltip />
            <Bar
              dataKey="average_rating"
              fill={COLORS.primary}
              radius={[4, 4, 0, 0]}
            >
              <LabelList
                dataKey="average_rating"
                position="top"
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Displaying average rating percentage per channel
      </CardFooter>
    </Card>
  );
};

const ChannelSharesChart = () => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-2">
        <Share2 className="h-4 w-4" />
        <CardTitle>Channel Shares</CardTitle>
      </div>
      <CardDescription>Market share distribution</CardDescription>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data.channelShares}
            dataKey="share_percentage"
            nameKey="channel_name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={160}
            label
            paddingAngle={5}
          >
            {data.channelShares.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  Object.values(COLORS)[index % Object.values(COLORS).length]
                }
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </CardContent>
    <CardFooter className="text-sm text-muted-foreground">
      Channel market share percentage distribution
    </CardFooter>
  </Card>
);

const AgeDistributionChart = () => {
  const processData = (data) => {
    const ageGroups = ["3-17", "18-29", "30-64", "65+"];
    const channels = [...new Set(data.map((item) => item.channel_name))];

    const matrix = channels.map((channel) => {
      const channelData = {};
      channelData.channel = channel;

      ageGroups.forEach((age) => {
        const match = data.find(
          (d) => d.channel_name === channel && d.age_group === age
        );
        channelData[age] = match ? match.percentage : 0;
      });

      return channelData;
    });

    return matrix;
  };

  const matrix = processData(data.ageDistribution);
  const { min, max } = {
    min: Math.min(
      ...matrix.flatMap((item) =>
        Object.values(item).filter((v) => typeof v === "number")
      )
    ),
    max: Math.max(
      ...matrix.flatMap((item) =>
        Object.values(item).filter((v) => typeof v === "number")
      )
    ),
  };

  const getColor = (value) => {
    const normalizedValue = (value - min) / (max - min);
    const hue = 210;
    const saturation = 80;
    const lightness = 90 - normalizedValue * 60;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <CardTitle>Age Distribution Heatmap</CardTitle>
        </div>
        <CardDescription>
          Viewer age demographics across channels
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-5 gap-1 mb-2">
              <div className="font-bold p-2">Channel</div>
              {["3-17", "18-29", "30-64", "65+"].map((age) => (
                <div key={age} className="font-bold p-2 text-center">
                  {age}
                </div>
              ))}
            </div>

            {matrix.map((row, idx) => (
              <div key={idx} className="grid grid-cols-5 gap-1 mb-1">
                <div className="py-5 font-medium text-center">
                  {row.channel}
                </div>
                {["3-17", "18-29", "30-64", "65+"].map((age) => (
                  <div
                    key={age}
                    className="p-2 text-center transition-colors duration-200"
                    style={{
                      backgroundColor: getColor(row[age]),
                      color:
                        row[age] > (max - min) / 2 + min ? "white" : "black",
                    }}
                  >
                    {row[age].toFixed(1)}%
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="text-sm">Lower</div>
              <div className="h-4 w-32 bg-gradient-to-r from-[hsl(210,80%,90%)] to-[hsl(210,80%,30%)]" />
              <div className="text-sm">Higher</div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Percentage of viewers by age group for each channel
      </CardFooter>
    </Card>
  );
};

const RegionDistributionChart = () => {
  const processData = (data) => {
    const regions = ["Bagmati", "Gandaki", "Lumbini", "Janakpur", "Karnali"];
    const channels = [...new Set(data.map((item) => item.channel_name))];

    const matrix = channels.map((channel) => {
      const channelData = { channel_name: channel };

      regions.forEach((region) => {
        const match = data.find(
          (d) => d.channel_name === channel && d.region === region
        );
        channelData[region] = match ? match.percentage : 0;
      });

      return channelData;
    });

    return matrix;
  };

  const matrix = processData(data.regionDistribution);
  const { min, max } = {
    min: Math.min(
      ...matrix.flatMap((item) =>
        Object.values(item).filter((v) => typeof v === "number")
      )
    ),
    max: Math.max(
      ...matrix.flatMap((item) =>
        Object.values(item).filter((v) => typeof v === "number")
      )
    ),
  };

  const getColor = (value) => {
    const normalizedValue = (value - min) / (max - min);
    const hue = 32;
    const saturation = 90;
    const lightness = 90 - normalizedValue * 60;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Map className="h-4 w-4" />
          <CardTitle>Regional Distribution Heatmap</CardTitle>
        </div>
        <CardDescription>
          Viewer distribution by province across channels
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-6 gap-1 mb-2">
              <div className="font-bold p-2">Channel</div>
              {["Bagmati", "Gandaki", "Lumbini", "Janakpur", "Karnali"].map(
                (region) => (
                  <div key={region} className="font-bold p-2 text-center">
                    {region}
                  </div>
                )
              )}
            </div>

            {matrix.map((row, idx) => (
              <div key={idx} className="grid grid-cols-6 gap-1 mb-1">
                <div className="py-5 font-medium text-center">
                  {row.channel_name}
                </div>
                {["Bagmati", "Gandaki", "Lumbini", "Janakpur", "Karnali"].map(
                  (region) => (
                    <div
                      key={region}
                      className="p-2 text-center transition-colors duration-200"
                      style={{
                        backgroundColor: getColor(row[region]),
                        color:
                          row[region] > (max - min) / 2 + min
                            ? "white"
                            : "black",
                      }}
                    >
                      {row[region].toFixed(1)}%
                    </div>
                  )
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="text-sm">Lower</div>
              <div className="h-4 w-32 bg-gradient-to-r from-[hsl(32,90%,90%)] to-[hsl(32,90%,30%)]" />
              <div className="text-sm">Higher</div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Percentage of viewers by province for each channel
      </CardFooter>
    </Card>
  );
};

const GenderDistributionChart = () => {
  const processedData = Object.values(
    data.genderDistribution.reduce((acc, item) => {
      if (!acc[item.channel_name]) {
        acc[item.channel_name] = {
          channel_name: item.channel_name,
          Male: 0,
          Female: 0,
        };
      }
      acc[item.channel_name][item.gender] = item.percentage;
      return acc;
    }, {})
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <CardTitle>Gender Distribution</CardTitle>
        </div>
        <CardDescription>Viewer gender split by channel</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={processedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="channel_name"
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Male" fill={COLORS.primary} />
            <Bar dataKey="Female" fill={COLORS.secondary} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Gender distribution percentage by channel
      </CardFooter>
    </Card>
  );
};


const DailySummary = () => {
  return (
    <div className="container mx-auto p-8 bg-popover shadow-inner rounded-lg border">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-primary">TV Daily Summary</h1>
          <Button className="flex items-center gap-2 p-2 bg-primary text-white rounded-lg hover:bg-blue-700">
            <Download className="h-4 w-4" />
            Download Report
          </Button>
        </div>
        <p className="mt-4 text-lg text-muted-foreground">
          Comprehensive analysis of daily TV viewership patterns, channel
          performance, and audience demographics.
        </p>
      </div>

      {/* Executive Summary */}
      <section className="mb-12 bg-card border p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
        <p className="text-foreground/75 mb-4">
          Today's analysis shows strong performance for news and entertainment
          programs, with a balanced distribution across age groups and regions.
          Channel shares remain competitive, with slight variations in gender
          viewership across channels.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-600/25 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900">Top Program</h3>
            <p className="text-2xl font-bold text-blue-600">
              Breaking News Live
            </p>
          </div>
          <div className="bg-emerald-600/25 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900">
              Highest Rated Channel
            </h3>
            <p className="text-2xl font-bold text-green-600">NTV</p>
          </div>
          <div className="bg-amber-600/25 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-900">
              Most Engaged Age Group
            </h3>
            <p className="text-2xl font-bold text-orange-600">18-29</p>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Findings</h2>
        <div className="grid grid-cols-1 gap-8">
          {/* Channel Performance */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">1. Channel Performance</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChannelRatingsChart />
              <ChannelSharesChart />
            </div>
          </div>

          {/* Audience Demographics */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">2. Audience Demographics</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AgeDistributionChart />
              <GenderDistributionChart />
            </div>
          </div>
          
          {/* Regional Analysis */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">4. Regional Analysis</h3>
            <RegionDistributionChart />
          </div>

          {/* Top Programs */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">3. Top Programs</h3>
            <TopProgramsChart />
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="mb-12 bg-card border p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
        <div className="space-y-4">
          <div className="p-4 bg-blue-600/25 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">
              Content Strategy
            </h3>
            <p className="text-foreground/75">
              Focus on producing more news and entertainment content, as these
              genres are performing well across all channels.
            </p>
          </div>
          <div className="p-4 bg-emerald-600/25 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">
              Audience Targeting
            </h3>
            <p className="text-foreground/75">
              Develop targeted content for the 18-29 age group, as they show
              high engagement across multiple channels.
            </p>
          </div>
          <div className="p-4 bg-amber-600/25 rounded-lg">
            <h3 className="font-semibold text-orange-900 mb-2">
              Regional Focus
            </h3>
            <p className="text-foreground/75">
              Increase content production for underserved regions like Karnali
              to boost viewership and engagement in these areas.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Note */}
      <section className="text-sm text-muted-foreground mt-8">
        <h2 className="text-lg font-semibold mb-2">Methodology</h2>
        <p>
          This report analyzes viewership data collected through digital
          platforms and traditional rating systems for the current day. All
          metrics are calculated based on real-time data and may be subject to
          minor adjustments as final numbers are compiled.
        </p>
      </section>
    </div>
  );
};

export default DailySummary;
