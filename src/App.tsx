import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';

// Ленивый импорт секций
const HeroSection = React.lazy(() => import('./components/sections/herosection/HeroSection'));
const AboutSection = React.lazy(() => import('./components/sections/aboutsection/AboutSection'));
const ExperienceSection = React.lazy(() => import('./components/sections/experiencesection/ExperienceSection'));
const SkillsSection = React.lazy(() => import('./components/sections/skillssection/SkillsSection'));
const ContactSection = React.lazy(() => import('./components/sections/contactsection/ContactSection'));

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Перенаправление с корня на английскую версию */}
          <Route path="/" element={<Navigate to="/en" replace />} />

          {/* Английская версия */}
          <Route
            path="/en"
            element={
              <>
                <main>
                  <section id="hero" aria-labelledby="hero-title">
                    <HeroSection />
                  </section>
                  <section id="about" aria-labelledby="about-title">
                    <AboutSection />
                  </section>
                  <section id="experience" aria-labelledby="experience-title">
                    <ExperienceSection />
                  </section>
                  <section id="skills" aria-labelledby="skills-title">
                    <SkillsSection />
                  </section>
                  <section id="contacts" aria-labelledby="contacts-title">
                    <ContactSection />
                  </section>
                </main>
                <Footer />
              </>
            }
          />

          {/* Русская версия */}
          <Route
            path="/ru"
            element={
              <>
                <main>
                  <section id="hero" aria-labelledby="hero-title">
                    <HeroSection />
                  </section>
                  <section id="about" aria-labelledby="about-title">
                    <AboutSection />
                  </section>
                  <section id="experience" aria-labelledby="experience-title">
                    <ExperienceSection />
                  </section>
                  <section id="skills" aria-labelledby="skills-title">
                    <SkillsSection />
                  </section>
                  <section id="contacts" aria-labelledby="contacts-title">
                    <ContactSection />
                  </section>
                </main>
                <Footer />
              </>
            }
          />

          {/* Перенаправление для некорректных путей */}
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
