import React from "react";

const LanguageSelection = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Language</h2>
      <select className="border rounded-lg p-3 w-full">
        <option>Select Language</option>
        <option>English</option>
        <option>Spanish</option>
        <option>French</option>
      </select>
    </div>
  );
};

export default LanguageSelection;
