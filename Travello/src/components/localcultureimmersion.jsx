import React, { useState } from 'react';

const Localculture = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const categories = [
    {
      title: 'Local Cuisines',
      description: 'Taste the authentic flavors through cooking classes and food tours.',
      image: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2022/1/11/north-indian-cuisine.jpg',
      backgroundColor: '#f97316', // Orange
    },
    {
      title: 'Cultural Activities',
      description: 'Join traditional festivals, local ceremonies, and artistic performances.',
      image: 'https://images.jdmagicbox.com/quickquotes/listicle/listicle_1686140315148_74ycs_1040x500.jpg',
      backgroundColor: '#fbbf24', // Yellow
    },
    {
      title: 'Handicrafts & Workshops',
      description: 'Create your own souvenirs by participating in workshops.',
      image: 'https://t3.ftcdn.net/jpg/05/66/34/10/360_F_566341036_f2mCzWyHi9I4aMOSSiy1XUUhvEqdUKJ1.jpg',
      backgroundColor: '#60a5fa', // Blue
    },
    {
      title: 'Nature & Adventure',
      description: 'Explore eco-tours and hikes with local guides.',
      image: 'https://etimg.etb2bimg.com/thumb/msid-113129852,imgsize-266464,width-1200,height=765,overlay-ettravel/destination/states/need-to-create-new-travel-destinations-in-india-with-focus-on-nature-and-adventure-bajaj.jpg',
      backgroundColor: '#10b981', // Green
    },
    {
      title: 'Community Living',
      description: 'Stay with local families to experience daily life.',
      image: 'https://t3.ftcdn.net/jpg/03/95/31/38/360_F_395313832_J5yId6zZgFo8F9xLgEX7alsITys2xhV7.jpg',
      backgroundColor: '#4f46e5', // Indigo
    },
    {
      title: 'Traditional Music & Dance',
      description: 'Experience local music and dance performances, or learn the art yourself!',
      image: 'https://img.freepik.com/premium-photo/cultural-performance-showcasing-traditional-indian-music-dance-forms-representing-rich-cu_890802-1462.jpg',
      backgroundColor: '#eab308', // Gold
    },
  ];

  const experiences = [
    {
      title: 'Backwater Stay in Kerala',
      description: 'Live the serene life on a houseboat and experience Kerala’s culture up close.',
      image: 'https://static.toiimg.com/thumb/msid-83336319,width-748,height-499,resizemode=4,imgsize-314065/.jpg',
      backgroundColor: '#34d399', // Green
    },
    {
      title: 'Yoga Retreat in Rishikesh',
      description: 'Rejuvenate yourself through yoga sessions and spiritual experiences in the Yoga capital of the world.',
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/190621082512-international-yoga-day.jpg?q=x_6,y_0,h_900,w_1599,c_crop/w_800',
      backgroundColor: '#fbbf24', // Yellow
    },
    {
      title: 'Camel Safari in Jaisalmer',
      description: 'Venture into the Thar Desert and experience the golden sands of Rajasthan.',
      image: 'https://jaswantpalace.com/wp-content/uploads/2022/10/overnight-camel-safari-in-jaisalmer.jpg',
      backgroundColor: '#60a5fa', // Blue
    },
    {
      title: 'Tea Garden Walks in Darjeeling',
      description: 'Immerse yourself in the lush tea gardens while learning about tea cultivation.',
      image: 'https://3.imimg.com/data3/EF/FQ/MY-3370654/tea-gardens-of-darjeeling-the-hidden-paradise.jpg',
      backgroundColor: '#10b981', // Green
    },
    {
      title: 'Cultural Tour in Varanasi',
      description: 'Explore India’s spiritual capital and witness the ancient rituals on the Ganges.',
      image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/af/10.jpg',
      backgroundColor: '#f97316', // Orange
    },
    {
      title: 'Wildlife Safari in Ranthambore',
      description: 'Experience the thrill of seeing majestic tigers in their natural habitat.',
      image: 'https://www.ranthamborenationalpark.in/blog/wp-content/uploads/2021/12/Ranthambore-National-Park-Wildlife.jpg',
      backgroundColor: '#8b5cf6', // Purple
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

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fff',
      color: '#333',
    },
    hero: {
      textAlign: 'center',
      padding: '60px',
      backgroundColor: '#065f46',
      color: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heroHeading: {
      fontSize: '3em',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    heroText: {
      fontSize: '1.5em',
      marginBottom: '30px',
    },
    button: {
      padding: '12px 25px',
      backgroundColor: '#f6d743',
      color: '#065f46',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2.5em',
      color: '#065f46',
      marginBottom: '40px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
    },
    card: {
      padding: '30px',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      color: '#fff', 
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '10px 10px 0 0',
    },
    cardTitle: {
      fontSize: '1.5em',
      marginTop: '20px',
    },
    cardText: {
      fontSize: '1em',
      marginTop: '10px',
    },
    faqContainer: {
      marginTop: '50px',
      padding: '20px',
      backgroundColor: '#f0fdfa',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    faqItem: {
      marginBottom: '20px',
      padding: '15px',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease',
      cursor: 'pointer',
    },
    faqQuestion: {
      fontSize: '1.3em',
      fontWeight: 'bold',
      color: '#065f46',
    },
    faqAnswer: {
      marginTop: '10px',
      fontSize: '1em',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroHeading}>Explore Local Immersions</h1>
        <p style={styles.heroText}>
          Dive deep into the heart of cultures with our local immersion programs. Discover authentic experiences, local flavors, and meaningful connections.
        </p>
        <button style={styles.button}>Start Your Journey</button>
      </div>

      {/* Immersion Categories Section with Cards */}
      <div style={{ marginTop: '50px' }}>
        <h2 style={styles.sectionTitle}>Why Local Immersion?</h2>
        <div style={styles.grid}>
          {categories.map((category, index) => (
            <div
              key={index}
              style={{ ...styles.card, backgroundColor: category.backgroundColor }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img src={category.image} alt={category.title} style={styles.cardImage} />
              <h3 style={styles.cardTitle}>{category.title}</h3>
              <p style={styles.cardText}>{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section with Cards */}
      <div style={{ marginTop: '50px' }}>
        <h2 style={styles.sectionTitle}>Immersive Experiences</h2>
        <div style={styles.grid}>
          {experiences.map((experience, index) => (
            <div
              key={index}
              style={{ ...styles.card, backgroundColor: experience.backgroundColor }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img src={experience.image} alt={experience.title} style={styles.cardImage} />
              <h3 style={styles.cardTitle}>{experience.title}</h3>
              <p style={styles.cardText}>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div style={styles.faqContainer}>
        <h2 style={styles.sectionTitle}>Frequently Asked Questions (FAQs)</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={styles.faqItem}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d1fae5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <div style={styles.faqQuestion}>{faq.question}</div>
            {activeIndex === index && <div style={styles.faqAnswer}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Localculture;
