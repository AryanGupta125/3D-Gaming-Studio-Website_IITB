import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jason Mitchell',
    role: 'Editor-in-Chief, GameVerse',
    quote: 'NEXUS Studios consistently delivers gaming experiences that redefine what we thought was possible. Their attention to detail and commitment to innovation is unmatched in the industry.',
    rating: 5,
    color: '#00f0ff',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Senior Reviewer, PixelCritic',
    quote: 'Every title from NEXUS feels like a love letter to gaming. The worlds they create are so immersive, you forget you\'re playing a game. Truly masterful craftsmanship.',
    rating: 5,
    color: '#a855f7',
  },
  {
    id: 3,
    name: 'Marco DeLuca',
    role: 'Community Manager, Steam',
    quote: 'The community engagement from NEXUS is incredible. They listen to players, iterate quickly, and always deliver beyond expectations. A model studio for the industry.',
    rating: 5,
    color: '#ec4899',
  },
  {
    id: 4,
    name: 'Yuki Tanaka',
    role: 'CEO, Tokyo Game Awards',
    quote: 'NEXUS Studios represents the future of game development. Their fusion of cutting-edge technology with profound storytelling sets a new standard for excellence.',
    rating: 5,
    color: '#10b981',
  },
];

export default function TestimonialsSection() {
  const { ref: titleRef, isInView: titleInView } = useInView();
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[activeIdx];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="font-rajdhani text-sm font-semibold tracking-[0.3em] text-neon-purple uppercase"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-orbitron text-4xl md:text-5xl font-black text-white mt-4"
          >
            WHAT THEY <span className="gradient-text">SAY</span>
          </motion.h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="w-full"
              >
                <div className="bg-dark-800/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12 text-center relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: `${current.color}20`,
                        border: `1px solid ${current.color}40`,
                      }}
                    >
                      <Quote className="w-4 h-4" style={{ color: current.color }} />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-inter text-lg md:text-xl text-gray-300 leading-relaxed italic mb-8 max-w-3xl mx-auto">
                    "{current.quote}"
                  </p>

                  {/* Author */}
                  <div>
                    <div className="font-rajdhani text-lg font-bold text-white">{current.name}</div>
                    <div className="font-rajdhani text-sm" style={{ color: current.color }}>
                      {current.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-cursor-hover
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > activeIdx ? 1 : -1);
                    setActiveIdx(i);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIdx
                      ? 'w-8 h-2 bg-neon-cyan'
                      : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                  }`}
                  data-cursor-hover
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-cursor-hover
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
