import React, { useState } from 'react';
import { AvailabilityItem } from './AvailabilityItem';

export const Calendar = ({ onSlotClick }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [events, setEvents] = useState([
    { status: 'Available', time: '9:00 AM - 12:00 PM', platform: 'YouTube', day: 'Monday' },
    { status: 'Booked', time: '1:00 PM - 3:00 PM', platform: 'Instagram', day: 'Monday' },
    { status: 'Not Available', time: '2:00 PM - 4:00 PM', platform: null, day: 'Tuesday' },
  ]);

  const handleSlotClick = (day, time) => {
    if (onSlotClick) {
      onSlotClick(day, time);
    }
  };

  return (
    <div className="grid grid-cols-7 gap-4 bg-white rounded-lg p-4 shadow-lg">
      {days.map((day) => (
        <div key={day} className="border rounded-lg p-3 bg-gray-100">
          <h2 className="font-bold text-center mb-2 text-gray-700">{day}</h2>
          <div className="space-y-2">
            {events
              .filter((event) => event.day === day)
              .map((event, index) => (
                <AvailabilityItem
                  key={index}
                  status={event.status}
                  time={event.time}
                  platform={event.platform}
                />
              ))}
            <div
              className="p-2 border rounded text-center cursor-pointer bg-gray-200 hover:bg-gray-300"
              onClick={() => handleSlotClick(day, 'Custom Time Slot')}
            >
              + Add Slot
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
