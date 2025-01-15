import React from 'react';
import { Header } from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar'; // Updated Sidebar import
import { ProfileSection } from '../../components/Profile/ProfileSection';
import { PortfolioSection } from '../../components/Portfolio/PortfolioSection';
import { NicheTags } from '../../components/RightSidebar/NicheTags';
import { Stats } from '../../components/RightSidebar/Stats';
import { SocialMedia } from '../../components/RightSidebar/SocialMedia';
import { MOCK_DATA } from '../../data/mockData';

const Dashboard = () => {
  const { userProfile, nicheTags, portfolio, socialMedia } = MOCK_DATA;

  return (
    <div className="flex min-h-screen bg-pink-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Section */}
            <div className="col-span-8">
              <ProfileSection userProfile={userProfile} />
              <PortfolioSection portfolio={portfolio} />
            </div>

            {/* Right Section */}
            <div className="col-span-4">
              <NicheTags tags={nicheTags} />
              <Stats stats={userProfile.stats} />
              <SocialMedia socialMedia={socialMedia} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
