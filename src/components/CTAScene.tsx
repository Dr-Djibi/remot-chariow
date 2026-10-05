import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CTASceneConfig, PricingConfig, ThemeConfig } from '../types/adConfig';
import { BackgroundFX } from './UI/BackgroundFX';
import { MotionBackground } from './UI/MotionBackground';
import { PriceBadge } from './UI/PriceBadge';
import { ThreatGlobe } from './UI/ThreatGlobe';
import { TextOverlay } from './UI/TextOverlay';
import { TypewriterText } from './UI/TypewriterText';

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
        position: 'relative',
        backgroundColor: theme.backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
        gap: '36px',
        overflow: 'hidden',
      }}
    >
      <MotionBackground theme={theme} />
      <BackgroundFX accentColor={theme.accentColor} primaryColor={theme.primaryColor} backgroundColor={theme.backgroundColor} />

      <div style={{ position: 'absolute', top: '14%', left: '50%', transform: 'translateX(-50%)', opacity: 0.9, zIndex: 0 }}>
        <ThreatGlobe size={300} />
      </div>

      <TextOverlay
        text={brandName}
        delay={0}
        color={theme.primaryColor}
        fontSize={36}
        fontWeight={800}
        style={{ position: 'relative', zIndex: 1 }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <TypewriterText
          text={config.headline}
          delay={5}
          durationInFrames={28}
          effect="letter-pop"
          color={theme.textColor}
          fontSize={50}
          fontWeight={900}
          maxWidth="92%"
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <PriceBadge pricing={pricing} delay={15} badgeColor={theme.accentColor} />
      </div>

      {config.subheadline && (
        <TextOverlay
          text={config.subheadline}
          delay={20}
          color={theme.textColor}
          fontSize={24}
          fontWeight={500}
          style={{ position: 'relative', zIndex: 1, maxWidth: '85%' }}
        />
      )}

      <div
        style={{
          opacity: buttonEntrance,
          transform: `scale(${buttonEntrance * pulse})`,
          background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.accentColor})`,
          color: '#FFFFFF',
          padding: '22px 48px',
          borderRadius: '50px',
          fontSize: '28px',
          fontWeight: '900',
          letterSpacing: '1px',
          boxShadow: `0 12px 30px ${theme.primaryColor}80`,
          textTransform: 'uppercase',
          marginTop: '10px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {config.buttonText}
      </div>

      {config.websiteUrl && (
        <TextOverlay
          text={config.websiteUrl}
          delay={30}
          color={theme.accentColor}
          fontSize={22}
          fontWeight={600}
          style={{ position: 'relative', zIndex: 1 }}
        />
      )}
    </AbsoluteFill>
  );
};
