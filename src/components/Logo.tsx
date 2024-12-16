import React from 'react';
import { Users } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Users className="h-8 w-8 text-red-500" />
      <span className="text-xl font-bold">Influencer Pool</span>
    </div>
  );
};

export default Logo;