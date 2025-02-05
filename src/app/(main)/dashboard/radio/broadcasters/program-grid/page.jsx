'use client'
import React from 'react'
import EPG from './epg'
import RJDashboard from './rj-dashboard'

const page = () => {
  return (
    <div>
        <RJDashboard/>
        <EPG/>
    </div>
  )
}

export default page