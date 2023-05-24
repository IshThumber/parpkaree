import React from "react";
import Navbar from "./components/Navbar";
import WelcomeNote from "./components/WelcomeNote";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import MemberAndVolunteer from "./components/MemberAndVolunteer";
import Gallery from "./components/Gallery";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

const Main = () => {
  return (
    <>
      <div>
        <nav>
          <Navbar />
        </nav>
        <main>
          <WelcomeNote />
          <Hero />
          <AboutUs />
          <Projects />
          <MemberAndVolunteer />
          <Gallery />
          <SocialMedia />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Main;
