import React from "react";
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook, FaLinkedin, FaPlus } from "react-icons/fa";

const Platforms = ({ activePlatform, setActivePlatform }) => {
  const platforms = [
    { 
      id: 'youtube',
      name: "YouTube", 
      icon: <FaYoutube className="text-red-500" size={24} />,
      pricingOptions: [
        { type: "Dedicated Video", price: "2000 LKR" },
        { type: "In-video Mentions", price: "1000 LKR" },
        { type: "Product Placement", price: "3500 LKR" },
        { type: "Video Review", price: "1500 LKR" }
      ]
    },
    { 
      id: 'instagram',
      name: "Instagram", 
      icon: <FaInstagram className="text-pink-500" size={24} />,
      pricingOptions: [
        { type: "Story", price: "1000 LKR" },
        { type: "Post", price: "1500 LKR" },
        { type: "Reel", price: "2500 LKR" }
      ]
    },
    { 
      id: 'tiktok',
      name: "TikTok", 
      icon: <FaTiktok className="text-black" size={24} />,
      pricingOptions: [
        { type: "Video", price: "2000 LKR" },
        { type: "Duet", price: "1500 LKR" }
      ]
    },
    { 
      id: 'facebook',
      name: "Facebook", 
      icon: <FaFacebook className="text-blue-600" size={24} />,
      pricingOptions: [
        { type: "Post", price: "1000 LKR" },
        { type: "Live Stream", price: "3000 LKR" }
      ]
    },
    { 
      id: 'linkedin',
      name: "LinkedIn", 
      icon: <FaLinkedin className="text-blue-700" size={24} />,
      pricingOptions: [
        { type: "Article", price: "1500 LKR" },
        { type: "Post", price: "1000 LKR" }
      ]
    }
  ];

  return (
    <div className="flex flex-col space-y-3">
      {platforms.map((platform) => (
        <div
          key={platform.id}
          className={`flex items-center p-4 bg-white rounded-lg border ${
            activePlatform === platform.id 
              ? 'border-red-500 shadow-md' 
              : 'border-gray-200 hover:bg-gray-50'
          } cursor-pointer`}
          onClick={() => setActivePlatform(platform.id)}
        >
          <div className="mr-3">{platform.icon}</div>
          <span className="text-gray-700">{platform.name}</span>
        </div>
      ))}
      <div className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 border-dashed hover:bg-gray-50 cursor-pointer">
        <FaPlus className="text-gray-400" size={24} />
      </div>
    </div>
  );
};

export default Platforms;