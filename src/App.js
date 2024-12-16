import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes

import LandingPage from "./pages/landing/Landing";
import PricingPage from "./pages/user/Pricing";
import AboutUsPage from "./pages/user/Aboutus";
import SignupPage from "./pages/user/Signup";
import LoginPage from "./pages/user/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Campaigns from "./pages/dashboard/Campaigns";

function App() {
  return (
      <Routes> {/* Wrap Route components inside Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campaigns" element={<Campaigns />} />

      </Routes>
  );
}

export default App;
