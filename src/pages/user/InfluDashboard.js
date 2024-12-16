import React from 'react';
import { Bell, Mail, Moon, MoreHorizontal, Info, MessageCircle, Heart } from 'lucide-react';
import LoggedInNavbar from "../../components/user/Navbar LoggedIn";
import Footer from "../../components/user/Footer"; // Adjust the path as needed

// Define HIRINGS and TALENTS here or import them if they are from another file
const HIRINGS = [
  {
    name: "Shanudrie",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    role: "Brand UGC Creator, Brand Ambassador",
    status: "In Progress",
    progress: ["Contract Started", "In Progress", "Submitted/Review", "Finished"]
  },
  {
    name: "MRJ Inspire",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    role: "Vehicle UGC Creator",
    status: "In Progress",
    progress: ["Contract Started", "In Progress", "Submitted/Review", "Finished"]
  }
];

const TALENTS = [
  {
    name: "Ashen",
    location: "Colombo",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150",
    role: "Business UGC Creator, Business Promoter",
    rating: 4.9,
    posts: 135,
    tags: ["UGC Creator", "Business Promoter", "Content Creator", "13+"]
  },
  {
    name: "Denethi",
    location: "Ja-Ela",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    role: "Small Business UGC Creator, Business Promoter, Content Creator, Dancer",
    rating: 4.7,
    posts: 67,
    tags: ["UGC Creator", "Business UGC", "Content Creator", "19+"]
  }
];

// Reusable components
const ProgressDot = ({ completed }) => (
  <div className={`w-3 h-3 rounded-full ${completed ? 'bg-red-500' : 'bg-gray-200'}`} />
);

const Tag = ({ children }) => (
  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
    {children}
  </span>
);

function InfluDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LoggedInNavbar  /> {/* Add Navbar */}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

        {/* Your Hirings Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">Your Hirings</h2>
              <Info className="w-5 h-5 ml-2 text-gray-400" />
            </div>
            <button className="text-red-500 hover:text-red-600 font-medium">
              View All Contracts
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIRINGS.map((hiring, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <img src={hiring.image} alt={hiring.name} className="w-12 h-12 rounded-full" />
                    <div className="ml-3">
                      <h3 className="font-semibold">{hiring.name}</h3>
                      <p className="text-sm text-gray-500">{hiring.role}</p>
                    </div>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>
                <div className="space-y-3">
                  {hiring.progress.map((step, i) => (
                    <div key={i} className="flex items-center">
                      <ProgressDot completed={i <= 1} />
                      <span className={`ml-2 text-sm ${i <= 1 ? 'text-gray-900' : 'text-gray-400'}`}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Personalized Talent Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">Personalized Talent</h2>
              <Info className="w-5 h-5 ml-2 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TALENTS.map((talent, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <img src={talent.image} alt={talent.name} className="w-12 h-12 rounded-full" />
                    <div className="ml-3">
                      <div className="flex items-center">
                        <h3 className="font-semibold">{talent.name}</h3>
                        <span className="ml-2 text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full">
                          Featured
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{talent.location}</p>
                    </div>
                  </div>
                  <Heart className="w-5 h-5 text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
                </div>
                <p className="text-sm text-gray-600 mb-4">{talent.role}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 font-medium">{talent.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400">📝</span>
                    <span className="ml-1 font-medium">{talent.posts}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {talent.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium">
                    View Profile
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                    <MessageCircle className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default InfluDashboard;
