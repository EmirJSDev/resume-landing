import React, { useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import HeroSection from "./components/sections/herosection/HeroSection";
import AboutSection from "./components/sections/aboutsection/AboutSection";
import ExperienceSection from "./components/sections/experiencesection/ExperienceSection";
import SkillsSection from "./components/sections/skillssection/SkillsSection";
import ContactSection from "./components/sections/contactsection/ContactSection";

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <Router>
        <LanguageHandler />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="/:lang(en|ru)" element={<MainContentWrapper />} />
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
};

// Обработчик смены языка
const LanguageHandler: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const lang = location.pathname.split("/")[1];
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang).catch((error) => {
        console.error("Ошибка смены языка:", error);
      });
    }
  }, [location, i18n]);

  return null;
};

// Обертка для `MainContent`, чтобы передавать `lang` через `useParams`
const MainContentWrapper: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  return lang ? <MainContent lang={lang} /> : <Navigate to="/en" replace />;
};

// Основное содержимое страницы
const MainContent: React.FC<{ lang: string }> = ({ lang }) => {
  console.log("Отображение MainContent для языка:", lang);

  return (
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
  );
};

export default App;
