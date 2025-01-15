import React from "react";

const CustomPricing = ({ customPricing }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Custom Pricing Options</h3>
      <div className="space-y-4">
        {customPricing.map((option, index) => (
          <div key={index} className="flex items-center justify-between">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomPricing;