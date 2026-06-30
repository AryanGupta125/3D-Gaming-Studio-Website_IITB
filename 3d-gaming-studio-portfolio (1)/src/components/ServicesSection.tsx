import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  Gamepad2, Palette, Code2, Music, Film, Headphones,
  ChevronRight, Layers, Sparkles
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Gamepad2,
    title: 'Game Development',
    shortDesc: 'Full-cycle game development from concept to launch',
    fullDesc: 'Our core team of 100+ developers specializes in creating AAA-quality games across all platforms. From initial concept and prototyping through full production and post-launch support, we handle every aspect of game development with industry-leading expertise.',
    features: ['Cross-platform Development', 'Live Service Operations', 'Performance Optimization', 'Anti-cheat Systems'],
    color: '#00f0ff',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 2,
    icon: Palette,
    title: 'Art & Design',
    shortDesc: 'Stunning visual experiences and world-building',
    fullDesc: 'Our art department brings worlds to life with breathtaking concept art, 3D modeling, animation, and visual effects. We create cohesive visual identities that immerse players in unforgettable experiences.',
    features: ['3D Character Modeling', 'Environment Design', 'VFX & Particles', 'UI/UX Design'],
    color: '#a855f7',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 3,
    icon: Code2,
    title: 'Engine Development',
    shortDesc: 'Custom game engine and tools development',
    fullDesc: 'We develop proprietary game engine technology tailored for specific project needs. Our engine team creates high-performance rendering systems, physics engines, and development tools that give us a competitive edge.',
    features: ['Custom Rendering', 'Physics Systems', 'Dev Tool Pipelines', 'Shader Development'],
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 4,
    icon: Music,
    title: 'Audio & Music',
    shortDesc: 'Immersive soundscapes and original scores',
    fullDesc: 'Our in-house audio team creates everything from sweeping orchestral scores to intricate sound effects. With a professional recording studio and world-class composers, we craft audio that elevates every moment.',
    features: ['Original Scores', 'Sound Design', 'Voice Acting Direction', 'Adaptive Audio'],
    color: '#ec4899',
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
  {
    id: 5,
    icon: Film,
    title: 'Cinematics',
    shortDesc: 'Cinematic storytelling and motion capture',
    fullDesc: 'Our cinematics department produces Hollywood-quality cutscenes and in-game cinematics. With state-of-the-art motion capture facilities and experienced directors, we bring characters and stories to life.',
    features: ['Motion Capture', 'Facial Animation', 'Real-time Cinematics', 'Storyboarding'],
    color: '#f59e0b',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 6,
    icon: Headphones,
    title: 'QA & Testing',
    shortDesc: 'Comprehensive quality assurance and playtesting',
    fullDesc: 'Our dedicated QA team ensures every game meets our high standards. With automated testing frameworks and extensive playtesting programs, we catch and fix issues before players encounter them.',
    features: ['Automated Testing', 'Performance Testing', 'Playtesting Programs', 'Bug Tracking'],
    color: '#3b82f6',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
];

function ServiceCard({ service, index, isActive, onClick }: {
  service: typeof services[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={onClick}
      className={`group relative cursor-pointer rounded-xl border transition-all duration-500 overflow-hidden ${
        isActive
          ? 'border-white/20 bg-dark-800/60'
          : 'border-white/5 bg-dark-800/20 hover:border-white/10'
      }`}
      data-cursor-hover
    >
      {/* Active Glow */}
      {isActive && (
        <motion.div
          layoutId="service-glow"
          className="absolute inset-0 rounded-xl"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${service.color}10, transparent 70%)`,
          }}
        />
      )}

      <div className="relative p-6 md:p-8">
        <div className="flex items-start gap-4">
          <motion.div
            className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
            style={{
              border: `1px solid ${service.color}30`,
              backgroundColor: `${service.color}10`,
            }}
            animate={isActive ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            <service.icon className="w-5 h-5" style={{ color: service.color }} />
          </motion.div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-rajdhani text-xl font-bold text-white">{service.title}</h3>
              <motion.div
                animate={{ rotate: isActive ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </motion.div>
            </div>
            <p className="font-inter text-sm text-gray-500 mt-1">{service.shortDesc}</p>
          </div>
        </div>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-white/5">
                <p className="font-inter text-sm text-gray-400 leading-relaxed mb-6">
                  {service.fullDesc}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <Sparkles className="w-3 h-3" style={{ color: service.color }} />
                      <span className="font-rajdhani text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [activeId, setActiveId] = useState<number | null>(1);
  const { ref: titleRef, isInView: titleInView } = useInView();

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-neon-purple/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-neon-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Layers className="w-4 h-4 text-neon-pink" />
            <span className="font-rajdhani text-sm font-semibold tracking-[0.3em] text-neon-pink uppercase">
              What We Do
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black text-white"
          >
            OUR <span className="gradient-text">SERVICES</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-0.5 bg-gradient-to-r from-neon-pink to-neon-purple mx-auto mt-6"
          />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              isActive={activeId === service.id}
              onClick={() => setActiveId(activeId === service.id ? null : service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
