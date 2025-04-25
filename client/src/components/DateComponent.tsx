import React from 'react'

import { useEffect, useState } from 'react';

export default function DateComponent() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000); // Update every second
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const formattedDate = now.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).toUpperCase(); // e.g., "25 APR 2025"

  const formattedTime = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }); // e.g., "12:22 PM"

  return (
    <div className='text-myOrange flex-col font-primary pt-1'>
      <div className='flex justify-center items-center text-lg h-4'>
        {formattedDate}
      </div>
      <div className='flex justify-center items-center text-sm'>
        {formattedTime}
      </div>
    </div>
  );
}
