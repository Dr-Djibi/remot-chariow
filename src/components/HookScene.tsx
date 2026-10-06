import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { CoverConfig, HookSceneConfig, ThemeConfig } from '../types/adConfig';
import { BackgroundFX } from './UI/BackgroundFX';
import { BookCover } from './UI/BookCover';
import { MotionBackground } from './UI/MotionBackground';
import { ThreatGlobe } from './UI/ThreatGlobe';
import { TypewriterText } from './UI/TypewriterText';
import { VoiceOverCaption } from './UI/VoiceOverCaption';

interface HookSceneProps {
  config: HookSceneConfig;
  cover: CoverConfig;
  theme: ThemeConfig;
}

export const HookScene: React.FC<HookSceneProps> = ({ config, cover, theme }) => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, 60], [0, 16], { extrapolateRight: 'clamp' });
  const pulse = 0.92 + Math.sin(frame / 18) * 0.08;

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
        gap: '32px',
        overflow: 'hidden',
      }}
    >
      <MotionBackground theme={theme} />
      <BackgroundFX accentColor={theme.accentColor} primaryColor={theme.primaryColor} backgroundColor={theme.backgroundColor} />

      <div style={{ position: 'absolute', right: '7%', top: '18%', opacity: 0.8, zIndex: 0, transform: `scale(${pulse})` }}>
        <ThreatGlobe size={220} />
      </div>

      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '50%',
          transform: `translateX(-50%) translateY(${drift}px)`,
          border: `1px solid ${theme.primaryColor}55`,
          background: 'rgba(10, 18, 14, 0.38)',
          padding: '8px 18px',
          borderRadius: '999px',
          letterSpacing: '2px',
          color: theme.primaryColor,
          fontWeight: 800,
          fontSize: '18px',
          zIndex: 1,
          boxShadow: `0 0 24px ${theme.primaryColor}3F`,
        }}
      >
        CYBERSECURITY / PENTEST
      </div>

      <div style={{ width: '32%', minWidth: '180px', maxWidth: '260px', position: 'relative', zIndex: 1, transform: `translateY(${drift * 0.45}px)` }}>
        <BookCover config={cover} theme={theme} delay={4} />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '18px',
          maxWidth: '92%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(197,243,106,0.12), rgba(232,154,90,0.08), rgba(255,255,255,0.04))',
            border: `1px solid ${theme.primaryColor}40`,
            borderRadius: '18px',
            padding: '18px 26px',
            boxShadow: `0 0 28px ${theme.primaryColor}22`,
            maxWidth: '92%',
          }}
        >
          <TypewriterText
            text={config.hookText}
            delay={6}
            durationInFrames={18}
            effect="word-rise"
            color={theme.textColor}
            fontSize={54}
            fontWeight={900}
            maxWidth="92%"
          />
        </div>

        {config.subHookText && (
          <TypewriterText
            text={config.subHookText}
            delay={16}
            durationInFrames={14}
            effect="letter-pop"
            color={theme.accentColor}
            fontSize={28}
            fontWeight={700}
            maxWidth="84%"
          />
        )}
      </div>

      <VoiceOverCaption text="VO / Pentest / Cybersecurity" delay={6} />
    </AbsoluteFill>
  );
};
