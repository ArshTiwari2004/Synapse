import React from 'react';
import QuestItem from './Questitem';

const quests = [
  {
    id: 'city-explorer',
    title: 'City Explorer',
    description: 'Uncover the hidden gems of the city!',
    reward: {
      title: 'Urban Adventurer',
      description: 'Unlock the "Urban Adventurer" badge',
      points: 500,
    },
    objectives: [
      'Visit 5 hidden attractions',
      'Upload a photo from each location',
      'Write a short review for each place',
    ],
    difficulty: 'medium',
    estimatedTime: '1 day',
  },
  {
    id: 'cultural-immersion',
    title: 'Cultural Immersion',
    description: 'Dive deep into local traditions and customs!',
    reward: {
      title: 'Cultural Ambassador',
      description: 'Earn the "Cultural Ambassador" badge',
      points: 300,
    },
    objectives: [
      'Attend a local festival or event',
      'Learn and perform a traditional dance or song',
      'Cook a local dish and share your experience',
    ],
    difficulty: 'hard',
    estimatedTime: '2-3 days',
  },
  {
    id: 'foodie-adventure',
    title: 'Foodie Adventure',
    description: 'Embark on a gastronomic journey!',
    reward: {
      title: 'Culinary Connoisseur',
      description: 'Unlock the "Culinary Connoisseur" badge',
      points: 400,
    },
    objectives: [
      'Try 5 local dishes from different restaurants',
      'Visit a local market and identify 3 unique ingredients',
      'Take a cooking class and learn to make a traditional dish',
    ],
    difficulty: 'medium',
    estimatedTime: '2 days',
  },
  {
    id: 'nature-explorer',
    title: 'Nature Explorer',
    description: 'Discover the natural wonders of the region!',
    reward: {
      title: 'Wilderness Wanderer',
      description: 'Earn the "Wilderness Wanderer" badge',
      points: 600,
    },
    objectives: [
      'Hike a scenic trail and reach a viewpoint',
      'Identify and photograph 5 local plant or animal species',
      'Participate in a local conservation activity',
    ],
    difficulty: 'hard',
    estimatedTime: '2-3 days',
  },
  {
    id: 'art-enthusiast',
    title: 'Art Enthusiast',
    description: 'Immerse yourself in the local art scene!',
    reward: {
      title: 'Creative Connoisseur',
      description: 'Unlock the "Creative Connoisseur" badge',
      points: 350,
    },
    objectives: [
      'Visit 3 art galleries or museums',
      'Attend a local art workshop or class',
      'Create your own artwork inspired by the local culture',
    ],
    difficulty: 'easy',
    estimatedTime: '1-2 days',
  },
];

const QuestList = ({ onQuestCompletion }) => {
  return (
    <div className="space-y-6">
      {quests.map((quest) => (
        <QuestItem key={quest.id} quest={quest} onComplete={() => onQuestCompletion(quest.reward)} />
      ))}
    </div>
  );
};

export default QuestList;
