import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#E84C3D] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Droplets className="h-8 w-8 text-white" />
              <span className="font-bold text-xl text-white">INFLUENCERPOOL</span>
            </Link>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/aboutus" className="hover:text-gray-200">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-gray-200">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Business Owners</h3>
            <ul className="space-y-2">
              <li><Link to="/for-influencers" className="hover:text-gray-200">For Influencers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p>Any Question? Our Support Team is available!</p>
            <p className="mt-2">support@influencerpool.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm">
          <p>© {new Date().getFullYear()} InfluencerPool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;