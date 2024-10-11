import React from 'react';
import { AbsoluteFill, Img, useCurrentFrame } from 'remotion';
import { Butterfly } from './Butterfly';
import { Firefly } from './Firefly';

export const MysticalScene: React.FC = () => {
  const frame = useCurrentFrame();

  const generateRandomPositions = (count: number, maxX: number, maxY: number) => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
      scale: 0.5 + Math.random() * 0.5,
      rotation: Math.random() * 360,
    }));
  };

  const butterflies = generateRandomPositions(5, 1920, 1080);
  const fireflies = generateRandomPositions(20, 1920, 1080);

  return (
    <AbsoluteFill>
      <Img src="/mystical-scene.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <svg width="1920" height="1080" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <radialGradient id="butterflyGradient">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="100%" stopColor="#FF00FF" />
          </radialGradient>
          <radialGradient id="fireflyGradient">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFFF00" />
          </radialGradient>
        </defs>
        {butterflies.map((butterfly, index) => (
          <Butterfly
            key={`butterfly-${index}`}
            x={butterfly.x + Math.sin(frame / 30 + index) * 20}
            y={butterfly.y + Math.cos(frame / 30 + index) * 20}
            scale={butterfly.scale}
            rotation={butterfly.rotation + Math.sin(frame / 15) * 15}
          />
        ))}
        {fireflies.map((firefly, index) => (
          <Firefly
            key={`firefly-${index}`}
            x={firefly.x + Math.sin(frame / 20 + index) * 10}
            y={firefly.y + Math.cos(frame / 20 + index) * 10}
            scale={firefly.scale * (0.5 + Math.sin(frame / 10 + index) * 0.5)}
          />
        ))}
      </svg>
    </AbsoluteFill>
  );
};