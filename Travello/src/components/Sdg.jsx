import React from 'react';
import { Leaf, Footprints, Recycle, Building2 } from 'lucide-react';

const Sdg = () => {
  return (
    <div className="bg-green-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-800 mb-8">Travello: Implementing SDG Goal 9</h1>
        <p className="text-lg text-green-700 mb-8">
          At Travello, we're committed to supporting the UN's Sustainable Development Goal 9:
          Industry, Innovation, and Infrastructure. Here's how our features contribute to this goal:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            icon={<Footprints className="w-12 h-12 text-green-600" />}
            title="Carbon Footprint Tracking"
            description="Our advanced algorithm calculates the carbon footprint of your trips, helping you make informed decisions about your travel impact."
          />
          <FeatureCard
            icon={<Leaf className="w-12 h-12 text-green-600" />}
            title="Eco-Friendly Alternatives"
            description="We suggest environmentally conscious travel options, including green accommodations and low-emission transportation choices."
          />
          <FeatureCard
            icon={<Recycle className="w-12 h-12 text-green-600" />}
            title="Sustainable Tourism Practices"
            description="Learn about and engage in sustainable tourism practices that support local communities and preserve natural resources."
          />
          <FeatureCard
            icon={<Building2 className="w-12 h-12 text-green-600" />}
            title="Infrastructure Development"
            description="We partner with local initiatives to promote sustainable infrastructure development in tourist destinations."
          />
        </div>

        <p className="text-lg text-green-700 mt-8">
          By using Travello, you're not just planning a trip – you're contributing to sustainable
          innovation and infrastructure development in the travel industry.
        </p>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-semibold text-green-800 ml-4">{title}</h2>
      </div>
      <p className="text-green-600">{description}</p>
    </div>
  );
};

export default Sdg;