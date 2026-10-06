import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { BenefitsSceneConfig, ThemeConfig } from '../types/adConfig';
import { BackgroundFX } from './UI/BackgroundFX';
import { MotionBackground } from './UI/MotionBackground';
import { ThreatGlobe } from './UI/ThreatGlobe';
import { TypewriterText } from './UI/TypewriterText';
import { VoiceOverCaption } from './UI/VoiceOverCaption';

interface BenefitsSceneProps {
  config: BenefitsSceneConfig;
  theme: ThemeConfig;
}

export const BenefitsScene: React.FC<BenefitsSceneProps> = ({ config, theme }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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
        gap: '34px',
        overflow: 'hidden',
      }}
    >
      <MotionBackground theme={theme} />
      <BackgroundFX accentColor={theme.accentColor} primaryColor={theme.primaryColor} backgroundColor={theme.backgroundColor} />

      <div style={{ position: 'absolute', right: '8%', top: '18%', opacity: 0.8, zIndex: 0 }}>
        <ThreatGlobe size={220} />
      </div>

      <TypewriterText
        text={config.title}
        delay={0}
        durationInFrames={22}
        effect="word-rise"
        color={theme.textColor}
        fontSize={48}
        fontWeight={800}
        style={{ position: 'relative', zIndex: 1 }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          maxWidth: '660px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {config.benefits.map((benefit, index) => {
          const delay = 14 + index * 11;
          const entrance = spring({
            frame: frame - delay,
            fps,
            config: { damping: 12, stiffness: 110 },
          });

          return (
            <div
              key={benefit.id}
              style={{
                opacity: entrance,
                transform: `translateX(${(1 - entrance) * -52}px)`,
                background: 'rgba(12, 18, 15, 0.7)',
                borderRadius: '20px',
                padding: '18px 18px 16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.06)',
                backdropFilter: 'blur(8px)',
                border: `1px solid ${theme.primaryColor}20`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '10px',
                    display: 'grid',
                    placeItems: 'center',
                    background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.accentColor})`,
                    color: '#0A0F0C',
                    fontWeight: 900,
                    fontSize: '16px',
                    boxShadow: `0 0 18px ${theme.primaryColor}55`,
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>
                <div
                  style={{
                    color: theme.primaryColor,
                    fontSize: 25,
                    fontWeight: 800,
                    flex: 1,
                  }}
                >
                  <TypewriterText
                    text={benefit.title}
                    delay={delay}
                    durationInFrames={18}
                    effect="letter-pop"
                    color={theme.primaryColor}
                    fontSize={25}
                    fontWeight={800}
                    textAlign="left"
                    whiteSpace="nowrap"
                  />
                </div>
              </div>
              <div
                style={{
                  height: '1px',
                  width: '100%',
                  background: `linear-gradient(90deg, ${theme.primaryColor}55, transparent)`,
                  marginBottom: '12px',
                }}
              />
              <p
                style={{
                  margin: '0',
                  color: theme.textColor,
                  fontSize: '19px',
                  opacity: 0.9,
                  lineHeight: 1.4,
                }}
              >
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>

      <VoiceOverCaption text="Les compétences à acquérir" delay={12} />
    </AbsoluteFill>
  );
};
