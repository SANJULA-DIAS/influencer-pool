import React from 'react';
import { ActiveCampaigns } from '../../components/Campaigns/ActiveCampaigns';
import { PendingApprovals } from '../../components/Campaigns/PendingApprovals';
import { CompletedCampaigns } from '../../components/Campaigns/CompletedCampaigns';
import { CampaignStats } from '../../components/Campaigns/CampaignStats';

const Campaigns = () => {
  return (
    <div className="space-y-8">
      <div className="flex gap-8">
        <div className="flex-1">
          <ActiveCampaigns />
        </div>
        <div className="w-80">
          <CampaignStats />
        </div>
      </div>
      <PendingApprovals />
      <CompletedCampaigns />
    </div>
  );
};

export default Campaigns;