import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { BenefitsSceneConfig, ThemeConfig } from '../types/adConfig';
import { BackgroundFX } from './UI/BackgroundFX';
import { MotionBackground } from './UI/MotionBackground';
import { ThreatGlobe } from './UI/ThreatGlobe';
import { TextOverlay } from './UI/TextOverlay';
import { TypewriterText } from './UI/TypewriterText';

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
        gap: '40px',
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
        durationInFrames={24}
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
          gap: '24px',
          width: '100%',
          maxWidth: '650px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {config.benefits.map((benefit, index) => {
          const delay = 15 + index * 12;
          const entrance = spring({
            frame: frame - delay,
            fps,
            config: { damping: 12, stiffness: 100 },
          });

          return (
            <div
              key={benefit.id}
              style={{
                opacity: entrance,
                transform: `translateX(${(1 - entrance) * -50}px)`,
                background: `linear-gradient(90deg, ${theme.primaryColor}18 0%, rgba(255,255,255,0.07) 28%, rgba(255,255,255,0.04) 100%)`,
                borderLeft: `6px solid ${theme.primaryColor}`,
                borderRadius: '16px',
                padding: '20px 28px',
                boxShadow: `0 0 20px ${theme.primaryColor}25`,
                backdropFilter: 'blur(4px)',
              }}
            >
              <div
                style={{
                  color: theme.primaryColor,
                  fontSize: 26,
                  fontWeight: 800,
                }}
              >
                <TypewriterText
                  text={benefit.title}
                  delay={delay}
                  durationInFrames={18}
                  effect="letter-pop"
                  color={theme.primaryColor}
                  fontSize={26}
                  fontWeight={800}
                  textAlign="left"
                />
              </div>
              <p
                style={{
                  margin: '6px 0 0 0',
                  color: theme.textColor,
                  fontSize: '20px',
                  opacity: 0.9,
                }}
              >
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
