import React from 'react';
import facebookIcon from './assets/facebook.png'; // Replace with actual icon paths
import instagramIcon from './assets/instagram.png';
import twitterIcon from './assets/twitter.png';
import youtubeIcon from './assets/youtube.png';

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
            <img 
              src={
                platform.platform === 'Facebook'
                  ? facebookIcon
                  : platform.platform === 'Instagram'
                  ? instagramIcon
                  : platform.platform === 'Twitter'
                  ? twitterIcon
                  : platform.platform === 'YouTube'
                  ? youtubeIcon
                  : platform.icon
              }
              alt={platform.platform}
              className="w-10 h-10"
            />
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
