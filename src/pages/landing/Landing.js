import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../components/user/Navbar"; // Adjust the path as needed
import Footer from "../../components/user/Footer"; // Adjust the path as needed

const LandingPage = () => {
  const trustedCompanies = [
    { name: 'Flipside', logo: '/company1.svg' },
    { name: 'Spark', logo: '/company2.svg' },
    { name: 'Software', logo: '/company3.svg' },
    { name: 'DevTool', logo: '/company4.svg' },
    { name: 'Stack', logo: '/company5.svg' },
  ];

  const features = [
    {
      title: 'Influence Discovery',
      description: 'Find Your Perfect Influencer with our Advanced Search and Filter System',
      icon: '🔍'
    },
    {
      title: 'Collaboration Tools',
      description: 'Seamless Communication and Project Management with Limited Seats',
      icon: '🤝'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Monitor Campaign Performance and Track ROI in Real-time',
      icon: '📊'
    },
    {
      title: 'Secure Payments',
      description: 'Fast and Secure Payment Processing with Multiple Options',
      icon: '🔒'
    }
  ];

  const steps = [
    {
      title: 'Create An Account and Set Your Marketing Goals',
      description: 'Sign up and tell us about your brand and campaign objectives'
    },
    {
      title: 'Sign Up and Create Your Profile',
      description: 'Complete your profile with your expertise and portfolio'
    },
    {
      title: 'Discover Influencers Using Smart Filters',
      description: 'Use our advanced filters to find the perfect match'
    },
    {
      title: 'Set Your Pricing And Availability',
      description: 'Define your rates and working hours'
    },
    {
      title: 'Launch Your Campaign And Track Results',
      description: 'Start your campaign and monitor performance'
    },
    {
      title: 'Connect With Brands And Grow Together',
      description: 'Build lasting partnerships and grow your influence'
    }
  ];

  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />  {/* Add the Navbar component here */}

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            CONNECT, COLLABORATE <br />
            & <span className="text-red-500">GROW.</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empower your brand with the perfect influence partnerships. Find influencers that align with your business, and grow your online presence with data-driven campaigns.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link to="/join" className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors">
              Join as an Influencer
            </Link>
            <Link to="/find" className="bg-white text-red-500 border-2 border-red-500 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
              Find Influencers
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
            alt="Collaboration" 
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-gray-600 mb-8">Trusted By Companies All Over The World</h2>
          <div className="flex justify-center items-center flex-wrap gap-12">
            {trustedCompanies.map((company, index) => (
              <img 
                key={index}
                src={company.logo}
                alt={company.name}
                className="h-8 md:h-12 opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why InfluencerPool */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Why <span className="text-red-500">InfluencerPool</span>?</h2>
            <p className="text-gray-600">
              A Powerful Platform Built To Streamline Influencer Marketing And Connect Businesses And Influencers Alike
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Getting Started is Simple</h3>
              <div className="space-y-8">
                {steps.slice(0, 3).map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                Get Started Today
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">For Influencers</h3>
              <div className="space-y-8">
                {steps.slice(3).map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                      {index + 4}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />  {/* Add the Footer component here */}
    </div>
  );
};

export default LandingPage;
