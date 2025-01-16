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
  LabelList,
} from "recharts";
import { LineChart as LineChartIcon } from "lucide-react";
import ChartCard from "@/components/card/charts-card";

// Channel data
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

  const handleChannelChange = (channel) => {
    setSelectedChannel(channel);
  };

  return (
    <ChartCard
      icon={<LineChartIcon className="w-6 h-6" />}
      title="GRP Analysis Across 4 Breaks"
      description="View GRP of ads across 4 breaks for different TV channels."
      chart={
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={grpData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="break"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={8}
            />
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            {channels.map((channel) => (
              <Line
                key={channel.name}
                type="linear"
                dataKey={channel.name}
                stroke={channel.color}
                strokeWidth={4}
                dot={{ r: 6 }}
                activeDot={{ r: 8 }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={14}
                  fontWeight={600}
                />
              </Line>
            ))}
          </LineChart>
        </ResponsiveContainer>
      }
      footer={
        <p className="text-sm text-gray-500">
          Data generated dynamically. Updated based on your selection.
        </p>
      }
    />
  );
};

export default GrpLineChart;
