import React from 'react';
import { cn } from '@/lib/utils';

interface MandalaBurstProps {
  className?: string;
  petals?: number;
}

export const MandalaBurst: React.FC<MandalaBurstProps> = ({ className, petals = 12 }) => {
  const petalsArray = Array.from({ length: petals });
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('block', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g opacity="0.4">
        <circle cx="100" cy="100" r="72" />
        <circle cx="100" cy="100" r="48" opacity="0.65" />
        <circle cx="100" cy="100" r="24" opacity="0.8" />
      </g>
      <g opacity="0.6">
        {petalsArray.map((_, i) => {
          const angle = (i / petals) * 360;
          return (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              <path d="M100 18 C110 40, 110 60, 100 72 C90 60, 90 40, 100 18 Z" />
              <path d="M100 38 C105 48, 105 56, 100 62 C95 56, 95 48, 100 38 Z" opacity="0.6" />
            </g>
          );
        })}
      </g>
      <g opacity="0.5">
        {petalsArray.map((_, i) => {
          const angle = (i / petals) * 360 + 360 / (petals * 2);
          return (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              <path d="M100 80 L108 100 L100 120 L92 100 Z" fill="currentColor" opacity="0.25" stroke="none" />
            </g>
          );
        })}
      </g>
      <circle cx="100" cy="100" r="3" fill="currentColor" opacity="0.9" stroke="none" />
    </svg>
  );
};

export default MandalaBurst;


