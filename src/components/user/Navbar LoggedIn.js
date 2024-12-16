import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplets, Bell, MessageSquare, ChevronDown } from 'lucide-react';

const LoggedInNavbar = () => {
  const location = useLocation();
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

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
          <Link to="/allcontracts" className={`${isActive('/contracts')} hover:text-[#E84C3D] transition-colors`}>
            Contracts
          </Link>
          <Link to="/messages" className={`${isActive('/messages')} hover:text-[#E84C3D] transition-colors`}>
            Messages
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
              className="flex items-center space-x-1 hover:text-[#E84C3D] transition-colors"
            >
              <span>More</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {isMoreDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <Link
                  to="/manage-campaigns"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#E84C3D]"
                >
                  Manage Campaigns
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/Messages" className="relative text-gray-600 hover:text-[#E84C3D] transition-colors">
            <MessageSquare className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-[#E84C3D] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Link>
          
          <button className="relative text-gray-600 hover:text-[#E84C3D] transition-colors">
            <Bell className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-[#E84C3D] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              5
            </span>
          </button>

          <div className="relative">
            <div className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover cursor-pointer"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              />
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="text-gray-600 hover:text-[#E84C3D] transition-colors"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#E84C3D]"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#E84C3D]"
                >
                  Settings
                </Link>
                <hr className="my-2" />
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#E84C3D]"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LoggedInNavbar;