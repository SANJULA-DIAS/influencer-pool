import React from 'react';
import { CampaignCard } from './CampaignCard';

export const ActiveCampaigns = () => {
  const activeCampaigns = [
    {
      brand: "Sunny Apparel",
      platform: "instagram",
      title: "Summer Vibes Fashion Collection",
      duration: { start: "Aug 1", end: "Aug 31" },
      task: "Story post, Photo post",
      status: "In Progress",
    },
    {
      brand: "TechSavvy",
      platform: "youtube",
      title: "SmartWatch Series X Review",
      duration: { start: "Aug 15", end: "Aug 31" },
      task: "Review Video, Unboxing Video",
      status: "Submitted for Review",
    },
    // Add more campaigns as needed
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Active Campaigns</h2>
        <button className="text-[#FF6B6B] flex items-center gap-2">
          Create a new campaign
          <span className="text-2xl">+</span>
        </button>
      </div>
      <div className="grid gap-4">
        {activeCampaigns.map((campaign, index) => (
          <CampaignCard key={index} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};