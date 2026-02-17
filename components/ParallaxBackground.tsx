"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const mistLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mistLayerRef.current) {
        const scrolled = window.pageYOffset;
        mistLayerRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* Base gradient layer */}
      <div
        className="absolute w-full h-[120%]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, #1a2028 0%, #0a0a0c 70%)",
        }}
      />

      {/* Mist layer with parallax */}
      <div
        ref={mistLayerRef}
        className="absolute w-full h-[120%] will-change-transform"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(200, 212, 224, 0.08) 0%, transparent 50%)",
        }}
      />

      {/* Light rays */}
      <div className="light-rays" />
      <div className="light-rays light-rays-2" />
      <div className="light-rays light-rays-3" />
    </div>
  );
}
