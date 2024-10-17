import InteractiveOverview from '@/components/Dashboard/InteractiveOverview'
import React from 'react'

export default function page() {
  return (
    // null
    <div className='min-h-screen flex flex-col px-4'>
        <h1 className='font-semibold text-2xl px-6 py-4'>Dashboard</h1>
        <InteractiveOverview/>
    </div>
  )
}
