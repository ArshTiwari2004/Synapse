import React from 'react';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: 'Exploring the Hidden Gems of India',
      snippet: 'Discover the lesser-known attractions in India that will make your trip unforgettable.',
      image: 'hatt.jpg',
      link: '#',
    },
    {
      id: 2,
      title: 'Top 10 Tips for Solo Travelers',
      snippet: 'Learn essential tips to make your solo travel experience enjoyable and safe.',
      image: 'st.png',
      link: '#',
    },
    {
      id: 3,
      title: 'Cultural Insights: Traveling in India',
      snippet: 'Get insights into the rich culture and traditions of India for a meaningful travel experience.',
      image: 'cimm2.jpg',
      link: '#',
    },
    {
      id: 4,
      title: 'Sustainable Travel Practices',
      snippet: 'Find out how you can travel responsibly and reduce your carbon footprint.',
      image: 'sustainabletravel.png',
      link: '#',
    },
    {
        id: 5,
        title: 'Cultural Festivals:',
        snippet: 'Explore major Indian festivals like Diwali, Holi, Eid, and Christmas, detailing their significance, rituals, and how they are celebrated across different region.',
        image: 'cf2.jpg',
        link: '#',
      },
      {
        id: 6,
        title: 'Historical Sights',
        snippet: 'UNESCO World Heritage Sites in India, providing insights into their history, architecture, and importance',
        image: 'hs.jpg',
        link: '#',
      },
  ];

  return (
    <div className="bg-fffbfa py-10 px-4">
      <h2 className=" flex items-center justify-center text-4xl text-sky-blue font-bold text-49c6e5 mb-6 p-4">Latest Adventures</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white text-teal-green shadow-lg rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-49c6e5">{post.title}</h3>
              <p className="text-gray-700">{post.snippet}</p>
              <a href={post.link} className="text-54defd hover:text-00bd9d font-semibold">Read More</a>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default BlogSection;
