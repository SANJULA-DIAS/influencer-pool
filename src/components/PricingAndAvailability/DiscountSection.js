import React from "react";

const DiscountSection = ({ discountOptions }) => {
  return (
    <div className="space-y-3">
      {discountOptions.map((discount) => (
        <label key={discount.label} className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200">
          <input
            type="checkbox"
            checked={discount.checked}
            className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
          />
          <span className="text-gray-700">{discount.label}</span>
        </label>
      ))}
    </div>
  );
};

export default DiscountSection;