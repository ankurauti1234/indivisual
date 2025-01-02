"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const ReportCard = ({ image, title, lastUpdated, page, subpage, slug }) => {
  return (
    <Link
      href={`/dashboard/${page}/${subpage}/${slug}`}
      className="block no-underline group"
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Card className="overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300">
          <div className="relative">
            {/* Image */}
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1.5" />
                  {lastUpdated}
                </div>

                <motion.div
                  className="flex items-center text-primary"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="mr-1">View</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ReportCard;
