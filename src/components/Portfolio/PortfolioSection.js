import React from 'react';
import { PortfolioItem } from './PortfolioItem';

export const PortfolioSection = ({ portfolio }) => (
  <div className="bg-white rounded-lg p-6 mt-8">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-medium text-[#FF6B6B]">My Portfolio</h2>
      <button className="text-gray-500 hover:text-[#FF6B6B]">Show All</button>
    </div>
    <div className="grid grid-cols-3 gap-6">
      {portfolio.map((item, index) => (
        <PortfolioItem key={index} item={item} />
      ))}
      <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 flex items-center justify-center">
        <button className="text-gray-400 hover:text-[#FF6B6B] flex flex-col items-center gap-2">
          <span className="text-2xl">+</span>
          <span>Add new project</span>
        </button>
      </div>
    </div>
  </div>
);