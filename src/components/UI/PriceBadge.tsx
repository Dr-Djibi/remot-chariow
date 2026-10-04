import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { PricingConfig } from '../../types/adConfig';

interface PriceBadgeProps {
  pricing: PricingConfig;
  delay?: number;
  badgeColor?: string;
}

export const PriceBadge: React.FC<PriceBadgeProps> = ({
  pricing,
  delay = 10,
  badgeColor = '#EF4444',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 10,
      stiffness: 120,
    },
  });

  const pulse = Math.sin((frame / fps) * 4) * 0.05 + 1;
  const scale = entrance * pulse;

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity: entrance,
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: badgeColor,
        color: '#FFFFFF',
        borderRadius: '20px',
        padding: '16px 32px',
        boxShadow: '0 10px 25px rgba(239, 68, 68, 0.4)',
      }}
    >
      {pricing.badgeText && (
        <span
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '4px',
          }}
        >
          {pricing.badgeText}
        </span>
      )}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
        <span
          style={{
            fontSize: '42px',
            fontWeight: '900',
          }}
        >
          {pricing.discountPrice}
          {pricing.currency}
        </span>
        {pricing.originalPrice && (
          <span
            style={{
              fontSize: '24px',
              textDecoration: 'line-through',
              opacity: 0.8,
            }}
          >
            {pricing.originalPrice}
            {pricing.currency}
          </span>
        )}
      </div>
    </div>
  );
};
