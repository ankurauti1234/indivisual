"use client";

import React, { useState, useEffect } from "react";
import { ResponsiveContainer } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function RegionDistributionChart({ data }) {
  const [chartData, setChartData] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const processedData = data.reduce((acc, item) => {
      if (!acc[item.channel_name]) {
        acc[item.channel_name] = { name: item.channel_name };
      }
      acc[item.channel_name][item.region] = item.RegionCount;
      return acc;
    }, {});

    const uniqueRegions = [...new Set(data.map((item) => item.region))];

    setChartData(Object.values(processedData));
    setRegions(uniqueRegions);
  }, [data]);

  return (
    <ChartContainer
      config={regions.reduce((acc, region, index) => {
        acc[region] = {
          label: region,
          color: `hsl(var(--chart-${(index % 12) + 1}))`,
        };
        return acc;
      }, {})}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <Heatmap
          data={chartData}
          dataKey="name"
          xAxis={regions}
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
                    (xAxis.indexOf(x) % 12) + 1
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
