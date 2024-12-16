import React from 'react';
import InfluencerCard from './InfluencerCard';
import { influencers } from '../data/influencers';

const InfluencerGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {influencers.map((influencer, index) => (
        <InfluencerCard key={index} {...influencer} />
      ))}
    </div>
  );
};

export default InfluencerGrid;