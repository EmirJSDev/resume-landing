import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import { useTranslation } from 'react-i18next';

// Ленивый импорт секций
const HeroSection = React.lazy(() => import('./components/sections/herosection/HeroSection'));
const AboutSection = React.lazy(() => import('./components/sections/aboutsection/AboutSection'));
const ExperienceSection = React.lazy(() => import('./components/sections/experiencesection/ExperienceSection'));
const SkillsSection = React.lazy(() => import('./components/sections/skillssection/SkillsSection'));
const ContactSection = React.lazy(() => import('./components/sections/contactsection/ContactSection'));

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();  // Хук должен быть внутри Router

  useEffect(() => {
    const lang = location.pathname.split('/')[1]; // Получаем язык из пути, например "/en" или "/ru"
    if (lang && lang !== i18n.language) {
      // Асинхронно меняем язык и ждем его окончания
      i18n.changeLanguage(lang).catch((error) => {
        console.error("Error changing language:", error);
      });
    }
  }, [location, i18n]);

  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Перенаправление с корня на английскую версию */}
          <Route path="/" element={<Navigate to="/en" replace />} />

          {/* Динамические роуты для языков */}
          <Route
            path="/:lang(en|ru)"
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
