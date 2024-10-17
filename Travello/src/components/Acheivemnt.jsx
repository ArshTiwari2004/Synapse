import React from 'react';
import AchievementCard from './AchievementCard';

const AchievementSection = () => {
  return (
    <section className="py-16 bg-cyan-100">
      <div className="container mx-auto text-center text-teal-800">
        <h3 className="text-xl uppercase mb-4 ">Some statistics about Online Tour and Travel</h3>
        <h2 className="text-3xl font-bold mb-8">Center Achievements</h2>
        <div className="flex justify-center gap-7 flex-wrap">
          <AchievementCard icon="c1.png" value="3000" label="Customers" />
          <AchievementCard icon="destination.png" value="100" label="Destinations" />
          <AchievementCard icon="tours.jpg" value="500+" label="Tours" />
          <AchievementCard icon="type.jpg" value="20+" label="Tour Types" />
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;





