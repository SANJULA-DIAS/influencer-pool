import React, { useState } from 'react';
import { Search, SlidersHorizontal, Heart, MapPin } from 'lucide-react';
import { influencers } from '../../data/influencers'; // TypeScript file will be resolved correctly
import Navbar from '../../components/user/Navbar'; // Adjusted import for Navbar
import Footer from '../../components/user/Footer'; // Adjusted import for Footer
import LoggedInNavbar from '../../components/user/Navbar LoggedIn';

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
        Send a Message
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

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold">Discover</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Category, Name"
            className="w-64 pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <SlidersHorizontal className="h-5 w-5" />
          <span>Advanced Filtering</span>
        </button>
      </div>
    </div>
  );
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === page
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(influencers.length / itemsPerPage);

  const getCurrentPageInfluencers = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return influencers.slice(startIndex, endIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LoggedInNavbar /> {/* Add the Navbar component here */}
      <main className="container mx-auto px-6 py-8">
        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {getCurrentPageInfluencers().map((influencer, index) => (
            <InfluencerCard key={index} {...influencer} />
          ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </main>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;
