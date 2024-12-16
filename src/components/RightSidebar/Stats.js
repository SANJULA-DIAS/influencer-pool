import React from 'react';

export const Stats = ({ stats }) => (
  <div className="bg-white rounded-lg p-6 mt-6 shadow-sm">
    <div className="space-y-4">
      <StatItem label="Success Score" value={stats.successScore} />
      <StatItem label="Rating" value={stats.rating} />
      <StatItem label="Response Rate" value={stats.responseRate} />
    </div>
  </div>
);

const StatItem = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium text-gray-900">{value}</span>
  </div>
);