import React from 'react';

export const CampaignCard = ({ campaign }) => {
  const getPlatformIcon = (platform) => {
    const icons = {
      instagram: "📸",
      youtube: "🎥",
      tiktok: "🎵",
      default: "📱"
    };
    return icons[platform] || icons.default;
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span>{getPlatformIcon(campaign.platform)}</span>
            <h3 className="font-medium text-gray-900">{campaign.brand}</h3>
          </div>
          <p className="text-sm text-gray-600">{campaign.title}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          campaign.status === 'In Progress' 
            ? 'bg-blue-50 text-blue-600'
            : 'bg-green-50 text-green-600'
        }`}>
          {campaign.status}
        </span>
      </div>
      
      <div className="space-y-2 text-sm text-gray-500">
        <p>Duration: {campaign.duration.start} - {campaign.duration.end}</p>
        <p>Task: {campaign.task}</p>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button className="text-[#FF6B6B] text-sm hover:text-red-700">
          View Details
        </button>
      </div>
    </div>
  );
};