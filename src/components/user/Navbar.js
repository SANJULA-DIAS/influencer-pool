import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets } from 'lucide-react';

const Navbar = () => {
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
          <Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
          <Link to="/aboutus" className="text-gray-600 hover:text-gray-900">About Us</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
          <Link 
            to="/signup" 
            className="bg-[#E84C3D] text-white px-4 py-2 rounded-lg hover:bg-[#d4443b] transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;