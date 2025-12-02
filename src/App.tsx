/*
 *copyright 2025 HazemSoltan
 *Licensed under the Apache License, Version 2.0 (the "License");
 */

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Services from '@/components/Services';
import Resume from '@/components/Resume';

// 1. Import your new page component here
import AllProjectsPage from '@/pages/AllProjectsPage';
import ProjectDetails from '@/pages/ProjectDetails';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Lenis from 'lenis';
// 2. Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// 3. Define the Home component
const Home = () => (
  <>
    <Hero />
    <Stats />
    <Projects />
    <About />
    <Services />
    <Resume />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    // ⚠️ REMOVED <Router> wrapper here because it is already in main.tsx
    <main
      className='flex flex-col container
   mx-auto p-10 max-w-4xl lg:pr-10 lg:max-w-6xl'
    >
      <ScrollToTop />

      <Routes>
        {/* The Main Landing Page */}
        <Route
          path='/'
          element={<Home />}
        />

        {/* The New Projects Page */}
        <Route
          path='/projects'
          element={<AllProjectsPage />}
        />
        <Route
          path='/projects/:id'
          element={<ProjectDetails />}
        />
      </Routes>
    </main>
  );
}

export default App;
