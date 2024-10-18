import React from 'react'
import CouponDetails from '@/components/CouponManagement/CouponDetails';

export default function Coupons() {
 return (
  <div className='min-h-screen flex flex-col px-4 w-full'>
   {/* <Sidebar /> */}
   <main className="flex-grow p-6 bg-gray-100">
    <h1 className="text-2xl font-semibold text-gray-800 px-8 py-4">Coupon Management</h1>
    <CouponDetails />
   </main>
  </div>
 );
}
