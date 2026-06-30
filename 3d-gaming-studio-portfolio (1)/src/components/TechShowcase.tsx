import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useMousePosition } from '../hooks/useMousePosition';

const techItems = [
  { name: 'Unreal Engine 5', pct: 95, color: '#00f0ff' },
  { name: 'Unity', pct: 90, color: '#a855f7' },
  { name: 'Custom Engine', pct: 85, color: '#ec4899' },
  { name: 'DirectX 12 / Vulkan', pct: 92, color: '#10b981' },
  { name: 'AI & Machine Learning', pct: 78, color: '#f59e0b' },
  { name: 'Cloud Infrastructure', pct: 88, color: '#3b82f6' },
];

const platforms = [
  { name: 'PC', icon: '🖥️' },
  { name: 'PlayStation', icon: '🎮' },
  { name: 'Xbox', icon: '🕹️' },
  { name: 'Nintendo', icon: '🎯' },
  { name: 'Mobile', icon: '📱' },
  { name: 'VR/AR', icon: '🥽' },
];

export default function TechShowcase() {
  const { ref: titleRef, isInView: titleInView } = useInView();
  const { ref: techRef, isInView: techInView } = useInView({ threshold: 0.2 });
  const { normalized } = useMousePosition();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-neon-purple/5 blur-[120px]"
          style={{
            x: normalized.x * 30,
            y: normalized.y * 30,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[120px]"
          style={{
            x: normalized.x * -20,
            y: normalized.y * -20,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="font-rajdhani text-sm font-semibold tracking-[0.3em] text-neon-cyan uppercase"
          >
            Our Technology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4"
          >
            POWERED BY <span className="gradient-text">TECH</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mt-6"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Tech Stack Bars */}
          <div ref={techRef} className="space-y-6">
            <h3 className="font-rajdhani text-xl font-bold text-white mb-8">
              Technology <span className="text-neon-cyan">Expertise</span>
            </h3>
            {techItems.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -30 }}
                animate={techInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-rajdhani text-sm font-semibold text-gray-300">{tech.name}</span>
                  <span className="font-orbitron text-xs font-bold" style={{ color: tech.color }}>
                    {tech.pct}%
                  </span>
                </div>
                <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${tech.color}80, ${tech.color})`,
                      boxShadow: `0 0 10px ${tech.color}40`,
                    }}
                    initial={{ width: 0 }}
                    animate={techInView ? { width: `${tech.pct}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: i * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Platforms & 3D Card */}
          <div className="space-y-8">
            <h3 className="font-rajdhani text-xl font-bold text-white">
              Target <span className="text-neon-purple">Platforms</span>
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {platforms.map((platform, i) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    z: 20,
                  }}
                  className="bg-dark-800/40 border border-white/5 rounded-xl p-6 text-center hover:border-neon-purple/30 transition-colors cursor-pointer"
                  style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
                  data-cursor-hover
                >
                  <div className="text-3xl mb-2">{platform.icon}</div>
                  <span className="font-rajdhani text-sm font-semibold text-gray-400">{platform.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-dark-700/50 to-dark-800/50 border border-white/5 rounded-xl p-8"
            >
              <h4 className="font-rajdhani text-lg font-bold text-white mb-6">Performance Metrics</h4>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Avg. Frame Rate', value: '120 FPS', color: '#00f0ff' },
                  { label: 'Load Time', value: '<2s', color: '#a855f7' },
                  { label: 'Uptime', value: '99.9%', color: '#10b981' },
                  { label: 'Bug Fix Time', value: '<24h', color: '#ec4899' },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="font-orbitron text-2xl font-bold" style={{ color: metric.color }}>
                      {metric.value}
                    </div>
                    <div className="font-rajdhani text-xs text-gray-500 uppercase tracking-wider mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
