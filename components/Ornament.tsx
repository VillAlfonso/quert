interface OrnamentProps {
  variant?: "full" | "simple";
  className?: string;
  flipped?: boolean;
}

export function OrnamentFull({ className = "", flipped = false }: OrnamentProps) {
  return (
    <svg
      className={`w-[300px] h-[50px] max-md:w-[200px] max-md:h-[35px] ${
        flipped ? "-scale-y-100" : ""
      } ${className}`}
      viewBox="0 0 300 50"
    >
      {/* Central bug/shell motif */}
      <ellipse
        cx="150"
        cy="35"
        rx="12"
        ry="8"
        className="svg-ornament"
        strokeWidth="1.5"
      />
      <ellipse
        cx="150"
        cy="35"
        rx="8"
        ry="5"
        className="svg-ornament"
        strokeWidth="1"
      />
      <line
        x1="150"
        y1="27"
        x2="150"
        y2="20"
        className="svg-ornament"
        strokeWidth="1"
      />
      <circle cx="150" cy="18" r="2" fill="#c8d4e0" />

      {/* Left flourishes */}
      <path
        d="M130,35 Q110,35 100,25 Q90,15 70,20"
        className="svg-ornament"
        strokeWidth="1.5"
      />
      <path
        d="M100,25 Q95,30 85,28 Q75,26 65,30"
        className="svg-ornament"
        strokeWidth="1"
      />
      <path
        d="M70,20 Q60,18 50,22 Q40,26 30,20"
        className="svg-ornament"
        strokeWidth="1.5"
      />
      <path d="M50,22 Q45,28 35,25" className="svg-ornament" strokeWidth="1" />
      <circle cx="30" cy="20" r="2" fill="#c8d4e0" opacity="0.7" />
      <path d="M30,20 Q20,15 10,18" className="svg-ornament" strokeWidth="1" />

      {/* Right flourishes (mirrored) */}
      <path
        d="M170,35 Q190,35 200,25 Q210,15 230,20"
        className="svg-ornament"
        strokeWidth="1.5"
      />
      <path
        d="M200,25 Q205,30 215,28 Q225,26 235,30"
        className="svg-ornament"
        strokeWidth="1"
      />
      <path
        d="M230,20 Q240,18 250,22 Q260,26 270,20"
        className="svg-ornament"
        strokeWidth="1.5"
      />
      <path d="M250,22 Q255,28 265,25" className="svg-ornament" strokeWidth="1" />
      <circle cx="270" cy="20" r="2" fill="#c8d4e0" opacity="0.7" />
      <path d="M270,20 Q280,15 290,18" className="svg-ornament" strokeWidth="1" />

      {/* Decorative dots */}
      <circle cx="85" cy="28" r="1.5" fill="#c8d4e0" opacity="0.5" />
      <circle cx="215" cy="28" r="1.5" fill="#c8d4e0" opacity="0.5" />
    </svg>
  );
}

export function OrnamentSimple({
  className = "",
  flipped = false,
}: OrnamentProps) {
  return (
    <svg
      className={`w-48 h-8 ${flipped ? "rotate-180" : ""} ${className}`}
      viewBox="0 0 200 30"
    >
      <path
        d="M20,15 Q40,15 50,10 Q60,5 80,8"
        className="svg-ornament"
      />
      <circle cx="85" cy="8" r="2" fill="#c8d4e0" opacity="0.5" />
      <line x1="90" y1="8" x2="100" y2="15" className="svg-ornament" />
      <line x1="100" y1="15" x2="110" y2="8" className="svg-ornament" />
      <circle cx="115" cy="8" r="2" fill="#c8d4e0" opacity="0.5" />
      <path
        d="M120,8 Q140,5 150,10 Q160,15 180,15"
        className="svg-ornament"
      />
    </svg>
  );
}

export function OrnamentSmall({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-24 h-6 ${className}`} viewBox="0 0 100 20">
      <path
        d="M10,10 Q25,5 40,10 Q50,12 50,10 Q50,12 60,10 Q75,5 90,10"
        className="svg-ornament"
      />
      <circle cx="50" cy="10" r="3" fill="#c8d4e0" opacity="0.3" />
    </svg>
  );
}

export function ScrollIndicator() {
  return (
    <svg width="30" height="50" viewBox="0 0 30 50" className="opacity-50">
      <rect
        x="8"
        y="5"
        width="14"
        height="24"
        rx="7"
        className="svg-ornament"
        strokeWidth="1.5"
      />
      <circle cx="15" cy="14" r="2" fill="#c8d4e0">
        <animate
          attributeName="cy"
          values="12;18;12"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <path
        d="M10,38 L15,45 L20,38"
        className="svg-ornament"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
