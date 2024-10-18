import React from 'react'
import Widget from "../Shared/Widget";
import { cn } from '@/lib/utils';

export default function InteractiveOverview() {
     const overviewData = [
     { title: 'Total Customers', value: '1,230' },
     { title: 'Active Service Providers', value: '84' },
     { title: 'Pending Requests', value: '15' },
     { title: 'Completed Transactions', value: '1,542' },
     { title: 'Current Revenue', value: '$45,320' },
    ];
    
    return (
     <div className={cn("p-2 gap-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5")}> 
        {overviewData.map((data, index) => (
            <Widget key={index} title={data.title} value={data.value} />
        ))}
     </div>
    );
    }
    