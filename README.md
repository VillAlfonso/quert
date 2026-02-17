# Personal Portfolio

A modern, atmospheric portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a dark aesthetic with custom SVG ornaments, parallax scrolling, and smooth animations.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** CSS Keyframes + Intersection Observer API
- **Deployment:** Vercel

## Features

- Custom SVG ornamental design system
- Multi-layered parallax background
- Floating particle animation system
- Scroll-triggered fade-in animations
- Responsive across all breakpoints
- Optimized for Core Web Vitals

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── FadeIn.tsx
│   ├── FloatingParticles.tsx
│   ├── Navbar.tsx
│   ├── Ornament.tsx
│   ├── ParallaxBackground.tsx
│   ├── ProfileFrame.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectIcons.tsx
│   ├── Sections.tsx
│   └── VineDecorations.tsx
├── public/
│   └── profile.jpg
├── tailwind.config.ts
└── package.json
```

## Customization

Edit `components/Sections.tsx` to update content. Color palette can be modified in `tailwind.config.ts`.

## Deployment

```bash
npm run build
```

Deploy to Vercel via GitHub integration or CLI:

```bash
npx vercel --prod
```
