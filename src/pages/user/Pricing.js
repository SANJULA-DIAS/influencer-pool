import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from "../../components/user/Navbar"; // Adjust the path as needed
import Footer from "../../components/user/Footer"; // Adjust the path as needed

const PricingPage = () => {
  const businessPlans = [
    {
      name: 'Basic Plan',
      price: 'Free',
      features: [
        '5 collaborations per month',
        'Basic campaign management',
        'Basic analytics and reports',
        'Email support'
      ],
      buttonText: 'Get Started',
      buttonLink: '/signup'
    },
    {
      name: 'Professional Plan',
      price: '$99',
      features: [
        '15 collaborations per month',
        'Advance campaign management',
        'Advanced analytics with ROI tracking',
        'API integration with social platforms',
        'Priority email support'
      ],
      buttonText: 'Get Started',
      buttonLink: '/signup'
    },
    {
      name: 'Enterprise Plan',
      price: 'Custom',
      features: [
        'Unlimited collaborations',
        'Dedicated account manager',
        'Advanced analytics and reporting',
        'Full API integration',
        'Custom onboarding and training',
        '24/7 support'
      ],
      buttonText: 'Contact Us',
      buttonLink: '/contact'
    }
  ];

  const influencerPlans = [
    {
      name: 'Starter Plan',
      price: 'FREE',
      features: [
        'Limited profile visibility',
        '5 business connection opportunities per month',
        'Basic profile analytics (views and reach)',
        'Showcase portfolio (limited)'
      ],
      buttonText: 'Sign Up Free',
      buttonLink: '/signup',
      darkMode: true
    },
    {
      name: 'Pro Plan',
      price: '$29',
      features: [
        'Increased profile visibility',
        '20 business connection opportunities per month',
        'Advanced profile analytics (views, engagement, reach)',
        'Showcase full portfolio',
        'Unlimited access to potential partnerships'
      ],
      buttonText: 'Upgrade to Pro',
      buttonLink: '/signup',
      darkMode: true
    },
    {
      name: 'Elite Plan',
      price: 'Custom',
      features: [
        'Top-tier profile boosting (maximum visibility)',
        'Unlimited business connection opportunities',
        'Personal branding consultation',
        'Advanced analytics and custom reporting',
        'Priority support',
        'Direct messaging and enhanced collaboration tools'
      ],
      buttonText: 'Contact Us',
      buttonLink: '/contact',
      darkMode: true
    }
  ];

  const PricingCard = ({ plan, dark = false }) => (
    <div className={`${dark ? 'bg-[#1a2b34] text-white' : 'bg-white'} rounded-lg p-8 border border-gray-200 flex flex-col h-full`}>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{plan.price}</h3>
        <p className={`${dark ? 'text-gray-300' : 'text-gray-600'}`}>{plan.name}</p>
      </div>
      
      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`mr-2 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>•</span>
            <span className={`${dark ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <a
        href={plan.buttonLink}
        className={`
          ${dark 
            ? 'bg-white text-[#1a2b34] hover:bg-gray-100' 
            : 'bg-[#E84C3D] text-white hover:bg-[#d4443b]'
          }
          px-6 py-3 rounded-lg text-center transition-colors duration-200 flex items-center justify-center gap-2
        `}
      >
        {plan.buttonText}
        {dark && <ArrowRight size={20} />}
      </a>
    </div>
  );

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar /> {/* Add the Navbar component here */}

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a2b34] mb-4">
              Find the plan that is right for you
            </h1>
            <h2 className="text-2xl text-gray-600">
              Business Owner Pricing Plans
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {businessPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b34]">
              Influencer Pricing Plans
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {influencerPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} dark={true} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer /> {/* Add Footer component here */}
    </div>
  );
};

export default PricingPage;
