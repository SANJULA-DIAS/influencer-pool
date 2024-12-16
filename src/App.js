import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes

import LandingPage from "./pages/landing/Landing";
import PricingPage from "./pages/user/Pricing";
import AboutUsPage from "./pages/user/Aboutus"; // Import About Us page
import SignupPage from "./pages/user/Signup"; // Import Signup page
import LoginPage from "./pages/user/Login"; // Import Login page
import DiscoverPage from "./pages/user/Discover"; // Corrected route to DiscoverPage
import FeaturesPage from "./pages/user/features";
import ContactPage from "./pages/user/contact";
import Dashboard from "./pages/dashboard/Dashboard";
import Campaigns from "./pages/dashboard/Campaigns";
import InfluencerPage from "./pages/user/InfluencerPage";
import InfluencerDashboard from "./pages/user/InfluDashboard";
import AllContracts from "./pages/user/AllContracts";
import Messages from "./pages/user/Messages";


function App() {
  return (
    <Routes> {/* Wrap all Route components inside Routes */}
      <Route path="/" element={<LandingPage />} /> {/* Home page route */}
      <Route path="/pricing" element={<PricingPage />} /> {/* Pricing page route */}
      <Route path="/aboutus" element={<AboutUsPage />} /> {/* About Us page route */}
      <Route path="/signup" element={<SignupPage />} /> {/* Signup page route */}
      <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
      <Route path="/discover" element={<DiscoverPage />} /> {/* Updated Discover page route */}
      <Route path="/features" element={<FeaturesPage />} /> {/* Login page route */}
      <Route path="/contact" element={<ContactPage />} /> {/* Login page route */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/influencerpage" element={<InfluencerPage />} /> {/* Login page route */}
      <Route path="/influencerDashboard" element={<InfluencerDashboard />} /> {/* Login page route */}
      <Route path="/AllContracts" element={<AllContracts />} /> {/* Login page route */}
      <Route path="/messages" element={<Messages />} /> {/* Login page route */}

      </Routes>
  );
}

export default App;
