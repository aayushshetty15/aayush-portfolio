import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    try {
      localStorage.removeItem('portfolio-theme');
    } catch {
      // ignore storage access errors
    }
  }, []);

  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero isLoaded={true} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
