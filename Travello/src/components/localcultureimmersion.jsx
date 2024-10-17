import React, { useState } from 'react';

const Localculture = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const categories = [
    {
      title: 'Local Cuisines',
      description: 'Taste the authentic flavors through cooking classes and food tours.',
      image: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2022/1/11/north-indian-cuisine.jpg',
      backgroundColor: 'bg-orange-500',
    },
    {
      title: 'Cultural Activities',
      description: 'Join traditional festivals, local ceremonies, and artistic performances.',
      image: 'https://images.jdmagicbox.com/quickquotes/listicle/listicle_1686140315148_74ycs_1040x500.jpg',
      backgroundColor: 'bg-yellow-400',
    },
    {
      title: 'Handicrafts & Workshops',
      description: 'Create your own souvenirs by participating in workshops.',
      image: 'https://t3.ftcdn.net/jpg/05/66/34/10/360_F_566341036_f2mCzWyHi9I4aMOSSiy1XUUhvEqdUKJ1.jpg',
      backgroundColor: 'bg-blue-400',
    },
    {
      title: 'Nature & Adventure',
      description: 'Explore eco-tours and hikes with local guides.',
      image: 'https://etimg.etb2bimg.com/thumb/msid-113129852,imgsize-266464,width-1200,height=765,overlay-ettravel/destination/states/need-to-create-new-travel-destinations-in-india-with-focus-on-nature-and-adventure-bajaj.jpg',
      backgroundColor: 'bg-green-500',
    },
    {
      title: 'Community Living',
      description: 'Stay with local families to experience daily life.',
      image: 'https://t3.ftcdn.net/jpg/03/95/31/38/360_F_395313832_J5yId6zZgFo8F9xLgEX7alsITys2xhV7.jpg',
      backgroundColor: 'bg-indigo-600',
    },
    {
      title: 'Traditional Music & Dance',
      description: 'Experience local music and dance performances, or learn the art yourself!',
      image: 'https://img.freepik.com/premium-photo/cultural-performance-showcasing-traditional-indian-music-dance-forms-representing-rich-cu_890802-1462.jpg',
      backgroundColor: 'bg-yellow-600',
    },
  ];

  const experiences = [
    {
      title: 'Backwater Stay in Kerala',
      description: 'Live the serene life on a houseboat and experience Kerala’s culture up close.',
      image: 'https://static.toiimg.com/thumb/msid-83336319,width-748,height-499,resizemode-4,imgsize-314065/.jpg',
      backgroundColor: 'bg-green-400',
    },
    {
      title: 'Yoga Retreat in Rishikesh',
      description: 'Rejuvenate yourself through yoga sessions and spiritual experiences in the Yoga capital of the world.',
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/190621082512-international-yoga-day.jpg?q=x_6,y_0,h_900,w_1599,c_crop/w_800',
      backgroundColor: 'bg-yellow-400',
    },
    {
      title: 'Camel Safari in Jaisalmer',
      description: 'Venture into the Thar Desert and experience the golden sands of Rajasthan.',
      image: 'https://jaswantpalace.com/wp-content/uploads/2022/10/overnight-camel-safari-in-jaisalmer.jpg',
      backgroundColor: 'bg-blue-400',
    },
    {
      title: 'Tea Garden Walks in Darjeeling',
      description: 'Immerse yourself in the lush tea gardens while learning about tea cultivation.',
      image: 'https://3.imimg.com/data3/EF/FQ/MY-3370654/tea-gardens-of-darjeeling-the-hidden-paradise.jpg',
      backgroundColor: 'bg-green-500',
    },
    {
      title: 'Cultural Tour in Varanasi',
      description: 'Explore India’s spiritual capital and witness the ancient rituals on the Ganges.',
      image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/af/10.jpg',
      backgroundColor: 'bg-orange-500',
    },
    {
      title: 'Wildlife Safari in Ranthambore',
      description: 'Experience the thrill of seeing majestic tigers in their natural habitat.',
      image: 'https://www.ranthamborenationalpark.in/blog/wp-content/uploads/2021/12/Ranthambore-National-Park-Wildlife.jpg',
      backgroundColor: 'bg-purple-500',
    },
  ];

  const faqs = [
    {
      question: 'What is local immersion?',
      answer: 'Local immersion is about engaging with the local community, culture, and traditions to get an authentic travel experience.',
    },
    {
      question: 'How do I choose the right experience?',
      answer: 'Consider your interests and what you want to explore, whether it’s nature, culture, food, or adventure. We offer a range of experiences for every preference.',
    },
    {
      question: 'Are these experiences sustainable?',
      answer: 'Yes! All our experiences focus on sustainability and support the local economy, promoting responsible tourism.',
    },
    {
      question: 'Is it safe to stay with local families?',
      answer: 'Absolutely. We ensure all hosts are vetted, and you’ll have a safe and enriching experience while staying with local families.',
    },
    {
      question: 'How can I book an experience?',
      answer: 'You can easily book through our platform by selecting an experience, choosing a date, and confirming your booking online.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-b from-mint to-light-green text-gray-800">
      {/* Hero Section */}
      <div className="text-center py-16 bg-teal-green text-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">Explore Local Immersions</h1>
        <p className="text-xl mb-8">
          Dive deep into the heart of cultures with our local immersion programs. Discover authentic experiences, local flavors, and meaningful connections.
        </p>
        <button className="px-6 py-3 bg-teal-50 text-green-800 font-bold rounded hover:bg-teal-100">
          Start Your Journey
        </button>
      </div>

      {/* Immersion Categories Section */}
      <div className="mt-12">
        <h2 className="text-center text-4xl text-teal-800 mb-8">Why Local Immersion?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.backgroundColor} p-8 rounded-lg text-center shadow-lg transform transition-transform duration-300 hover:scale-105`}
            >
              <img src={category.image} alt={category.title} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-3xl font-bold mt-6">{category.title}</h3>
              <p className="text-lg mt-4">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-12">
        <h2 className="text-center text-4xl text-teal-800 mb-8">Immersive Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`${experience.backgroundColor} p-8 rounded-lg text-center shadow-lg transform transition-transform duration-300 hover:scale-105`}
            >
              <img src={experience.image} alt={experience.title} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-bold mt-6">{experience.title}</h3>
              <p className="text-lg mt-4">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 bg-teal-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl text-green-800 mb-8">Frequently Asked Questions (FAQs)</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-6 p-4 rounded-lg cursor-pointer hover:bg-teal-100 transition-colors"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <h3 className="text-xl font-bold text-green-800">{faq.question}</h3>
            {activeIndex === index && <p className="mt-4 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Localculture;
