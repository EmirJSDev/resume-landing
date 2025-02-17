import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

// ✅ Ленивые загрузки секций
const HeroSection = lazy(() => import("./components/sections/herosection/HeroSection"));
const AboutSection = lazy(() => import("./components/sections/aboutsection/AboutSection"));
const ExperienceSection = lazy(() => import("./components/sections/experiencesection/ExperienceSection"));
const SkillsSection = lazy(() => import("./components/sections/skillssection/SkillsSection"));
const ContactSection = lazy(() => import("./components/sections/contactsection/ContactSection"));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <LanguageHandler />
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path="/en" element={<MainContent />} />
            <Route path="/ru" element={<MainContent />} />
            <Route path="*" element={<Navigate to="/en" replace />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </ThemeProvider>
  );
};

const LanguageHandler: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (!i18n.isInitialized) return;
    const lang = location.pathname.split("/")[1];
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang).catch(console.error);
    }
  }, [location, i18n]);

  return null;
};

const MainContent: React.FC = () => {
  const { i18n } = useTranslation();
  const params = useParams<{ lang?: string }>();
  const lang = params.lang || "en";

  console.log("Отображение MainContent для языка:", lang);

  if (!i18n.isInitialized) {
    return <div>Loading content...</div>;
  }

  return (
    <main>
      <Suspense fallback={<div>Loading section...</div>}>
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
      </Suspense>
    </main>
  );
};

export default App;
