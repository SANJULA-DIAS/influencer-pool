// src/components/user/LoggedInNavbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplets } from 'lucide-react';

const LoggedInNavbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-[#E84C3D]' : 'text-gray-600';
  };

  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Droplets className="h-8 w-8 text-[#E84C3D]" />
          <span className="font-bold text-xl">
            <span className="text-[#E84C3D]">INFLUENCER</span>
            <span className="text-gray-800">POOL</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/discover" className={`${isActive('/discover')} hover:text-[#E84C3D] transition-colors`}>
            Discover
          </Link>
          <Link to="/influencerDashboard" className={`${isActive('/dashboard')} hover:text-[#E84C3D] transition-colors`}>
            Dashboard
          </Link>
          <Link to="/all  contracts" className={`${isActive('/contracts')} hover:text-[#E84C3D] transition-colors`}>
            Contracts
          </Link>
          <Link to="/messages" className={`${isActive('/messages')} hover:text-[#E84C3D] transition-colors`}>
            Messages
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/logout" className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LoggedInNavbar;
