import React, { useState } from 'react';
import axios from 'axios';
import countries from './countries';
import { HiUser, HiMail, HiLockClosed, HiPhone } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { auth, googleProvider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    country: '',
    gender: '',
    dateOfBirth: '',
    phone: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

   
  };

  const handleGoogleSignIn = async () => {
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <div className="flex flex-col justify-center items-center p-10 w-full max-w-md bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-1 text-emerald-800">Sign Up</h1>
        <p className="text-lg text-gray-600 mb-4">It's quick and easy!</p>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="flex space-x-4 mb-4">
            <div className="flex items-center w-full border-b border-black pb-2 mb-4">
              <HiUser className="text-gray-400 w-5 h-5 mx-2" />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-1 border-0 focus:outline-none"
              />
           </div>
            <div className="flex items-center w-full border-b border-black pb-2 mb-4">
              <HiUser className="text-gray-400 w-5 h-5 mx-2" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-1 border-0 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center border-b border-black pb-2 mb-4">
            <HiMail className="text-gray-400 w-5 h-5 mx-2" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-1 border-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center border-b border-black pb-2 mb-4">
            <HiLockClosed className="text-gray-400 w-5 h-5 mx-2" />
            <input
              type="password"
              name="password"
              placeholder="Create a Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-1 border-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center border-b border-black pb-2 mb-4">
            <HiLockClosed className="text-gray-400 w-5 h-5 mx-2" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-1 border-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center border-b border-black pb-2 mb-4">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-1 border-0 focus:outline-none"
              required
            >
              <option value="" disabled>Select your country</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center border-b border-black pb-2 mb-4">
            <HiPhone className="text-gray-400 w-5 h-5 mx-2" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-1 border-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center border-b border-black pb-2 mb-4">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-1 border-0 focus:outline-none"
              required
            >
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer-not-to-say">Prefer Not to Say</option>
            </select>
          </div>
          <div className="flex items-center border-b border-black pb-2 mb-4">
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full p-1 border-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-600">Remember Me</label>
          </div>
          <button
            type="button"
            onClick={() => console.log('Forgot Password Clicked')}
            className="text-emerald-800 text-sm hover:underline mb-4 mx-auto"
          >
            Forgot Password?
          </button>
          <button to="/account-created" 
            type="submit"
            onClick={handleSubmit}
            className="w-full p-3 bg-emerald-800 text-white rounded hover:bg-emerald-700 transition duration-200"
          >
            Create Account
          </button>
        </form>
        <div className="mt-4 flex items-center justify-center">
          <p className="text-gray-600">or continue with</p>
          <button
            onClick={handleGoogleSignIn}
            className="ml-4 flex items-center p-3 bg-white border border-emerald-800 text-emerald-800 rounded hover:bg-emerald-100 transition duration-200"
          >
            <FcGoogle className="w-6 h-6 mr-2" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;