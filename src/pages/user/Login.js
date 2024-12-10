import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../components/user/Navbar"; // Adjust the path as needed
import Footer from "../../components/user/Footer"; // Adjust the path as needed

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Login Form */}
            <div className="p-8 md:p-12">
              <div className="max-w-md mx-auto">
                <h1 className="text-4xl font-medium text-[#8B4513] mb-2">Sign In</h1>
                <p className="text-gray-600 mb-8">to Influencer Pool</p>

                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Username</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your username"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                      />
                      <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                        Remember Me
                      </label>
                    </div>
                    <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-gray-800 italic">
                      forgot password ?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E84C3D] text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Sign In
                  </button>

                  <p className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-[#E84C3D] hover:text-red-600">
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80"
                alt="Login"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
