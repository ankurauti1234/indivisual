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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Example data for channels' average GRP based on genre and time period
const generateAvgGrpData = (genre, timePeriod) => {
  const baseData = {
    NTV: Math.floor(Math.random() * 100) + 50,
    "Kantipur TV": Math.floor(Math.random() * 100) + 50,
    "Image Channel": Math.floor(Math.random() * 100) + 50,
    "Avenues TV": Math.floor(Math.random() * 100) + 50,
  };

  // Adjust values based on genre (example, you can define more specific logic based on genre)
  if (genre === "news") {
    baseData["NTV"] += 10;
    baseData["Kantipur TV"] += 5;
  } else if (genre === "entertainment") {
    baseData["Image Channel"] += 10;
    baseData["Avenues TV"] += 5;
  }

  // Adjust values based on time period (e.g., for daily, weekly, monthly)
  if (timePeriod === "weekly") {
    for (let key in baseData) {
      baseData[key] = baseData[key] * 7; // Multiply for a weekly scale
    }
  } else if (timePeriod === "monthly") {
    for (let key in baseData) {
      baseData[key] = baseData[key] * 30; // Multiply for a monthly scale
    }
  }

  return Object.keys(baseData).map((channel) => ({
    name: channel,
    grp: baseData[channel],
  }));
};

const AvgGrpBarChart = () => {
  const [genre, setGenre] = useState("news");
  const [timePeriod, setTimePeriod] = useState("daily");

  // Generate the bar chart data based on the selected genre and time period
  const [avgGrpData, setAvgGrpData] = useState(
    generateAvgGrpData(genre, timePeriod)
  );

  // Handle genre and time period changes
  const handleGenreChange = (value) => {
    setGenre(value);
    setAvgGrpData(generateAvgGrpData(value, timePeriod));
  };

  const handleTimePeriodChange = (value) => {
    setTimePeriod(value);
    setAvgGrpData(generateAvgGrpData(genre, value));
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Average GRP for Channels</CardTitle>
        <CardDescription>
          View the average GRP for 4 TV channels based on selected genre and
          time period.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm font-medium mb-2">Select Genre</p>
            <Select value={genre} onValueChange={handleGenreChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="news">News</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
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

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={avgGrpData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="grp" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default AvgGrpBarChart;
