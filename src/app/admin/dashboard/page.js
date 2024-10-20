import ChartAndSalesSection from '@/components/Chart/ChartAndSalesSection'
import { MyChart } from '@/components/Chart/MyCharts'
import InteractiveOverview from '@/components/Dashboard/InteractiveOverview'
import React from 'react'

export default function DashBoardPage() {
  return (
    <div className='min-h-screen flex flex-col px-4 w-full gap-y-2'>
        <h1 className='font-semibold text-2xl px-6 py-4'>Dashboard</h1>
        <div className=''></div><InteractiveOverview/>
        <ChartAndSalesSection/>
    </div>
  )
}
