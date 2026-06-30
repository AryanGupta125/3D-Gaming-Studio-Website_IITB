import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Star, Users, Calendar } from 'lucide-react';

const games = [
  {
    id: 1,
    title: 'DRAGONFORGE',
    subtitle: 'Chronicles of the Eternal Flame',
    genre: 'Action RPG',
    year: '2025',
    rating: 4.9,
    players: '12M+',
    image: '/images/game1.jpg',
    description: 'An epic open-world RPG where ancient dragons and forgotten magic collide. Forge your destiny in a world where every choice shapes the fate of kingdoms.',
    tags: ['Open World', 'Fantasy', 'Co-op'],
    color: '#ff6b35',
  },
  {
    id: 2,
    title: 'VELOCITY X',
    subtitle: 'Neon Streets Revolution',
    genre: 'Racing',
    year: '2024',
    rating: 4.7,
    players: '8M+',
    image: '/images/game2.jpg',
    description: 'Tear through neon-soaked cyberpunk cityscapes at breakneck speeds. Customize your ride, dominate the streets, and become the ultimate speed legend.',
    tags: ['Cyberpunk', 'Multiplayer', 'Customization'],
    color: '#00f0ff',
  },
  {
    id: 3,
    title: 'STELLAR VOID',
    subtitle: 'Beyond the Event Horizon',
    genre: 'Space Exploration',
    year: '2024',
    rating: 4.8,
    players: '15M+',
    image: '/images/game3.jpg',
    description: 'Explore procedurally generated galaxies, build space stations, and uncover the mysteries of an ancient civilization that once ruled the cosmos.',
    tags: ['Sci-Fi', 'Sandbox', 'Strategy'],
    color: '#a855f7',
  },
  {
    id: 4,
    title: 'VERDANT',
    subtitle: 'Echoes of the Lost Eden',
    genre: 'Adventure',
    year: '2023',
    rating: 4.6,
    players: '6M+',
    image: '/images/game4.jpg',
    description: 'Journey through a breathtaking enchanted world where nature fights back. Solve ancient puzzles, befriend mystical creatures, and restore the balance.',
    tags: ['Exploration', 'Puzzle', 'Story-Rich'],
    color: '#10b981',
  },
];

function GameCard({ game, index }: { game: typeof games[0]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center mb-32 last:mb-0`}
    >
      {/* Image */}
      <div
        ref={cardRef}
        className="relative w-full lg:w-3/5 aspect-[16/10] overflow-hidden rounded-lg group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
        data-cursor-hover
        style={{ perspective: '1000px' }}
      >
        <motion.div
          className="w-full h-full"
          animate={{
            rotateY: isHovered ? mousePos.x * 0.5 : 0,
            rotateX: isHovered ? -mousePos.y * 0.5 : 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 150 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-60" />
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px at ${mousePos.x * 10 + 50}% ${mousePos.y * 10 + 50}%, ${game.color}15, transparent)`,
            }}
          />

          {/* Overlay Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-3">
              {game.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-rajdhani font-semibold uppercase tracking-wider border border-white/20 text-white/80 bg-white/5 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Play Button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
          >
            <motion.div
              className="w-20 h-20 rounded-full border-2 flex items-center justify-center backdrop-blur-sm"
              style={{ borderColor: game.color, backgroundColor: `${game.color}20` }}
              whileHover={{ scale: 1.1 }}
            >
              <ExternalLink className="w-8 h-8" style={{ color: game.color }} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: `${game.color}60` }} />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: `${game.color}60` }} />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: `${game.color}60` }} />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: `${game.color}60` }} />
      </div>

      {/* Info */}
      <div className="w-full lg:w-2/5 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <span className="font-rajdhani text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: game.color }}>
            {game.genre}
          </span>
          <h3 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 leading-tight">
            {game.title}
          </h3>
          <p className="font-rajdhani text-lg text-gray-400 mt-1">{game.subtitle}</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-gray-400 font-inter text-sm leading-relaxed"
        >
          {game.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-6 text-sm"
        >
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4" style={{ color: game.color }} />
            <span className="font-rajdhani font-semibold text-white">{game.rating}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="font-rajdhani font-semibold text-gray-400">{game.players}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="font-rajdhani font-semibold text-gray-400">{game.year}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            className="px-6 py-3 font-rajdhani font-bold text-sm tracking-wider uppercase rounded-sm transition-all duration-300"
            style={{
              border: `1px solid ${game.color}60`,
              color: game.color,
            }}
            whileHover={{
              backgroundColor: `${game.color}15`,
              boxShadow: `0 0 30px ${game.color}30`,
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            Learn More →
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function GamesShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref: titleRef, isInView: titleInView } = useInView();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} id="games" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block">
        <motion.div
          className="w-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="font-rajdhani text-sm font-semibold tracking-[0.3em] text-neon-cyan uppercase"
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4"
          >
            FEATURED <span className="gradient-text">GAMES</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mt-6"
          />
        </div>

        {/* Game Cards */}
        {games.map((game, i) => (
          <GameCard key={game.id} game={game} index={i} />
        ))}
      </div>
    </section>
  );
}
