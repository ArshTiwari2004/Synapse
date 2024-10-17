import React from 'react';

// Sample reviews data
const reviews = [
    {
        id: 1,
        name: 'Priya Sharma',
        profileImage: 'pm.jpg', 
        rating: 4,
        review: 'Travello has completely changed how I explore new places! The hidden attractions feature is a game-changer. I found local gems I never would have discovered on my own.',
    },
    {
        id: 2,
        name: 'Ravi Mehta',
        profileImage: 'rm.jpeg', 
        rating: 5,
        review: 'The dynamic leaderboard and challenges made my trips more exciting! It’s like a fun game while traveling. Highly recommend Travello to all adventure seekers!',
    },
    {
        id: 3,
        name: 'Ananya Singh',
        profileImage: '1.jpg', 
        rating: 3,
        review: 'I love the offline mode feature! It helped me navigate through areas without internet. Travello made my travel planning so much easier and enjoyable!',
    },
    {
        id: 4,
        name: 'Amit Kapoor',
        profileImage: '2.jpg', 
        rating: 5,
        review: 'The social media integration is fantastic! I can share my travel experiences instantly. Travello truly enhances the travel experience!',
    },
];

// Star rating component
const StarRating = ({ rating }) => {
    return (
        <div className="flex justify-center my-2">
            {[...Array(5)].map((_, index) => (
                <span key={index} className={`text-yellow-400 ${index < rating ? 'filled' : 'empty'}`}>
                    {index < rating ? '★' : '☆'}
                </span>
            ))}
        </div>
    );
};

// Review card component
const ReviewCard = ({ review }) => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={review.profileImage} alt={review.name} className="w-16 h-16 rounded-full mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-teal-500 text-center">{review.name}</h3>
            <StarRating rating={review.rating} />
            <p className="text-gray-700 text-center">{review.review}</p>
        </div>
    );
};

// Main review section component
const ReviewSection = () => {
    return (

        <div className="bg-off-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-teal-600 my-8">What Our Travelers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
