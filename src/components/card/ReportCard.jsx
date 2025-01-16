'use client'
import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { FollowerPointerCard } from "../ui/following-pointer";



const ReportCard = ({ image, title, lastUpdated, page, subpage, slug, description }) => {
  return (
    <Link
      href={`/dashboard/${page}/${subpage}/${slug}`}
      className="block no-underline group"
    >
      <Card className="p-0 rounded-[2rem]  shadow-[0px_3px_1px_rgba(178,_135,_253,_0.25),_0_1px_2px_rgba(178,_135,_253,_0.2)] hover:-translate-y-4 hover:shadow-[0px_10px_1px_rgba(178,_135,_253,_0.25),_0_10px_20px_rgba(178,_135,_253,_0.2)] transition-all duration-500 border-2 ">
        <CardContent className="p-0">
          <div className="flex flex-col gap-2">
            <div className=" w-full  rounded-lg flex items-center justify-center p-3">
              <img
                src={image}
                alt={title}
                className="w-full rounded-[1.75rem] h-56 border-2 shadow-inner p-px"
              />
            </div>
            <div className="p-3 space-y-2">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-sm ">{description}</p>
              <div className="flex w-full items-center justify-end">
                <p className="text-xs text-muted-foreground bg-accent/50 p-2 rounded-xl w-fit ">
                  {lastUpdated}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ReportCard;
