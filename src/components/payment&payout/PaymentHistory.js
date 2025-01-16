// File: /components/payment&payout/PaymentHistory.js
import React from "react";

const PaymentHistory = () => {
  const payments = [
    { brand: "LunaAura", campaign: "Summer Collection", earned: "$1,500", status: "Paid", date: "2024-08-15" },
    { brand: "Nova Skincare", campaign: "New Product Launch", earned: "$2,100", status: "Paid", date: "2024-07-20" },
    { brand: "Urban Threads", campaign: "Fall Fashion Week", earned: "$1,800", status: "Pending", date: "N/A" },
    { brand: "Glow Beauty", campaign: "Glow Skin Campaign", earned: "$1,200", status: "Pending", date: "N/A" },
  ];

  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Payment History</h2>
      <div className="mb-6 flex justify-between items-center">
        <select className="border p-2">
          <option>Date Range</option>
          <option>Last Month</option>
          <option>Last 3 Months</option>
          <option>Last Year</option>
        </select>
        <input
          type="text"
          placeholder="Search By Campaign Name"
          className="border p-2"
        />
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">Brand Name</th>
            <th className="border-b p-2">Campaign Name</th>
            <th className="border-b p-2">Amount Earned</th>
            <th className="border-b p-2">Payment Status</th>
            <th className="border-b p-2">Date Paid</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-2">{payment.brand}</td>
              <td className="p-2">{payment.campaign}</td>
              <td className="p-2">{payment.earned}</td>
              <td className={`p-2 ${payment.status === "Paid" ? "text-green-500" : "text-yellow-500"}`}>
                {payment.status}
              </td>
              <td className="p-2">{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
