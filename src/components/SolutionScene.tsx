import React from 'react';
import { AbsoluteFill } from 'remotion';
import { CoverConfig, PricingConfig, SolutionSceneConfig, ThemeConfig } from '../types/adConfig';
import { BackgroundFX } from './UI/BackgroundFX';
import { BookCover } from './UI/BookCover';
import { PriceBadge } from './UI/PriceBadge';
import { TypewriterText } from './UI/TypewriterText';

interface SolutionSceneProps {
  config: SolutionSceneConfig;
  cover: CoverConfig;
  pricing: PricingConfig;
  theme: ThemeConfig;
}

export const SolutionScene: React.FC<SolutionSceneProps> = ({ config, cover, pricing, theme }) => {
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
        gap: '30px',
        overflow: 'hidden',
      }}
    >
      <BackgroundFX accentColor={theme.accentColor} primaryColor={theme.primaryColor} backgroundColor={theme.backgroundColor} />
      <TypewriterText
        text={config.title}
        delay={8}
        speed={3}
        color={theme.primaryColor}
        fontSize={56}
        fontWeight={900}
        maxWidth="90%"
      />

      <div style={{ width: '65%', maxWidth: '390px', position: 'relative', zIndex: 1 }}>
        <BookCover config={cover} theme={theme} delay={12} />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: 'rgba(255,255,255,0.04)',
          border: `1px solid ${theme.primaryColor}55`,
          borderRadius: '20px',
          padding: '18px 20px',
          maxWidth: '87%',
          boxShadow: `0 0 28px ${theme.primaryColor}24`,
        }}
      >
        <TypewriterText
          text={config.description}
          delay={26}
          speed={2.4}
          color={theme.textColor}
          fontSize={28}
          fontWeight={500}
          maxWidth="100%"
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <PriceBadge pricing={pricing} delay={30} badgeColor={theme.accentColor} />
      </div>
    </AbsoluteFill>
  );
};
