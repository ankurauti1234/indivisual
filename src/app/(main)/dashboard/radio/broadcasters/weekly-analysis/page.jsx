'use client'
import React from 'react'
import StatCards from './stat-cards'
import RadioAdHeatmap from './ad-count-heatmap'
import TopProgramsChart from './top-program-bar'
import TopSongsChart from './top-songs-bar'
import AdPlacementFrequencyChart from './ad-placement-frequency'
import DetailedAdAnalysis from './derailedAdAnalysis'
import PlatformComparison from './platform-comparison'
import AppleStyleTreemap from './treemap'
import RadioSectorAnalysis from './comperative-bar'
import RJDashboard from './rj-dashboard'

const page = () => {
  return (
    <div className='space-y-6'>
      <StatCards />
      <RJDashboard/>
      <RadioAdHeatmap />
      <RadioSectorAnalysis/>
      <AppleStyleTreemap/>
      <div className='flex gap-4'>
        <TopProgramsChart />
        <TopSongsChart />
      </div>
      <AdPlacementFrequencyChart />
      <DetailedAdAnalysis />
      <PlatformComparison/>
    </div>
  );
}

export default page
