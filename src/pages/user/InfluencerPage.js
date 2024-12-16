import React from 'react';
import { MapPin, Star, Check } from 'lucide-react';
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";

const InfluencerProfile = () => {
  const reviews = [
    { id: 1, name: 'Jehan', rating: 5, date: '4 weeks ago', comment: 'Easy to work, Friendly and delivered content fast.' },
    { id: 2, name: 'Kasun', rating: 5, date: '1 month ago', comment: 'Good Delivered with in the promised timeframes.' }
  ];

  const promotionServices = [
    {
      type: 'Story Promotion',
      platform: 'Facebook',
      duration: '15 secs',
      price: '15,000LKR'
    },
    {
      type: 'Post Promotion',
      platform: 'Facebook',
      length: '20 Words',
      price: '5000LKR'
    },
    {
      type: 'Video Promotion',
      platform: 'Youtube',
      duration: '1 Min',
      price: '20,000LKR'
    }
  ];

  const portfolio = [
    { id: 1, image: '/bmw-3-series.jpg', title: 'BMW 3 Series Review' },
    { id: 2, image: '/bmw-i8.jpg', title: 'BMW i8 Review' },
    { id: 3, image: '/tata-indica.jpg', title: 'Tata Indica Review' }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'fill-red-500 text-red-500' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg p-6 mb-8 relative">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src="/profile-image.jpg"
              alt="MRJ Inspire"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold">MRJ Inspire</h1>
                <span className="bg-yellow-400 text-xs px-2 py-1 rounded">Away</span>
                <Check className="text-red-500 w-5 h-5" />
              </div>
              <p className="text-gray-600 mb-2">@mrjinspire</p>
              <p className="text-gray-700 mb-2">Vehicle UGC Creator</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {renderStars(5)}
                  <span className="ml-1 text-gray-600">(2.7k)</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Kalutara</span>
                </div>
              </div>
            </div>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
              Message
            </button>
          </div>
        </div>

        {/* About Section */}
        <section className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600">
            Passionate vehicle enthusiast and content creator sharing my love for cars and motorcycles.
            From the latest models and hidden gems to DIY mods and road adventures, I bring you expert reviews,
            behind-the-scenes looks, and thrilling test drives. Join me on this ride as we explore everything automotive
            and ignite our shared passion for the open road!
          </p>
        </section>

        {/* Services Section */}
        <section className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">What I Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {promotionServices.map((service, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-bold mb-4">{service.type}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>Platform: {service.platform}</p>
                  {service.duration && <p>Duration: {service.duration}</p>}
                  {service.length && <p>Length: {service.length}</p>}
                  <p>Price: {service.price}</p>
                </div>
                <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors">
                  Purchase
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">My Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <div key={item.id} className="rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6">2,727 Reviews</h2>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span>5 Stars</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full w-[96%] bg-red-500 rounded-full"></div>
              </div>
              <span>(2,634)</span>
            </div>
            {/* Add more rating bars here */}
          </div>
          
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InfluencerProfile;