import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Header } from "../../components/Header/Header";
import AccountInformation from "../../components/Settings/AccountInformation";
import NotificationPreferences from "../../components/Settings/NotificationPreferences";
import SocialMediaConnections from "../../components/Settings/SocialMediaConnections";
import PrivacySettings from "../../components/Settings/PrivacySettings";
import AccountManagement from "../../components/Settings/AccountManagement";
import LanguageSelection from "../../components/Settings/LanguageSelection";

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-pink-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header />

        {/* Settings Content */}
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AccountInformation />
          <NotificationPreferences />
          <SocialMediaConnections />
          <PrivacySettings />
          <AccountManagement />
          <LanguageSelection />
        </div>
      </div>
    </div>
  );
};

export default Settings;
