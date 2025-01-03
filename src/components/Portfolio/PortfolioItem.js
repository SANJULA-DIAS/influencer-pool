import React from 'react';

// Example image imports from the assets folder
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';

export const PortfolioItem = ({ item }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="aspect-w-16 aspect-h-9 bg-gray-100">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200'; // fallback image
        }}
      />
    </div>
    <div className="p-4">
      <h3 className="font-medium text-gray-900">{item.name}</h3>
    </div>
  </div>
);

// Portfolio items with the imported images
const portfolioItems = [
  {
    name: 'Project 1',
    image: img1, // Local image path
  },
  {
    name: 'Project 2',
    image: img2, // Another local image path
  },
];

const Portfolio = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {portfolioItems.map((item) => (
      <PortfolioItem key={item.name} item={item} />
    ))}
  </div>
);

export default Portfolio;
