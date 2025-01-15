import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'; // Import Sidebar
import { Header } from '../../components/Header/Header'; // Import Header
import { ActiveCampaigns } from '../../components/Campaigns/ActiveCampaigns';
import { PendingApprovals } from '../../components/Campaigns/PendingApprovals';
import { CompletedCampaigns } from '../../components/Campaigns/CompletedCampaigns';
import { CampaignStats } from '../../components/Campaigns/CampaignStats';

const Campaigns = () => {
  return (
    <div className="flex min-h-screen bg-pink-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header />

        {/* Campaigns Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Campaigns Details Section */}
            <div className="col-span-8">
              <ActiveCampaigns />
              <PendingApprovals />
              <CompletedCampaigns />
            </div>

            {/* Campaign Stats Section */}
            <div className="col-span-4">
              <CampaignStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
