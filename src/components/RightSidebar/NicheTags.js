import React from 'react';

export const NicheTags = ({ tags }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-medium">Niche Tags</h2>
      <button className="text-[#FF6B6B]">Add New</button>
    </div>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm hover:bg-gray-100"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);