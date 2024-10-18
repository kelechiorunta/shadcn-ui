import { cn } from '@/lib/utils'
import React from 'react'

export default function SalesSection({name, email, SaleAmount}) {
  return (
    <div className='flex flex-wrap gap-3 justify-between items-center p-2 '>
        <section className='flex justify-between gap-3 items-center'>
            <div className='w-12 h-12 rounded-full bg-gray-100 p-1'>
                <img 
                width={200}
                height={200}
                src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${name}`}
                alt={'avatar'} //For the avatar, visit dicebear.com
                />
            </div>
            <div className='text-sm'>
                  <p className={cn('text-ellipsis overflow-hidden whitespace-nowrap px-2 w-[120px] text-gray-400 sm:w-auto')}>{name}</p>
                  <p className={cn('text-ellipsis overflow-hidden whitespace-nowrap px-2 w-[120px] text-gray-400 sm:w-auto')}>{email}</p>
            </div>
            
        </section>
        <p className='text-sm'>{SaleAmount}</p>
    </div>
  )
}
