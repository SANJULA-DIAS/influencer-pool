import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'; // Import Sidebar
import { Header } from '../../components/Header/Header'; // Import Header
import { ActiveCampaigns } from '../../components/Campaigns/ActiveCampaigns';
import { PendingApprovals } from '../../components/Campaigns/PendingApprovals';
import { CompletedCampaigns } from '../../components/Campaigns/CompletedCampaigns';
import { CampaignStats } from '../../components/Campaigns/CampaignStats';

const Campaigns = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Sidebar */}
          <div className="col-span-2">
            <Sidebar />
          </div>
          
          {/* Campaigns Content */}
          <div className="col-span-7">
            <ActiveCampaigns />
            <PendingApprovals />
            <CompletedCampaigns />
          </div>
          
          {/* Campaign Stats */}
          <div className="col-span-3">
            <CampaignStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
