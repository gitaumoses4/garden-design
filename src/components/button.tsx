import React from 'react';
import { Polygon, PolygonProps } from './polygon.tsx';
import {twMerge} from "tailwind-merge";

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Polygon
      stretch={10}
      as="button"
      {...props}
      className={twMerge("group w-[200px] h-[70px] flex items-center justify-center transition-all", props.className)}
      bgColor={twMerge(`transition-all bg-accent group-hover:opacity-95 group-hover:shadow-lg group-hover:scale-95 group-active:scale-100`, props.bgColor)}
      borderColor={twMerge(`transition-all group-hover:opacity-95 group-hover:shadow-lg group-hover:scale-95 group-active:scale-100`, props.borderColor)}
    >
      <span className="text-content-2 font-extrabold text-lg">{props.children}</span>
    </Polygon>
  );
};

interface ButtonProps extends PolygonProps<'button'> {}
