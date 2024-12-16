import React from 'react';

export const SocialMedia = ({ socialMedia }) => (
  <div className="bg-white rounded-lg p-6 mt-6 shadow-sm">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-lg font-medium">Social Media</h2>
      <button className="text-[#FF6B6B]">Add New</button>
    </div>
    <div className="space-y-6">
      {socialMedia.map((platform, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={platform.icon} alt={platform.platform} className="w-10 h-10" />
            <div>
              <p className="font-medium">{platform.handle}</p>
              <p className="text-sm text-gray-500">{platform.followers}</p>
            </div>
          </div>
          <button className="text-red-500 text-sm">Remove</button>
        </div>
      ))}
    </div>
  </div>
);