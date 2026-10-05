import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { ThemeConfig } from '../../types/adConfig';

interface MotionBackgroundProps {
  theme: ThemeConfig;
}

export const MotionBackground: React.FC<MotionBackgroundProps> = ({ theme }) => {
  const frame = useCurrentFrame();
  const { height } = useVideoConfig();
  const scanY = interpolate(frame % 150, [0, 149], [-80, height + 80]);
  const rotation = (frame / 30) * 4;

  return (
    <>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at 50% 42%, #20352B 0%, ${theme.backgroundColor} 68%)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.17,
          backgroundImage: `linear-gradient(rgba(190, 246, 107, 0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(190, 246, 107, 0.14) 1px, transparent 1px)`,
          backgroundSize: '54px 54px',
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 82%, transparent)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.12,
          backgroundImage: 'radial-gradient(rgba(243, 245, 238, 0.8) 0.8px, transparent 0.8px)',
          backgroundSize: '6px 6px',
          maskImage: 'radial-gradient(ellipse at center, black 12%, transparent 78%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: scanY,
          height: '3px',
          opacity: 0.65,
          background: `linear-gradient(90deg, transparent, ${theme.primaryColor}, ${theme.accentColor}, transparent)`,
          boxShadow: `0 0 28px ${theme.primaryColor}80`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '64vw',
          height: '64vw',
          maxWidth: '1000px',
          maxHeight: '1000px',
          top: '20%',
          left: '50%',
          border: `1px solid ${theme.primaryColor}18`,
          borderRadius: '50%',
          transform: `translateX(-50%) rotate(${rotation}deg)`,
          boxShadow: `0 0 80px ${theme.primaryColor}0D, inset 0 0 80px ${theme.accentColor}0B`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: '26px',
          border: '1px solid rgba(243, 245, 238, 0.15)',
          clipPath:
            'polygon(0 0, 10% 0, 10% 1px, 1px 1px, 1px 10%, 0 10%, 0 0, 100% 0, 100% 10%, calc(100% - 1px) 10%, calc(100% - 1px) 1px, 90% 1px, 90% 0, 100% 0, 100% 100%, 90% 100%, 90% calc(100% - 1px), calc(100% - 1px) calc(100% - 1px), calc(100% - 1px) 90%, 100% 90%, 100% 100%, 0 100%, 0 90%, 1px 90%, 1px calc(100% - 1px), 10% calc(100% - 1px), 10% 100%, 0 100%)',
          pointerEvents: 'none',
        }}
      />
    </>
  );
};