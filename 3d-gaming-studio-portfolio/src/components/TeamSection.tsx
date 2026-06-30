import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Globe, Mail, Link as LinkIcon } from 'lucide-react';

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/8108355/pexels-photo-8108355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    bio: 'Visionary leader with 20+ years in the gaming industry. Previously led development at top AAA studios.',
    color: '#00f0ff',
    initials: 'AC',
  },
  {
    name: 'Sarah Park',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/8107833/pexels-photo-8107833.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    bio: 'Award-winning creative mind behind our most iconic game worlds and characters.',
    color: '#a855f7',
    initials: 'SP',
  },
  {
    name: 'Marcus Rivera',
    role: 'Lead Engineer',
    image: 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    bio: 'Technical genius specializing in game engine architecture and rendering technology.',
    color: '#10b981',
    initials: 'MR',
  },
  {
    name: 'Emma Zhang',
    role: 'Art Director',
    image: 'https://images.pexels.com/photos/8721322/pexels-photo-8721322.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    bio: 'Masterful artist whose vision defines the stunning visual identity of every NEXUS title.',
    color: '#ec4899',
    initials: 'EZ',
  },
  {
    name: 'David Kim',
    role: 'Audio Director',
    image: 'https://images.pexels.com/photos/7675029/pexels-photo-7675029.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    bio: 'Composer and sound designer crafting the immersive audio landscapes our games are known for.',
    color: '#f59e0b',
    initials: 'DK',
  },
  {
    name: 'Lisa Thompson',
    role: 'Producer',
    image: 'https://images.pexels.com/photos/6805161/pexels-photo-6805161.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    bio: 'Expert project manager ensuring every title ships on time and above expectations.',
    color: '#3b82f6',
    initials: 'LT',
  },
];

export default function TeamSection() {
  const { ref: titleRef, isInView: titleInView } = useInView();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="font-rajdhani text-sm font-semibold tracking-[0.3em] text-neon-green uppercase"
          >
            The Creators
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4"
          >
            MEET THE <span className="gradient-text">TEAM</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-gray-400 font-inter mt-6 leading-relaxed"
          >
            The brilliant minds behind NEXUS Studios. Together, we're building the future of gaming.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-0.5 bg-gradient-to-r from-neon-green to-neon-cyan mx-auto mt-6"
          />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => {
            const { ref, isInView } = useInView({ threshold: 0.2 });
            return (
              <motion.div
                key={member.name}
                ref={ref}
                initial={{ opacity: 0, y: 40, rotateY: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{ perspective: '1000px' }}
                data-cursor-hover
              >
                <motion.div
                  className="relative bg-dark-800/30 border border-white/5 rounded-xl overflow-hidden transition-colors duration-500 hover:border-white/15"
                  whileHover={{
                    rotateY: 3,
                    rotateX: -2,
                    z: 30,
                  }}
                  transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

                    {/* Colored overlay on hover */}
                    <AnimatePresence>
                      {hoveredIdx === i && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg, ${member.color}20, transparent)`,
                          }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Social Icons */}
                    <motion.div
                      className="absolute top-4 right-4 flex flex-col gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={hoveredIdx === i ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {[Globe, Mail, LinkIcon].map((Icon, j) => (
                        <motion.a
                          key={j}
                          href="#"
                          className="w-8 h-8 rounded-full bg-dark-900/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-orbitron font-bold"
                        style={{
                          backgroundColor: `${member.color}15`,
                          color: member.color,
                          border: `1px solid ${member.color}30`,
                        }}
                      >
                        {member.initials}
                      </div>
                      <div>
                        <h3 className="font-rajdhani text-lg font-bold text-white">{member.name}</h3>
                        <span className="font-rajdhani text-xs font-semibold uppercase tracking-wider" style={{ color: member.color }}>
                          {member.role}
                        </span>
                      </div>
                    </div>
                    <p className="font-inter text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, transparent, ${member.color}60, transparent)` }} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '200+', label: 'Team Members', color: '#00f0ff' },
            { value: '15+', label: 'Countries', color: '#a855f7' },
            { value: '8', label: 'Years Average Exp.', color: '#ec4899' },
            { value: '3', label: 'Global Offices', color: '#10b981' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-dark-800/20 border border-white/5">
              <div className="font-orbitron text-3xl md:text-4xl font-black" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="font-rajdhani text-sm text-gray-500 uppercase tracking-wider mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
