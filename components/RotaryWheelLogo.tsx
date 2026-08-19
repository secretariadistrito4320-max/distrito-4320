import React from 'react';
import Link from 'next/link';

interface RotaryWheelLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  showSubtitle?: boolean;
}

export default function RotaryWheelLogo({
  className = '',
  variant = 'color',
  showSubtitle = true,
}: RotaryWheelLogoProps) {
  const isDark = variant === 'dark';
  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      id="rotary-distrito-logo"
      className={`inline-flex items-center gap-3 group select-none transition-transform hover:opacity-95 ${className}`}
    >
      {/* Official Rotary Wheel Emblem (Vector SVG) */}
      <div className="relative flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm transition-transform duration-500 group-hover:rotate-45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Wheel Gear Teeth */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill={isLight ? '#FFFFFF' : '#F7A81B'}
          />
          {/* Inner Blue Rim */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill={isLight ? '#00246C' : '#00246C'}
          />
          {/* 6 Spokes */}
          <g stroke={isLight ? '#FFFFFF' : '#F7A81B'} strokeWidth="5" strokeLinecap="round">
            <line x1="50" y1="18" x2="50" y2="82" />
            <line x1="22" y1="34" x2="78" y2="66" />
            <line x1="22" y1="66" x2="78" y2="34" />
          </g>
          {/* Hub Inner Ring */}
          <circle
            cx="50"
            cy="50"
            r="16"
            fill={isLight ? '#FFFFFF' : '#F7A81B'}
          />
          {/* Center Axle Hole / Keyway */}
          <circle
            cx="50"
            cy="50"
            r="8"
            fill={isLight ? '#00246C' : '#00246C'}
          />
          <rect
            x="48"
            y="40"
            width="4"
            height="10"
            fill={isLight ? '#00246C' : '#00246C'}
          />
          {/* 24 Teeth Representation Around Rim */}
          <circle
            cx="50"
            cy="50"
            r="43"
            stroke={isLight ? '#00246C' : '#00246C'}
            strokeWidth="3"
            strokeDasharray="4 7.2"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-wider text-lg sm:text-xl uppercase ${
              isLight ? 'text-white' : 'text-[#00246C]'
            }`}
          >
            ROTARY
          </span>
          <span
            className={`text-xs font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
              isLight
                ? 'bg-[#F7A81B] text-[#00246C]'
                : 'bg-[#00246C] text-[#F7A81B]'
            }`}
          >
            D-4320
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`text-[11px] sm:text-xs font-semibold tracking-normal ${
              isLight ? 'text-blue-100' : 'text-slate-600'
            }`}
          >
            Distrito 4320 · Chile
          </span>
        )}
      </div>
    </Link>
  );
}
