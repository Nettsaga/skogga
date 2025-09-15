import React from 'react';
import { cn } from '@/lib/utils';

interface DaggerRoseProps {
  className?: string;
}

export const DaggerRose: React.FC<DaggerRoseProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('block', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g opacity="0.6">
        {/* Hilt */}
        <path d="M90 50 H130" />
        <path d="M100 42 H120" opacity="0.7" />
        <rect x="104" y="24" width="12" height="18" rx="4" />
        {/* Blade */}
        <path d="M110 50 L118 160 L110 176 L102 160 Z" fill="currentColor" opacity="0.18" stroke="none" />
        <path d="M110 50 L110 176" />
        <path d="M110 176 L120 196 L100 196 Z" />
      </g>
      {/* Rose behind hilt */}
      <g opacity="0.55" strokeWidth="1.4">
        <circle cx="110" cy="72" r="18" />
        <path d="M110 54 c 10 4, 14 10, 14 18 c 0 8 -6 14 -14 18" />
        <path d="M110 54 c -10 4, -14 10, -14 18 c 0 8 6 14 14 18" />
        <path d="M96 74 c 8 0, 12 4, 14 8 c 2 -4, 6 -8, 14 -8" />
      </g>
      {/* Leaves */}
      <g opacity="0.5">
        <path d="M86 86 c 10 -6, 18 -2, 22 4 c -8 2 -16 0 -22 -4 Z" />
        <path d="M134 86 c -10 -6, -18 -2, -22 4 c 8 2 16 0 22 -4 Z" />
      </g>
    </svg>
  );
};

export default DaggerRose;


