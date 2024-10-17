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
      <h2 className="text-2xl px-4 py-4 font-semibold text-gray-700">Service Provider Applications</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.length > 0 ? (
            applications.map((application, index) => (
              <TableRow key={index}>
                <TableCell>{application.name}</TableCell>
                <TableCell>{application.email}</TableCell>
                <TableCell>{application.status}</TableCell>
                <TableCell>
                  <Button onClick={() => handleApprove(index)} className="mr-2">
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

