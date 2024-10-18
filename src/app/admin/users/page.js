import ServiceProviderApplications from '@/components/ServiceManagement/ServiceProviderApplications'
import React from 'react'
import { cn } from '@/lib/utils'

export default function page() {
  return (
    <div className='min-h-screen flex flex-col px-4 w-full'>
      <h1 className={cn('font-semibold text-2xl px-6 py-4')}>Service Provider Applications</h1>
      <ServiceProviderApplications/>
    </div>
  )
}
