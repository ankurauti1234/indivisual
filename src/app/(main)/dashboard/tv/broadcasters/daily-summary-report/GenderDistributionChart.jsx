'use client'

import React, { useState, useEffect } from "react";

import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

export default function GenderDistributionChart({ data }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const processedData = data.reduce((acc, item) => {
      if (!acc[item.channel_name]) {
        acc[item.channel_name] = { name: item.channel_name, male: 0, female: 0 }
      }
      acc[item.channel_name][item.gender.toLowerCase()] = item.GenderCount
      return acc
    }, {})

    setChartData(Object.values(processedData))
  }, [data])

  return (
    <ChartContainer 
      config={{
        male: { label: 'Male', color: 'hsl(var(--chart-1))' },
        female: { label: 'Female', color: 'hsl(var(--chart-2))' },
      }} 
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} layout="vertical">
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" width={150} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="male" stackId="a" fill="var(--color-male)" />
          <Bar dataKey="female" stackId="a" fill="var(--color-female)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

