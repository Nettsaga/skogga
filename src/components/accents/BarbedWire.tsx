import React from 'react';
import { cn } from '@/lib/utils';

interface BarbedWireProps {
  className?: string;
}

export const BarbedWire: React.FC<BarbedWireProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 600 80"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('block', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 40 C 80 20, 160 60, 240 36 C 320 12, 400 64, 480 40 C 520 28, 560 52, 596 40" opacity="0.7" />
      {Array.from({ length: 8 }).map((_, i) => {
        const x = 40 + i * 70;
        const y = 40 + (i % 2 === 0 ? -6 : 6);
        return (
          <g key={i} opacity="0.6">
            <path d={`M${x - 10} ${y - 10} L${x + 10} ${y + 10}`} />
            <path d={`M${x + 10} ${y - 10} L${x - 10} ${y + 10}`} />
            <path d={`M${x - 6} ${y} L${x + 6} ${y}`} />
          </g>
        );
      })}
    </svg>
  );
};

export default BarbedWire;


