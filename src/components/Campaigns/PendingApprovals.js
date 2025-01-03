import React from 'react';

export const PendingApprovals = () => {
  const pendingCampaigns = [
    {
      company: "NutriSnacks Co.",
      campaign: "Healthy Snacks Promotion",
      description: "Promote NutriSnacks' new line of protein bars via Instagram",
      deliverables: "Instagram Stories, YouTube Video",
      deadline: "Sep 20",
      budget: "2,500 LKR"
    },
    {
      company: "GreenWear Fashion",
      campaign: "Eco-Friendly Clothing Campaign",
      description: "Promote their eco-friendly clothing line via Instagram",
      deliverables: "3 Instagram posts, 1 TikTok video",
      deadline: "Oct 1",
      budget: "18,000 LKR"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm mb-8">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-xl font-semibold">Pending Approvals</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Company & Campaign</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Description</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Deliverables</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Deadline</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Budget</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {pendingCampaigns.map((campaign, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">{campaign.company}</div>
                  <div className="text-sm text-gray-500">{campaign.campaign}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{campaign.description}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{campaign.deliverables}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{campaign.deadline}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{campaign.budget}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="text-green-600 hover:text-green-700 text-sm">Accept</button>
                  <button className="text-red-600 hover:text-red-700 text-sm">Reject</button>
                  <button className="text-gray-600 hover:text-gray-700 text-sm">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};