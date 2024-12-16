import React from 'react';
import { Heart, MapPin } from 'lucide-react';

interface InfluencerCardProps {
  name: string;
  image: string;
  role: string;
  location: string;
  jobSuccess: string;
  earned: string;
}

const InfluencerCard = ({ name, image, role, location, jobSuccess, earned }: InfluencerCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex space-x-4">
          <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-600 text-sm">{role}</p>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{location}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500 transition-colors">
          <Heart className="h-6 w-6" />
        </button>
      </div>
      <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors mb-4">
        Book a Call
      </button>
      <div className="flex justify-between text-sm">
        <div>
          <span className="text-gray-600">{jobSuccess} Job Success</span>
        </div>
        <div>
          <span className="text-gray-600">{earned} earned</span>
        </div>
      </div>
    </div>
  );
};

export default InfluencerCard;