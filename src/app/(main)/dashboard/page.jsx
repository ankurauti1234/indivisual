import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  GlobeIcon,
  RadioIcon,
  TvIcon,
  BarChart3Icon,
  UsersIcon,
  BuildingIcon,
} from "lucide-react";

const DashboardPage = () => {
  const statsCards = [
    {
      title: "Total Broadcasters",
      value: "250+",
      description: "Active TV & Radio channels",
      icon: <BuildingIcon className="w-4 h-4" />,
      className: "md:col-span-1 row-span-1",
    },
    {
      title: "Active Brands",
      value: "1,500+",
      description: "Across all platforms",
      icon: <GlobeIcon className="w-4 h-4" />,
      className: "md:col-span-1 row-span-1",
    },
    {
      title: "Monthly Campaigns",
      value: "3,000+",
      description: "Media campaigns tracked",
      icon: <BarChart3Icon className="w-4 h-4" />,
      className: "md:col-span-1 row-span-1",
    },
  ];

  const platformCards = [
    {
      title: "Television Analytics",
      description:
        "Comprehensive insights for TV broadcasting and advertising performance",
      icon: <TvIcon className="w-6 h-6" />,
      links: [
        { href: "/dashboard/tv/advertisers", label: "TV Advertisers" },
        { href: "/dashboard/tv/brands", label: "TV Brands" },
        { href: "/dashboard/tv/broadcasters", label: "TV Broadcasters" },
      ],
      className: "md:col-span-2 row-span-2",
    },
    {
      title: "Radio Analytics",
      description:
        "In-depth analysis of radio advertising and broadcasting metrics",
      icon: <RadioIcon className="w-6 h-6" />,
      links: [
        { href: "/dashboard/radio/advertisers", label: "Radio Advertisers" },
        { href: "/dashboard/radio/brands", label: "Radio Brands" },
        { href: "/dashboard/radio/broadcasters", label: "Radio Broadcasters" },
      ],
      className: "md:col-span-2 row-span-2",
    },
  ];

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Media Analytics Dashboard
        </h1>
        <p className="text-muted-foreground">
          Your comprehensive hub for broadcast media insights and analytics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Stats Cards */}
        {statsCards.map((card) => (
          <Card key={card.title} className={card.className}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              {card.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}

        {/* Quick Access Card */}
        <Card className="md:col-span-1 row-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quick Access</CardTitle>
            <UsersIcon className="w-4 h-4" />
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              Access your most recent reports and analytics
            </div>
          </CardContent>
        </Card>

        {/* Platform Cards */}
        {platformCards.map((platform) => (
          <Card key={platform.title} className={platform.className}>
            <CardHeader>
              <div className="flex items-center gap-2">
                {platform.icon}
                <CardTitle>{platform.title}</CardTitle>
              </div>
              <CardDescription>{platform.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                {platform.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-muted-foreground">→</span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Features Overview Card */}
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Platform Features</CardTitle>
            <CardDescription>
              Comprehensive tools and features available across our platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Broadcasters</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Real-time audience metrics</li>
                  <li>• Content performance analysis</li>
                  <li>• Competitive insights</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Advertisers</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Campaign performance tracking</li>
                  <li>• ROI measurement tools</li>
                  <li>• Audience targeting insights</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Brands</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Brand visibility metrics</li>
                  <li>• Market impact analysis</li>
                  <li>• Competitor benchmarking</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
