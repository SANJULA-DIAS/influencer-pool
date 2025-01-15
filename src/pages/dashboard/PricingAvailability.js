import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Header } from "../../components/Header/Header";
import { Calendar } from "../../components/PricingAvailability/Calendar";
import { AddAvailabilityModal } from "../../components/PricingAvailability/AddAvailabilityModal";
import Breadcrumb from "../../components/PricingAndAvailability/Breadcrumb";

const PricingAvailability = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (day, time) => {
    setSelectedSlot({ day, time });
    setIsModalOpen(true);
  };

  const handleSave = (eventData) => {
    console.log("Event saved:", eventData);
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-pink-50"> {/* Background color updated */}
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Breadcrumb currentPage="Availability" />
          <Calendar onSlotClick={handleSlotClick} />
          <AddAvailabilityModal
            isOpen={isModalOpen}
            onClose={handleClose}
            onSave={handleSave}
            selectedSlot={selectedSlot}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingAvailability;
