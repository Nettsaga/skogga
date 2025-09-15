import React from 'react';
import { cn } from '@/lib/utils';

interface OrnamentDividerProps {
  className?: string;
}

export const OrnamentDivider: React.FC<OrnamentDividerProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 400 16"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('block', className)}
      fill="none"
    >
      <path d="M2 8 H160" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
      <path d="M240 8 H398" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
      <path d="M200 4 L208 8 L200 12 L192 8 Z" fill="currentColor" />
      <circle cx="176" cy="8" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="224" cy="8" r="1.5" fill="currentColor" opacity="0.8" />
    </svg>
  );
};

export default OrnamentDivider;


