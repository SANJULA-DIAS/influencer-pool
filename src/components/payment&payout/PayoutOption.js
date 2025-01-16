
// File: /components/payment&payout/PayoutOption.js
import React from "react";

const PayoutOption = () => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-6">Payment Methods</h2>
      <p className="text-sm text-gray-500 mb-4">
        Easily Manage Your Payment Methods Through Our Secure System
      </p>
      <div className="space-y-4">
        <div className="border p-4 flex items-center justify-between">
          <p>PayPal</p>
          <p className="text-gray-500">Emily Fernando</p>
        </div>
        <div className="border p-4 flex items-center justify-between">
          <p>Visa</p>
          <p className="text-gray-500">**** **** **** 4567</p>
        </div>
        <div className="border p-4 flex items-center justify-between">
          <p>Mastercard</p>
          <p className="text-gray-500">**** **** **** 4567</p>
        </div>
        <button className="bg-red-100 text-[#FF6B6B] py-2 px-4 mt-4">
          + Add Another Payment Method
        </button>
      </div>
    </div>
  );
};

export default PayoutOption;
