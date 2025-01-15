import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Mock data for brands
const brandData = {
  "Wai Wai": {
    color: "#FF6B6B",
    metrics: {
      GRP: 85,
      "Ad Spend": 1200000,
      "Reach per Ad spot": 78,
      "Total No. of Spots": 450,
    },
  },
  Pepsi: {
    color: "#0074D9",
    metrics: {
      GRP: 92,
      "Ad Spend": 1500000,
      "Reach per Ad spot": 85,
      "Total No. of Spots": 580,
    },
  },
  Current: {
    color: "#2ECC40",
    metrics: {
      GRP: 78,
      "Ad Spend": 900000,
      "Reach per Ad spot": 72,
      "Total No. of Spots": 320,
    },
  },
  "CG Foods": {
    color: "#FF851B",
    metrics: {
      GRP: 88,
      "Ad Spend": 1100000,
      "Reach per Ad spot": 82,
      "Total No. of Spots": 420,
    },
  },
};

// Normalize data to 0-100 scale for radar chart
const normalizeValue = (value, metric, allBrands) => {
  const values = Object.values(allBrands).map((brand) => brand.metrics[metric]);
  const max = Math.max(...values);
  return (value / max) * 100;
};

const BrandRadarChart = () => {
  const [selectedBrand, setSelectedBrand] = useState("all");

  const normalizedData = useMemo(() => {
    const metrics = [
      "GRP",
      "Ad Spend",
      "Reach per Ad spot",
      "Total No. of Spots",
    ];

    return metrics.map((metric) => {
      const dataPoint = {
        metric,
        fullMetric: metric,
      };

      Object.entries(brandData).forEach(([brand, data]) => {
        dataPoint[brand] = normalizeValue(
          data.metrics[metric],
          metric,
          brandData
        );
      });

      return dataPoint;
    });
  }, []);

  const getTooltipContent = (metric, value, brand) => {
    const originalValue = brandData[brand].metrics[metric];
    if (metric === "Ad Spend") {
      return `NPR ${(originalValue / 1000).toFixed(0)}K`;
    }
    return originalValue.toFixed(0);
  };

  const visibleBrands = useMemo(() => {
    if (selectedBrand === "all") {
      return Object.keys(brandData);
    }
    return [selectedBrand];
  }, [selectedBrand]);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Brand Performance Comparison</CardTitle>
          <Select value={selectedBrand} onValueChange={setSelectedBrand}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              {Object.keys(brandData).map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={150} data={normalizedData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              {visibleBrands.map((brand) => (
                <Radar
                  key={brand}
                  name={brand}
                  dataKey={brand}
                  stroke={brandData[brand].color}
                  fill={brandData[brand].color}
                  fillOpacity={0.3}
                />
              ))}
              <Tooltip
                formatter={(value, name, props) => [
                  getTooltipContent(props.payload.fullMetric, value, name),
                  name,
                ]}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default BrandRadarChart;
