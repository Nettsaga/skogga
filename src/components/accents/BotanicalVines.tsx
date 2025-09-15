import React from 'react';
import { cn } from '@/lib/utils';

interface BotanicalVinesProps {
  className?: string;
}

export const BotanicalVines: React.FC<BotanicalVinesProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 300 180"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('block', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <g opacity="0.6">
        <path d="M4 160 C40 120, 80 160, 120 128 C160 96, 200 120, 240 92 C270 72, 290 52, 296 40" />
        {Array.from({ length: 6 }).map((_, i) => {
          const x = 40 + i * 40;
          const y = 120 - i * 6;
          return (
            <g key={i}>
              <path d={`M${x} ${y} c 8 -10, 18 -10, 22 0`} />
              <path d={`M${x + 22} ${y} c 6 10, 0 18, -10 20`} />
              <circle cx={x + 10} cy={y - 6} r="1.6" fill="currentColor" opacity="0.7" stroke="none" />
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default BotanicalVines;


