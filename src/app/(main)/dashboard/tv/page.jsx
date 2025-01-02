import React from "react";
import Link from "next/link";
import {
  Tv,
  Target,
  Building,
  Activity,
  BarChart2,
  Clock,
  Users,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const FeatureCard = ({ icon: Icon, title, description, href, metrics }) => (
  <Link href={href}>
    <Card className="h-full hover:border-primary/50 transition-colors duration-200">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-muted">
            <Icon className="w-5 h-5 text-foreground/70" />
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-foreground/30" />
              <span className="text-sm text-muted-foreground">{metric}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </Link>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <Card className="p-4">
    <div className="flex items-center gap-3">
      <Icon className="w-5 h-5 text-muted-foreground" />
      <div>
        <div className="text-xl font-semibold">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  </Card>
);

const TelevisionPage = () => {
  const stats = [
    { icon: Users, value: "2.5M+", label: "Daily Viewers" },
    { icon: BarChart2, value: "50+", label: "Active Channels" },
    { icon: Activity, value: "98%", label: "Uptime" },
    { icon: Clock, value: "24/7", label: "Monitoring" },
  ];

  const features = [
    {
      icon: Building,
      title: "TV Broadcasters",
      description: "Access channel performance metrics and audience insights",
      href: "/dashboard/tv/broadcasters",
      metrics: ["Audience Share", "Peak Hours", "Content Performance"],
    },
    {
      icon: Target,
      title: "TV Advertisers",
      description: "Track campaign ROI and engagement analytics",
      href: "/dashboard/tv/ads",
      metrics: ["Campaign Metrics", "Audience Reach", "ROI Analysis"],
    },
    {
      icon: Tv,
      title: "TV Brands",
      description: "Monitor brand visibility and audience demographics",
      href: "/dashboard/tv/brands",
      metrics: ["Brand Mentions", "Market Share", "Competitor Analysis"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">Television Analytics</h1>
          <p className="text-muted-foreground">
            Comprehensive analytics platform for broadcasters, advertisers, and
            brands
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TelevisionPage;
