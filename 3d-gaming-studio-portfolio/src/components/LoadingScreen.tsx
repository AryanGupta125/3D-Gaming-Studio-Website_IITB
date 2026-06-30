import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-dark-900 flex items-center justify-center"
        >
          {/* Grid background */}
          <div className="absolute inset-0 grid-bg opacity-20" />

          {/* Animated lines */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"
                style={{
                  top: `${20 + i * 15}%`,
                  width: '100%',
                }}
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
          </div>

          <div className="relative text-center">
            {/* Logo */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <Gamepad2 className="w-16 h-16 text-neon-cyan" />
                <div className="absolute inset-0 blur-xl bg-neon-cyan/30" />
              </div>
            </motion.div>

            {/* Studio Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="font-orbitron text-3xl md:text-4xl font-black tracking-wider">
                <span className="text-white">NEX</span>
                <span className="text-neon-cyan glow-cyan">US</span>
              </h1>
              <p className="font-rajdhani text-sm text-gray-500 tracking-[0.3em] uppercase mt-2">
                Studios
              </p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 w-48 mx-auto"
            >
              <div className="h-0.5 bg-dark-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
              </div>
              <motion.p
                className="font-rajdhani text-xs text-gray-600 uppercase tracking-[0.2em] mt-3"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading Experience...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
