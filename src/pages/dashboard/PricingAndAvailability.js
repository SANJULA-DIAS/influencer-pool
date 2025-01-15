import React, { useState } from "react";
import Breadcrumb from "../../components/PricingAndAvailability/Breadcrumb";
import Platforms from "../../components/PricingAndAvailability/Platforms";
import PricingSection from "../../components/PricingAndAvailability/PricingSection";
import DiscountSection from "../../components/PricingAndAvailability/DiscountSection";
import CustomPricing from "../../components/PricingAndAvailability/CustomPricing";
import ActionButtons from "../../components/PricingAndAvailability/ActionButtons";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Header } from "../../components/Header/Header";

const platformData = {
  youtube: {
    pricingOptions: [
      { type: "Dedicated Video", price: "2000 LKR" },
      { type: "In-video Mentions", price: "1000 LKR" },
      { type: "Product Placement", price: "3500 LKR" },
      { type: "Video Review", price: "1500 LKR" }
    ],
    discountOptions: [
      { label: "Offer a discount", checked: true },
      { label: "Bundle discount", checked: false },
      { label: "10% off for 3", checked: true },
      { label: "Bundle available", checked: false }
    ]
  },
  instagram: {
    pricingOptions: [
      { type: "Story", price: "1000 LKR" },
      { type: "Post", price: "1500 LKR" },
      { type: "Reel", price: "2500 LKR" }
    ],
    discountOptions: [
      { label: "Story package", checked: true },
      { label: "Reel discount", checked: true },
      { label: "15% off for 5", checked: false }
    ]
  },
  tiktok: {
    pricingOptions: [
      { type: "Video", price: "2000 LKR" },
      { type: "Duet", price: "1500 LKR" }
    ],
    discountOptions: [
      { label: "Viral video bonus", checked: true },
      { label: "Weekly package", checked: false }
    ]
  },
  facebook: {
    pricingOptions: [
      { type: "Post", price: "1000 LKR" },
      { type: "Live Stream", price: "3000 LKR" }
    ],
    discountOptions: [
      { label: "Live bundle", checked: true },
      { label: "Post series", checked: false }
    ]
  },
  linkedin: {
    pricingOptions: [
      { type: "Article", price: "1500 LKR" },
      { type: "Post", price: "1000 LKR" }
    ],
    discountOptions: [
      { label: "B2B package", checked: true },
      { label: "Article series", checked: false }
    ]
  }
};

const PricingAndAvailability = () => {
  const [activePlatform, setActivePlatform] = useState("youtube");

  const customPricing = [
    "Apply 10% discount if business buys more than 3 posts",
    "Offer 15% discount for campaigns booked for more than 3 months"
  ];

  
  return (
    <div className="flex min-h-screen bg-pink-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header />
        
        <div className="max-w-7xl mx-auto px-6 py-8">
        <Breadcrumb currentPage="Pricing" />
          <div className="grid grid-cols-12 gap-6">
            {/* Platforms */}
            <div className="col-span-3">
              <Platforms
                activePlatform={activePlatform}
                setActivePlatform={setActivePlatform}
              />
            </div>

            {/* Pricing Section */}
            <div className="col-span-6">
              <PricingSection
                pricingOptions={platformData[activePlatform].pricingOptions}
              />
            </div>

            {/* Discount Section */}
            <div className="col-span-3">
              <DiscountSection
                discountOptions={platformData[activePlatform].discountOptions}
              />
            </div>
          </div>

          {/* Custom Pricing and Action Buttons */}
          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-9">
              <CustomPricing customPricing={customPricing} />
            </div>
            <div className="col-span-3">
              <ActionButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAndAvailability;