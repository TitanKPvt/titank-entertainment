import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrolltoTop';
import HomeServices from './components/HomeServices';
import HomeAchievements from './components/HomeAchievements';
import SpecialSections from './components/SpecialSections';
import IntroAnimation from './components/IntroAnimation';
import NotFound from './components/NotFound'; // ✅ NEW IMPORT

// Lazy-loaded components (non-landing pages)
const About = React.lazy(() => import('./components/About'));
const Services = React.lazy(() => import('./components/Services'));
const Achievements = React.lazy(() => import('./components/Achievements'));
const Contact = React.lazy(() => import('./components/Contact'));

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={`${import.meta.env.BASE_URL}cover-page.webp`}
          type="image/webp"
        />
        <style>{`body { background-color: #000; margin: 0; padding: 0; }`}</style>
      </Helmet>

      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-black overflow-hidden">
          {/* Always render content, hide behind intro initially */}
          <div className={`transition-opacity duration-500 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
            <Header />

            <Suspense fallback={<div className="text-white text-center mt-10">Loading...</div>}>
              <PageWrapper>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Hero />
                        <HomeServices />
                        <HomeAchievements />
                        <SpecialSections />
                        <Contact />
                      </>
                    }
                  />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/achievements" element={<Achievements />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} /> {/* ✅ 404 Route */}
                </Routes>
              </PageWrapper>
            </Suspense>

            <Footer />
          </div>

          {/* Intro animation on top */}
          {showIntro && (
            <div className="fixed inset-0 z-[9999]">
              <IntroAnimation
                onComplete={() => {
                  window.scrollTo({ top: 0, behavior: 'auto' });
                  setShowIntro(false);
                }}
              />
            </div>
          )}
        </div>
      </Router>
    </>
  );
}

export default App;
