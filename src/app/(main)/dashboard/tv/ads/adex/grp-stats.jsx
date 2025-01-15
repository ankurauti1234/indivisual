import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Award, Users } from "lucide-react";

const GRPStats = () => {
  // Sample data calculation functions
  const calculateTopSector = () => {
    const sectorData = {
      FMCG: 150,
      Telecommunications: 125,
      "Financial Services": 108,
      "Media & Entertainment": 87,
      "Home Improvement & Decor": 75,
    };
    return {
      name: "FMCG",
      value: "150 GRPs",
      change: "+12.5%",
    };
  };

  const calculateEfficientCategory = () => {
    return {
      name: "Mobile Services",
      value: "₹850/GRP",
      change: "-15%",
    };
  };

  const calculateTopAdvertiser = () => {
    return {
      name: "TechCorp Inc.",
      value: "₹45.2M",
      change: "+8.3%",
    };
  };

  const stats = [
    {
      title: "Top Sector by GRP",
      metric: calculateTopSector(),
      icon: TrendingUp,
      description: "Based on total GRP delivery",
    },
    {
      title: "Most Cost-Efficient Category",
      metric: calculateEfficientCategory(),
      icon: Award,
      description: "Lowest cost per GRP",
    },
    {
      title: "Highest Spending Advertiser",
      metric: calculateTopAdvertiser(),
      icon: Users,
      description: "By total media investment",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="hover:shadow-lg transition-shadow duration-200"
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold">{stat.metric.name}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl text-muted-foreground">
                  {stat.metric.value}
                </span>
                <span
                  className={`text-sm font-medium ${
                    stat.metric.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.metric.change}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GRPStats;
