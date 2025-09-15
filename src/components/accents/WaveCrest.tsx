import React from 'react';
import { cn } from '@/lib/utils';

interface WaveCrestProps {
  className?: string;
}

export const WaveCrest: React.FC<WaveCrestProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 360 120"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('block', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g opacity="0.6">
        <path d="M4 92 C 40 84, 72 100, 100 88 C 124 78, 128 56, 154 60 C 180 64, 174 90, 204 90 C 234 90, 246 64, 276 66 C 306 68, 320 94, 356 86" />
        <path d="M60 96 c 8 -10, 18 -10, 26 0" />
        <path d="M170 84 c 8 -10, 18 -10, 26 0" />
        <path d="M280 92 c 8 -10, 18 -10, 26 0" />
        <path d="M110 72 c -2 -12, 8 -18, 18 -14 c 10 4, 10 18, 0 22 c -6 4 -12 2 -18 -2" />
      </g>
      <g opacity="0.35" fill="currentColor" stroke="none">
        <path d="M130 84 l8 -8 l8 8 l-8 8 Z" />
        <path d="M240 74 l6 -6 l6 6 l-6 6 Z" />
      </g>
    </svg>
  );
};

export default WaveCrest;


