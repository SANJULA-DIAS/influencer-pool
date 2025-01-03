import React from 'react';

export const CompletedCampaigns = () => {
  const completedCampaigns = [
    {
      company: "GlowSkin Co.",
      campaign: "Summer Glow Skincare Launch",
      duration: "July 1, 2024 - July 14, 2024",
      payment: {
        amount: "$750",
        date: "July 16, 2024"
      },
      deliverables: [
        { type: "Instagram Story", status: "Completed" },
        { type: "Instagram post", status: "Completed" },
        { type: "YouTube Video", status: "Completed" }
      ],
      feedback: "Exceeded our expectations with engaging content! We saw a 20% increase in product sales during the campaign period."
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Completed Campaigns</h2>
        <button className="text-[#FF6B6B] hover:text-red-700">Show All</button>
      </div>
      <div className="grid gap-4">
        {completedCampaigns.map((campaign, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between mb-4">
              <div>
                <h3 className="font-medium text-gray-900">{campaign.company}</h3>
                <p className="text-sm text-gray-500">{campaign.campaign}</p>
                <p className="text-sm text-gray-500">{campaign.duration}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">Total Paid: {campaign.payment.amount}</p>
                <p className="text-sm text-gray-500">Payment Date: {campaign.payment.date}</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              {campaign.deliverables.map((deliverable, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-gray-600">{deliverable.type}</span>
                  <span className="text-green-500">{deliverable.status}</span>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-medium mb-2 text-gray-900">Brand Feedback</h4>
              <p className="text-sm text-gray-600">{campaign.feedback}</p>
            </div>
            <div className="mt-4 text-right">
              <button className="text-[#FF6B6B] text-sm hover:text-red-700">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};