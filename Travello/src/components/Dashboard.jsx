import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    FaMapMarkedAlt, FaCamera, FaTrophy, FaShareAlt, FaUsers, FaDownload,
    FaLeaf, FaHome, FaUserCircle, FaRecycle, FaSeedling, FaRobot
} from 'react-icons/fa';

const Dashboard = () => {
    // const showNotification = () => {
    //     toast.success("Welcome to the Dashboard! Explore all the amazing features!", {
    //         position: "top-center",
    //         autoClose: 3000,
    //         hideProgressBar: true,
    //         theme: "dark",
    //     });
    // };

    // React.useEffect(() => {
    //     showNotification();
    // }, []);

    const features = [
        {
            title: 'Hidden Attractions',
            description: 'Explore secret spots with navigation and location-based tips.',
            image: 'hiddenattraction.jpeg',
            link: '/hidden-attraction-maps',
            icon: <FaMapMarkedAlt size={45} className="text-[#49c6e5]" />,
        },
        {
            title: 'Challenges & Quests',
            description: 'Complete exciting photo challenges and earn rewards!',
            image: 'challenges.jpeg',
            link: '/Challenge',
            icon: <FaCamera size={45} className="text-[#ff6347]" />,
        },
        {
            title: 'Achievements',
            description: 'Earn badges, levels, and celebrate your accomplishments.',
            image: 'a.jpg',
            link: '/achievements',
            icon: <FaTrophy size={100} className="text-[#ffd700]" />,
        },
        {
            title: 'Social Integration',
            description: 'Share your adventures on Facebook, Twitter, and Instagram!',
            image: 's.jpeg',
            link: '/social-integration',
            icon: <FaShareAlt size={45} className="text-[#00bd9d]" />,
        },
        {
            title: 'Dynamic Leaderboards',
            description: 'Compete with friends and see how you rank!',
            image: 'l.png',
            link: '/leaderboards',
            icon: <FaUsers size={45} className="text-[#8bd7d2]" />,
        },
        {
            title: 'Offline Mode',
            description: 'Download maps for offline use and explore without internet!',
            image: 'om.png',
            link: '/offline-mode',
            icon: <FaDownload size={40} className="text-[#ff6347]" />,
        },
        {
            title: 'Culture Immersion',
            description: 'Immerse in local culture and enjoy unique experiences.',
            image: 'ci.jpeg',
            link: '/culture-immersion',
            icon: <FaLeaf size={30} className="text-[#ffa500]" />,
        },
        {
            title: 'AI Itinerary',
            description: 'Get personalized travel suggestions powered by AI.',
            image: 'ai.png',
            link: '/ai-itinerary',
            icon: <FaRobot size={45} className="text-gray-500" />,
        },
        {
            title: 'Eco-Friendly Services',
            description: 'Discover eco-friendly travel options and reduce your footprint.',
            image: 'eco2.jpg',
            link: '/eco-friendly',
            icon: <FaSeedling size={45} className="text-[#00bd9d]" />,
        },
        {
            title: 'Carbon Footprints',
            description: 'Track and reduce your carbon footprint with eco-friendly tips.',
            image: 'cf.png',
            link: '/carbon-footprints',
            icon: <FaRecycle size={30} className="text-[#49c6e5]" />,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#fffbfa] to-gray-200 flex">
            {/* Left Navbar */}
            <div className="w-1/5 min-h-screen bg-gradient-to-b from-[#49c6e5] to-[#54defd] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-6">
                         
                        <Link to="/" className="text-white flex items-center text-2xl font-bold hover:text-gray-200">
                               <FaHome className="mr-5" /> travello
                         </Link>
                    </div>
                    <div className="space-y-4">
                        <Link to="/hidden-attraction-maps" className="text-white text-lg font-semibold hover:bg-[#00bd9d] p-3 rounded-md flex items-center transition ease-in-out duration-300">
                            <FaMapMarkedAlt className="mr-3" /> Hidden Attractions
                        </Link>
                        <Link to="/socials" className="text-white text-lg font-semibold hover:bg-[#00bd9d] p-3 rounded-md flex items-center transition ease-in-out duration-300">
                            <FaShareAlt className="mr-3" /> Link your Socials
                        </Link>
                        <Link to="/leaderboard" className="text-white text-lg font-semibold hover:bg-[#00bd9d] p-3 rounded-md flex items-center transition ease-in-out duration-300">
                            <FaUsers className="mr-3" /> Leaderboard
                        </Link>
                        <Link to="/quests" className="text-white text-lg font-semibold hover:bg-[#00bd9d] p-3 rounded-md flex items-center transition ease-in-out duration-300">
                            <FaCamera className="mr-3" /> My Quests
                        </Link>
                        <Link to="/my-itinerary" className="text-white text-lg font-semibold hover:bg-[#00bd9d] p-3 rounded-md flex items-center transition ease-in-out duration-300">
                            <FaLeaf className="mr-3" /> My Itinerary
                        </Link>
                        <Link to="/my-badges" className="text-white text-lg font-semibold hover:bg-[#00bd9d] p-3 rounded-md flex items-center transition ease-in-out duration-300">
                            <FaTrophy className="mr-3" /> My Badges
                        </Link>

                        <Link to="/Challenge" className="text-white text-lg font-semibold hover:bg-[#00bd9d] p-3 rounded-md flex items-center transition ease-in-out duration-300">

                            <FaTrophy className="mr-3" /> My Challenges
                        </Link>
                        <Link to="/localculture" className="text-white text-lg font-semibold hover:bg-[#00bd9d] p-3 rounded-md flex items-center transition ease-in-out duration-300">
                            <FaLeaf  className="mr-3" /> Local Immersion
                        </Link>
                        <Link to="/offline-mode" className="text-white text-lg font-semibold hover:bg-[#00bd9d] p-3 rounded-md flex items-center transition ease-in-out duration-300">
                            <FaDownload className="mr-3" /> Offline Mode
                        </Link>
                        <Link to="/green-points-system" className="text-white text-lg font-semibold hover:bg-[#00bd9d] p-3 rounded-md flex items-center transition ease-in-out duration-300">
                            <FaDownload className="mr-3" /> Green Points
                        </Link>

                    </div>
                </div>
                <Link to="/profile" className="text-white flex items-center text-xl font-bold hover:text-gray-300">
                    <FaUserCircle className="mr-3" /> My Profile
                </Link>
            </div>

            {/* Main Content */}
            <div className="w-4/5 p-8">
                {/* <ToastContainer /> */}
                <motion.h1
                    className="text-5xl font-bold text-[#49c6e5] mb-8 text-center"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome to Travello, the adventure starts here!
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow border border-gray-200`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="md:w-1/2 p-4">
                                <motion.img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="rounded-lg w-full hover:scale-105 transition-transform"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                />
                            </div>
                            <div className="md:w-1/2 p-4 text-center md:text-left">
                                <motion.div
                                    initial={{ x: -30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <h2 className="text-3xl font-bold text-[#00bd9d] mb-4 flex items-center justify-center md:justify-start">
                                        {feature.icon} <span className="ml-3">{feature.title}</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg mb-4">{feature.description}</p>
                                    <Link to={feature.link} className="inline-block px-6 py-2 rounded-md bg-[#49c6e5] text-white text-lg font-semibold transition-colors hover:bg-[#00bd9d]">
                                        Explore
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
