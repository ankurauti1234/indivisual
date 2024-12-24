'use client'

import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

export default function TopChannelsRatingChart({ data }) {
  const chartData = data.map(item => ({
    name: item.channel_name,
    value: item.Average_Rating,
  }))

  return (
    <ChartContainer 
      config={{
        value: {
          label: 'Average Rating',
          color: 'hsl(var(--chart-2))',
        },
      }} 
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} layout="vertical">
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" width={150} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="var(--color-value)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

