import { motion } from 'framer-motion';

const awards = [
  '🏆 Game of the Year 2025',
  '⭐ Best Art Direction',
  '🎮 Best Multiplayer',
  '🎵 Best Soundtrack',
  '🌟 Innovation Award',
  '👑 Best Studio',
  '🏆 Players Choice',
  '⭐ Best Narrative',
  '🎮 Best RPG',
  '🎵 Technical Achievement',
];

export default function MarqueeSection() {
  return (
    <section className="relative py-12 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-800/50 to-dark-900" />

      {/* First Row */}
      <div className="relative flex items-center whitespace-nowrap">
        <motion.div
          className="flex items-center gap-12"
          animate={{ x: [0, -2000] }}
          transition={{
            x: { duration: 30, repeat: Infinity, ease: 'linear' },
          }}
        >
          {[...awards, ...awards].map((award, i) => (
            <span
              key={i}
              className="font-rajdhani text-lg font-semibold text-gray-500 tracking-wider flex items-center gap-2 shrink-0"
            >
              {award}
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/30" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
