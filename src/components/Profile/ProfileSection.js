import React, { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import profileImage from './img2.jpg';

export const ProfileSection = ({ userProfile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-6">
          <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={profileImage} // Use the imported image
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-[#FF6B6B]">{userProfile.name}</h1>
            <div className="space-y-2 mt-3">
              <p className="text-gray-600 flex items-center gap-2">
                <span>📍</span> {userProfile.location}
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <span>🌐</span> {userProfile.languages.join(", ")}
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <span>📅</span> Member Since {userProfile.memberSince}
              </p>
            </div>
          </div>
        </div>
        <button onClick={openModal} className="text-[#FF6B6B] flex items-center gap-2">
          Edit profile <span>✏️</span>
        </button>
      </div>
      <div>
        <h2 className="text-xl font-medium mb-3">About Me</h2>
        <p className="text-gray-600 leading-relaxed">{userProfile.about}</p>
      </div>

      {isModalOpen && <EditProfileModal userProfile={userProfile} closeModal={closeModal} />}
    </div>
  );
};