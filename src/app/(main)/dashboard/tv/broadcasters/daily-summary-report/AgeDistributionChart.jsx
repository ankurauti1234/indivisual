"use client";

import React, { useState, useEffect } from "react";
import { ResponsiveContainer, Tooltip } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function AgeGroupShareChart({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const processedData = data.reduce((acc, item) => {
      if (!acc[item.channel_name]) {
        acc[item.channel_name] = { name: item.channel_name };
      }
      acc[item.channel_name][item.age_group] = item.ViewerCount;
      return acc;
    }, {});

    setChartData(Object.values(processedData));
  }, [data]);

  return (
    <ChartContainer
      config={{
        "3-18": { label: "3-18", color: "hsl(var(--chart-1))" },
        "18-30": { label: "18-30", color: "hsl(var(--chart-2))" },
        "30-65": { label: "30-65", color: "hsl(var(--chart-3))" },
        "65+": { label: "65+", color: "hsl(var(--chart-4))" },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <Heatmap
          data={chartData}
          dataKey="name"
          xAxis={["3-18", "18-30", "30-65", "65+"]}
          yAxis={chartData.map((item) => item.name)}
        />
      </ResponsiveContainer>
    </ChartContainer>
  );
}

function Heatmap({ data, dataKey, xAxis, yAxis }) {
  const maxValue = Math.max(
    ...data.flatMap((item) =>
      Object.values(item).filter((v) => typeof v === "number")
    )
  );

  return (
    <div
      className="grid h-full w-full"
      style={{ gridTemplateColumns: `auto repeat(${xAxis.length}, 1fr)` }}
    >
      <div></div>
      {xAxis.map((x) => (
        <div key={x} className="text-xs font-medium text-center">
          {x}
        </div>
      ))}
      {yAxis.map((y) => (
        <React.Fragment key={y}>
          <div className="text-xs font-medium text-right pr-2">{y}</div>
          {xAxis.map((x) => {
            const value = data.find((item) => item[dataKey] === y)?.[x] || 0;
            const intensity = value / maxValue;
            return (
              <div
                key={`${y}-${x}`}
                className="relative"
                style={{
                  backgroundColor: `rgba(var(--chart-${
                    xAxis.indexOf(x) + 1
                  }), ${intensity})`,
                }}
              >
                <ChartTooltip content={<ChartTooltipContent />} />
                <span className="sr-only">{`${y} ${x}: ${value}`}</span>
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
}
