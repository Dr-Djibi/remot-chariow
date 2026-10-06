import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface ClickImpactProps {
  color: string;
}

export const ClickImpact: React.FC<ClickImpactProps> = ({ color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cursor = spring({ frame: frame - 1, fps, config: { damping: 12, stiffness: 240 } });
  const ripple = interpolate(frame, [1, 12], [0.2, 3.4], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const rippleOpacity = interpolate(frame, [1, 4, 12], [0, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const flashOpacity = interpolate(frame, [0, 1, 2.5, 8], [0, 0.25, 0.1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const wipeX = interpolate(frame, [0, 2, 4, 10, 16], [-170, -170, 0, 160, 160], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const wipeOpacity = interpolate(frame, [0, 2, 4, 9, 14], [0, 0.7, 0.9, 0.32, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ zIndex: 30, pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: color, opacity: flashOpacity }} />
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          bottom: '-10%',
          left: '29%',
          width: '42%',
          opacity: wipeOpacity,
          transform: `translateX(${wipeX}%) skewX(-18deg)`,
          background: `linear-gradient(90deg, transparent, ${color}88 24%, #F3F5EE 50%, ${color} 55%, transparent)`,
          filter: `drop-shadow(0 0 30px ${color})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '76%',
          top: '38%',
          width: 72,
          height: 72,
          border: `3px solid ${color}`,
          borderRadius: '50%',
          opacity: rippleOpacity,
          transform: `translate(-50%, -50%) scale(${ripple})`,
          boxShadow: `0 0 32px ${color}`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '76%',
          top: '38%',
          width: 22,
          height: 22,
          borderRadius: '50%',
          backgroundColor: color,
          opacity: rippleOpacity,
          transform: `translate(-50%, -50%) scale(${0.5 + ripple * 0.25})`,
        }}
      />
      <svg
        width="58"
        height="72"
        viewBox="0 0 58 72"
        style={{
          position: 'absolute',
          left: '76%',
          top: '38%',
          opacity: cursor,
          transform: `translate(-14px, -12px) translateY(${(1 - cursor) * -22}px) scale(${0.72 + cursor * 0.28})`,
          filter: `drop-shadow(0 0 12px ${color})`,
        }}
      >
        <path d="M8 5v48l13-12 9 22 10-4-9-22 18-2L8 5Z" fill="#F3F5EE" stroke="#101914" strokeWidth="4" strokeLinejoin="round" />
      </svg>
    </AbsoluteFill>
  );
};
