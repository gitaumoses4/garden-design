import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Polygon } from './polygon.tsx';
import flower from '../assets/flower.png';

export const Flower: React.FC<FlowerProps> = (props) => {
  return (
    <Polygon type="octagon" className={twMerge('w-[70px] h-[70px] items-center justify-center', props.className)} bgColor="bg-content-1" borderColor="bg-accent">
      <span className="flex items-center justify-center brightness-0 invert">
        <img src={flower} alt="" width={40} height={40} />
      </span>
    </Polygon>
  );
};

interface FlowerProps {
  className?: string;
}
