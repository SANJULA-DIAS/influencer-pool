import React from 'react';

export const CampaignCard = ({ campaign }) => {
  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'instagram':
        return '📸';
      case 'youtube':
        return '🎥';
      default:
        return '📱';
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span>{getPlatformIcon(campaign.platform)}</span>
            <h3 className="font-medium">{campaign.brand}</h3>
          </div>
          <p className="text-sm text-gray-600">{campaign.title}</p>
        </div>
        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
          {campaign.status}
        </span>
      </div>
      <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
        <div>
          <p>Duration: {campaign.duration.start} - {campaign.duration.end}</p>
          <p>Task: {campaign.task}</p>
        </div>
        <button className="text-[#FF6B6B]">View Details</button>
      </div>
    </div>
  );
};