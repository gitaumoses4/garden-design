import React from 'react';
import { Polygon } from './polygon.tsx';
import { twMerge } from 'tailwind-merge';
import {Flower} from "./flower.tsx";

export const Steps: React.FC<StepsProps> = (props) => {
  return (
    <div className={twMerge('flex flex-row-reverse', props.className)}>
      {[...props.steps].reverse().map((step, index) => (
        <div className="relative w-[200px] h-[80px] ml-[-30px]">
          <Polygon
            key={index}
            className="flex w-full h-full flex-col justify-center items-center gap-2"
            bgColor={index % 2 === 1 ? 'bg-content-2' : 'bg-background'}
            stretch={10}
            borderColor="bg-text/50"
          >
            <h3 className="text-text font-extrabold mb-[-10px]">{step.title}</h3>
            <p className="text-text font-extralight text-xs">{step.description}</p>
          </Polygon>
          <Flower className="absolute w-[50px] h-[50px] top-[-25px] left-[50%] translate-x-[-50%]" />
        </div>
      ))}
    </div>
  );
};

interface StepsProps {
  steps: Array<{
    title: string;
    description: string;
  }>;
  className?: string;
}
