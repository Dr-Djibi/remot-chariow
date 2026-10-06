import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { CoverConfig, PricingConfig, SolutionSceneConfig, ThemeConfig } from '../types/adConfig';
import { BackgroundFX } from './UI/BackgroundFX';
import { BookCover } from './UI/BookCover';
import { MotionBackground } from './UI/MotionBackground';
import { PriceBadge } from './UI/PriceBadge';
import { ThreatGlobe } from './UI/ThreatGlobe';
import { TypewriterText } from './UI/TypewriterText';
import { VoiceOverCaption } from './UI/VoiceOverCaption';

interface SolutionSceneProps {
  config: SolutionSceneConfig;
  cover: CoverConfig;
  pricing: PricingConfig;
  theme: ThemeConfig;
}

export const SolutionScene: React.FC<SolutionSceneProps> = ({ config, cover, pricing, theme }) => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, 80], [0, 22], { extrapolateRight: 'clamp' });

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
        gap: '26px',
        overflow: 'hidden',
      }}
    >
      <MotionBackground theme={theme} />
      <BackgroundFX accentColor={theme.accentColor} primaryColor={theme.primaryColor} backgroundColor={theme.backgroundColor} />

      <div style={{ position: 'absolute', left: '12%', top: '20%', opacity: 0.8, zIndex: 0, transform: `translateY(${drift}px)` }}>
        <ThreatGlobe size={180} />
      </div>

      <div
        style={{
          display: 'flex',
          gap: '14px',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
          marginBottom: '8px',
        }}
      >
        {['PENTEST', 'MÉTHODE', 'METASPLOIT', 'SÉCURITÉ'].map((tag, index) => (
          <div
            key={tag}
            style={{
              opacity: 0.8,
              border: `1px solid ${theme.primaryColor}66`,
              borderRadius: '999px',
              padding: '7px 14px',
              background: index % 2 === 0 ? 'rgba(197,243,106,0.09)' : 'rgba(232,154,90,0.08)',
              color: index % 2 === 0 ? theme.primaryColor : theme.accentColor,
              fontSize: '16px',
              fontWeight: 700,
              letterSpacing: '1.4px',
            }}
          >
            {tag}
          </div>
        ))}
      </div>

      <TypewriterText
        text={config.title}
        delay={4}
        durationInFrames={18}
        effect="word-rise"
        color={theme.primaryColor}
        fontSize={54}
        fontWeight={900}
        maxWidth="90%"
      />

      <div style={{ width: '62%', maxWidth: '390px', position: 'relative', zIndex: 1, transform: `translateY(${drift * 0.4}px)` }}>
        <BookCover config={cover} theme={theme} delay={4} />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: 'linear-gradient(135deg, rgba(197,243,106,0.08) 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.02) 100%)',
          border: `1px solid ${theme.primaryColor}55`,
          borderRadius: '22px',
          padding: '20px 22px',
          maxWidth: '88%',
          boxShadow: `0 0 30px ${theme.primaryColor}20`,
          backdropFilter: 'blur(4px)',
        }}
      >
        <TypewriterText
          text={config.description}
          delay={16}
          durationInFrames={18}
          effect="letter-pop"
          color={theme.textColor}
          fontSize={28}
          fontWeight={500}
          maxWidth="100%"
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <PriceBadge pricing={pricing} delay={28} badgeColor={theme.accentColor} />
      </div>

      <VoiceOverCaption text="Comprendre les failles" delay={8} />
    </AbsoluteFill>
  );
};
