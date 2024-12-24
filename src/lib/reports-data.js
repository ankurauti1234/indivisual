export const reports = [
  {
    id: 1,
    image: "/images/analytics.png",
    title: "Daily Summary",
    lastUpdated: "April 15, 2024",
    page: "tv",
    subpage: "broadcasters",
    slug: "daily-summary-report",
  },
  {
    id: 2,
    image: "/images/analytics.png",
    title: "Top 50 Channels Last 1 Year",
    lastUpdated: "March 31, 2024",
    page: "tv",
    subpage: "broadcasters",
    slug: "top50-channels-annual",
  },
  {
    id: 3,
    image: "/images/analytics.png",
    title: "Top 50 Programs Last 1 Year",
    lastUpdated: "April 10, 2024",
    page: "tv",
    subpage: "broadcasters",
    slug: "top50-programs-annual",
  },
  {
    id: 4,
    image: "/images/analytics.png",
    title: "Advertising Revenue Analysis",
    lastUpdated: "April 18, 2024",
    page: "tv",
    subpage: "broadcasters",
    slug: "advertising-revenue-analysis",
  },
  {
    id: 5,
    image: "/images/analytics.png",
    title: "Viewer Demographics Insights",
    lastUpdated: "April 20, 2024",
    page: "tv",
    subpage: "broadcasters",
    slug: "viewer-demographics-insights",
  },
  {
    id: 6,
    image: "/images/analytics.png",
    title: "Regional Performance Metrics",
    lastUpdated: "April 25, 2024",
    page: "tv",
    subpage: "broadcasters",
    slug: "regional-performance-metrics",
  },
  {
    id: 7,
    image: "/images/analytics.png",
    title: "Content Engagement Trends",
    lastUpdated: "April 30, 2024",
    page: "tv",
    subpage: "broadcasters",
    slug: "content-engagement-trends",
  },
  {
    id: 8,
    image: "/images/analytics.png",
    title: "Prime-Time Slot Analysis",
    lastUpdated: "May 1, 2024",
    page: "tv",
    subpage: "broadcasters",
    slug: "prime-time-slot-analysis",
  },
  {
    id: 9,
    image: "/images/analytics.png",
    title: "Weekly Audience Growth",
    lastUpdated: "May 5, 2024",
    page: "tv",
    subpage: "broadcasters",
    slug: "weekly-audience-growth",
  },
  {
    id: 10,
    image: "/images/analytics.png",
    title: "Competitive Benchmarking Report",
    lastUpdated: "May 10, 2024",
    page: "tv",
    subpage: "broadcasters",
    slug: "competitive-benchmarking-report",
  },
];

export const getReportBySlug = (slug) => {
  return reports.find((report) => report.slug === slug);
};
