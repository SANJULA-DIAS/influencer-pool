import React, { useState } from "react";
import { CampaignCard } from "./CampaignCard";

export const ActiveCampaigns = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    {
      brand: "FitLife Supplements",
      platform: "instagram",
      title: "30-Day Fitness Challenge",
      duration: { start: "Aug 16", end: "Sep 31" },
      task: "Instagram Stories, TikTok Posts",
      status: "Awaiting Content Submission",
    },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Active Campaigns</h2>
        <button
          onClick={handleOpenModal}
          className="text-[#FF6B6B] flex items-center gap-2"
        >
          Create a new campaign
          <span className="text-2xl">+</span>
        </button>
      </div>
      <div className="grid gap-4">
        {activeCampaigns.map((campaign, index) => (
          <CampaignCard key={index} campaign={campaign} />
        ))}
      </div>

      {/* Modal for Create Campaign */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
            <h2 className="text-2xl font-bold mb-4">Create Your Campaign</h2>
            <p className="text-gray-600 mb-6">
              Set your preferences and start collaborating with brands.
            </p>
            {/* Campaign Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Brand or Business Name"
                  className="border rounded-lg p-3"
                />
                <input
                  type="text"
                  placeholder="Select Brand"
                  className="border rounded-lg p-3"
                />
                <input
                  type="text"
                  placeholder="Campaign Objectives"
                  className="border rounded-lg p-3"
                />
                <select
                  className="border rounded-lg p-3"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Platform
                  </option>
                  <option value="instagram">Instagram</option>
                  <option value="youtube">YouTube</option>
                  <option value="tiktok">TikTok</option>
                  <option value="facebook">Facebook</option>
                  <option value="linkedin">LinkedIn</option>
                </select>
                <input
                  type="text"
                  placeholder="Content Type"
                  className="border rounded-lg p-3"
                />
                <input
                  type="text"
                  placeholder="Set Your Price"
                  className="border rounded-lg p-3"
                />
              </div>
              <div className="flex items-center gap-4">
                <label>Flexible Pricing</label>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="datetime-local"
                  placeholder="Campaign Timeline"
                  className="border rounded-lg p-3"
                />
                <input
                  type="text"
                  placeholder="Hashtags & Mentions"
                  className="border rounded-lg p-3"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="text-gray-600 px-4 py-2 rounded-lg border border-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Save Campaign
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
