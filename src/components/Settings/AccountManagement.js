import React from "react";

const AccountManagement = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Account Management</h2>
      <p className="text-sm text-gray-500 mb-4">
        Deleting your account will remove all your data, including
        collaborations, payment history, and profile information. This action
        cannot be undone.
      </p>
      <div className="flex justify-between items-center">
        <button className="bg-gray-200 px-4 py-2 rounded-lg">
          Disable Account
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default AccountManagement;
