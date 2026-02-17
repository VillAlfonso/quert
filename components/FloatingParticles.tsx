"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: string;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 30;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 15 + 10}s`,
        animationDelay: `${Math.random() * 20}s`,
        size: `${Math.random() * 4 + 2}px`,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[2]">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle animate-float"
          style={{
            left: particle.left,
            animationDuration: particle.animationDuration,
            animationDelay: particle.animationDelay,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
}
