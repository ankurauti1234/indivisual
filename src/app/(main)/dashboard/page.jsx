import React from "react";
import Link from "next/link";
import {
  Building,
  Target,
  Globe,
  TrendingUp,
  Radio,
  Tv,
  BarChart2,
  Users,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const navigationLinks = [
  {
    section: "Television",
    icon: Tv,
    links: [
      {
        href: "/dashboard/tv/broadcasters",
        label: "TV Broadcasters",
        description: "Channel performance and viewer engagement analytics",
        icon: Building,
        stats: { label: "Active Channels", value: "50+" },
      },
      {
        href: "/dashboard/tv/ads",
        label: "TV Advertising",
        description: "Campaign tracking and ROI measurement tools",
        icon: Target,
        stats: { label: "Active Campaigns", value: "120+" },
      },
      {
        href: "/dashboard/tv/brands",
        label: "TV Brand Analytics",
        description: "Brand visibility and market impact tracking",
        icon: Globe,
        stats: { label: "Tracked Brands", value: "85+" },
      },
    ],
  },
  {
    section: "Radio",
    icon: Radio,
    links: [
      {
        href: "/dashboard/radio/broadcasters",
        label: "Radio Stations",
        description: "Station metrics and listener engagement data",
        icon: Building,
        stats: { label: "Active Stations", value: "120+" },
      },
      {
        href: "/dashboard/radio/ads",
        label: "Radio Advertising",
        description: "Ad performance and audience reach analytics",
        icon: Target,
        stats: { label: "Live Campaigns", value: "95+" },
      },
      {
        href: "/dashboard/radio/brands",
        label: "Radio Brand Analytics",
        description: "Brand presence and market performance tracking",
        icon: Globe,
        stats: { label: "Monitored Brands", value: "65+" },
      },
    ],
  },
];

const QuickStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
    {[
      { icon: Users, label: "Total Daily Audience", value: "4.3M+" },
      { icon: Activity, label: "Platform Uptime", value: "99.9%" },
      { icon: BarChart2, label: "Active Markets", value: "55" },
      { icon: TrendingUp, label: "YoY Growth", value: "24%" },
    ].map((stat, index) => (
      <Card key={index}>
        <CardContent className="pt-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-muted">
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <div className="text-xl font-semibold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const NavigationSection = ({ section, icon: Icon, links }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2 px-2">
      <Icon className="w-5 h-5 text-muted-foreground" />
      <h2 className="text-lg font-semibold">{section}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="block">
          <Card className="h-full hover:border-primary/50 hover:bg-muted/50 transition-all group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-md bg-muted">
                  <link.icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardTitle className="text-lg mt-2">{link.label}</CardTitle>
              <CardDescription>{link.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                <span className="font-medium text-foreground">
                  {link.stats.value}
                </span>{" "}
                <span className="text-muted-foreground">
                  {link.stats.label}
                </span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  </div>
);

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Media Analytics Platform</h1>
          <p className="text-lg text-muted-foreground">
            Access detailed insights across your media channels
          </p>
        </div>

        {/* Quick Stats Overview */}
        <QuickStats />

        {/* Latest Activity Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Platform Updates</CardTitle>
            <CardDescription>Recent changes and improvements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  date: "Today",
                  update: "New advertiser ROI tracking features added",
                },
                {
                  date: "Yesterday",
                  update: "Enhanced audience segmentation tools deployed",
                },
                {
                  date: "2 days ago",
                  update: "Real-time analytics performance improvements",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-20 text-sm text-muted-foreground">
                    {item.date}
                  </div>
                  <div className="flex-1 text-sm">{item.update}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation Sections */}
        <div className="space-y-8">
          {navigationLinks.map((section, index) => (
            <NavigationSection key={index} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
