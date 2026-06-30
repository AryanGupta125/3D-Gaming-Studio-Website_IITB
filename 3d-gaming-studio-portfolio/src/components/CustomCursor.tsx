import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
    if (!visible) setVisible(true);
  }, [visible]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', () => setIsClicking(true));
    window.addEventListener('mouseup', () => setIsClicking(false));

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [handleMouseMove]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: pos.x - (isHovering ? 24 : 6),
          y: pos.y - (isHovering ? 24 : 6),
          width: isHovering ? 48 : 12,
          height: isHovering ? 48 : 12,
          opacity: visible ? 1 : 0,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
      >
        <div className={`w-full h-full rounded-full border-2 transition-colors duration-200 ${
          isHovering ? 'border-neon-cyan bg-neon-cyan/10' : 'border-white bg-white/20'
        }`} />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{
          x: pos.x - 2,
          y: pos.y - 2,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500 }}
      >
        <div className="w-1 h-1 rounded-full bg-neon-cyan" />
      </motion.div>
    </>
  );
}
