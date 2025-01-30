import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ChartCard from "@/components/card/charts-card";
import { Radio } from "lucide-react";

// Generate sample data for radio Songs and their ad counts
const generateAdPlacementData = (station, timePeriod) => {
const Songs = [
  "Aaj Ki Raat (Stree 2)",
  "Kesariya (Brahmastra)",
  "Apna Bana Le (Bhediya)",
  "Naatu Naatu (RRR)",
  "Ranjha (Shershaah)",
  "Pasoori (Coke Studio)",
];


  const baseMultiplier = {
    daily: 1,
    weekly: 7,
    monthly: 30,
  };

  // Adjust base ad counts based on station popularity
  const stationMultiplier = {
    "radio city": 1.2,
    "radio mirchi": 1.1,
    "red fm": 1.0,
  };

  return Songs
    .map((program) => ({
      name: program,
      adCount: Math.floor(
        (Math.random() * 15 + 10) *
          baseMultiplier[timePeriod] *
          stationMultiplier[station]
      ),
    }))
    .sort((a, b) => b.adCount - a.adCount);
};

const TopSongsChart = () => {
  const [station, setStation] = useState("radio city");
  const [timePeriod, setTimePeriod] = useState("daily");
  const [adData, setAdData] = useState(
    generateAdPlacementData(station, timePeriod)
  );

  const handleStationChange = (value) => {
    setStation(value);
    setAdData(generateAdPlacementData(value, timePeriod));
  };

  const handleTimePeriodChange = (value) => {
    setTimePeriod(value);
    setAdData(generateAdPlacementData(station, value));
  };

  return (
    <ChartCard
      icon={<Radio className="w-6 h-6" />}
      title="Top Songs by Ad Placements"
      description="View ad placement statistics across different radio Songs and stations"
      action={
        <div className="flex  justify-end">
          {/* <div>
            <p className="text-sm font-medium mb-2">Select Station</p>
            <Select value={station} onValueChange={handleStationChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select station" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="radio city">Radio City</SelectItem>
                <SelectItem value="radio mirchi">Radio Mirchi</SelectItem>
                <SelectItem value="red fm">Red FM</SelectItem>
              </SelectContent>
            </Select>
          </div> */}

          <div>
            <p className="text-sm font-medium mb-2">Select Time Period</p>
            <Select value={timePeriod} onValueChange={handleTimePeriodChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      }
      chart={
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={adData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 15, bottom: 5 }}
          >
            <CartesianGrid horizontal={false} strokeDasharray="3 3" />
            <XAxis type="number" tickLine={false} axisLine={false} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              axisLine={false}
              width={90}
            />
            <Tooltip
              formatter={(value, name) => {
                if (name === "adCount") return [`${value} ads`, "Ad Count"];
                return [`${value.toLocaleString()}`, "Ad Count"];
              }}
            />
            <Legend />
            <Bar
              dataKey="adCount"
              fill="#8884d8"
              name="Ad Count"
              radius={8}
            />
          </BarChart>
        </ResponsiveContainer>
      }
      footer={
        <p className="text-sm text-gray-500">
          Shows top Songs ranked by number of ad placements. Revenue data is
          simulated.
        </p>
      }
    />
  );
};

export default TopSongsChart;
