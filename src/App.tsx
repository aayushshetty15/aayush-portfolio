import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Statistics from '@/components/sections/Statistics';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Statistics />
          <Education />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
