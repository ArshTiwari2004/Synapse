import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Update this line
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

const AccountCreated = () => {
    const navigate = useNavigate(); // Update this line
    const [isConfettiVisible, setConfettiVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Hide confetti after 5 seconds
        const confettiTimer = setTimeout(() => {
            setConfettiVisible(false);
        }, 5000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(confettiTimer);
        };
    }, []);

    const handleLoginRedirect = () => {
        navigate('/signin'); // Update this line to use navigate
    };

    return (
        <div className="container mx-auto mt-10 p-6 bg-white text-white text-center relative">
            {isConfettiVisible && <Confetti width={windowWidth} height={windowHeight} />}
            <motion.img 
                src="celebration.svg" // Replace with your image URL
                alt="Celebration" 
                className="mx-auto mb-6 w-32 h-32 rounded-full"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.h2 
                className="text-3xl font-bold text-emerald-800 mb-4"
                initial={{ y: -50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                🎉 Account Successfully Created! 🎉
            </motion.h2>
            <motion.p 
                className="mb-4 text-emerald-800 text-lg"
                initial={{ y: -30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                Welcome! Your account has been created successfully. 
                You can now explore our platform and all its features.
            </motion.p>
            <motion.p 
                className="mb-6 text-emerald-800 text-lg"
                initial={{ y: -30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                To get started, please login to your account.
            </motion.p>
            <motion.button 
                onClick={handleLoginRedirect} 
                className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
                initial={{ scale: 1 }} 
                whileHover={{ scale: 1.1 }} 
                transition={{ type: 'spring', stiffness: 300 }}
            >
                Login to Your Account
            </motion.button>
        </div>
    );
};

export default AccountCreated;
