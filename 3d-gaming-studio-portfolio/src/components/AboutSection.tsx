import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Cpu, Zap, Globe, Shield } from 'lucide-react';

const milestones = [
  { year: '2015', title: 'Founded', desc: 'Started with 5 passionate developers in a garage' },
  { year: '2017', title: 'First Hit', desc: 'Our debut title reached 1M downloads' },
  { year: '2019', title: 'AAA Studio', desc: 'Grew to 200+ team members across 3 studios' },
  { year: '2021', title: 'Global Impact', desc: 'Games localized in 30+ languages worldwide' },
  { year: '2023', title: 'Innovation', desc: 'Pioneered next-gen rendering technology' },
  { year: '2025', title: 'Today', desc: '50M+ active players across all titles' },
];

const values = [
  { icon: Cpu, title: 'Innovation First', desc: 'Pushing boundaries with cutting-edge technology', color: '#00f0ff' },
  { icon: Zap, title: 'Player Focused', desc: 'Every decision driven by player experience', color: '#a855f7' },
  { icon: Globe, title: 'Global Reach', desc: 'Creating games for players around the world', color: '#ec4899' },
  { icon: Shield, title: 'Quality Obsessed', desc: 'No compromises on quality and polish', color: '#10b981' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref: titleRef, isInView: titleInView } = useInView();
  const { ref: timelineRef, isInView: timelineInView } = useInView({ threshold: 0.1 });
  const { ref: valuesRef, isInView: valuesInView } = useInView({ threshold: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        style={{ y: bgParallax }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/about-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-dark-900/80" />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-900 to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="font-rajdhani text-sm font-semibold tracking-[0.3em] text-neon-purple uppercase"
          >
            Our Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4"
          >
            ABOUT <span className="gradient-text">NEXUS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-gray-400 font-inter mt-6 leading-relaxed"
          >
            Born from a passion for creating unforgettable gaming experiences, NEXUS Studios
            has grown from a small indie team to an industry-leading game development powerhouse.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-0.5 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mt-6"
          />
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mb-32">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10">
            <motion.div
              initial={{ height: 0 }}
              animate={timelineInView ? { height: '100%' } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="w-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink"
            />
          </div>

          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={timelineInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
              className={`relative flex items-center mb-12 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                <div className="bg-dark-800/50 backdrop-blur-sm border border-white/5 rounded-lg p-6 hover:border-neon-purple/30 transition-colors duration-300">
                  <span className="font-orbitron text-2xl font-bold text-neon-cyan">{milestone.year}</span>
                  <h4 className="font-rajdhani text-xl font-bold text-white mt-1">{milestone.title}</h4>
                  <p className="font-inter text-sm text-gray-400 mt-1">{milestone.desc}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-purple border-2 border-dark-900 z-10"
                style={{ boxShadow: '0 0 15px rgba(168,85,247,0.5)' }} />

              {/* Spacer for alignment */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div ref={valuesRef}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            className="font-orbitron text-2xl md:text-3xl font-bold text-white text-center mb-12"
          >
            Our Core <span className="text-neon-cyan">Values</span>
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                animate={valuesInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                className="group relative bg-dark-800/30 backdrop-blur-sm border border-white/5 rounded-xl p-8 text-center hover:border-white/10 transition-all duration-500"
                style={{ perspective: '1000px' }}
                data-cursor-hover
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${value.color}08, transparent 70%)`,
                  }}
                />

                <motion.div
                  className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4"
                  style={{
                    border: `1px solid ${value.color}30`,
                    backgroundColor: `${value.color}10`,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <value.icon className="w-7 h-7" style={{ color: value.color }} />
                </motion.div>

                <h4 className="font-rajdhani text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="font-inter text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
