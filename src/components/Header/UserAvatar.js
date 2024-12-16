import React from 'react';

export const UserAvatar = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
      <img
        src="https://placekitten.com/100/100"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
    <span className="font-medium">Emily</span>
  </div>
);