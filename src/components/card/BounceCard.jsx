'use client'

import React from "react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, ArrowRight, BarChart2, TrendingUp, Users } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

const useCardHover = () => {
  const [isHovered, setIsHovered] = React.useState(false)
  return {
    isHovered,
    hoverProps: {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    },
  }
}

const ReportCard = ({ id, image, title, lastUpdated, page, subpage, slug, metrics }) => {
  const { isHovered, hoverProps } = useCardHover()

  return (
    <Link
      href={`/dashboard/${page}/${subpage}/${slug}`}
      className="block no-underline group"
      {...hoverProps}
    >
      <motion.div 
        whileHover={{ scale: 1.03 }} 
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card className="relative overflow-hidden backdrop-blur-xl border border-border/50 hover:border-primary/20 transition-all duration-300 shadow-lg">
          {/* Full-size image container */}
          <div className="h-[400px] relative">
            {/* Background Image with parallax effect */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
              animate={{
                y: isHovered ? -15 : 0,
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />

            {/* Content overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              {/* Top section with badges */}
              <div className="flex justify-between items-start">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Analytics Report
                </Badge>
                <Badge variant="outline" className="bg-background/50">
                  <Clock className="w-3 h-3 mr-1" />
                  {lastUpdated}
                </Badge>
              </div>

              {/* Bottom section with title and metrics */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground/90 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                
                {/* Metrics grid */}
                <div className="grid grid-cols-3 gap-4">
                  {metrics.map((metric, index) => (
                    <div key={index} className="bg-background/30 backdrop-blur-sm p-2 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        {metric.icon}
                        <span className="text-xs font-medium text-muted-foreground">{metric.label}</span>
                      </div>
                      <div className="text-lg font-semibold">{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* View Report button */}
                <motion.div
                  animate={{
                    x: isHovered ? 5 : 0,
                    opacity: isHovered ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 text-primary bg-primary/10 py-2 px-3 rounded-full w-fit"
                >
                  <span className="text-sm font-medium">View Full Report</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </div>

            {/* Hover accent line */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </Card>
      </motion.div>
    </Link>
  )
}

export default ReportCard
