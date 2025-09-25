"use client";

import { Tooltip as RadixTooltip, TooltipProps as RadixTooltipProps, TooltipArrow, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import React from 'react';

interface TooltipProps extends RadixTooltipProps {
  children: React.ReactNode;
  explain: string;
  intent?: 'primary' | 'secondary'; // Custom color scheme
  size?: 'sm' | 'md' | 'lg'; // Custom size
  side?: 'top' | 'right' | 'bottom' | 'left'; // Placement
  className?: string;
  withArrow?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Tooltip({
  children,
  explain,
  intent = 'primary',
  size = 'md',
  side = 'top',
  className = '',
  withArrow = true,
  open,
  defaultOpen,
  onOpenChange,
  ...radixProps // Spread base Radix props to Root
}: TooltipProps) {
  // Custom classes for variants (Tailwind—adjust to your styles/tailwind.css)
  const intentClass = intent === 'primary' ? 'bg-zinc-800 text-white' : 'bg-gray-200 text-black';
  const sizeClass = size === 'sm' ? 'px-2 py-1 text-xs' : size === 'lg' ? 'px-4 py-2 text-lg' : 'px-3 py-1.5 text-sm';

  return (
    <RadixTooltip open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} {...radixProps}>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent
        side={side}
        className={`${intentClass} ${sizeClass} rounded-md ${className}`}
      >
        {explain}
        {withArrow && <TooltipArrow />}
      </TooltipContent>
    </RadixTooltip>
  );
}