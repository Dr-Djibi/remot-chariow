import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CoverConfig, ThemeConfig } from '../../types/adConfig';

interface BookCoverProps {
  config: CoverConfig;
  theme: ThemeConfig;
  delay?: number;
}

export const BookCover: React.FC<BookCoverProps> = ({ config, theme, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const entrance = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, stiffness: 90 },
  });
  const shine = interpolate(frame - delay, [12, 54], [-40, 150], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '390px',
        aspectRatio: '0.7',
        position: 'relative',
        opacity: entrance,
        transform: `perspective(1200px) translateY(${(1 - entrance) * 50}px) rotateX(4deg) rotateY(-19deg) rotateZ(-2deg)`,
        transformStyle: 'preserve-3d',
        padding: '36px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        color: theme.textColor,
        background: `linear-gradient(108deg, transparent ${shine - 9}%, rgba(255,255,255,0.13) ${shine}%, transparent ${shine + 10}%), linear-gradient(145deg, ${theme.backgroundColor} 8%, #24352A 100%)`,
        borderLeft: `18px solid ${theme.primaryColor}`,
        borderRadius: '4px 12px 12px 4px',
        boxShadow: '24px 34px 62px rgba(0, 0, 0, 0.58)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '24%',
          right: '-38px',
          width: '190px',
          height: '190px',
          border: `1px solid ${theme.primaryColor}70`,
          borderRadius: '50%',
          boxShadow: `0 0 0 20px ${theme.primaryColor}12, 0 0 0 42px ${theme.primaryColor}0D`,
        }}
      />
      <span
        style={{
          position: 'relative',
          color: theme.primaryColor,
          fontSize: '16px',
          fontWeight: 800,
          letterSpacing: '0',
        }}
      >
        {config.label}
      </span>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <h2
          style={{
            margin: 0,
            maxWidth: '300px',
            fontSize: 'clamp(27px, 4vw, 42px)',
            lineHeight: 1.05,
            fontWeight: 900,
          }}
        >
          {config.title}
        </h2>
        <p style={{ margin: 0, color: theme.primaryColor, fontSize: '26px', fontWeight: 700 }}>
          {config.subtitle}
        </p>
      </div>
      <span style={{ position: 'relative', maxWidth: '280px', fontSize: '16px', lineHeight: 1.4 }}>
        {config.author}
      </span>
    </div>
  );
};