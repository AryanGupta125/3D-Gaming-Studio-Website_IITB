# NEXUS Studios — Gaming Studio Portfolio

<div align="center">

![NEXUS Studios](https://img.shields.io/badge/NEXUS-Studios-00f0ff?style=for-the-badge&labelColor=0a0a0f)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**A premium, production-ready 3D interactive gaming studio portfolio website featuring scroll-driven animations, interactive 3D elements, and dynamic transitions.**

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## ✨ Features

### 🎮 Interactive 3D Experience
- **Particle Field**: WebGL-powered interactive particle system that reacts to mouse movement
- **3D Card Tilt**: Perspective-based card hover effects with real-time mouse tracking
- **Parallax Scrolling**: Multi-layer depth effects on scroll for immersive navigation
- **Custom Cursor**: Dynamic cursor that morphs on hover over interactive elements

### 🎨 Design System
- **Dark Theme**: Premium dark UI with neon accent colors (cyan, purple, pink)
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Gradient Typography**: Dynamic gradient text with glow effects
- **Grid & Scanline Overlays**: Retro-futuristic visual atmosphere

### 🚀 Animations & Transitions
- **Scroll-Triggered Animations**: Elements animate on scroll using Intersection Observer
- **Framer Motion**: Smooth spring physics animations throughout
- **Loading Screen**: Cinematic loading sequence with progress bar
- **Glitch Effects**: CSS-driven glitch text effects
- **Marquee**: Infinite scrolling awards ticker
- **Staggered Reveals**: Sequential fade-in animations for lists/grids

### 📱 Responsive Design
- **Mobile-First**: Fully responsive across all screen sizes
- **Touch Optimized**: Custom cursor hidden on touch devices
- **Adaptive Layouts**: Grid systems that reflow beautifully

### ⚡ Performance
- **Optimized Rendering**: Canvas particle system with efficient draw calls
- **Lazy Animations**: Animations only trigger when elements enter viewport
- **Tree Shaking**: Only used components are bundled
- **Single-File Build**: Production build as a single HTML file

---

## 🏗️ Architecture

```
src/
├── App.tsx                          # Main app with section composition
├── main.tsx                         # React entry point
├── index.css                        # Global styles, Tailwind config, animations
├── components/
│   ├── LoadingScreen.tsx            # Cinematic loading animation
│   ├── CustomCursor.tsx             # Interactive cursor component
│   ├── ParticleField.tsx            # Canvas-based particle system
│   ├── Navbar.tsx                   # Responsive nav with scroll tracking
│   ├── HeroSection.tsx              # Hero with parallax + 3D objects
│   ├── MarqueeSection.tsx           # Scrolling awards marquee
│   ├── GamesShowcase.tsx            # Game portfolio with 3D cards
│   ├── AboutSection.tsx             # Timeline + core values
│   ├── TechShowcase.tsx             # Tech stack + platform cards
│   ├── ServicesSection.tsx          # Expandable service cards
│   ├── TeamSection.tsx              # Team grid with hover effects
│   ├── TestimonialsSection.tsx      # Testimonial carousel
│   ├── ContactSection.tsx           # Contact form + info
│   └── Footer.tsx                   # Newsletter + links footer
├── hooks/
│   ├── useScrollProgress.ts         # Scroll position tracking
│   ├── useInView.ts                 # Intersection Observer hook
│   └── useMousePosition.ts          # Mouse position + normalized coords
└── utils/
    └── cn.ts                        # Tailwind class merging utility
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.x | UI Framework |
| **TypeScript** | 5.9 | Type Safety |
| **Vite** | 7.x | Build Tool |
| **Tailwind CSS** | 4.x | Utility Styling |
| **Framer Motion** | latest | Animations |
| **Lucide React** | latest | Icon Library |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or yarn/pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nexus-studios.git
   cd nexus-studios
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 📁 Key Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite config with React, Tailwind, single-file plugins |
| `tsconfig.json` | TypeScript compiler configuration |
| `package.json` | Dependencies and scripts |
| `index.html` | HTML entry point with Google Fonts |

---

## 🎨 Customization Guide

### Colors
Modify the color palette in `src/index.css` under the `@theme` block:
```css
@theme {
  --color-neon-cyan: #00f0ff;
  --color-neon-purple: #a855f7;
  --color-neon-pink: #ec4899;
  --color-neon-blue: #3b82f6;
  --color-neon-green: #10b981;
}
```

### Fonts
The site uses three Google Fonts:
- **Orbitron** — Headings (futuristic geometric)
- **Rajdhani** — Labels & UI text (technical feel)
- **Inter** — Body text (readability)

Update the `<link>` tag in `index.html` and font references in `index.css`.

### Content
- **Games**: Edit the `games` array in `GamesShowcase.tsx`
- **Team**: Edit the `team` array in `TeamSection.tsx`
- **Services**: Edit the `services` array in `ServicesSection.tsx`
- **Testimonials**: Edit the `testimonials` array in `TestimonialsSection.tsx`

### Images
Replace images in `public/images/`:
- `hero-bg.jpg` — Hero background
- `game1-4.jpg` — Game showcase images
- `about-bg.jpg` — About section background

---

## 📋 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 90+ | ✅ Full |
| Safari 15+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Chrome | ✅ Full |
| Mobile Safari | ✅ Full |

---

## 🔧 Performance Optimizations

1. **Canvas Particle System**: Efficient 2D canvas rendering with object pooling
2. **Intersection Observer**: Animations only fire when elements are visible
3. **CSS Transforms**: Hardware-accelerated animations using `transform` and `opacity`
4. **Passive Event Listeners**: Scroll and mouse events use `{ passive: true }`
5. **Image Optimization**: Images compressed and sized appropriately
6. **Code Splitting**: Component-level code organization for tree shaking

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<div align="center">

**Built with ❤️ by NEXUS Studios**

*Crafting worlds. Defining futures.*

</div>
