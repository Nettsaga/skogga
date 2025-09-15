import React from 'react';
import { cn } from '@/lib/utils';

interface CornerOrnamentProps {
  className?: string;
}

export const CornerOrnament: React.FC<CornerOrnamentProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('block', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 6 H30" opacity="0.7" />
      <path d="M6 6 V30" opacity="0.7" />
      <path d="M18 6 H30" opacity="0.4" />
      <path d="M6 18 V30" opacity="0.4" />
      <path d="M40 40 l8 -8 l8 8 l-8 8 Z" fill="currentColor" stroke="none" opacity="0.35" />
      <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
};

export default CornerOrnament;


