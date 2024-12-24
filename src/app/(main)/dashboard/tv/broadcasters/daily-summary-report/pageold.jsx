"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Tv,
  Award,
  ArrowUp,
  BarChart as BarChartIcon,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Header from "@/components/navigation/header";
import { Skeleton } from "@/components/ui/skeleton";

const TVAnalytics = () => {
  const [genderData, setGenderData] = useState(null);
  const [ageData, setAgeData] = useState(null);
  const [topPrograms, setTopPrograms] = useState(null);
  const [channelRatings, setChannelRatings] = useState(null);
  const [channelShare, setChannelShare] = useState(null);
  const [regionData, setRegionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const genderChartConfig = {
    male: {
      label: "Male",
      color: "hsl(var(--chart-1))",
    },
    female: {
      label: "Female",
      color: "hsl(var(--chart-2))",
    },
  };

  const ageChartConfig = {
    children: {
      label: "Children (1-14)",
      color: "hsl(var(--chart-3))",
    },
    youth: {
      label: "Youth (15-29)",
      color: "hsl(var(--chart-4))",
    },
    adults: {
      label: "Adults (30-59)",
      color: "hsl(var(--chart-5))",
    },
    seniors: {
      label: "Seniors (60+)",
      color: "hsl(var(--chart-6))",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          genderResponse,
          ageResponse,
          programsResponse,
          ratingsResponse,
          shareResponse,
          regionResponse,
        ] = await Promise.all([
          axios.get("http://localhost:5000/api/channels/by-gender"),
          axios.get("http://localhost:5000/api/channels/by-age"),
          axios.get("http://localhost:5000/api/programs/top"),
          axios.get("http://localhost:5000/api/channels/ratings"),
          axios.get("http://localhost:5000/api/channels/share"),
          axios.get("http://localhost:5000/api/channels/region-distribution"),
        ]);

        setGenderData(genderResponse.data.data);
        setAgeData(ageResponse.data.data);
        setTopPrograms(programsResponse.data.data);
        setChannelRatings(ratingsResponse.data.data);
        setChannelShare(shareResponse.data.data);
        setRegionData(regionResponse.data.data);
      } catch (err) {
        setError("Failed to fetch data");
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Existing format functions
  const formatGenderData = () => {
    if (!genderData) return [];
    const channels = Object.keys(genderData.Female).map(
      (index) => genderData.Female[index].channelName
    );
    return channels.map((channel) => ({
      channel: channel,
      male: genderData.Male?.find((item) => item.channelName === channel)
        .viewCount,
      female: genderData.Female?.find((item) => item.channelName === channel)
        .viewCount,
    }));
  };

  const formatAgeData = () => {
    if (!ageData) return [];
    const channels = Object.keys(ageData["Adults (30-59)"]).map(
      (index) => ageData["Adults (30-59)"][index].channelName
    );
    return channels.map((channel) => ({
      channel: channel,
      children: ageData["Children (1-14)"]?.find(
        (item) => item.channelName === channel
      ).viewCount,
      youth: ageData["Youth (15-29)"]?.find(
        (item) => item.channelName === channel
      ).viewCount,
      adults: ageData["Adults (30-59)"]?.find(
        (item) => item.channelName === channel
      ).viewCount,
      seniors: ageData["Seniors (60+)"]?.find(
        (item) => item.channelName === channel
      ).viewCount,
    }));
  };

  // New format functions for additional charts
  const formatTopPrograms = () => {
    if (!topPrograms) return [];
    return topPrograms.map((program) => ({
      name: program.program_title,
      reach: program.Household_Reach,
      avgOn: Math.round(program.Average_ON * 100) / 100,
    }));
  };

  const formatChannelRatings = () => {
    if (!channelRatings) return [];
    return channelRatings.map((channel) => ({
      name: channel.channel_name,
      rating: Math.round(channel.Average_Rating * 100) / 100,
    }));
  };

  const formatRegionData = () => {
    if (!regionData) return [];
    const regions = {};
    regionData.forEach((item) => {
      if (!regions[item.region]) {
        regions[item.region] = {};
      }
      regions[item.region][item.channel_name] = item.RegionCount;
    });

    return Object.entries(regions).map(([region, channels]) => ({
      region,
      ...channels,
    }));
  };

  if (isLoading) return <LoadingSkeleton />;
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <Header
        title="TV Analytics Dashboard"
        description="Comprehensive analysis of TV viewership patterns"
        badge="live"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Existing Charts */}
        <ChartCard
          title="Gender Distribution"
          description="Viewership across channels by gender"
          data={formatGenderData()}
          config={genderChartConfig}
          keys={["male", "female"]}
          insight="Balanced gender distribution across channels"
        />
        <ChartCard
          title="Age Group Distribution"
          description="Viewership patterns across age groups"
          data={formatAgeData()}
          config={ageChartConfig}
          keys={["children", "youth", "adults", "seniors"]}
          insight="Diverse age group engagement across channels"
        />

        {/* Top Programs Chart */}
        <Card className="bg-card overflow-hidden">
          <CardHeader>
            <CardTitle>Top Programs</CardTitle>
            <CardDescription>
              Most-watched programs by household reach
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={formatTopPrograms()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="reach"
                  fill="hsl(var(--chart-1))"
                  name="Household Reach"
                />
                <Bar
                  dataKey="avgOn"
                  fill="hsl(var(--chart-2))"
                  name="Avg. On Time"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Channel Ratings Chart */}
        <Card className="bg-card overflow-hidden">
          <CardHeader>
            <CardTitle>Channel Ratings</CardTitle>
            <CardDescription>Average ratings by channel</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={formatChannelRatings()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="rating"
                  stroke="hsl(var(--chart-3))"
                  name="Rating"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Region Distribution Chart */}
        <Card className="bg-card overflow-hidden col-span-2">
          <CardHeader>
            <CardTitle>Regional Distribution</CardTitle>
            <CardDescription>
              Viewership distribution across regions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={formatRegionData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" />
                <YAxis />
                <Tooltip />
                <Legend />
                {channelShare?.slice(0, 5).map((channel, index) => (
                  <Bar
                    key={channel.channel_name}
                    dataKey={channel.channel_name}
                    fill={`hsl(var(--chart-${index + 1}))`}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const LoadingSkeleton = () => (
  <div className="container mx-auto p-6 space-y-8">
    <Skeleton className="h-12 w-3/4 mb-4" />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} className="h-96" />
      ))}
    </div>
  </div>
);

const ChartCard = ({ title, description, data, config, keys, insight }) => (
  <Card className="bg-card overflow-hidden">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer config={config}>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="channel"
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {keys.map((key) => (
              <Bar
                key={key}
                dataKey={key}
                fill={config[key].color}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </CardContent>
    <CardFooter className="flex-col items-start gap-2 text-sm">
      <div className="flex gap-2 font-medium leading-none">
        <TrendingUp className="h-4 w-4" />
        {insight}
      </div>
    </CardFooter>
  </Card>
);

export default TVAnalytics;
