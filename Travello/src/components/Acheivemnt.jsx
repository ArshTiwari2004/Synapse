// AchievementSection.jsx
import React from 'react';
import AchievementCard from './AchievementCard';

const AchievementSection = () => {
  return (
    <section className="py-16 bg-emerald-800">
      <div className="container mx-auto text-center text-white">
        <h3 className="text-xl uppercase mb-4">Some statistics about Online Tour and Travel</h3>
        <h2 className="text-3xl font-bold mb-8">Center Achievements</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <AchievementCard icon="travellers.jpeg" value="6531" label="Customers" />
          <AchievementCard icon="https://i.imgur.com/f7O6N3g.png" value="100" label="Destinations" />
          <AchievementCard icon="https://i.imgur.com/wJ9EhSz.png" value="5000" label="Tours" />
          <AchievementCard icon="https://i.imgur.com/UfBVQZk.png" value="20" label="Tour Types" />
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;




