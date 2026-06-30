import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { ChevronDown, Play } from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { normalized } = useMousePosition();
  const [count, setCount] = useState({ games: 0, players: 0, awards: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const targets = { games: 24, players: 50, awards: 120 };
    const duration = 2000;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount({
        games: Math.floor(targets.games * eased),
        players: Math.floor(targets.players * eased),
        awards: Math.floor(targets.awards * eased),
      });
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
            transform: `translate(${normalized.x * -10}px, ${normalized.y * -10}px) scale(1.1)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/40 to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-transparent to-neon-cyan/10" />
      </motion.div>

      {/* Floating 3D Geometric Shapes */}
      <div className="absolute inset-0 z-[1] pointer-events-none perspective-container overflow-hidden">
        {/* Hexagon */}
        <motion.div
          className="absolute top-[15%] right-[15%] w-32 h-32"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            rotateX: { duration: 20, repeat: Infinity, ease: 'linear' },
            rotateY: { duration: 15, repeat: Infinity, ease: 'linear' },
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            transformStyle: 'preserve-3d',
            transform: `translate(${normalized.x * 30}px, ${normalized.y * 30}px)`,
          }}
        >
          <div className="w-full h-full border border-neon-cyan/30 rotate-45 rounded-lg"
            style={{ boxShadow: '0 0 30px rgba(0,240,255,0.15)' }} />
        </motion.div>

        {/* Circle */}
        <motion.div
          className="absolute bottom-[25%] left-[10%] w-24 h-24"
          animate={{ y: [0, 30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transform: `translate(${normalized.x * -20}px, ${normalized.y * -20}px)`,
          }}
        >
          <div className="w-full h-full rounded-full border border-neon-purple/30"
            style={{ boxShadow: '0 0 30px rgba(168,85,247,0.15)' }} />
        </motion.div>

        {/* Triangle */}
        <motion.div
          className="absolute top-[35%] left-[20%] w-16 h-16"
          animate={{ y: [0, -15, 0], rotateZ: [0, 120, 240, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transform: `translate(${normalized.x * 15}px, ${normalized.y * 15}px)`,
          }}
        >
          <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-neon-pink/20"
            style={{ filter: 'drop-shadow(0 0 15px rgba(236,72,153,0.3))' }} />
        </motion.div>

        {/* Small dots */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-neon-cyan/40"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        style={{ y: textY, opacity, scale }}
      >
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan font-rajdhani text-sm font-semibold tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            Award-Winning Game Studio
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight mb-8"
        >
          <span className="block text-white">WE BUILD</span>
          <span className="block gradient-text relative">
            WORLDS
            <motion.span
              className="absolute -right-4 -top-4 text-lg text-neon-cyan font-rajdhani font-normal tracking-wider"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ™
            </motion.span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-inter font-light leading-relaxed mb-12"
        >
          Crafting immersive gaming experiences that push the boundaries of
          technology and storytelling. Welcome to the future of gaming.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 font-rajdhani font-bold text-lg tracking-wider uppercase rounded-sm overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,240,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Games
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            className="group flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-rajdhani font-semibold text-lg tracking-wider uppercase rounded-sm hover:border-neon-purple/50 hover:bg-neon-purple/5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            <div className="w-10 h-10 rounded-full border border-neon-purple/50 flex items-center justify-center group-hover:bg-neon-purple/20 transition-colors">
              <Play className="w-4 h-4 text-neon-purple ml-0.5" />
            </div>
            Watch Showreel
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: count.games, suffix: '+', label: 'Games Shipped' },
            { value: count.players, suffix: 'M+', label: 'Active Players' },
            { value: count.awards, suffix: '+', label: 'Awards Won' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-white">
                {stat.value}<span className="text-neon-cyan">{stat.suffix}</span>
              </div>
              <div className="font-rajdhani text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-rajdhani text-xs text-gray-500 uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 rounded-full bg-neon-cyan"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
