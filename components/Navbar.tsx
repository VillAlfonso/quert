"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-fixed" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollTo("hero")}
          className="font-cinzel text-sm tracking-widest text-hollow-light hover:text-hollow-glow transition-colors"
        >
          QAV
        </button>
        <div className="flex gap-8">
          <button onClick={() => scrollTo("about")} className="menu-item text-sm">
            About
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="menu-item text-sm"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="menu-item text-sm"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
