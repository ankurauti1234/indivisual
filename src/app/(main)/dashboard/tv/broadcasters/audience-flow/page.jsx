"use client";

import React from "react";
import ChannelFlowAnalysis from "./channel-gain-loss";
import TVChannelSankeyChart from "./channel-flow-sankey";
import ChannelTimeSpentChart from "./persona-charts";
import PersonaTimeSpentChart from "./channel-persona-chart";
import GrpLineChart from "./break-grp";
import AvgGrpBarChart from "./grp-bar-chart";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import ReportLayout from "@/components/layout/report-layout";

const Page = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <ReportLayout
      title="TV Channel Analytics Dashboard"
      description="Comprehensive analysis of channel performance, viewer behavior, and audience metrics"
      action={
        <div className="flex gap-4">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Select Date Range
          </Button>
          <Button>Export Report</Button>
        </div>
      }
      footer={
        <div className="flex justify-between items-center w-full text-sm text-muted-foreground">
          <div>Last updated: {currentDate}</div>
          <div className="flex gap-4">
            <span>Data source: TV Analytics Platform</span>
            <span>•</span>
            <span>Report ID: TV-ANALYTICS-2025-01</span>
          </div>
        </div>
      }
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Channel Flow Analysis</h2>
          <div className="space-y-6">
            <TVChannelSankeyChart />
            <ChannelFlowAnalysis />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Viewing Time Analysis</h2>
          <div className="space-y-6">
            <ChannelTimeSpentChart />
            <PersonaTimeSpentChart />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">GRP Metrics</h2>
          <div className="space-y-6">
            <GrpLineChart />
            <AvgGrpBarChart />
          </div>
        </section>
      </div>
    </ReportLayout>
  );
};

export default Page;
