export default function VineDecorations() {
  return (
    <>
      {/* Left Vine */}
      <svg
        className="fixed top-0 left-0 h-full w-[200px] pointer-events-none z-[1] opacity-40 md:opacity-40 max-md:w-20 max-md:opacity-20"
        viewBox="0 0 200 1000"
        preserveAspectRatio="xMinYMin slice"
      >
        <path
          className="svg-ornament"
          d="M50,0 Q30,100 60,200 Q90,300 40,400 Q10,500 50,600 Q80,700 30,800 Q0,900 50,1000"
          strokeWidth="2"
          opacity="0.3"
        />
        <path
          className="svg-ornament"
          d="M80,50 Q100,150 70,250 Q40,350 90,450 Q120,550 60,650 Q30,750 80,850 Q110,950 60,1000"
          strokeWidth="1.5"
          opacity="0.2"
        />
        <circle cx="60" cy="200" r="3" fill="#c8d4e0" opacity="0.4" />
        <circle cx="40" cy="400" r="2" fill="#c8d4e0" opacity="0.3" />
        <circle cx="50" cy="600" r="4" fill="#c8d4e0" opacity="0.5" />
        <circle cx="30" cy="800" r="2" fill="#c8d4e0" opacity="0.3" />
      </svg>

      {/* Right Vine (mirrored) */}
      <svg
        className="fixed top-0 right-0 h-full w-[200px] pointer-events-none z-[1] opacity-40 -scale-x-100 md:opacity-40 max-md:w-20 max-md:opacity-20"
        viewBox="0 0 200 1000"
        preserveAspectRatio="xMinYMin slice"
      >
        <path
          className="svg-ornament"
          d="M50,0 Q30,100 60,200 Q90,300 40,400 Q10,500 50,600 Q80,700 30,800 Q0,900 50,1000"
          strokeWidth="2"
          opacity="0.3"
        />
        <path
          className="svg-ornament"
          d="M80,50 Q100,150 70,250 Q40,350 90,450 Q120,550 60,650 Q30,750 80,850 Q110,950 60,1000"
          strokeWidth="1.5"
          opacity="0.2"
        />
      </svg>
    </>
  );
}
