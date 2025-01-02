"use client";

import React, { useState, useMemo } from "react";
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
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import {
  Download,
  TrendingUp,
  DollarSign,
  Users,
  Activity,
  Award,
  Share2,
  Tv,
} from "lucide-react";

// Mock data (replace with actual data in a real application)
const channels = [
  { name: "Nepal Television", id: "ntv" },
  { name: "Kantipur TV", id: "ktv" },
  { name: "Image Channel", id: "ic" },
  { name: "AP1 TV", id: "ap1" },
  { name: "Himalaya TV", id: "htv" },
];

const genres = ["News", "Entertainment", "Sports", "Drama", "Documentary"];
const timeSpans = ["Last Week", "Last Month", "Last Quarter", "Last Year"];

const generateChannelData = () => {
  return channels.map((channel) => ({
    id: channel.id,
    name: channel.name,
    share: Math.random() * 30 + 10,
    rating: Math.random() * 5 + 1,
    reach: Math.floor(Math.random() * 1000000 + 500000),
    revenue: Math.floor(Math.random() * 10000000 + 5000000),
    topShows: [
      { name: `${channel.name} Prime`, rating: Math.random() * 3 + 7 },
      { name: `${channel.name} News at 9`, rating: Math.random() * 2 + 6 },
      {
        name: `${channel.name} Weekend Special`,
        rating: Math.random() * 2 + 5,
      },
    ],
    genrePerformance: genres.map((genre) => ({
      genre,
      share: Math.random() * 30 + 10,
    })),
    audienceAge: [
      { age: "13-17", percentage: Math.random() * 10 },
      { age: "18-24", percentage: Math.random() * 20 },
      { age: "25-34", percentage: Math.random() * 25 },
      { age: "35-44", percentage: Math.random() * 20 },
      { age: "45-54", percentage: Math.random() * 15 },
      { age: "55+", percentage: Math.random() * 10 },
    ],
    audienceGender: [
      { gender: "Male", percentage: Math.random() * 60 + 40 },
      { gender: "Female", percentage: Math.random() * 60 + 40 },
    ],
  }));
};

const channelData = generateChannelData();

const CHART_COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

