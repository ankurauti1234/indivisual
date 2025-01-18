"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/navigation/sidebar/nav-main";
import { NavSecondary } from "@/components/navigation/sidebar/nav-secondary";
import { NavUser } from "@/components/navigation/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Ankur Auti",
    email: "ankur.auti@inditronics.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Television",
      url: "/dashboard/tv",
      icon: SquareTerminal,
      items: [
        {
          title: "Broadcasters",
          url: "/dashboard/tv/broadcasters",
        },
        {
          title: "Advertisers",
          url: "/dashboard/tv/ads",
        },
        {
          title: "Brands",
          url: "/dashboard/tv/brands",
        },
      ],
    },
    {
      title: "Radio",
      url: "/dashboard/radio",
      icon: Bot,
      items: [
        {
          title: "Broadcasters",
          url: "/dashboard/radio/broadcasters",
        },
        {
          title: "Advertisers",
          url: "/dashboard/radio/ads",
        },
        {
          title: "Brands",
          url: "/dashboard/radio/brands",
        },
      ],
    },
    {
      title: "Custom",
      url: "/dashboard/custom",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/dashboard/custom/general",
        },
        {
          title: "Team",
          url: "/dashboard/custom/team",
        },
        {
          title: "Billing",
          url: "/dashboard/custom/billing",
        },
        {
          title: "Limits",
          url: "/dashboard/custom/limits",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }) {
  const pathname = usePathname();

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="sm"
              asChild
              className="hover:bg-black/0 hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <a href="/dashboard">
                <img src="/assets/indi.png" alt="logo" className="h-6" />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <hr />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} pathname={pathname} />
        <NavSecondary
          items={data.navSecondary}
          pathname={pathname}
          className="mt-auto"
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
