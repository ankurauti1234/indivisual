import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  YAxis,
  LabelList,

} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ChartCard from "@/components/card/charts-card";
import { BarChart2, TrendingDown, TrendingUp } from "lucide-react";

const generateData = (period) => {
  const baseData = {
    weekly: [
      {
        channel: "Kantipur TV",
        fmcg: 45,
        banking: 35,
        telecom: 30,
        automobile: 25,
        education: 20,
        healthcare: 15,
      },
      {
        channel: "Himalaya TV",
        fmcg: 35,
        banking: 30,
        telecom: 25,
        automobile: 20,
        education: 15,
        healthcare: 10,
      },
      {
        channel: "NTV",
        fmcg: 40,
        banking: 32,
        telecom: 28,
        automobile: 22,
        education: 18,
        healthcare: 12,
      },
      {
        channel: "Avenues TV",
        fmcg: 30,
        banking: 25,
        telecom: 20,
        automobile: 18,
        education: 12,
        healthcare: 8,
      },
    ],
    monthly: [
      {
        channel: "Kantipur TV",
        fmcg: 180,
        banking: 140,
        telecom: 120,
        automobile: 100,
        education: 80,
        healthcare: 60,
      },
      {
        channel: "Himalaya TV",
        fmcg: 140,
        banking: 120,
        telecom: 100,
        automobile: 80,
        education: 60,
        healthcare: 40,
      },
      {
        channel: "NTV",
        fmcg: 160,
        banking: 128,
        telecom: 112,
        automobile: 88,
        education: 72,
        healthcare: 48,
      },
      {
        channel: "Avenues TV",
        fmcg: 120,
        banking: 100,
        telecom: 80,
        automobile: 72,
        education: 48,
        healthcare: 32,
      },
    ],
    quarterly: [
      {
        channel: "Kantipur TV",
        fmcg: 540,
        banking: 420,
        telecom: 360,
        automobile: 300,
        education: 240,
        healthcare: 180,
      },
      {
        channel: "Himalaya TV",
        fmcg: 420,
        banking: 360,
        telecom: 300,
        automobile: 240,
        education: 180,
        healthcare: 120,
      },
      {
        channel: "NTV",
        fmcg: 480,
        banking: 384,
        telecom: 336,
        automobile: 264,
        education: 216,
        healthcare: 144,
      },
      {
        channel: "Avenues TV",
        fmcg: 360,
        banking: 300,
        telecom: 240,
        automobile: 216,
        education: 144,
        healthcare: 96,
      },
    ],
    yearly: [
      {
        channel: "Kantipur TV",
        fmcg: 2160,
        banking: 1680,
        telecom: 1440,
        automobile: 1200,
        education: 960,
        healthcare: 720,
      },
      {
        channel: "Himalaya TV",
        fmcg: 1680,
        banking: 1440,
        telecom: 1200,
        automobile: 960,
        education: 720,
        healthcare: 480,
      },
      {
        channel: "NTV",
        fmcg: 1920,
        banking: 1536,
        telecom: 1344,
        automobile: 1056,
        education: 864,
        healthcare: 576,
      },
      {
        channel: "Avenues TV",
        fmcg: 1440,
        banking: 1200,
        telecom: 960,
        automobile: 864,
        education: 576,
        healthcare: 384,
      },
    ],
  };
  return baseData[period];
};

const chartConfig = {
  fmcg: {
    label: "FMCG",
    color: "hsl(var(--chart-1))",
  },
  banking: {
    label: "Banking & Finance",
    color: "hsl(var(--chart-2))",
  },
  telecom: {
    label: "Telecom",
    color: "hsl(var(--chart-3))",
  },
  automobile: {
    label: "Automobile",
    color: "hsl(var(--chart-4))",
  },
  education: {
    label: "Education",
    color: "hsl(var(--chart-5))",
  },
  healthcare: {
    label: "Healthcare",
    color: "#4aa516",
  },
};

export default function NepalTVSpendChart() {
  const [timePeriod, setTimePeriod] = useState("monthly");
  const data = generateData(timePeriod);

  // Calculate total spend and trend
  const calculateTotal = (item) =>
    Object.entries(item)
      .filter(([key]) => key !== "channel")
      .reduce((sum, [_, value]) => sum + value, 0);

  const totalSpend = data.reduce((sum, item) => sum + calculateTotal(item), 0);

  return (
    <ChartCard
      icon={<BarChart2 className="w-6 h-6" />}
      title="TV Advertising Spend by Industry"
      description="Distribution across major Nepali channels"
      action={
        <div className="flex items-center justify-end">
          <Select value={timePeriod} onValueChange={setTimePeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      }
      chart={
        <ChartContainer config={chartConfig}>
          <BarChart height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#121212" />
            <XAxis
              dataKey="channel"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="fmcg"
              stackId="a"
              fill="var(--color-fmcg)"
              radius={[0,0,0,0]}
            > <LabelList
                            position="center"
                            offset={12}
                            className="fill-foreground/75"
                            fontSize={16}
                            fontWeight={600}
                            formatter={(value) => `${value}k`}
                          /></Bar>
            <Bar
              dataKey="banking"
              stackId="a"
              fill="var(--color-banking)"
              radius={[0,0,0,0]}
            > <LabelList
                position="center"
                offset={12}
                className="fill-foreground/75"
                fontSize={16}
                fontWeight={600}
                formatter={(value) => `${value}k`}
              /></Bar>
            <Bar
              dataKey="telecom"
              stackId="a"
              fill="var(--color-telecom)"
              radius={[0,0,0,0]}
            > <LabelList
                position="center"
                offset={12}
                className="fill-foreground/75"
                fontSize={16}
                fontWeight={600}
                formatter={(value) => `${value}k`}
              /></Bar>
            <Bar
              dataKey="automobile"
              stackId="a"
              fill="var(--color-automobile)"
              radius={[0,0,0,0]}
            > <LabelList
                position="center"
                offset={12}
                className="fill-foreground/75"
                fontSize={16}
                fontWeight={600}
                formatter={(value) => `${value}k`}
              /></Bar>
            <Bar
              dataKey="education"
              stackId="a"
              fill="var(--color-education)"
              radius={[0,0,0,0]}
            > <LabelList
                position="center"
                offset={12}
                className="fill-foreground/75"
                fontSize={16}
                fontWeight={600}
                formatter={(value) => `${value}k`}
              /></Bar>
            <Bar
              dataKey="healthcare"
              stackId="a"
              fill="var(--color-healthcare)"
              radius={[16,16,0,0]}
            > <LabelList
                position="center"
                offset={12}
                className="fill-foreground/75"
                fontSize={16}
                fontWeight={600}
                formatter={(value) => `${value}k`}
              /></Bar>
          </BarChart>
        </ChartContainer>
      }
      footer={
        <div className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Total ad spend: NPR {totalSpend.toLocaleString()}{" "}
            {timePeriod === "yearly" ? "Million" : "Thousand"}
          </div>
          <div className="leading-none text-muted-foreground">
            Showing industry-wise breakdown across channels
          </div>
        </div>
      }
    />
  );
};

