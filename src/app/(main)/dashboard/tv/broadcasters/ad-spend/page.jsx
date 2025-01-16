'use client'
import React from 'react'
import SectorTreemap from './sectors-treemap'
import GenreAdSpend from './genre-ad-spend'
import CostPerGRP from './cost-per-grp'

const page = () => {
  return (
    <div className='space-y-6'>
      <SectorTreemap />
      <div className='flex flex-row gap-6'>
        <GenreAdSpend />
        <CostPerGRP />
      </div>
    </div>
  );
}

export default page
