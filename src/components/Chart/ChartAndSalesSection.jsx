import React from 'react'
import Widget from '../Shared/Widget'
import { MyChart } from './MyCharts'
import { cn } from '@/lib/utils'
import SalesSection from '../Sales/SalesSection'

export default function ChartAndSalesSection() {
  
    const userSalesData = [
      {name: "Olivia Martin",
       email: "oliviamartin@gmail.com",
       SaleAmount: '$140' 
      },
      {name: "Jackson Lee",
        email: "oliviamartin@gmail.com",
        SaleAmount: '$1400' 
       },
       {name: "Isabella Nguyen",
        email: "isabellanguyen@gmail.com",
        SaleAmount: '$190' 
       },
       {name: "William Kim",
        email: "isabellanguyen@gmail.com",
        SaleAmount: '$190' 
       },
       {name: "Davies Christian",
        email: "isabellanguyen@gmail.com",
        SaleAmount: '$190' 
       },
    ]
  return (
    <section className='p-2 grid grid-cols-1 w-full gap-4 transition-all lg:grid-cols-2'>
        {/* <Widget> */}
        <div className={cn('bg-white p-4 rounded-md shadow-md')}>
            <p className={cn('text-xl pb-4')}>Overview</p>
            <MyChart/>
        </div>

        <div className={cn('bg-white p-4 rounded-md shadow-md')}>
            <h1 className={cn('text-xl pb-4')}>Sales</h1>
            <ul className='max-h-[250px] overflow-scroll'>
              {userSalesData.map((user, index) => (
                <SalesSection
                  key={index}
                  name={user.name} 
                  email={user.email}
                  SaleAmount={user.SaleAmount}/>
              ))}
            </ul>
        </div>
            
        {/* </Widget> */}
    </section>
  )
}
