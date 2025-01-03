import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import NavLink and useLocation

const Sidebar = () => {
  const location = useLocation(); // Get the current location
  
  const navItems = [
    { path: '/dashboard', icon: '🏠', text: 'Dashboard' },
    { path: '/pricing', icon: '💰', text: 'Pricing & Availability' },
    { path: '/campaigns', icon: '📊', text: 'Campaigns' },
    { path: '/payments', icon: '💳', text: 'Payment & Payouts' },
    { path: '/settings', icon: '⚙️', text: 'Settings' },
  ];

  return (
    <nav className="space-y-4">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md ${
              isActive ? 'bg-gray-200 text-gray-900 font-medium' : 'text-gray-500'
            }`
          }
        >
          <span className="w-5 h-5">{item.icon}</span>
          {item.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default Sidebar;
