import React, { useState } from 'react';
import { Send, Paperclip, MoreHorizontal } from 'lucide-react';
import LoggedInNavbar from '../../components/user/Navbar LoggedIn'; // Importing the navbar

function App() {
  const allMessages = {
    1: [
      {
        id: 1,
        sender: "MRJ Inspire",
        content: "Hi Kasun, I have uploaded the script 11. Please check on your side.",
        time: "5:44 PM",
        attachment: "Script 11.mp4",
        avatar: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=150&h=150&fit=crop"
      },
      {
        id: 2,
        sender: "You",
        content: "Hi MRJ,\nI will check and let you know.",
        time: "9:14 PM",
        isUser: true,
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop"
      },
      {
        id: 3,
        sender: "You",
        content: "Hi MRJ,\nAll Good! I have released the payment.",
        time: "9:55 PM",
        isUser: true,
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop"
      }
    ],
    2: [
      {
        id: 1,
        sender: "Manisha",
        content: "Hey, we need to discuss the upcoming project details.",
        time: "2:30 PM",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
      },
      {
        id: 2,
        sender: "You",
        content: "Sure, what's urgent?",
        time: "2:35 PM",
        isUser: true,
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop"
      }
    ],
    3: [
      {
        id: 1,
        sender: "Blok & Dino",
        content: "Check with the drive issue we discussed yesterday",
        time: "11:20 AM",
        avatar: "https://images.unsplash.com/photo-1657214059189-6bace4ad1ab8?w=150&h=150&fit=crop"
      }
    ]
  };

  const [contacts] = useState([
    { 
      id: 1, 
      name: "MRJ Inspire", 
      message: "You uploaded attachment", 
      title: "Vehicle UGC Creator",
      username: "@mrjinspire",
      avatar: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=150&h=150&fit=crop"
    },
    { 
      id: 2, 
      name: "Manisha", 
      message: "Check the, It is urgent re...",
      title: "Content Creator",
      username: "@manisha",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    { 
      id: 3, 
      name: "Blok & Dino", 
      message: "Check with the drive iss...",
      title: "Content Creator",
      username: "@blokdino",
      avatar: "https://images.unsplash.com/photo-1657214059189-6bace4ad1ab8?w=150&h=150&fit=crop"
    },
    { 
      id: 4, 
      name: "Travel with Wife", 
      message: "I have sent you all the ne...",
      title: "Content Creator",
      username: "@travelwife",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop"
    },
    { 
      id: 5, 
      name: "Ashen", 
      message: "It will depends on the req...",
      title: "Content Creator",
      username: "@ashen",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop"
    }
  ]);

  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg = {
      id: allMessages[activeContact.id]?.length + 1 || 1,
      sender: "You",
      content: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true,
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop"
    };

    allMessages[activeContact.id] = [...(allMessages[activeContact.id] || []), newMsg];
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-[#f8f9fa]">
      <LoggedInNavbar /> {/* Adding the navbar */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="w-[320px] bg-white border-r border-gray-200">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Messages</h1>
              <button className="text-gray-400">
                <MoreHorizontal size={20} />
              </button>
            </div>
            <div className="relative mb-4">
              <input
                type="search"
                placeholder="Search"
                className="w-full px-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none"
              />
            </div>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div 
                  key={contact.id} 
                  className={`flex items-center p-3 rounded-lg cursor-pointer ${contact.id === activeContact.id ? 'bg-[#fff4f3]' : 'hover:bg-gray-50'}`}
                  onClick={() => setActiveContact(contact)}
                >
                  <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                  <div className="ml-3 flex-1">
                    <h3 className={`font-medium ${contact.id === activeContact.id ? 'text-[#e74c3c]' : 'text-gray-900'}`}>{contact.name}</h3>
                    <p className="text-sm text-gray-500 truncate">{contact.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center px-6 py-4 bg-white border-b border-gray-200">
            <img 
              src={activeContact.avatar}
              alt={activeContact.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <div className="flex items-center">
                <h2 className="text-xl font-bold">{activeContact.name}</h2>
                <span className="text-sm text-gray-500 ml-2">{activeContact.username}</span>
              </div>
              <p className="text-sm text-gray-500">{activeContact.title}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="text-center">
              <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">Thursday, Aug 01</span>
            </div>
            {allMessages[activeContact.id]?.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'items-start'}`}>
                {!message.isUser && (
                  <img src={message.avatar} alt={message.sender} className="w-10 h-10 rounded-full object-cover mr-3" />
                )}
                <div className={`max-w-[70%] rounded-2xl p-4 ${message.isUser ? 'bg-[#e74c3c] text-white' : 'bg-white shadow-sm'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm ${message.isUser ? 'text-white' : 'text-gray-900'}`}>{message.sender}</span>
                    <span className={`text-xs ${message.isUser ? 'text-white/80' : 'text-gray-500'}`}>{message.time}</span>
                  </div>
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  {message.attachment && (
                    <div className={`mt-2 flex items-center text-sm ${message.isUser ? 'text-white/80' : 'text-gray-500'}`}>
                      <Paperclip className="w-4 h-4 mr-2" />
                      <span>{message.attachment}</span>
                    </div>
                  )}
                </div>
                {message.isUser && (
                  <img src={message.avatar} alt={message.sender} className="w-10 h-10 rounded-full object-cover ml-3" />
                )}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="px-6 py-4 bg-white border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
                className="flex-1 bg-gray-100 px-4 py-2 rounded-full text-sm focus:outline-none"
              />
              <button type="submit" className="text-[#e74c3c]">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
