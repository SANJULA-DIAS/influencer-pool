import React, { useState } from 'react';
import { PenSquare } from 'lucide-react';
import Navbar from "../../components/user/Navbar"; // Adjust the path as needed
import Footer from "../../components/user/Footer"; // Adjust the path as needed

function App() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Billing Information</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Billing Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold">Kasun Perera</h2>
                <p className="text-gray-600">147 1/9 Flower Street Road,</p>
                <p className="text-gray-600">Colombo.</p>
              </div>
              <button className="text-gray-600 hover:text-gray-900">
                <PenSquare className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold">Payment Options</h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">Credit & Debit Cards</p>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Card number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full p-2 border rounded-md bg-gray-100"
                    placeholder="**** **** **** ****"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Expiration date</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={expiryMonth}
                        onChange={(e) => setExpiryMonth(e.target.value)}
                        className="p-2 border rounded-md bg-gray-100"
                        placeholder="MM"
                      />
                      <input
                        type="text"
                        value={expiryYear}
                        onChange={(e) => setExpiryYear(e.target.value)}
                        className="p-2 border rounded-md bg-gray-100"
                        placeholder="YY"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Security code</label>
                    <input
                      type="text"
                      value={securityCode}
                      onChange={(e) => setSecurityCode(e.target.value)}
                      className="w-full p-2 border rounded-md bg-gray-100"
                      placeholder="***"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Cardholder's name</label>
                  <input
                    type="text"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    className="w-full p-2 border rounded-md bg-gray-100"
                    placeholder="Name on card"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Post Promotion */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-8">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <h2 className="text-xl font-semibold">Post Promotion</h2>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Platform</span>
                <span className="font-medium">Facebook</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Length</span>
                <div className="flex items-center">
                  <span className="font-medium">20 Words</span>
                  <PenSquare className="w-4 h-4 ml-2 text-gray-600" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Price</span>
                <span className="font-medium">5000LKR</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
