import React from 'react';

export const PortfolioItem = ({ item }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="aspect-w-16 aspect-h-9 bg-gray-100">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200';
        }}
      />
    </div>
    <div className="p-4">
      <h3 className="font-medium text-gray-900">{item.name}</h3>
    </div>
  </div>
);