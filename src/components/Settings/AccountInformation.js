import React from "react";

const AccountInformation = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Account Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="border rounded-lg p-3"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border rounded-lg p-3"
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded-lg p-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded-lg p-3"
        />
      </div>
    </div>
  );
};

export default AccountInformation;
