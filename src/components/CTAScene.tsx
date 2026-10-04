import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CTASceneConfig, PricingConfig, ThemeConfig } from '../types/adConfig';
import { PriceBadge } from './UI/PriceBadge';
import { TextOverlay } from './UI/TextOverlay';

interface CTASceneProps {
  config: CTASceneConfig;
  pricing: PricingConfig;
  theme: ThemeConfig;
  brandName: string;
}

export const CTAScene: React.FC<CTASceneProps> = ({ config, pricing, theme, brandName }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const buttonEntrance = spring({
    frame: frame - 25,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  const pulse = Math.sin((frame / fps) * 5) * 0.04 + 1;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
        gap: '36px',
      }}
    >
      <TextOverlay
        text={brandName}
        delay={0}
        color={theme.primaryColor}
        fontSize={36}
        fontWeight={800}
      />

      <TextOverlay
        text={config.headline}
        delay={5}
        color={theme.textColor}
        fontSize={50}
        fontWeight={900}
      />

      <PriceBadge pricing={pricing} delay={15} badgeColor={theme.accentColor} />

      {config.subheadline && (
        <TextOverlay
          text={config.subheadline}
          delay={20}
          color={theme.textColor}
          fontSize={24}
          fontWeight={500}
        />
      )}

      <div
        style={{
          opacity: buttonEntrance,
          transform: `scale(${buttonEntrance * pulse})`,
          backgroundColor: theme.primaryColor,
          color: '#FFFFFF',
          padding: '22px 48px',
          borderRadius: '50px',
          fontSize: '28px',
          fontWeight: '900',
          letterSpacing: '1px',
          boxShadow: `0 12px 30px ${theme.primaryColor}80`,
          textTransform: 'uppercase',
          marginTop: '10px',
        }}
      >
        {config.buttonText}
      </div>

      <TextOverlay
        text={config.websiteUrl}
        delay={30}
        color={theme.accentColor}
        fontSize={22}
        fontWeight={600}
      />
    </AbsoluteFill>
  );
};
