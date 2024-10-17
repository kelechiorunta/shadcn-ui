import React from 'react'
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-full h-full -mt-7" aria-label="Sidebar">
      <div className="min-h-screen px-3 overflow-y-auto bg-gray-800">
        <ul className="space-y-2">
          <li>
            <Link href="/admin/dashboard">
              <button className="text-white w-full text-left block p-2 hover:bg-gray-600 rounded">Dashboard</button>
            </Link>
          </li>
          <li>
            <Link href="/admin/users">
              <button className="text-white w-full text-left block p-2 hover:bg-gray-600 rounded">User Management</button>
            </Link>
          </li>
          <li>
            <Link href="/admin/transactions">
              <button className="text-white w-full text-left  block p-2 hover:bg-gray-600 rounded">Transaction Management</button>
            </Link>
          </li>
          <li>
            <Link href="/admin/analytics">
              <button className="text-white w-full text-left block p-2 hover:bg-gray-600 rounded">Analytics</button>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}