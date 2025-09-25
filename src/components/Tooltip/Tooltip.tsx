"use client";

import { Tooltip as RadixTooltip, TooltipArrow, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import React, { ComponentPropsWithoutRef } from 'react';

type RadixTooltipProps = ComponentPropsWithoutRef<typeof RadixTooltip>; // Use this to extend base props without named lookup issue

interface TooltipProps extends RadixTooltipProps {
  children: React.ReactNode;
  explain: string;
  intent?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  side?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
  withArrow?: boolean;
}

export function Tooltip({
  children,
  explain,
  intent = 'primary',
  size = 'md',
  side = 'top',
  className = '',
  withArrow = true,
  ...radixProps // Spread base props to Root
}: TooltipProps) {
  const intentClass = intent === 'primary' ? 'bg-zinc-800 text-white' : 'bg-gray-200 text-black';
  const sizeClass = size === 'sm' ? 'px-2 py-1 text-xs' : size === 'lg' ? 'px-4 py-2 text-lg' : 'px-3 py-1.5 text-sm';

  return (
    <RadixTooltip {...radixProps}>
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