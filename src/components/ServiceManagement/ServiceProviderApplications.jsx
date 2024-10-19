'use client'

import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '../ui/button';  

const defaultApplications = [
  { name: 'John Doe', email: 'john@example.com', status: 'Pending' },
  { name: 'Jane Smith', email: 'jane@example.com', status: 'Pending' },
];

export default function ServiceProviderApplications() {
  // Use useState to manage dynamic data on the client side
  const [applications, setApplications] = useState([]);

  // Ensure that the component is consistent during the initial render
  useEffect(() => {
    // Set applications to default data on client-side load to avoid mismatches
    setApplications(defaultApplications);
  }, []);

  const handleApprove = (index) => {
    const updatedApplications = [...applications];
    updatedApplications[index].status = 'Approved';
    setApplications(updatedApplications);
    console.log(`Service provider ${index} approved`);
  };

  const handleReject = (index) => {
    const updatedApplications = [...applications];
    updatedApplications[index].status = 'Rejected';
    setApplications(updatedApplications);
    console.log(`Service provider ${index} rejected`);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg mt-4">
      {/* <h2 className="text-2xl px-4 py-4 font-semibold text-gray-700">Service Provider Applications</h2> */}
      <Table className=" border-collapse text-ellipsis first-line:w-full table-fixed overflow-hidden">
        <TableHeader className="hidden md:table-header-group">
          <TableRow>
            <TableHead className="px-2 py-[0.625em] text-center uppercase text-[0.85em] tracking-wider">Name</TableHead>
            <TableHead className="px-2 py-[0.625em] text-center uppercase text-[0.85em] tracking-wider">Email</TableHead>
            <TableHead className="px-2 py-[0.625em] text-center uppercase text-[0.85em] tracking-wider">Status</TableHead>
            <TableHead className="px-2 py-[0.625em] text-center uppercase text-[0.85em] tracking-wider">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.length > 0 ? (
            applications.map((application, index) => (
              <TableRow 
              className=" block md:table-row mb-[0.625em] md:mb-0"
              key={index}>
                <TableCell className="text-ellipsis block md:table-cell px-2 py-[0.625em] text-left md:text-center border-b last:border-b-0 md:border-0 before:content-[attr(data-label)] before:font-bold before:uppercase before:float-left before:md:hidden">{application.name}</TableCell>
                <TableCell className="text-ellipsis block md:table-cell px-2 py-[0.625em] text-left md:text-center border-b last:border-b-0 md:border-0 before:content-[attr(data-label)] before:font-bold before:uppercase before:float-left before:md:hidden">{application.email}</TableCell>
                <TableCell className="text-ellipsis block md:table-cell px-2 py-[0.625em] text-left md:text-center border-b last:border-b-0 md:border-0 before:content-[attr(data-label)] before:font-bold before:uppercase before:float-left before:md:hidden">{application.status}</TableCell>
                <TableCell className="text-ellipsis block md:table-cell px-2 py-[0.625em] text-left md:text-center border-b last:border-b-0 md:border-0 before:content-[attr(data-label)] before:font-bold before:uppercase before:float-left before:md:hidden">
                  <Button onClick={() => handleApprove(index)} className="mr-2 max-lg:mb-2">
                    Approve
                  </Button>
                  <Button onClick={() => handleReject(index)} variant="destructive">
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="4">Loading...</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

