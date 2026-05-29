import React from 'react';

interface DbitLogoProps {
  className?: string;
  size?: number;
}

export default function DbitLogo({ className = '', size = 52 }: DbitLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none drop-shadow-md`}
      role="img"
      aria-label="Don Bosco Institute of Technology Bangalore Emblem"
    >
      {/* Outer border & shadow ring */}
      <circle cx="100" cy="100" r="98" fill="rgba(255, 255, 255, 0.98)" stroke="#16a34a" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="92" fill="#f0fdf4" stroke="#4ade80" strokeWidth="1" strokeDasharray="4 2" />

      {/* Outer ring for Circular Text alignment */}
      <defs>
        {/* A circular path that is centered and oriented correctly (clockwise) for text placement */}
        <path
          id="dbitTextPath"
          d="M 100 12 A 88 88 0 1 1 99.9 12"
          fill="none"
        />
      </defs>

      {/* EMBLEM TEXT: DON BOSCO INSTITUTE OF TECHNOLOGY */}
      <text fill="#166534" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.18em">
        <textPath href="#dbitTextPath" startOffset="50%" textAnchor="middle">
          DON BOSCO INSTITUTE OF TECHNOLOGY
        </textPath>
      </text>

      {/* Secondary text band inside lower half of circle */}
      <text fill="#15803d" fontSize="8.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.25em">
        <textPath href="#dbitTextPath" startOffset="10%" textAnchor="middle">
          BANGALORE
        </textPath>
      </text>

      {/* Central Emblem Yellow-Green Canvas Shield */}
      <circle cx="100" cy="100" r="66" fill="#ecfccb" stroke="#84cc16" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="#a3e635" strokeWidth="1" strokeDasharray="3 3" />

      {/* LAYER 1: Atomic Physics Orbits (Electronics / Telecommunication / Core Science) */}
      <g stroke="#15803d" strokeWidth="1.2" fill="none">
        <ellipse cx="100" cy="95" rx="26" ry="10" transform="rotate(30 100 95)" />
        <ellipse cx="100" cy="95" rx="26" ry="10" transform="rotate(90 100 95)" />
        <ellipse cx="100" cy="95" rx="26" ry="10" transform="rotate(150 100 95)" />
      </g>
      <circle cx="100" cy="95" r="3.5" fill="#166534" />

      {/* LAYER 2: Satellite Dish (Left Side) - telecommunications */}
      <path d="M 64 96 Q 58 92 56 100 Z" fill="#15803d" stroke="#14532d" strokeWidth="0.8" />
      <line x1="60" y1="96" x2="65" y2="90" stroke="#166534" strokeWidth="1" />
      <circle cx="65" cy="90" r="1.5" fill="#dc2626" />

      {/* LAYER 3: Modern Laptop Computer (Right Side) - computational excellence */}
      <rect x="134" y="90" width="16" height="11" rx="1.5" fill="#f4f4f5" stroke="#166534" strokeWidth="1.2" />
      <rect x="136" y="92" width="12" height="7" fill="#15803d" />
      <line x1="130" y1="102" x2="154" y2="102" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" />

      {/* LAYER 4: Space Communication Satellite (Top Side) */}
      <rect x="91" y="52" width="18" height="6" fill="#1e3a8a" stroke="#15803d" strokeWidth="0.8" />
      <line x1="100" y1="44" x2="100" y2="52" stroke="#166534" strokeWidth="1" />
      {/* Solar panel wings */}
      <rect x="76" y="53" width="15" height="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="0.5" />
      <rect x="109" y="53" width="15" height="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="0.5" />

      {/* LAYER 5: Open Academic Book (Bottom Center) - gaining supreme wisdom */}
      <path d="M 88 116 Q 100 114 100 125 C 100 114 112 116 112 116 L 112 126 C 112 126 100 124 100 128 C 100 124 88 126 88 126 Z" fill="#ffffff" stroke="#15803d" strokeWidth="1" />
      <line x1="100" y1="116" x2="100" y2="128" stroke="#15803d" strokeWidth="1.2" />

      {/* Sanskrit Text Banner Ribbon underneath everything */}
      <path
        d="M 40 148 Q 100 162 160 148 L 154 136 Q 100 148 46 136 Z"
        fill="#facc15"
        stroke="#15803d"
        strokeWidth="1.2"
      />
      
      {/* Decorative Ribbon Tails */}
      <path d="M 40 148 L 32 140 L 46 136" fill="#eab308" stroke="#15803d" strokeWidth="1" />
      <path d="M 160 148 L 168 140 L 154 136" fill="#eab308" stroke="#15803d" strokeWidth="1" />

      {/* Translated or Simplified Transliteration Text on Ribbon */}
      <text x="100" y="145" fill="#14532d" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
        KNOWLEDGE IS POWER
      </text>
    </svg>
  );
}
