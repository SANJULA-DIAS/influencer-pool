// src/components/PricingAvailability/AvailabilityItem.js

import React from 'react';

export const AvailabilityItem = ({ status, time, platform }) => {
  const statusColors = {
    Available: 'bg-green-300',
    Booked: 'bg-yellow-300',
    'Not Available': 'bg-red-300',
    Pending: 'bg-blue-300',
  };

  return (
    <div className={`p-2 rounded ${statusColors[status]} text-sm`}>
      <p><strong>{status}</strong></p>
      <p>{time}</p>
      {platform && <p>Platform: {platform}</p>}
    </div>
  );
};
