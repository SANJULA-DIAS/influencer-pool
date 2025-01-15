import React from "react";

const NotificationPreferences = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Notification Preferences</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>Email Notifications</span>
          <input type="checkbox" className="toggle-checkbox" />
        </div>
        <div className="flex justify-between items-center">
          <span>Collaboration Notifications</span>
          <input type="checkbox" className="toggle-checkbox" />
        </div>
        <div className="flex justify-between items-center">
          <span>In-App Notifications</span>
          <input type="checkbox" className="toggle-checkbox" />
        </div>
      </div>
    </div>
  );
};

export default NotificationPreferences;
