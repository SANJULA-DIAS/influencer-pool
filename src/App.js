import React from "react";
import { Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom
import LandingPage from "./pages/landing/Landing";
import PricingPage from "./pages/user/Pricing";
import AboutUsPage from "./pages/user/Aboutus"; // Import About Us page
import SignupPage from "./pages/user/Signup"; // Import Signup page
import LoginPage from "./pages/user/Login"; // Import Login page

function App() {
  return (
    <Routes> {/* Wrap all Route components inside Routes */}
      <Route path="/" element={<LandingPage />} /> {/* Home page route */}
      <Route path="/pricing" element={<PricingPage />} /> {/* Pricing page route */}
      <Route path="/aboutus" element={<AboutUsPage />} /> {/* About Us page route */}
      <Route path="/signup" element={<SignupPage />} /> {/* Signup page route */}
      <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
    </Routes>
  );
}

export default App;
