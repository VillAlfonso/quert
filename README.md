# Hollow Knight Portfolio

A stunning Hollow Knight-themed parallax portfolio landing page for Quert Alfonso M. Villafuerte.

## Features

- 🎮 **Hollow Knight Aesthetic** - Dark atmospheric design with ornate Victorian/gothic flourishes
- ✨ **Parallax Effects** - Multi-layered background with depth
- 🔮 **Floating Particles** - Animated firefly-like particles
- 🌿 **Decorative Vines** - SVG vine decorations framing the viewport
- 💫 **Smooth Animations** - Fade-in on scroll, glowing text effects
- 📱 **Fully Responsive** - Works on all device sizes
- ⚡ **Next.js 14** - Built with App Router and TypeScript
- 🎨 **Tailwind CSS** - Utility-first styling with custom theme

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
hollow-portfolio/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── FadeIn.tsx           # Scroll-triggered fade animation
│   ├── FloatingParticles.tsx # Animated particle effects
│   ├── Navbar.tsx           # Fixed navigation
│   ├── Ornament.tsx         # SVG decorative elements
│   ├── ParallaxBackground.tsx # Layered background
│   ├── ProjectCard.tsx      # Project display card
│   ├── ProjectIcons.tsx     # Custom SVG icons
│   ├── Sections.tsx         # All page sections
│   ├── VineDecorations.tsx  # Side vine SVGs
│   └── index.ts             # Export barrel
├── tailwind.config.ts   # Tailwind + custom theme
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies
```

## Customization

### Update Your Information

1. **Name & Title**: Edit `components/Sections.tsx` → `HeroSection`
2. **About Text**: Edit `components/Sections.tsx` → `AboutSection`
3. **Projects**: Edit the `projects` array in `components/Sections.tsx` → `ProjectsSection`
4. **Contact Links**: Edit `components/Sections.tsx` → `ContactSection`
5. **Metadata**: Edit `app/layout.tsx`

### Colors

The Hollow Knight color palette is defined in `tailwind.config.ts`:

```typescript
colors: {
  hollow: {
    dark: "#0a0a0c",    // Deep black background
    void: "#121418",    // Slightly lighter black
    mist: "#3a4a5a",    // Muted blue-gray
    light: "#c8d4e0",   // Light text
    glow: "#e8f0f8",    // Bright white-blue
    accent: "#7a9ab8",  // Blue accent
  },
}
```

## Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Deploy!

No additional configuration needed.

## License

MIT
