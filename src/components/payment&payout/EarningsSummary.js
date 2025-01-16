// File: /components/payment&payout/EarningsSummary.js
import React from "react";

const EarningsSummary = () => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-6">Earnings Payment</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="border p-6">
          <h3 className="text-sm text-gray-500 mb-2">Total Earnings</h3>
          <p className="text-2xl font-bold">$12,000</p>
          <p className="text-sm text-gray-500 mt-2">
            Your Total Earnings From All Completed Campaigns.
          </p>
        </div>
        <div className="border p-6">
          <h3 className="text-sm text-gray-500 mb-2">Pending Payout</h3>
          <p className="text-2xl font-bold">$500.00</p>
          <p className="text-sm text-gray-500 mt-2">
            Earnings for completed campaigns, pending payout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarningsSummary;