import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChartCard from "@/components/card/charts-card";
import { PieChartIcon } from "lucide-react";

const channelColors = {
  "Avenues TV": "#D32F2F", // Dark Red
  "AP1 TV": "#FF9800", // Dark Orange
  "Himalaya TV": "#1976D2", // Dark Blue
  "Image TV": "#0288D1", // Deep Sky Blue
  "Kantipur TV": "#388E3C", // Dark Green
  "Nepal TV": "#7B1FA2", // Dark Purple
  "NTV News TV": "#F57C00", // Dark Amber
  "News 24 TV": "#0288D1", // Deep Blue
  "Prime TV": "#D81B60", // Dark Pink
};


const channelData = [
  {
    channel_name: "Avenues TV",
    share_percentage: 10,
    fill: channelColors["Avenues TV"],
  },
  {
    channel_name: "AP1 TV",
    share_percentage: 12,
    fill: channelColors["AP1 TV"],
  },
  {
    channel_name: "Himalaya TV",
    share_percentage: 14,
    fill: channelColors["Himalaya TV"],
  },
  {
    channel_name: "Image TV",
    share_percentage: 8,
    fill: channelColors["Image TV"],
  },
  {
    channel_name: "Kantipur TV",
    share_percentage: 20,
    fill: channelColors["Kantipur TV"],
  },
  {
    channel_name: "Nepal TV",
    share_percentage: 18,
    fill: channelColors["Nepal TV"],
  },
  {
    channel_name: "NTV News TV",
    share_percentage: 10,
    fill: channelColors["NTV News TV"],
  },
  {
    channel_name: "News 24 TV",
    share_percentage: 5,
    fill: channelColors["News 24 TV"],
  },
  {
    channel_name: "Prime TV",
    share_percentage: 3,
    fill: channelColors["Prime TV"],
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-2 border rounded shadow">
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-sm">{`Share: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const Legend = ({ data }) => (
  <div className="grid grid-cols-5 gap-1 mt-2 px-2 text-xs">
    {data.map((entry) => (
      <div key={entry.channel_name} className="flex items-center gap-1">
        <div
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: entry.fill }}
        />
        <span className="truncate">{entry.channel_name}</span>
      </div>
    ))}
  </div>
);

export default function ChannelSharePieChart() {
    return (
      <ChartCard
        icon={<PieChartIcon className="w-6 h-6" />}
        title="TV Channel Share Distribution"
        description="Market Share Percentage"
        chart={
          <PieChart width={600} height={400} >
            <Pie
              data={channelData}
              dataKey="share_percentage"
              nameKey="channel_name"
              cx="50%"
              cy="50%"
              outerRadius={160}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            />
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        }
        footer={<Legend data={channelData} />}
      />
    );
}
