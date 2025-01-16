// File: /pages/dashboard/PaymentAndPayouts.js

import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Header } from "../../components/Header/Header";
import PaymentHistory from "../../components/payment&payout/PaymentHistory";
import PayoutOption from "../../components/payment&payout/PayoutOption";
import EarningsSummary from "../../components/payment&payout/EarningsSummary";

const PaymentAndPayouts = () => {
  const [activeTab, setActiveTab] = useState("PaymentHistory");

  const renderTabContent = () => {
    switch (activeTab) {
      case "PaymentHistory":
        return <PaymentHistory />;
      case "PayoutOption":
        return <PayoutOption />;
      case "EarningsSummary":
        return <EarningsSummary />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header />

        <div className="px-6 py-4">
          <div className="max-w-full bg-white shadow-sm p-4" style={{ marginLeft: '0', marginRight: '0' }}>
            <div className="flex space-x-6 border-b pb-2 mb-6">
              <button
                onClick={() => setActiveTab("PaymentHistory")}
                className={`pb-2 ${
                  activeTab === "PaymentHistory"
                    ? "text-[#FF6B6B] border-b-2 border-[#FF6B6B]"
                    : "text-gray-500"
                }`}
              >
                Payment History
              </button>
              <button
                onClick={() => setActiveTab("PayoutOption")}
                className={`pb-2 ${
                  activeTab === "PayoutOption"
                    ? "text-[#FF6B6B] border-b-2 border-[#FF6B6B]"
                    : "text-gray-500"
                }`}
              >
                Payout Option
              </button>
              <button
                onClick={() => setActiveTab("EarningsSummary")}
                className={`pb-2 ${
                  activeTab === "EarningsSummary"
                    ? "text-[#FF6B6B] border-b-2 border-[#FF6B6B]"
                    : "text-gray-500"
                }`}
              >
                Earnings Summary
              </button>
            </div>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentAndPayouts;