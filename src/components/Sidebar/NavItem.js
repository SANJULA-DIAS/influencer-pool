import React from 'react';

export const NavItem = ({ icon, text, active, className = "" }) => (
  <a
    href="#"
    className={`
      flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
      ${active 
        ? "text-[#FF6B6B] font-medium bg-red-50" 
        : "text-gray-500 hover:bg-gray-50"
      }
      ${className}
    `}
  >
    <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
    <span>{text}</span>
  </a>
);