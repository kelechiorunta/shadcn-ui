import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';


const coupons = [
{ code: 'SUMMER2024', discount: '20%', expiry: '2024-12-31', status: 'Active' },
{ code: 'WELCOME10', discount: '10%', expiry: '2024-11-30', status: 'Expired' },
];

export default function CouponDetails() {
 return (
 <div className="p-4 bg-white shadow rounded-lg mt-4 ml-8">
    <h2 className="text-lg font-semibold text-gray-700">Coupon Details</h2>
    <Table>
    <TableHeader>
    <TableRow>
    <TableHead>Code</TableHead>
    <TableHead>Discount</TableHead>
    <TableHead>Expiry Date</TableHead>
    <TableHead>Status</TableHead>
    </TableRow>
    </TableHeader>
    <TableBody>
    {coupons.map((coupon, index) => (
    <TableRow key={index}>
    <TableCell>{coupon.code}</TableCell>
    <TableCell>{coupon.discount}</TableCell>
    <TableCell>{coupon.expiry}</TableCell>
    <TableCell>
        <span className={`px-2 py-1 rounded-lg text-white ${coupon.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}>
    {coupon.status}
        </span>
    </TableCell>
    </TableRow>
    ))}
    </TableBody>
    </Table>
  </div>
 );
}
