import React from 'react';
import { MoreHorizontal, MessageCircle, Info } from 'lucide-react';
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import LoggedInNavbar from '../../components/user/Navbar LoggedIn';

// Types
interface Contract {
  name: string;
  image: string;
  role: string;
  status: 'In Progress' | 'Finished';
  timeline: {
    step: string;
    date: string;
    completed: boolean;
  }[];
}

// Mock Data
const NEED_REVIEW: Contract[] = [
  {
    name: "Shanudrie",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    role: "Brand UGC Creator, Brand Ambassador",
    status: "In Progress",
    timeline: [
      { step: "Contract Started", date: "05/17/2024", completed: true },
      { step: "In Progress", date: "05/29/2024", completed: true },
      { step: "Submitted/Need to Review", date: "06/11/2024", completed: true },
      { step: "Finished", date: "", completed: false }
    ]
  },
  {
    name: "Denethi",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    role: "Clothing Brand Ambassador",
    status: "In Progress",
    timeline: [
      { step: "Contract Started", date: "07/17/2024", completed: true },
      { step: "In Progress", date: "07/21/2024", completed: true },
      { step: "Submitted/Need to Review", date: "08/11/2024", completed: true },
      { step: "Finished", date: "", completed: false }
    ]
  }
];

const IN_PROGRESS: Contract[] = [
  {
    name: "MRJ Inspire",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    role: "Vehicle UGC Creator",
    status: "In Progress",
    timeline: [
      { step: "Contract Started", date: "03/21/2024", completed: true },
      { step: "In Progress", date: "03/29/2024", completed: true },
      { step: "Submitted/Need to Review", date: "", completed: false },
      { step: "Finished", date: "", completed: false }
    ]
  }
];

const FINISHED: Contract[] = [
  {
    name: "Ashen",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150",
    role: "Business UGC Creator, Business Promoter",
    status: "Finished",
    timeline: [
      { step: "Contract Started", date: "05/17/2024", completed: true },
      { step: "In Progress", date: "05/29/2024", completed: true },
      { step: "Submitted/Need to Review", date: "06/11/2024", completed: true },
      { step: "Finished", date: "06/12/2024", completed: true }
    ]
  },
  {
    name: "Lochana",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    role: "Business Promoter, UGC Creator",
    status: "Finished",
    timeline: [
      { step: "Contract Started", date: "04/17/2024", completed: true },
      { step: "In Progress", date: "04/24/2024", completed: true },
      { step: "Submitted/Need to Review", date: "05/11/2024", completed: true },
      { step: "Finished", date: "06/11/2024", completed: true }
    ]
  }
];

// Reusable Components
const TimelineStep = ({ step, date, completed }: { step: string; date: string; completed: boolean }) => (
  <div className="flex items-center">
    <div className={`w-3 h-3 rounded-full ${completed ? 'bg-red-500' : 'bg-gray-200'}`} />
    <span className={`ml-2 text-sm ${completed ? 'text-gray-900' : 'text-gray-400'}`}>
      {step}
    </span>
    {date && (
      <span className="ml-auto text-xs text-gray-400">
        {date}
      </span>
    )}
  </div>
);

const ContractCard = ({ contract }: { contract: Contract }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center">
        <img src={contract.image} alt={contract.name} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-3">
          <h3 className="font-semibold">{contract.name}</h3>
          <p className="text-sm text-gray-500">{contract.role}</p>
        </div>
      </div>
      <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
    </div>
    <div className="space-y-3">
      {contract.timeline.map((item, i) => (
        <TimelineStep key={i} {...item} />
      ))}
    </div>
    <button className={`w-full mt-6 ${
      contract.status === 'Finished' 
        ? 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
        : 'bg-red-500 text-white hover:bg-red-600'
    } py-2 rounded-md transition-colors flex items-center justify-center font-medium`}>
      {contract.status === 'Finished' ? 'Rehire' : 'Review'}
      {contract.status === 'In Progress' && <MessageCircle className="w-4 h-4 ml-2" />}
    </button>
  </div>
);

const ContractSection = ({ title, contracts }: { title: string; contracts: Contract[] }) => (
  <div className="mb-12">
    <div className="flex items-center mb-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <Info className="w-5 h-5 ml-2 text-gray-400" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {contracts.map((contract, index) => (
        <ContractCard key={index} contract={contract} />
      ))}
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LoggedInNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">All Contracts</h1>
        
        <ContractSection title="Need to Review" contracts={NEED_REVIEW} />
        <ContractSection title="In Progress" contracts={IN_PROGRESS} />
        <ContractSection title="Finished" contracts={FINISHED} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
