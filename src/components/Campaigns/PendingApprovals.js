import React from 'react';

export const PendingApprovals = () => {
  const pendingCampaigns = [
    {
      company: "NutriSnacks Co.",
      campaign: "Healthy Snacks Promotion",
      description: "Promote NutriSnacks' new line of protein bars via YouTube and Instagram",
      deliverables: "Instagram Stories, YouTube Video",
      deadline: "Sep. 20",
      budget: "2,500 LKR"
    },
    // Add more pending campaigns
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Pending Approvals</h2>
      <div className="bg-white rounded-lg shadow-sm">
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
          <tbody className="divide-y divide-gray-200">
            {pendingCampaigns.map((campaign, index) => (
              <tr key={index}>
                <td className="px-6 py-4">
                  <div className="font-medium">{campaign.company}</div>
                  <div className="text-sm text-gray-500">{campaign.campaign}</div>
                </td>
                <td className="px-6 py-4 text-sm">{campaign.description}</td>
                <td className="px-6 py-4 text-sm">{campaign.deliverables}</td>
                <td className="px-6 py-4 text-sm">{campaign.deadline}</td>
                <td className="px-6 py-4 text-sm">{campaign.budget}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="text-green-600 hover:text-green-700">Accept</button>
                  <button className="text-red-600 hover:text-red-700">Reject</button>
                  <button className="text-gray-600 hover:text-gray-700">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};