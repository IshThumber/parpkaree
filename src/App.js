import React from "react";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MissionNVision from "./Pages/MissionNVision";
import Projects from "./Pages/Projects";
import CoreTeam from "./Pages/CoreTeam";
import Help from "./Pages/Help";
import Donate from "./Pages/Donate";
import Member from "./Pages/Member";
import Volunteer from "./Pages/Volunteer";
import ContactUs from "./Pages/ContactUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import FAQs from "./Pages/FAQs";
import TermsnCondition from "./Pages/TermsnCondition";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/mission-n-vision" element={<MissionNVision />} />
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/core-team" element={<CoreTeam />} />
        <Route path="/help" element={<Help />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/member" element={<Member />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/terms-n-conditions" element={<TermsnCondition />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
