import React from "react";
// import Navbar from "./components/Navbar";
// import WelcomeNote from "./components/WelcomeNote";
// import Hero from "./components/Hero";
// import AboutUs from "./components/AboutUs";
// import Projects from "./components/Projects";
// import MemberAndVolunteer from "./components/MemberAndVolunteer";
// import Gallery from "./components/Gallery";
// import SocialMedia from "./components/SocialMedia";
// import Footer from "./components/Footer";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MissionNVision from "./Pages/MissionNVision";
import Projects from "./Pages/Projects";
import CoreTeam from "./Pages/CoreTeam";
import Help from "./Pages/Help";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/mission-n-vision" element={<MissionNVision />} />
        <Route path="/about-us" element={<h1>About Us</h1>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/core-team" element={<CoreTeam />} />
        <Route path="/help" element={<Help />} />
        <Route path="/donate" element={<h1>Donate</h1>} />
        <Route path="/member" element={<h1>Membership</h1>} />
        <Route path="/volunteer" element={<h1>Volunteer</h1>} />
        <Route path="/contact-us" element={<h1>Contact Us</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
