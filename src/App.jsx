import { useState, useEffect } from 'react';
import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Method from './components/Method';
import Learn from './components/Learn';
import Testimonials from './components/Testimonials';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import MaintenancePage from './components/MaintenancePage';

const THEME_KEY = 'fran-theme';
const maintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

function getInitialTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return 'light';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  
  if (maintenanceMode) {
    return <MaintenancePage />;
  }
  
  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Method />
      <Learn />
      <Testimonials />
      <CtaFinal />
      <Footer />
    </>
  );
}
