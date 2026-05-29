import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return 'dark'; // Dark theme default
  });

  // Track root application theme class updates
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {/* 1. Introductory Telemetry Preloader overlay */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* 2. Primary Layout Framework */}
      {!isLoading && (
        <div id="app-root-container" className="min-h-screen bg-dark-bg text-zinc-100 font-sans relative flex flex-col antialiased selection:bg-brand-violet/30 selection:text-white overflow-x-hidden">
          {/* Ambient particle canvas background */}
          <ParticleBackground />

          {/* Luxury cursor springs for desktops */}
          <CustomCursor />

          {/* Adaptive header glass nav with state toggle */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Sections framework */}
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>

          {/* Structured footer credits */}
          <Footer />
        </div>
      )}
    </>
  );
}
