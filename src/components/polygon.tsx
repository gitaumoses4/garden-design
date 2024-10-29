import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const clipPaths = {
  hexagon: (stretch = 5) => `polygon(${stretch}% 0%, ${100 - stretch}% 0%, 100% 50%, ${100 - stretch}% 100%, ${stretch}% 100%, 0% 50%)`,
  heptagon: () => `polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)`,
  octagon: () => `polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)`,
};

function createBorderWidth(borderWidth: number | { top?: number; right?: number; bottom?: number; left?: number }, defaultBorder: number) {
  if (typeof borderWidth === 'number') {
    return { top: `${borderWidth}px`, right: `${borderWidth}px`, bottom: `${borderWidth}px`, left: `${borderWidth}px` };
  }

  return {
    top: borderWidth.top === undefined ? `${defaultBorder}px` : `${borderWidth.top}px`,
    right: borderWidth.right === undefined ? `${defaultBorder}px` : `${borderWidth.right}px`,
    bottom: borderWidth.bottom === undefined ? `${defaultBorder}px` : `${borderWidth.bottom}px`,
    left: borderWidth.left === undefined ? `${defaultBorder}px` : `${borderWidth.left}px`,
  };
}

export const Polygon: React.FC<PropsWithChildren<PolygonProps>> = ({
  type = 'hexagon',
  stretch,
  clipPath = clipPaths[type](stretch),
  borderWidth = 2,
  ...props
}) => {
  return (
    <div className={twMerge('polygon relative flex', props.className, props.borderColor)} style={{ clipPath }}>
      {props.borderLeftColor && (
        <div
          className={clsx(props.borderLeftColor, 'absolute z-1 inner')}
          style={{
            left: 0,
            top: 0,
            bottom: 0,
            width: '50%',
            clipPath,
          }}
        />
      )}
      <div
        className={clsx(props.bgColor, 'absolute z-1 inner')}
        style={{
          ...createBorderWidth(borderWidth, 2),
          clipPath,
          backgroundImage: props.bgImage ? `url(${props.bgImage})` : undefined,
        }}
      />
      {props.children}
    </div>
  );
};

interface PolygonProps {
  borderWidth?: number | { top?: number; right?: number; bottom?: number; left?: number };
  type?: 'hexagon' | 'heptagon' | 'octagon';
  bgColor?: string;
  borderColor?: string;
  className?: string;
  bgImage?: string;
  clipPath?: string;
  stretch?: number;
  borderLeftColor?: string;
}
