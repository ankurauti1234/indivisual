'use client'
import React from 'react'
import EPG from './epg'
import RJDashboard from './rj-dashboard'

const page = () => {
  return (
    <div className='space-y-6'>
        <RJDashboard/>
        <EPG/>
    </div>
  )
}

export default page