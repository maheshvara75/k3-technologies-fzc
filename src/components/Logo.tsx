import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative w-10 h-10 flex-shrink-0">
        {/* Square Border */}
        <div className="absolute inset-0 border-[3px] border-[#004a80] rounded-sm" />
        
        {/* Stylized K */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 p-1.5">
          {/* Blue vertical part of K */}
          <rect x="15" y="15" width="18" height="70" fill="#004a80" />
          
          {/* Orange diagonal parts of K - forming a chevron shape */}
          <path 
            d="M33 50 L75 15 L90 15 L48 50 L90 85 L75 85 Z" 
            fill="#f15a24" 
          />
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-normal text-[#004a80] tracking-tight font-stencil">K3</span>
            <span className="text-2xl font-normal text-[#f15a24] tracking-tight font-stencil">TECHNOLOGIES</span>
          </div>
        </div>
      )}
    </div>
  );
}
