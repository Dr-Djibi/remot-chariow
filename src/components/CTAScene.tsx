import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CTASceneConfig, PricingConfig, ThemeConfig } from '../types/adConfig';
import { BackgroundFX } from './UI/BackgroundFX';
import { MotionBackground } from './UI/MotionBackground';
import { PriceBadge } from './UI/PriceBadge';
import { ThreatGlobe } from './UI/ThreatGlobe';
import { TextOverlay } from './UI/TextOverlay';
import { TypewriterText } from './UI/TypewriterText';
import { VoiceOverCaption } from './UI/VoiceOverCaption';

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
        gap: '28px',
        overflow: 'hidden',
      }}
    >
      <MotionBackground theme={theme} />
      <BackgroundFX accentColor={theme.accentColor} primaryColor={theme.primaryColor} backgroundColor={theme.backgroundColor} />

      <div style={{ position: 'absolute', top: '14%', left: '50%', transform: 'translateX(-50%)', opacity: 0.9, zIndex: 0 }}>
        <ThreatGlobe size={300} />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          border: `1px solid ${theme.primaryColor}35`,
          borderRadius: '999px',
          background: 'rgba(10,18,14,0.82)',
          padding: '8px 18px',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: theme.primaryColor,
            boxShadow: `0 0 18px ${theme.primaryColor}`,
          }}
        />
        <TextOverlay
          text={brandName}
          delay={0}
          color={theme.primaryColor}
          fontSize={30}
          fontWeight={800}
          style={{ position: 'relative', letterSpacing: '2px', whiteSpace: 'nowrap' }}
        />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '18px 22px',
          borderRadius: '22px',
          border: `1px solid ${theme.primaryColor}50`,
          background: 'rgba(10,18,14,0.72)',
          boxShadow: '0 16px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '94%',
        }}
      >
        <TypewriterText
          text={config.headline}
          delay={2}
          durationInFrames={14}
          effect="letter-pop"
          color={theme.textColor}
          fontSize={50}
          fontWeight={900}
          maxWidth="100%"
          whiteSpace="nowrap"
          style={{ transform: 'translateY(0)' }}
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
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginTop: '10px',
        }}
      >
        <div
          style={{
            width: '52px',
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${theme.primaryColor}, ${theme.accentColor})`,
            boxShadow: `0 0 18px ${theme.primaryColor}90`,
          }}
        />

        <div
          style={{
            opacity: buttonEntrance,
            transform: `scale(${buttonEntrance * pulse})`,
            background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.accentColor})`,
            color: '#0A0F0C',
            padding: '18px 40px',
            borderRadius: '999px',
            fontSize: '22px',
            fontWeight: '900',
            letterSpacing: '1.2px',
            boxShadow: `0 12px 30px ${theme.primaryColor}80, inset 0 1px 0 rgba(255,255,255,0.35)`,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            border: '1px solid rgba(255,255,255,0.22)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            minWidth: 'max-content',
          }}
        >
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#0A0F0C', boxShadow: '0 0 12px rgba(10,15,12,0.8)' }} />
          {config.buttonText}
        </div>

        <div
          style={{
            width: '52px',
            height: '2px',
            background: `linear-gradient(90deg, ${theme.accentColor}, ${theme.primaryColor}, transparent)`,
            boxShadow: `0 0 18px ${theme.accentColor}90`,
          }}
        />
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

      <VoiceOverCaption text="La sécurité s'apprend" delay={10} />
    </AbsoluteFill>
  );
};
