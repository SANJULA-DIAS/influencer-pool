import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const PricingSection = ({ pricingOptions }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-700">Manage pricing</h2>
        <button className="text-red-500 hover:text-red-600">Add new type</button>
      </div>
      <div className="divide-y divide-gray-200">
        {pricingOptions.map((option) => (
          <div key={option.type} className="flex justify-between items-center px-6 py-4">
            <span className="text-gray-700">{option.type}</span>
            <div className="flex items-center space-x-3">
              <span className="text-gray-700">{option.price}</span>
              <button className="text-gray-400 hover:text-gray-600">
                <FaPencilAlt size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;