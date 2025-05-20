import { useState } from 'react';
import CustomCursor from './pages/CustomCursor';
import ThreeBackground from './pages/ThreeBackground';
import Header from './components/Header';
import HomeSection from './pages/HomeSection';
import AboutSection from './pages/AboutSection';
import ProjectsSection from './pages/ProjectsSection';
import ContactSection from './pages/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: <HomeSection setActiveSection={setActiveSection} />,
    about: <AboutSection />,
    projects: <ProjectsSection />,
    contact: <ContactSection />,
  };

  return (
    <>
      <CustomCursor />
      <ThreeBackground />
      <div className="relative min-h-screen flex flex-col text-white p-8 z-10">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />

        <main className="flex-grow flex items-center justify-center">
          {sections[activeSection]}
        </main>

        <Footer />
      </div>
    </>
  );
}