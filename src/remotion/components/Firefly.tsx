import React from 'react';

interface FireflyProps {
  x: number;
  y: number;
  scale: number;
}

export const Firefly: React.FC<FireflyProps> = ({ x, y, scale }) => {
  return (
    <circle
      cx={x}
      cy={y}
      r={2 * scale}
      fill="url(#fireflyGradient)"
    />
  );
};