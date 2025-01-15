import React from "react";

const SocialMediaConnections = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Social Media Connections</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>Instagram</span>
          <span className="text-gray-500">Emilyfernando</span>
        </div>
        <div className="flex justify-between items-center">
          <span>YouTube</span>
          <span className="text-gray-500">Emilyfernando</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Twitter</span>
          <span className="text-gray-500">Emilyfernando</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Facebook</span>
          <span className="text-gray-500">Emilyfernando</span>
        </div>
        <button className="text-[#FF6B6B] font-bold">+ Add More</button>
      </div>
    </div>
  );
};

export default SocialMediaConnections;
