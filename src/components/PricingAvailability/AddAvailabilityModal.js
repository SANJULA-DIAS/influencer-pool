// src/components/PricingAvailability/AddAvailabilityModal.js

import React, { useState } from 'react';

export const AddAvailabilityModal = ({ isOpen, onClose, onSave, selectedSlot }) => {
  const [formData, setFormData] = useState({
    type: 'Available',
    platform: '',
    contentType: '',
    price: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave({ ...formData, timeSlot: selectedSlot });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-bold mb-4 text-gray-800">{`Add ${formData.type}`}</h2>
        <div className="space-y-3">
          <select
            name="type"
            className="w-full border rounded p-2"
            value={formData.type}
            onChange={handleInputChange}
          >
            <option value="Available">Available</option>
            <option value="Booked">Booked</option>
            <option value="Not Available">Not Available</option>
          </select>
          <input
            type="text"
            name="platform"
            placeholder="Platform"
            className="w-full border rounded p-2"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="contentType"
            placeholder="Content Type"
            className="w-full border rounded p-2"
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full border rounded p-2"
            onChange={handleInputChange}
          />
          <textarea
            name="notes"
            placeholder="Notes"
            className="w-full border rounded p-2"
            rows="3"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
