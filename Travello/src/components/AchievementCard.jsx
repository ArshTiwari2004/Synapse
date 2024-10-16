// AchievementCard.jsx
import React, { useEffect, useState, useRef } from 'react';

const AchievementCard = ({ icon, value, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after animation starts
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the card is in view
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = parseInt(value, 10); // Ensure the value is a number
      if (start === end) return;

      const incrementTime = (1000 / end) * 10; // Adjust speed as needed
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center p-4 bg-white rounded shadow-lg"
    >
      <img src={icon} alt={label} className="w-16 h-16 mb-4" />
      <h2 className="text-4xl font-bold text-yellow-500">{count}</h2>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default AchievementCard;
