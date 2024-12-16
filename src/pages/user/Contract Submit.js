import React, { useState } from 'react';
import { Send, Paperclip, MoreVertical, HelpCircle } from 'lucide-react';
import LoggedInNavbar from "../../components/user/Navbar LoggedIn";

function App() {
  const [message, setMessage] = useState('');

  const contract = {
    user: {
      name: 'Ashen',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop',
      role: 'Business UGC Creator, Business',
      status: 'Submitted',
    },
    orderNumber: '#IP5471',
    startDate: 'June 1, 2024, 10:21 AM',
    submittedDate: 'July 1, 2024, 6:43 PM',
    totalPrice: '70,000LKR',
    messages: [
      {
        sender: 'Ashen',
        time: 'Jul 1, 2024, 6:43 PM',
        content: 'Hi Kasun,\n\nI have uploaded the script 01. Please check and let me know.',
        attachment: 'Script 11.mp4',
      },
      {
        sender: 'Ashen',
        time: 'Jul 1, 2024, 7:19 PM',
        content: 'Hi Ashen,\n\nI will check and let you know.',
        isAdmin: true,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <LoggedInNavbar /> {/* Render the Navbar component here */}
      <div className="p-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#1A1D1F]">All Contracts</h1>
          <div className="space-x-2">
            <span className="text-[#6F767E]">Campaign Overview</span>
            <button className="bg-white px-4 py-2 rounded-full shadow-sm border text-[#1A1D1F]">
              Manage Campaigns
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Chat Section */}
          <div className="flex-grow bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-bold text-[#1A1D1F]">Need to Review</h2>
              <div className="w-6 h-6 rounded-full border border-[#E6E8EC] flex items-center justify-center text-[#6F767E]">!</div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <img src={contract.user.avatar} alt="" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-medium text-[#1A1D1F]">
                    {contract.user.name} Submitted Order Number {contract.orderNumber}
                  </p>
                  <p className="text-[#6F767E] text-sm">{contract.messages[0].time}</p>
                </div>
              </div>

              {contract.messages.map((msg, idx) => (
                <div key={idx} className="flex gap-4 mb-4">
                  <img
                    src={msg.isAdmin ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop" : contract.user.avatar}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-[#1A1D1F]">{msg.sender}</p>
                        <p className="text-[#6F767E] text-sm">{msg.time}</p>
                      </div>
                    </div>
                    <p className="mt-2 text-[#1A1D1F]">{msg.content}</p>
                    {msg.attachment && (
                      <div className="mt-2 flex items-center gap-2 text-[#2A85FF]">
                        <Paperclip className="h-4 w-4" />
                        <span>{msg.attachment}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <textarea
                className="w-full border border-[#E6E8EC] rounded-xl p-4 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-[#2A85FF] focus:border-transparent"
                placeholder="Send a message..."
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="text-[#6F767E] hover:text-[#2A85FF]">
                  <Paperclip className="h-5 w-5" />
                </button>
                <button className="text-[#6F767E] hover:text-[#2A85FF]">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <button className="flex-1 bg-[#FF6A55] text-white py-3 rounded-xl hover:bg-[#FF8F7D] transition-colors">
                Accept
              </button>
              <button className="flex-1 border border-[#FF6A55] text-[#FF6A55] py-3 rounded-xl hover:bg-[#FFF5F3] transition-colors">
                Need Revisions
              </button>
            </div>
          </div>

          {/* Info Section */}
          <div className="w-96">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4">
                  <img src={contract.user.avatar} alt="" className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="font-bold text-xl text-[#1A1D1F]">{contract.user.name}</h3>
                    <p className="text-[#6F767E] text-sm">{contract.user.role}</p>
                  </div>
                </div>
                <button>
                  <MoreVertical className="h-5 w-5 text-[#6F767E]" />
                </button>
              </div>

              <span className="inline-block bg-[#FFECE8] text-[#FF6A55] px-3 py-1 rounded-full text-sm mb-6">
                {contract.user.status}
              </span>

              <div className="space-y-4">
                <div>
                  <p className="text-[#6F767E]">Started Date</p>
                  <p className="text-[#1A1D1F]">{contract.startDate}</p>
                </div>
                <div>
                  <p className="text-[#6F767E]">Submitted Date</p>
                  <p className="text-[#1A1D1F]">{contract.submittedDate}</p>
                </div>
                <div>
                  <p className="text-[#6F767E]">Total price</p>
                  <p className="text-[#1A1D1F]">{contract.totalPrice}</p>
                </div>
                <div>
                  <p className="text-[#6F767E]">Order Number</p>
                  <p className="text-[#1A1D1F]">{contract.orderNumber}</p>
                </div>
              </div>

              <button className="w-full bg-[#FF6A55] text-white py-3 rounded-xl mt-6 hover:bg-[#FF8F7D] transition-colors">
                Message
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#FFECE8] flex items-center justify-center">
                  <HelpCircle className="h-5 w-5 text-[#FF6A55]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1A1D1F] mb-2">Any Questions?</h3>
                  <p className="text-[#6F767E]">
                    Submit a ticket or email us at{' '}
                    <a href="mailto:support@influencerpool.lk" className="text-[#FF6A55] hover:text-[#FF8F7D]">
                      support@influencerpool.lk
                    </a>{' '}
                    and we will get back to you within 24 hours!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
