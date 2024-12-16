import React from 'react';
import { SearchBar } from './SearchBar';
import { HeaderIcons } from './HeaderIcons';
import { UserAvatar } from './UserAvatar';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-gray-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <SearchBar />
        </div>
        <div className="flex items-center gap-4">
          <HeaderIcons />
          <UserAvatar />
        </div>
      </div>
    </header>
  );
};