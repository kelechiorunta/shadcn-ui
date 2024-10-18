    import React from 'react'
    
    export default function Widget({ title, value }) {
      return (
        <div className="p-4 bg-white shadow rounded-lg w-full">
          <h3 className="text-gray-700 text-sm">{title}</h3>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      );
    }
    