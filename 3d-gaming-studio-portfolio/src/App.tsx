import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ParticleField from './components/ParticleField';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import GamesShowcase from './components/GamesShowcase';
import AboutSection from './components/AboutSection';
import TechShowcase from './components/TechShowcase';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useScrollProgress } from './hooks/useScrollProgress';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { progress } = useScrollProgress();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-dark-900 text-white noise-overlay">
      <LoadingScreen isLoading={isLoading} />
      <CustomCursor />
      <ParticleField />

      {/* Scroll Progress Bar - Side */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2">
        <div className="w-0.5 h-32 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-gradient-to-b from-neon-cyan to-neon-purple rounded-full"
            style={{ height: `${progress * 100}%` }}
          />
        </div>
        <span className="font-orbitron text-[10px] text-gray-600">{Math.round(progress * 100)}%</span>
      </div>

      {/* Main Content */}
      <Navbar />

      <main>
        <HeroSection />

        {/* Section Divider */}
        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
        </div>

        <MarqueeSection />
        <GamesShowcase />

        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
        </div>

        <AboutSection />

        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
        </div>

        <TechShowcase />
        <ServicesSection />

        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />
        </div>

        <TeamSection />
        <TestimonialsSection />

        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
        </div>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
