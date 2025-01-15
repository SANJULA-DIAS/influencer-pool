import React from "react";

const PrivacySettings = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Privacy Settings</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>Private</span>
          <input type="checkbox" className="toggle-checkbox" />
        </div>
        <div className="flex justify-between items-center">
          <span>Data Sharing</span>
          <input type="checkbox" className="toggle-checkbox" />
        </div>
        <div className="flex justify-between items-center">
          <span>Collaboration Requests</span>
          <input type="checkbox" className="toggle-checkbox" />
        </div>
        <button className="text-[#FF6B6B] font-bold">
          Manage Blocked Brands
        </button>
      </div>
    </div>
  );
};

export default PrivacySettings;
