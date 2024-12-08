import React from 'react';
import Header from './components/layout/header/Header';
import HeroSection from './components/sections/herosection/HeroSection';
import AboutSection from './components/sections/aboutsection/AboutSection';
import ExperienceSection from './components/sections/experiencesection/ExperienceSection';
import SkillsSection from './components/sections/skillssection/SkillsSection';
import ContactSection from './components/sections/contactsection/ContactSection';
import Footer from './components/layout/footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="contacts">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
};

export default App;
