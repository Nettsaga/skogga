import React from 'react';
import { cn } from '@/lib/utils';

interface SacredRingProps {
  className?: string;
}

export const SacredRing: React.FC<SacredRingProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 260 260"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('block', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g opacity="0.6">
        <circle cx="130" cy="130" r="88" />
        <circle cx="130" cy="130" r="64" opacity="0.7" />
        <circle cx="130" cy="130" r="40" opacity="0.85" />
      </g>
      <g opacity="0.6">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * 360;
          return (
            <g key={i} transform={`rotate(${angle} 130 130)`}>
              <path d="M130 22 L138 36 L130 50 L122 36 Z" fill="currentColor" opacity="0.22" stroke="none" />
              <path d="M130 60 L134 74 L130 88 L126 74 Z" />
            </g>
          );
        })}
      </g>
      <circle cx="130" cy="130" r="3" fill="currentColor" opacity="0.9" stroke="none" />
    </svg>
  );
};

export default SacredRing;


