import React from 'react';
import LoggedInNavbar from '../../components/user/Navbar LoggedIn';
import Footer from '../../components/user/Footer';

function CampaignCard({ 
  title, 
  startDate, 
  totalInfluencers, 
  budget, 
  totalSpent 
}: {
  title: string;
  startDate: string;
  totalInfluencers: number;
  budget: string;
  totalSpent: string;
}) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Started Date</span>
          <span className="font-medium">{startDate}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Influencers</span>
          <span className="font-medium">{totalInfluencers}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Budget</span>
          <span className="font-medium">{budget}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Spent</span>
          <span className="font-medium">{totalSpent}</span>
        </div>
      </div>
      
      <button className="w-full mt-6 bg-[#E84C3D] text-white py-2 rounded-md hover:bg-[#d44434] transition-colors">
        More
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <LoggedInNavbar />

      {/* Main Content */}
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-12">Manage Campaigns</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <CampaignCard
            title="TikTok Campaign"
            startDate="June 1, 2024, 10:21 AM"
            totalInfluencers={6}
            budget="1,600,000 LKR"
            totalSpent="1,187,120 LKR"
          />
          
          <CampaignCard
            title="Facebook Campaign"
            startDate="June 1, 2024, 10:21 AM"
            totalInfluencers={10}
            budget="2,000,000 LKR"
            totalSpent="945,120 LKR"
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
