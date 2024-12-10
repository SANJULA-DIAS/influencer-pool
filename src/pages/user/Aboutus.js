import React from 'react';
import Navbar from "../../components/user/Navbar"; // Adjust the path as needed
import Footer from "../../components/user/Footer"; // Adjust the path as needed

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[#1B3B5A] text-6xl font-bold mb-4">Our Mission</h1>
            <p className="text-[#FF4D4D] text-xl italic mb-20">
              Building A Bridge Between Businesses And Influencers To Grow Together.
            </p>
            
            <div className="space-y-16">
              <p className="text-[#4A5568] text-lg leading-relaxed">
                At InfluencerBridge, We Are Dedicated To Connecting Small Businesses With The Right Influencers,
                Enabling Both To Thrive In A Rapidly Evolving Digital World
              </p>
              
              <p className="text-[#4A5568] text-lg leading-relaxed">
                Our Platform Empowers Businesses To Reach Their Target Audience With Authentic, Impactful Campaigns
                While Giving Influencers A Space To Grow Their Personal Brands
              </p>
              
              <p className="text-[#4A5568] text-lg leading-relaxed">
                We Believe In Transparency, Simplicity, And Collaboration. Our Vision Is To Build A Seamless Experience That
                Helps Businesses And Influencers Unlock Their Full Potential By Working Together. We Focus On Creating
                Real, Measurable Results And Long-Lasting Partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto border-t border-gray-200 my-16"></div>

        {/* What Makes Us Unique Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#FF4D4D] text-4xl font-bold text-center italic mb-24">
              What Makes Us Unique
            </h2>
            
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#FF4D4D]" />
              
              {/* Timeline Points */}
              <div className="space-y-32">
                {/* Tailored Matches */}
                <div className="flex items-center">
                  <div className="w-1/2" />
                  <div className="relative">
                    <div className="w-4 h-4 bg-[#FF4D4D] rounded-full z-10 absolute -left-2 top-1/2 transform -translate-y-1/2" />
                    <div className="w-12 h-[2px] bg-[#FF4D4D] absolute -left-2 top-1/2 transform -translate-y-1/2" />
                  </div>
                  <div className="w-1/2 pl-16">
                    <h3 className="text-[#1B3B5A] text-2xl font-semibold mb-2">Tailored Matches</h3>
                    <p className="text-[#4A5568] text-sm">
                      We Provide Highly Specific Filters To Ensure Brands Find Influencers Who Align With Their Mission
                    </p>
                  </div>
                </div>

                {/* Comprehensive Analytics */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-16 text-right">
                    <h3 className="text-[#1B3B5A] text-2xl font-semibold mb-2">Comprehensive Analytics</h3>
                    <p className="text-[#4A5568] text-sm">
                      Our Platform Offers Real-Time Insights Into Campaign Performance, So You Can Track Success Every Step Of The Way
                    </p>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-[#FF4D4D] rounded-full z-10 absolute -right-2 top-1/2 transform -translate-y-1/2" />
                    <div className="w-12 h-[2px] bg-[#FF4D4D] absolute -right-2 top-1/2 transform -translate-y-1/2" />
                  </div>
                  <div className="w-1/2" />
                </div>

                {/* Flexible Pricing */}
                <div className="flex items-center">
                  <div className="w-1/2" />
                  <div className="relative">
                    <div className="w-4 h-4 bg-[#FF4D4D] rounded-full z-10 absolute -left-2 top-1/2 transform -translate-y-1/2" />
                    <div className="w-12 h-[2px] bg-[#FF4D4D] absolute -left-2 top-1/2 transform -translate-y-1/2" />
                  </div>
                  <div className="w-1/2 pl-16">
                    <h3 className="text-[#1B3B5A] text-2xl font-semibold mb-2">Flexible Pricing</h3>
                    <p className="text-[#4A5568] text-sm">
                      Influencers Set Their Own Rates, Offering Flexibility And Control To Both Influencers And Businesses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;