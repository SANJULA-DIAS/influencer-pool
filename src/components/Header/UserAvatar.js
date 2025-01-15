import React, { useState } from "react";
import profileImage from './img2.jpg'; // Ensure the correct relative path

export const UserAvatar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* User Avatar */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          <img
            src={profileImage} // Corrected path
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-medium">Emily</span>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg z-50 p-4">
          <div className="flex items-center gap-2 mb-4">
            <img
              src={profileImage} // Corrected path
              alt="Emily"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="text-sm font-semibold">Emily Fernando</h4>
              <a
                href="#edit-profile"
                className="text-xs text-blue-500 hover:underline flex items-center"
              >
                Edit profile <span className="ml-1">✎</span>
              </a>
            </div>
          </div>
          <hr className="border-gray-200 mb-4" />
          <ul className="space-y-2 text-sm">
            <li className="hover:bg-gray-100 px-2 py-2 rounded cursor-pointer">
              Profile
            </li>
            <li className="hover:bg-gray-100 px-2 py-2 rounded cursor-pointer">
              Settings
            </li>
            <li className="hover:bg-gray-100 px-2 py-2 rounded cursor-pointer">
              Switch to Explore
            </li>
          </ul>
          <button className="bg-red-100 text-red-500 font-medium text-sm w-full py-2 mt-4 rounded-lg flex justify-center items-center">
            Log out <span className="ml-2">↪</span>
          </button>
        </div>
      )}
    </div>
  );
};
