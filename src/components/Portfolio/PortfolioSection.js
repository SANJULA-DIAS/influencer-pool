import React, { useState } from 'react';
import { PortfolioItem } from './PortfolioItem';
import AddProjectModal from './AddProjectModal';
import img1 from './assets/img1.jpg'; // Example image import

export const PortfolioSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const portfolio = [
    { name: 'Project 1', image: img1 },
    { name: 'Project 2', image: img1 },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
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
          <button
            onClick={openModal}
            className="text-gray-400 hover:text-[#FF6B6B] flex flex-col items-center gap-2"
          >
            <span className="text-2xl">+</span>
            <span>Add new project</span>
          </button>
        </div>
      </div>
      {isModalOpen && <AddProjectModal closeModal={closeModal} />}
    </div>
  );
};

export default PortfolioSection;
