import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landingpage";
import Signup from "./components/Signup";
import Login from "./components/Signin";
import About from "./components/Aboutus";
import FeatureCarousel from "./components/Carousel";

import Footer from "./components/Footer";

import AccountCreated from "./components/Accountcreated";
import Dashboard from "./components/Dashboard";
import SocialIntegration from "./components/Socials.jsx";

// import CompleteChallengesPage from "./components/Challenges.jsx";
import ProtectedRoute from './ProtectedRoutes.jsx';
import { AuthProvider } from './context/authContext.jsx';
import { Toaster } from 'react-hot-toast';
import Profile from "./components/Profile";
import Localculture from "./components/localcultureimmersion";
import Quests from "./components/Quests";

import ReviewSection from "./components/Review";

import Badges from "./components/Badges";
import HiddenAttractions from "./components/Hiddenattractions";
// import QuestsAndChallenges from "./components/QuestAndChalleneges";
// import Quest from "./components/Quest";
// import Challenge from "./components/Challenge";
import Leaderboard from "./components/Leaderboard";
import NotFoundPage from "./components/NotFoundPage";

import Challenge from "./components/Challenge.jsx";


import AchievementSection from "./components/Acheivemnt";
import BlogSection from "./components/Blog";
import Newsletter from "./components/Newsletter";
import OfflineMode from "./components/Offlinemode.jsx";
import GreenPointsSystem from "./components/GreenPointsSystem.jsx";
import EcoFriendlyPage from "./components/Ecofriendly.jsx";
import CarbonReductionMap from "./components/Carbonreductionmap.jsx";
import CommunityLiving from "./components/CommunityLiving.jsx";
import CulturalActivities from "./components/CulturalActivities.jsx";
import HandicraftsWorkshops  from "./components/HandicraftsWorkshops.jsx";
import LocalCuisines from "./components/LocalCuisines.jsx";
import NatureAdventure from "./components/NatureAdventure.jsx";
import TraditionalMusicDance from "./components/TraditionalMusicDance.jsx";
import Local from "./components/Local";
import Udupi from "./components/Udupi.jsx";
import Sdg from "./components/Sdg.jsx";
import Ajanta from "./components/Ajantacaves.jsx";
import AnejhariCamp from "./components/Anejharicamp.jsx";
import ArbiFalls from "./components/Arbifall.jsx";
import KudluTeertha from "./components/Kudlufalls.jsx";
import KemmannuBridge from "./components/Kemmannu.jsx";
import Gomateshwara from "./components/Gomateshwara.jsx";
import Shirdi from "./components/Shirdi.jsx";
import Lonavla from "./components/Lonavla.jsx";
import GatewayofIndia from "./components/GatewayofIndia.jsx";
import Kohlapur from "./components/Kohlapur.jsx";

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/accountcreated" element={<AccountCreated />} />
              <Route path="/dashboard" element={<ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>} />
              <Route path="/socials" element={<SocialIntegration />} />
              <Route path="/leaderboard" element={
                <ProtectedRoute>
                  <Leaderboard />
                </ProtectedRoute>} />
              {/* <Route path="/challenges" element={<CompleteChallengesPage />} /> */}

              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              <Route path="/localculture" element={
                <ProtectedRoute>
                  <Localculture />
                </ProtectedRoute>} />
              <Route path="/quests" element={
                <ProtectedRoute>
                 <Quests />
                </ProtectedRoute>} />
              <Route path="/Challenge" element={
                <ProtectedRoute>
                  <Challenge />
                </ProtectedRoute>} />
              <Route path="/my-badges" element={
                <ProtectedRoute>
                  <Badges />
                </ProtectedRoute>} />
              <Route path="/hidden-attraction-maps" element={
                <ProtectedRoute>
                  <HiddenAttractions />
                </ProtectedRoute>} />
                <Route path="/offline-mode" element={
                <ProtectedRoute>
                  <OfflineMode/>
                </ProtectedRoute>} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/offline-mode" element ={<OfflineMode />} />
              <Route path="/green-points-system" element={<GreenPointsSystem />} />
              <Route path="/eco-friendly" element={<EcoFriendlyPage />} />
              <Route path ="/carbon-reduction-map" element={<CarbonReductionMap />} />
              <Route path ="/community-living" element={<CommunityLiving />} />
              <Route path ="/cultural-activities" element={<CulturalActivities />} />
              <Route path ="/handicrafts-workshops" element={<HandicraftsWorkshops />} />
              <Route path ="/local-cuisines" element={<LocalCuisines />} />
              <Route path ="/nature-adventure" element={<NatureAdventure />} />
              <Route path ="/traditional-music-dance" element={<TraditionalMusicDance />} />
              <Route path ="/local" element={<Local />} />
              <Route path ="/udupi" element={<Udupi />} />
              <Route path ="/sdg" element={<Sdg />} />
              <Route path ="/attraction/1" element={<KudluTeertha />} />
              <Route path ="/attraction/2" element={<ArbiFalls />} />
              <Route path ="/attraction/3" element={<KemmannuBridge />} />
              <Route path ="/attraction/4" element={<AnejhariCamp />} />
              <Route path ="/attraction/5" element={<Gomateshwara />} />
              <Route path ="/attraction/6" element={<GatewayofIndia/>} />
              <Route path ="/attraction/7" element={<Ajanta />} />
              <Route path ="/attraction/8" element={<Shirdi />} />
              <Route path ="/attraction/9" element={<Kohlapur />} />
              <Route path ="/attraction/10" element={<Lonavla />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <Toaster />
    </AuthProvider>
  );
};




const Landing = () => {
  return (
    <div className="flex flex-col">
      <LandingPage />
      <About />
      <AchievementSection />
      <ReviewSection />
      <BlogSection />
      <Newsletter />
    </div>
  );
};

export default App;
