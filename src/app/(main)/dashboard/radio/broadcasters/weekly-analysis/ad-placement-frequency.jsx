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
import { LayoutPanelLeft } from "lucide-react";

// Generate sample data for ad placement frequency
const generatePlacementData = (station, timePeriod) => {
  const programs = [
    "Morning Show",
    "Evening Drive",
    "Night Cafe",
    "Weekend Special",
    "Lunch Hours",
    "Music Marathon",
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

  return programs.map((program) => ({
    name: program,
    before: Math.floor(
      (Math.random() * 5 + 3) *
        baseMultiplier[timePeriod] *
        stationMultiplier[station]
    ),
    during: Math.floor(
      (Math.random() * 8 + 5) *
        baseMultiplier[timePeriod] *
        stationMultiplier[station]
    ),
    after: Math.floor(
      (Math.random() * 4 + 2) *
        baseMultiplier[timePeriod] *
        stationMultiplier[station]
    ),
  }));
};

const AdPlacementFrequencyChart = () => {
  const [station, setStation] = useState("radio city");
  const [timePeriod, setTimePeriod] = useState("daily");
  const [placementData, setPlacementData] = useState(
    generatePlacementData(station, timePeriod)
  );

  const handleStationChange = (value) => {
    setStation(value);
    setPlacementData(generatePlacementData(value, timePeriod));
  };

  const handleTimePeriodChange = (value) => {
    setTimePeriod(value);
    setPlacementData(generatePlacementData(station, value));
  };

  return (
    <ChartCard
      icon={<LayoutPanelLeft className="w-6 h-6" />}
      title="Ad Placement Frequency by Content"
      description="View ad distribution before, during, and after programs"
      action={
        <div className="grid grid-cols-2 gap-4">
          <div>
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
          </div>

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
            data={placementData}
            margin={{ top: 5, right: 30, left: 15, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
            //   angle={-45}
            //   textAnchor="end"
              height={80}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              label={{
                value: "Number of Ads",
                angle: -90,
                position: "insideLeft",
                offset: -5,
              }}
            />
            <Tooltip
              formatter={(value, name) => {
                const formattedName =
                  name.charAt(0).toUpperCase() + name.slice(1);
                return [`${value} ads`, `${formattedName} Program`];
              }}
            />
            <Legend />
            <Bar
              radius={8}
              dataKey="before"
              stackId="a"
              fill="#8884d8"
              name="Before Program"
            />
            <Bar
              radius={8}
              dataKey="during"
              stackId="a"
              fill="#82ca9d"
              name="During Program"
            />
            <Bar
              radius={8}
              dataKey="after"
              stackId="a"
              fill="#ffc658"
              name="After Program"
            />
          </BarChart>
        </ResponsiveContainer>
      }
      footer={
        <p className="text-sm text-gray-500">
          Displays distribution of ads across different program segments. Data
          updates based on selected station and time period.
        </p>
      }
    />
  );
};

export default AdPlacementFrequencyChart;
