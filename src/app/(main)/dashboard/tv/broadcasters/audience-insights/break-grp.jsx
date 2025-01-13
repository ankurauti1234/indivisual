import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
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

// Channel data (You can replace this with your actual GRP data)
const channels = [
  { name: "NTV", color: "#EB5A3C" },
  { name: "Kantipur TV", color: "#0D92F4" },
  { name: "Image Channel", color: "#A9C46C" },
  { name: "Avenues TV", color: "#9694FF" },
];

// Example GRP data for 4 breaks
const generateGrpData = () => {
  return [
    {
      break: "B1",
      NTV: Math.floor(Math.random() * 100) + 20,
      "Kantipur TV": Math.floor(Math.random() * 100) + 20,
      "Image Channel": Math.floor(Math.random() * 100) + 20,
      "Avenues TV": Math.floor(Math.random() * 100) + 20,
    },
    {
      break: "B2",
      NTV: Math.floor(Math.random() * 100) + 30,
      "Kantipur TV": Math.floor(Math.random() * 100) + 30,
      "Image Channel": Math.floor(Math.random() * 100) + 30,
      "Avenues TV": Math.floor(Math.random() * 100) + 30,
    },
    {
      break: "B3",
      NTV: Math.floor(Math.random() * 100) + 40,
      "Kantipur TV": Math.floor(Math.random() * 100) + 40,
      "Image Channel": Math.floor(Math.random() * 100) + 40,
      "Avenues TV": Math.floor(Math.random() * 100) + 40,
    },
    {
      break: "B4",
      NTV: Math.floor(Math.random() * 100) + 50,
      "Kantipur TV": Math.floor(Math.random() * 100) + 50,
      "Image Channel": Math.floor(Math.random() * 100) + 50,
      "Avenues TV": Math.floor(Math.random() * 100) + 50,
    },
  ];
};

const GrpLineChart = () => {
  const [grpData, setGrpData] = useState(generateGrpData());
  const [selectedChannel, setSelectedChannel] = useState("NTV");

  // Handle data filtering or updates based on selected channel (if needed)
  const handleChannelChange = (channel) => {
    setSelectedChannel(channel);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>GRP Analysis Across 4 Breaks</CardTitle>
        <CardDescription>
          View GRP of ads across 4 breaks for different TV channels.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Select Channel</p>
          <Select value={selectedChannel} onValueChange={handleChannelChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select channel" />
            </SelectTrigger>
            <SelectContent>
              {channels.map((channel) => (
                <SelectItem key={channel.name} value={channel.name}>
                  {channel.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={grpData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="break" />
            <YAxis />
            <Tooltip />
            <Legend />
            {channels.map((channel) => (
              <Line
                key={channel.name}
                type="monotone"
                dataKey={channel.name}
                stroke={channel.color}
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default GrpLineChart;
