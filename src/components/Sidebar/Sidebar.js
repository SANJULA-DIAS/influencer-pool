// components/sidebar/sidebar.js

import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Droplets } from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { path: ["/dashboard"], icon: "🏠", text: "Dashboard" },
    { path: ["/pricing-and-availability", "/pricingavailability"], icon: "💰", text: "Pricing & Availability" },
    { path: ["/campaigns"], icon: "📊", text: "Campaigns" },
    { path: ["/payments&payouts"], icon: "💳", text: "Payment & Payouts" },
    { path: ["/settings"], icon: "⚙️", text: "Settings" },
  ];

  return (
    <div className="min-h-screen w-72 bg-pink-50 shadow-md border-r border-pink-100 p-6">
      <Link to="/" className="flex items-center gap-2 mb-8">
        <Droplets className="h-8 w-8 text-[#E84C3D]" />
        <span className="font-bold text-xl">
          <span className="text-[#E84C3D]">INFLUENCER</span>
          <span className="text-gray-800">POOL</span>
        </span>
      </Link>
      <nav className="space-y-6">
        {navItems.map((item) => (
          <NavLink
            key={item.text}
            to={item.path[0]}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                item.path.some((p) => window.location.pathname === p)
                  ? "bg-red-100 text-red-500 font-medium"
                  : "text-gray-600 hover:bg-pink-100"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-md">{item.text}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
