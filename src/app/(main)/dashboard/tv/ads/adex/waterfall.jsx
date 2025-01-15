"use client";

import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const mockData = {
  "Home Improvement & Decor": {
    company: "Asian Paints",
    color: "#FF6B6B",
    categories: [
      { name: "Wall Paints", grp: 85, adSpend: 1200000 },
      { name: "Wood Finishes", grp: 72, adSpend: 800000 },
      { name: "Waterproofing Solutions", grp: 65, adSpend: 600000 },
      { name: "Decorative Paints", grp: 78, adSpend: 900000 },
      { name: "Industrial Coatings", grp: 70, adSpend: 750000 },
    ],
  },
  "Food & Beverages": {
    company: "Current/Wai Wai/Pepsi",
    color: "#4ECDC4",
    categories: [
      { name: "Instant Noodles", grp: 92, adSpend: 1500000 },
      { name: "Ready-to-Eat Snacks", grp: 88, adSpend: 1300000 },
      { name: "Soft Drinks", grp: 95, adSpend: 2000000 },
      { name: "Packaged Juices", grp: 82, adSpend: 900000 },
      { name: "Energy Drinks", grp: 78, adSpend: 800000 },
      { name: "Spices", grp: 70, adSpend: 600000 },
      { name: "Frozen Foods", grp: 65, adSpend: 750000 },
    ],
  },
  "Media & Entertainment": {
    company: "DishHome",
    color: "#45B7D1",
    categories: [
      { name: "DTH Services", grp: 75, adSpend: 1100000 },
      { name: "HD Channel Packages", grp: 70, adSpend: 900000 },
      { name: "Internet Services", grp: 80, adSpend: 1300000 },
      { name: "VOD Services", grp: 85, adSpend: 1500000 },
      { name: "IPTV", grp: 72, adSpend: 1000000 },
    ],
  },
  "Financial Services": {
    company: "Global IME/NIC Asia",
    color: "#96CEB4",
    categories: [
      { name: "Retail Banking", grp: 68, adSpend: 2000000 },
      { name: "Corporate Banking", grp: 55, adSpend: 1500000 },
      { name: "Insurance Services", grp: 62, adSpend: 1800000 },
      { name: "Digital Payment Solutions", grp: 75, adSpend: 2200000 },
      { name: "Mobile Banking", grp: 82, adSpend: 2500000 },
      { name: "Wealth Management", grp: 58, adSpend: 1200000 },
      { name: "Microfinance", grp: 72, adSpend: 900000 },
    ],
  },
  Telecommunications: {
    company: "Ncell/NTC",
    color: "#9B59B6",
    categories: [
      { name: "Mobile Network Services", grp: 88, adSpend: 3000000 },
      { name: "Broadband Internet", grp: 82, adSpend: 2500000 },
      { name: "Value-Added Services", grp: 75, adSpend: 1800000 },
      { name: "Enterprise Solutions", grp: 70, adSpend: 1500000 },
      { name: "Prepaid Plans", grp: 85, adSpend: 2800000 },
      { name: "International Roaming", grp: 65, adSpend: 1200000 },
    ],
  },
  "Construction Materials": {
    company: "Shivam Cement",
    color: "#E67E22",
    categories: [
      { name: "OPC Cement", grp: 78, adSpend: 1800000 },
      { name: "PPC Cement", grp: 72, adSpend: 1500000 },
      { name: "Ready-Mix Concrete", grp: 65, adSpend: 1200000 },
      { name: "Specialty Cement", grp: 60, adSpend: 900000 },
    ],
  },
  FMCG: {
    company: "Unilever",
    color: "#2ECC71",
    categories: [
      { name: "Personal Care", grp: 90, adSpend: 2800000 },
      { name: "Home Care", grp: 85, adSpend: 2500000 },
      { name: "Packaged Foods", grp: 82, adSpend: 2200000 },
      { name: "Oral Care", grp: 78, adSpend: 1900000 },
      { name: "Baby Care", grp: 75, adSpend: 1600000 },
    ],
  },
};

const WaterfallChart = () => {
  const { x, y, text, colors } = useMemo(() => {
    const x = [];
    const y = [];
    const text = [];
    const colors = [];

    Object.entries(mockData).forEach(([industry, data]) => {
      data.categories.forEach((category) => {
        x.push(`${industry} - ${category.name}`);
        y.push(category.grp);
        text.push(`GRP: ${category.grp}`);
        colors.push(data.color);
      });
    });

    return { x, y, text, colors };
  }, []);

  const data = [
    {
      type: "waterfall",
      x: x,
      y: y,
      text: text,
      textposition: "outside",
      connector: {
        line: {
          color: "rgb(63, 63, 63)",
        },
      },
      marker: {
        color: colors,
        line: {
          color: "rgb(63, 63, 63)",
          width: 2,
        },
      },
    },
  ];

  const layout = {
    title: "Industry GRP Waterfall Chart",
    xaxis: {
      title: "Industry - Category",
      tickangle: -45,
    },
    yaxis: {
      title: "Gross Rating Points (GRP)",
    },
    autosize: true,
    height: 600,
    margin: {
      l: 50,
      r: 50,
      b: 100,
      t: 100,
      pad: 4,
    },
    showlegend: false,
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Industry GRP Waterfall Chart</CardTitle>
        <CardDescription>
          Gross Rating Points across different industries and categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Plot
          data={data}
          layout={layout}
          config={{ responsive: true }}
          className="w-full h-[600px]"
        />
      </CardContent>
    </Card>
  );
};

export default WaterfallChart;
