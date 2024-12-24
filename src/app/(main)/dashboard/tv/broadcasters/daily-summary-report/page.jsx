"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TopProgramsChart from "./TopProgramsChart";
import TopChannelsRatingChart from "./TopChannelRatingsChart";
import TopChannelsShareChart from "./TopChannelShareChart";
import AgeGroupShareChart from "./AgeDistributionChart";
import GenderDistributionChart from "./GenderDistributionChart";
import RegionDistributionChart from "./RegionalDistributionChart";
// import TopProgramsChart from "@/components/charts/top-programs-chart";
// import TopChannelsRatingChart from "@/components/charts/top-channels-rating-chart";
// import TopChannelsShareChart from "@/components/charts/top-channels-share-chart";
// import AgeGroupShareChart from "@/components/charts/age-group-share-chart";
// import GenderDistributionChart from "@/components/charts/gender-distribution-chart";
// import RegionDistributionChart from "@/components/charts/region-distribution-chart";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

export default function DashboardPage() {
  const [data, setData] = useState({
    topPrograms: [],
    channelRatings: [],
    channelShares: [],
    ageDistribution: [],
    genderDistribution: [],
    regionDistribution: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          topPrograms,
          channelRatings,
          channelShares,
          ageDistribution,
          genderDistribution,
          regionDistribution,
        ] = await Promise.all([
          axios.get(`${API_BASE_URL}/programs/top`),
          axios.get(`${API_BASE_URL}/channels/ratings`),
          axios.get(`${API_BASE_URL}/channels/share`),
          axios.get(`${API_BASE_URL}/channels/age-distribution`),
          axios.get(`${API_BASE_URL}/channels/gender-distribution`),
          axios.get(`${API_BASE_URL}/channels/region-distribution`),
        ]);

        setData({
          topPrograms: topPrograms.data.data,
          channelRatings: channelRatings.data.data,
          channelShares: channelShares.data.data,
          ageDistribution: ageDistribution.data.data,
          genderDistribution: genderDistribution.data.data,
          regionDistribution: regionDistribution.data.data,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">TV Viewership Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Programs Across Channels</CardTitle>
          </CardHeader>
          <CardContent>
            <TopProgramsChart data={data.topPrograms} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Channels by Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <TopChannelsRatingChart data={data.channelRatings} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Channels by Share</CardTitle>
          </CardHeader>
          <CardContent>
            <TopChannelsShareChart data={data.channelShares} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Share of Age Groups in Top Channels</CardTitle>
          </CardHeader>
          <CardContent>
            <AgeGroupShareChart data={data.ageDistribution} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Gender Distribution in Top Channels</CardTitle>
          </CardHeader>
          <CardContent>
            <GenderDistributionChart data={data.genderDistribution} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Region-Wise Distribution in Top Channels</CardTitle>
          </CardHeader>
          <CardContent>
            <RegionDistributionChart data={data.regionDistribution} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