const EnhancedCompetitiveAnalysis = () => {
  const [selectedChannel, setSelectedChannel] = useState(channels[0].id);
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [selectedTimeSpan, setSelectedTimeSpan] = useState(timeSpans[0]);

  const selectedChannelData = useMemo(
    () => channelData.find((c) => c.id === selectedChannel),
    [selectedChannel]
  );

  const getComparisonData = (metric) => {
    return channelData
      .map((channel) => ({
        name: channel.name,
        value: channel[metric],
        fill:
          channel.id === selectedChannel ? CHART_COLORS[0] : CHART_COLORS[4],
      }))
      .sort((a, b) => b.value - a.value);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-4 border rounded shadow-lg">
          <p className="font-bold">{label}</p>
          <p>{`${payload[0].name}: ${payload[0].value.toLocaleString()}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto p-8 bg-background">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-4xl font-bold text-primary">
          Competitive Landscape Analysis
        </h1>
        <Button className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Select value={selectedChannel} onValueChange={setSelectedChannel}>
          <SelectTrigger>
            <SelectValue placeholder="Select Channel" />
          </SelectTrigger>
          <SelectContent>
            {channels.map((channel) => (
              <SelectItem key={channel.id} value={channel.id}>
                {channel.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedGenre} onValueChange={setSelectedGenre}>
          <SelectTrigger>
            <SelectValue placeholder="Select Genre" />
          </SelectTrigger>
          <SelectContent>
            {genres.map((genre) => (
              <SelectItem key={genre} value={genre}>
                {genre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedTimeSpan} onValueChange={setSelectedTimeSpan}>
          <SelectTrigger>
            <SelectValue placeholder="Select Time Span" />
          </SelectTrigger>
          <SelectContent>
            {timeSpans.map((timeSpan) => (
              <SelectItem key={timeSpan} value={timeSpan}>
                {timeSpan}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedChannelData && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Tv className="h-5 w-5" />
              {selectedChannelData.name} Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-primary">
                  Market Share
                </h3>
                <p className="text-2xl font-bold">
                  {selectedChannelData.share.toFixed(2)}%
                </p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-secondary">Rating</h3>
                <p className="text-2xl font-bold">
                  {selectedChannelData.rating.toFixed(2)}
                </p>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-accent">Reach</h3>
                <p className="text-2xl font-bold">
                  {(selectedChannelData.reach / 1000000).toFixed(2)}M
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-sm font-semibold">Ad Revenue</h3>
                <p className="text-2xl font-bold">
                  ${(selectedChannelData.revenue / 1000000).toFixed(2)}M
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Market Share Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={getComparisonData("share")} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" unit="%" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" name="Market Share">
                    {getComparisonData("share").map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Rating Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={getComparisonData("rating")} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" name="Rating">
                    {getComparisonData("rating").map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Reach Comparison (Millions)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={getComparisonData("reach").map((item) => ({
                    ...item,
                    value: item.value / 1000000,
                  }))}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" unit="M" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" name="Reach">
                    {getComparisonData("reach").map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Ad Revenue Comparison (Millions USD)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={getComparisonData("revenue").map((item) => ({
                    ...item,
                    value: item.value / 1000000,
                  }))}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" unit="M" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" name="Ad Revenue">
                    {getComparisonData("revenue").map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {selectedChannelData && (
        <>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Top Performing Shows for {selectedChannelData.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Show Name</TableHead>
                    <TableHead>Rating</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedChannelData.topShows.map((show, index) => (
                    <TableRow key={index}>
                      <TableCell>{show.name}</TableCell>
                      <TableCell>{show.rating.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Genre Performance for {selectedChannelData.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={selectedChannelData.genrePerformance}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="share"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {selectedChannelData.genrePerformance.map(
                          (entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={CHART_COLORS[index % CHART_COLORS.length]}
                            />
                          )
                        )}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Audience Demographics for {selectedChannelData.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Age Distribution
                    </h3>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={selectedChannelData.audienceAge}
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
                            {selectedChannelData.audienceAge.map(
                              (entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={
                                    CHART_COLORS[index % CHART_COLORS.length]
                                  }
                                />
                              )
                            )}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Gender Distribution
                    </h3>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={selectedChannelData.audienceGender}
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
                            {selectedChannelData.audienceGender.map(
                              (entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={
                                    CHART_COLORS[index % CHART_COLORS.length]
                                  }
                                />
                              )
                            )}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Insights and Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              {selectedChannelData.name} has a{" "}
              {selectedChannelData.share.toFixed(2)}% market share,
              {selectedChannelData.share > 20
                ? " which is strong. Focus on maintaining this position."
                : " which indicates room for growth. Consider strategies to increase viewership."}
            </li>
            <li>
              The channel's top-performing show,{" "}
              {selectedChannelData.topShows[0].name}, has a rating of{" "}
              {selectedChannelData.topShows[0].rating.toFixed(2)}.
              {selectedChannelData.topShows[0].rating > 8
                ? " Capitalize on its success by creating similar content or spin-offs."
                : " There's potential to improve. Analyze successful competitors' shows for insights."}
            </li>
            <li>
              In the {selectedGenre} genre, {selectedChannelData.name} has a{" "}
              {selectedChannelData.genrePerformance
                .find((g) => g.genre === selectedGenre)
                ?.share.toFixed(2)}
              % share.
              {selectedChannelData.genrePerformance.find(
                (g) => g.genre === selectedGenre
              )?.share > 25
                ? " This is a strong performance. Consider expanding content in this genre."
                : " There's room for improvement. Invest in quality content and marketing for this genre."}
            </li>
            <li>
              The channel reaches{" "}
              {(selectedChannelData.reach / 1000000).toFixed(2)} million
              viewers.
              {selectedChannelData.reach > 800000
                ? " This is a significant audience. Focus on engagement and retention strategies."
                : " Consider promotional campaigns to increase reach and attract new viewers."}
            </li>
            <li>
              Ad revenue is $
              {(selectedChannelData.revenue / 1000000).toFixed(2)} million.
              {selectedChannelData.revenue > 8000000
                ? " This is strong. Explore premium advertising partnerships."
                : " There's potential to increase. Optimize ad placement and explore new advertising formats."}
            </li>
          </ul>
        </CardContent>
      </Card>

      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>Data last updated: {new Date().toLocaleDateString()}</p>
        <p>
          This report is generated based on the selected channel (
          {selectedChannelData?.name}), genre ({selectedGenre}), and time span (
          {selectedTimeSpan}). Actual data may vary.
        </p>
      </footer>
    </div>
  );
};

export default EnhancedCompetitiveAnalysis;
