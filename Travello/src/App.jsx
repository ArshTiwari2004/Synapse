import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landingpage";
import Signup from "./components/Signup";
import Login from "./components/Signin";
import NotFoundPage from "./components/NotFoundPage";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';
import ReviewSection from "./components/Review";
import About from "./components/Aboutus";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Login />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <Toaster />
    </>
  )
}

const Landing = () => {
  return (
    <div className="flex flex-col">
      <LandingPage />
      <About />
      <ReviewSection />
    </div>
  );
};

export default App


