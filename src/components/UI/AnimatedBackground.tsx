import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

interface AnimatedBackgroundProps {
  primary: string;
  secondary: string;
  accent: string;
  base: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  primary,
  secondary,
  accent,
  base,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const glowX = 18 + Math.sin(frame / 30) * 18;
  const glowY = 24 + Math.cos(frame / 40) * 20;
  const orbit = frame * 0.45;

  return (
    <AbsoluteFill
      style={{
        overflow: 'hidden',
        background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${primary}88 0%, transparent 30%), linear-gradient(135deg, ${base} 0%, ${secondary} 52%, ${base} 100%)`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-20%',
          transform: `translate(${Math.sin(frame / 20) * 30}px, ${Math.cos(frame / 28) * 20}px) rotate(${orbit}deg) scale(1.2)`,
          background: `radial-gradient(circle at 30% 30%, ${accent}55 0%, transparent 30%), radial-gradient(circle at 65% 50%, ${primary}66 0%, transparent 35%), linear-gradient(120deg, transparent 0%, ${primary}22 48%, transparent 100%)`,
          filter: 'blur(110px)',
          opacity: 0.9,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `repeating-linear-gradient(
            180deg,
            rgba(255,255,255,0.04) 0px,
            rgba(255,255,255,0.04) 1px,
            transparent 2px,
            transparent 4px
          )`,
          mixBlendMode: 'screen',
          opacity: 0.45,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: width * 0.12,
          top: height * 0.1,
          width: width * 0.76,
          height: height * 0.78,
          border: `1px solid ${primary}66`,
          borderRadius: '32px',
          transform: `translate(${Math.sin(frame / 24) * 18}px, ${Math.cos(frame / 20) * 12}px)`,
          boxShadow: `0 0 40px ${primary}40, inset 0 0 28px ${accent}20`,
          opacity: 0.7,
        }}
      />
    </AbsoluteFill>
  );
};
