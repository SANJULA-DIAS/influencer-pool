import React from 'react';

export const SearchBar = () => (
  <div className="relative">
    <input
      type="search"
      className="w-96 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
      placeholder="Search"
    />
    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>
);