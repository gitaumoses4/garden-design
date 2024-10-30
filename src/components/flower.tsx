import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Polygon } from './polygon.tsx';
import flower from '../assets/flower.png';

export const Flower: React.FC<FlowerProps> = (props) => {
  return (
    <Polygon type="octagon" className={twMerge('w-[70px] h-[70px] items-center justify-center', props.className)} bgColor="bg-content-3" borderColor="bg-accent">
      <span className="flex items-center justify-center brightness-0 invert p-4">
        <img src={flower} alt="" />
      </span>
    </Polygon>
  );
};

interface FlowerProps {
  className?: string;
}
