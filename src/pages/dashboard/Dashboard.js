import React from 'react';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { ProfileSection } from '../../components/Profile/ProfileSection';
import { PortfolioSection } from '../../components/Portfolio/PortfolioSection';
import { NicheTags } from '../../components/RightSidebar/NicheTags';
import { Stats } from '../../components/RightSidebar/Stats';
import { SocialMedia } from '../../components/RightSidebar/SocialMedia';
import { MOCK_DATA } from '../../data/mockData';

const Dashboard = () => {
  const { userProfile, nicheTags, portfolio, socialMedia } = MOCK_DATA;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-7">
            <ProfileSection userProfile={userProfile} />
            <PortfolioSection portfolio={portfolio} />
          </div>
          <div className="col-span-3">
            <NicheTags tags={nicheTags} />
            <Stats stats={userProfile.stats} />
            <SocialMedia socialMedia={socialMedia} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;