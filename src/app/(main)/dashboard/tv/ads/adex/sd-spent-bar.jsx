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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

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

// Calculate total ad spend per sector
const sectorData = Object.entries(mockData).map(([sector, data]) => ({
  name: sector,
  adSpend: data.categories.reduce((sum, cat) => sum + cat.adSpend, 0),
  color: data.color,
}));

const SectorBarChart = () => {
  const formatValue = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    return `${(value / 1000).toFixed(0)}K`;
  };

  return (
    <Card className="w-full flex-1">
      <CardHeader>
        <CardTitle>Total Ad Spend by Sector</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sectorData}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
              />
              <YAxis
                tickFormatter={formatValue}
                label={{
                  value: "Ad Spend (NPR)",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle" },
                }}
              />
              <Tooltip
                formatter={(value) => [`NPR ${formatValue(value)}`, "Ad Spend"]}
              />
              <Bar dataKey="adSpend" fill="#4444ff" radius={[4, 4, 0, 0]}>
                {sectorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

const CategoryBarChart = () => {
  const [selectedSector, setSelectedSector] = useState(
    Object.keys(mockData)[0]
  );

  const categoryData = useMemo(() => {
    return mockData[selectedSector].categories.map((cat) => ({
      name: cat.name,
      adSpend: cat.adSpend,
      color: mockData[selectedSector].color,
    }));
  }, [selectedSector]);

  const formatValue = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    return `${(value / 1000).toFixed(0)}K`;
  };

  return (
    <Card className="w-full flex-1">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Ad Spend by Category</CardTitle>
          <Select value={selectedSector} onValueChange={setSelectedSector}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select sector" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(mockData).map((sector) => (
                <SelectItem key={sector} value={sector}>
                  {sector}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={categoryData}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
              />
              <YAxis
                tickFormatter={formatValue}
                label={{
                  value: "Ad Spend (NPR)",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle" },
                }}
              />
              <Tooltip
                formatter={(value) => [`NPR ${formatValue(value)}`, "Ad Spend"]}
              />
              <Bar
                dataKey="adSpend"
                fill={mockData[selectedSector].color}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

const AdSpentBars = () => {
  return (
    <div className="p-4 space-x-8 flex h-full">
      <SectorBarChart />
      <CategoryBarChart />
    </div>
  );
};

export default AdSpentBars;
