import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface BackgroundFXProps {
  accentColor?: string;
  primaryColor?: string;
  backgroundColor?: string;
}

export const BackgroundFX: React.FC<BackgroundFXProps> = ({
  accentColor = '#E89A5A',
  primaryColor = '#C5F36A',
  backgroundColor = '#101914',
}) => {
  const frame = useCurrentFrame();

  const driftX = interpolate(frame, [0, 180], [0, 140], { extrapolateRight: 'clamp' });
  const driftY = interpolate(frame, [0, 200], [0, -120], { extrapolateRight: 'clamp' });
  const glow = 0.5 + Math.sin(frame / 20) * 0.5;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: `radial-gradient(circle at 20% 20%, ${accentColor}22 0%, transparent 34%), linear-gradient(120deg, ${backgroundColor}, #111827 30%, ${backgroundColor})`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '150%',
          height: '150%',
          left: '-20%',
          top: '-20%',
          background: `radial-gradient(circle at 30% 35%, ${primaryColor}66 0%, transparent 24%), radial-gradient(circle at 70% 65%, ${accentColor}55 0%, transparent 28%), linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 45%, transparent 100%)`,
          transform: `translate(${driftX}px, ${driftY}px) scale(${1.08 + glow * 0.12}) rotate(${frame * 0.05}deg)`,
          filter: 'blur(28px)',
          opacity: 0.92,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(circle at center, black 0%, transparent 75%)',
          opacity: 0.26,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'repeating-linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 1px, transparent 2px, transparent 6px)',
          opacity: 0.18,
        }}
      />
    </div>
  );
};
