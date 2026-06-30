import { motion } from 'framer-motion';
import { Gamepad2, ArrowUp, Heart } from 'lucide-react';

const footerLinks = {
  Games: ['Dragonforge', 'Velocity X', 'Stellar Void', 'Verdant', 'Coming Soon'],
  Company: ['About Us', 'Careers', 'Press Kit', 'Blog', 'Contact'],
  Support: ['Help Center', 'Community', 'Bug Report', 'FAQ', 'Status'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'EULA', 'Licenses'],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron text-3xl md:text-4xl font-black text-white mb-4"
          >
            READY TO <span className="gradient-text">PLAY</span>?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-gray-400 max-w-md mx-auto mb-8"
          >
            Join millions of players and experience the future of gaming today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-72 px-4 py-3 bg-dark-800/60 border border-white/10 rounded-lg font-inter text-sm text-white placeholder-gray-500 outline-none focus:border-neon-cyan/50 transition-colors"
            />
            <motion.button
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 font-rajdhani font-bold text-sm tracking-wider uppercase rounded-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,240,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-6 h-6 text-neon-cyan" />
              <span className="font-orbitron text-lg font-bold">
                <span className="text-white">NEX</span>
                <span className="text-neon-cyan">US</span>
              </span>
            </div>
            <p className="font-inter text-sm text-gray-500 leading-relaxed">
              Building the future of gaming, one world at a time.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-rajdhani text-sm font-bold text-white uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-inter text-sm text-gray-500 hover:text-neon-cyan transition-colors"
                      data-cursor-hover
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-gray-600 flex items-center gap-1">
            © 2025 NEXUS Studios. Crafted with <Heart className="w-3 h-3 text-neon-pink" /> for gamers everywhere.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            data-cursor-hover
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
