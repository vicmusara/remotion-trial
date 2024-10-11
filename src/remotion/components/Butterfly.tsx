import React from 'react';

interface ButterflyProps {
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export const Butterfly: React.FC<ButterflyProps> = ({ x, y, scale, rotation }) => {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale}) rotate(${rotation})`}>
      <path
        d="M0,0 C5,-5 10,-10 15,-5 C20,0 25,5 20,10 C15,15 10,20 5,15 C0,10 -5,5 0,0 Z"
        fill="url(#butterflyGradient)"
      />
      <path
        d="M0,0 C-5,-5 -10,-10 -15,-5 C-20,0 -25,5 -20,10 C-15,15 -10,20 -5,15 C0,10 5,5 0,0 Z"
        fill="url(#butterflyGradient)"
      />
      <line x1="0" y1="0" x2="0" y2="15" stroke="url(#butterflyGradient)" strokeWidth="2" />
    </g>
  );
};