// src/components/PricingAndAvailability/Breadcrumb.js

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Breadcrumb = ({ currentPage }) => {
  return (
    <nav className="breadcrumb mb-6">
      <Link
        to="/pricing-and-availability"
        className={`font-medium hover:underline ${
          currentPage === "Pricing" ? "text-red-500" : "text-gray-500"
        }`}
      >
        Pricing
      </Link>
      <span className="text-gray-500 mx-2">/</span>
      {currentPage === "Availability" ? (
        <span className="text-red-500 font-medium">Availability</span>
      ) : (
        <Link to="/pricingavailability" className="text-gray-500 hover:underline">
          Availability
        </Link>
      )}
    </nav>
  );
};

export default Breadcrumb;
