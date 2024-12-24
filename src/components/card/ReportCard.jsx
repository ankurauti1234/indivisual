import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const ReportCard = ({ id, image, title, lastUpdated, page, subpage, slug }) => {
  return (
    <Link
      href={`/dashboard/${page}/${subpage}/${slug}`}
      className="block no-underline group"
    >
      <Card className="relative overflow-hidden backdrop-blur-xl shadow-xl   hover:bg-background/80 transition-all duration-300 rounded-lg border-2 border-border/50 hover:shadow-primary/35 hover:ring-4 hover:z-[2]">
        <div className="flex flex-col h-[280px]">
          <div className="h-3/4 relative">
            <div
              className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-500  shadow-[inset_-12px_-8px_40px_#46464620]"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </div>

          <div className="flex-1 px-8 py-4">
            <h3 className="text-lg font-semibold text-foreground/90">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground/75 mt-1">
              {lastUpdated}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ReportCard;
