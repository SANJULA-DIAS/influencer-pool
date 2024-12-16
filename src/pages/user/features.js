import React from 'react';
import { Shield, Users, BarChart3, MessageSquare, Zap, Database } from 'lucide-react';
import Navbar from "../../components/user/Navbar"; // Adjust the path as needed
import Footer from "../../components/user/Footer"; // Adjust the path as needed

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-[#E84C3D]" />,
      title: 'Secure Platform',
      description: 'End-to-end encryption and secure payment processing to protect your data and transactions'
    },
    {
      icon: <Users className="w-12 h-12 text-[#E84C3D]" />,
      title: 'Smart Matching',
      description: 'Advanced algorithms to connect you with the perfect influencers for your brand'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-[#E84C3D]" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics to track campaign performance and ROI in real-time'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-[#E84C3D]" />,
      title: 'Seamless Communication',
      description: 'Built-in messaging system for efficient collaboration between brands and influencers'
    },
    {
      icon: <Zap className="w-12 h-12 text-[#E84C3D]" />,
      title: 'Quick Campaign Launch',
      description: 'Streamlined process to get your influencer marketing campaigns up and running fast'
    },
    {
      icon: <Database className="w-12 h-12 text-[#E84C3D]" />,
      title: 'Content Management',
      description: 'Centralized system to manage, track, and approve influencer content'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for 
              <span className="text-[#E84C3D]"> Successful Collaborations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and scale your influencer marketing campaigns
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#E84C3D] py-20">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Join thousands of successful brands and influencers on our platform</p>
            <button className="bg-white text-[#E84C3D] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;