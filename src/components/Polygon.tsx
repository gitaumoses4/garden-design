import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

const clipPaths = {
  hexagon: (stretch = 5) => `polygon(${stretch}% 0%, ${100 - stretch}% 0%, 100% 50%, ${100 - stretch}% 100%, ${stretch}% 100%, 0% 50%)`,
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
    <div className={clsx('polygon', props.className, props.borderColor, 'relative')} style={{ clipPath }}>
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
  type?: 'hexagon';
  bgColor?: string;
  borderColor?: string;
  className?: string;
  bgImage?: string;
  clipPath?: string;
  stretch?: number;
}
