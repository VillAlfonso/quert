"use client";

import Image from "next/image";

export default function ProfileFrame() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-hollow-accent/30 to-transparent blur-2xl scale-110" />
      
      {/* Main SVG Frame with ornate decorations */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
      >
        {/* Definitions for effects */}
        <defs>
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Clip path for circular image */}
          <clipPath id="circleClip">
            <circle cx="200" cy="200" r="140" />
          </clipPath>
          
          {/* Radial gradient for frame */}
          <radialGradient id="frameGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e8f0f8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#7a9ab8" stopOpacity="0.3" />
          </radialGradient>
        </defs>

        {/* Background circle with gradient */}
        <circle
          cx="200"
          cy="200"
          r="155"
          fill="url(#frameGradient)"
          opacity="0.5"
        />

        {/* Main frame circles */}
        <circle
          cx="200"
          cy="200"
          r="150"
          stroke="#c8d4e0"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
        />
        <circle
          cx="200"
          cy="200"
          r="145"
          stroke="#7a9ab8"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <circle
          cx="200"
          cy="200"
          r="158"
          stroke="#c8d4e0"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />

        {/* Top ornament - bug/shell motif */}
        <g transform="translate(200, 35)" filter="url(#glow)">
          <ellipse cx="0" cy="8" rx="14" ry="10" stroke="#c8d4e0" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="8" rx="9" ry="6" stroke="#c8d4e0" strokeWidth="1" fill="none" />
          <line x1="0" y1="-2" x2="0" y2="-12" stroke="#c8d4e0" strokeWidth="1" />
          <circle cx="0" cy="-14" r="3" fill="#c8d4e0" />
          {/* Antennae */}
          <path d="M-3,-14 Q-8,-20 -15,-18" stroke="#c8d4e0" strokeWidth="1" fill="none" />
          <path d="M3,-14 Q8,-20 15,-18" stroke="#c8d4e0" strokeWidth="1" fill="none" />
          <circle cx="-15" cy="-18" r="2" fill="#c8d4e0" opacity="0.7" />
          <circle cx="15" cy="-18" r="2" fill="#c8d4e0" opacity="0.7" />
        </g>

        {/* Bottom ornament - bug/shell motif */}
        <g transform="translate(200, 365) scale(1, -1)" filter="url(#glow)">
          <ellipse cx="0" cy="8" rx="14" ry="10" stroke="#c8d4e0" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="8" rx="9" ry="6" stroke="#c8d4e0" strokeWidth="1" fill="none" />
          <line x1="0" y1="-2" x2="0" y2="-12" stroke="#c8d4e0" strokeWidth="1" />
          <circle cx="0" cy="-14" r="3" fill="#c8d4e0" />
          <path d="M-3,-14 Q-8,-20 -15,-18" stroke="#c8d4e0" strokeWidth="1" fill="none" />
          <path d="M3,-14 Q8,-20 15,-18" stroke="#c8d4e0" strokeWidth="1" fill="none" />
          <circle cx="-15" cy="-18" r="2" fill="#c8d4e0" opacity="0.7" />
          <circle cx="15" cy="-18" r="2" fill="#c8d4e0" opacity="0.7" />
        </g>

        {/* Left side flourishes */}
        <g filter="url(#glow)">
          {/* Main curving tendril */}
          <path
            d="M50,200 Q30,180 35,150 Q40,120 25,100"
            stroke="#c8d4e0"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M35,150 Q20,145 10,160"
            stroke="#c8d4e0"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="10" cy="160" r="2" fill="#c8d4e0" opacity="0.6" />
          <circle cx="25" cy="100" r="2.5" fill="#c8d4e0" opacity="0.7" />
          
          {/* Lower tendril */}
          <path
            d="M50,200 Q30,220 35,250 Q40,280 25,300"
            stroke="#c8d4e0"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M35,250 Q20,255 10,240"
            stroke="#c8d4e0"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="10" cy="240" r="2" fill="#c8d4e0" opacity="0.6" />
          <circle cx="25" cy="300" r="2.5" fill="#c8d4e0" opacity="0.7" />
        </g>

        {/* Right side flourishes (mirrored) */}
        <g filter="url(#glow)">
          <path
            d="M350,200 Q370,180 365,150 Q360,120 375,100"
            stroke="#c8d4e0"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M365,150 Q380,145 390,160"
            stroke="#c8d4e0"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="390" cy="160" r="2" fill="#c8d4e0" opacity="0.6" />
          <circle cx="375" cy="100" r="2.5" fill="#c8d4e0" opacity="0.7" />
          
          <path
            d="M350,200 Q370,220 365,250 Q360,280 375,300"
            stroke="#c8d4e0"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M365,250 Q380,255 390,240"
            stroke="#c8d4e0"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="390" cy="240" r="2" fill="#c8d4e0" opacity="0.6" />
          <circle cx="375" cy="300" r="2.5" fill="#c8d4e0" opacity="0.7" />
        </g>

        {/* Diagonal corner flourishes - Top Left */}
        <g filter="url(#glow)">
          <path
            d="M75,75 Q60,60 40,55 Q25,52 15,40"
            stroke="#c8d4e0"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M40,55 Q35,40 45,30"
            stroke="#c8d4e0"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="15" cy="40" r="2" fill="#c8d4e0" opacity="0.6" />
          <circle cx="45" cy="30" r="1.5" fill="#c8d4e0" opacity="0.5" />
        </g>

        {/* Diagonal corner flourishes - Top Right */}
        <g filter="url(#glow)">
          <path
            d="M325,75 Q340,60 360,55 Q375,52 385,40"
            stroke="#c8d4e0"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M360,55 Q365,40 355,30"
            stroke="#c8d4e0"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="385" cy="40" r="2" fill="#c8d4e0" opacity="0.6" />
          <circle cx="355" cy="30" r="1.5" fill="#c8d4e0" opacity="0.5" />
        </g>

        {/* Diagonal corner flourishes - Bottom Left */}
        <g filter="url(#glow)">
          <path
            d="M75,325 Q60,340 40,345 Q25,348 15,360"
            stroke="#c8d4e0"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M40,345 Q35,360 45,370"
            stroke="#c8d4e0"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="15" cy="360" r="2" fill="#c8d4e0" opacity="0.6" />
          <circle cx="45" cy="370" r="1.5" fill="#c8d4e0" opacity="0.5" />
        </g>

        {/* Diagonal corner flourishes - Bottom Right */}
        <g filter="url(#glow)">
          <path
            d="M325,325 Q340,340 360,345 Q375,348 385,360"
            stroke="#c8d4e0"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M360,345 Q365,360 355,370"
            stroke="#c8d4e0"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="385" cy="360" r="2" fill="#c8d4e0" opacity="0.6" />
          <circle cx="355" cy="370" r="1.5" fill="#c8d4e0" opacity="0.5" />
        </g>

        {/* Small decorative dots around the frame */}
        <circle cx="200" cy="42" r="1.5" fill="#c8d4e0" opacity="0.5" />
        <circle cx="200" cy="358" r="1.5" fill="#c8d4e0" opacity="0.5" />
        <circle cx="42" cy="200" r="1.5" fill="#c8d4e0" opacity="0.5" />
        <circle cx="358" cy="200" r="1.5" fill="#c8d4e0" opacity="0.5" />
        
        {/* Cardinal direction small ornaments */}
        <circle cx="130" cy="60" r="1" fill="#c8d4e0" opacity="0.4" />
        <circle cx="270" cy="60" r="1" fill="#c8d4e0" opacity="0.4" />
        <circle cx="130" cy="340" r="1" fill="#c8d4e0" opacity="0.4" />
        <circle cx="270" cy="340" r="1" fill="#c8d4e0" opacity="0.4" />
        <circle cx="60" cy="130" r="1" fill="#c8d4e0" opacity="0.4" />
        <circle cx="60" cy="270" r="1" fill="#c8d4e0" opacity="0.4" />
        <circle cx="340" cy="130" r="1" fill="#c8d4e0" opacity="0.4" />
        <circle cx="340" cy="270" r="1" fill="#c8d4e0" opacity="0.4" />
      </svg>

      {/* Profile Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[70%] h-[70%] rounded-full overflow-hidden border-2 border-hollow-mist/30">
          <Image
            src="/profile.jpg"
            alt="Quert Alfonso M. Villafuerte"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle inner shadow overlay */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]" />
        </div>
      </div>

      {/* Animated glow ring */}
      <div 
        className="absolute inset-0 rounded-full border border-hollow-glow/20 animate-pulse"
        style={{ animationDuration: '4s' }}
      />
    </div>
  );
}
