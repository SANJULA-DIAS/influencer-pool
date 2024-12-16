import React from 'react';

export const CampaignStats = () => {
  const stats = {
    engagementRate: "42.7%",
    totalReach: "46,000",
    metrics: [
      { week: 1, reach: 10000 },
      { week: 2, reach: 20000 },
      { week: 3, reach: 35000 },
      { week: 4, reach: 46000 },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm text-gray-500 mb-1">Engagement Rate</h3>
          <p className="text-2xl font-semibold">{stats.engagementRate}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500 mb-1">Total Reach</h3>
          <p className="text-2xl font-semibold">{stats.totalReach}</p>
        </div>
        <div className="h-40 bg-gray-50 rounded-lg p-4">
          {/* Add chart visualization here */}
          <div className="text-center text-sm text-gray-500">
            Reach Growth Chart
          </div>
        </div>
      </div>
    </div>
  );
};