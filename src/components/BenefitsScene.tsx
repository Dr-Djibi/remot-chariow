import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { BenefitsSceneConfig, ThemeConfig } from '../types/adConfig';
import { TextOverlay } from './UI/TextOverlay';

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
        backgroundColor: theme.backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
        gap: '40px',
      }}
    >
      <TextOverlay
        text={config.title}
        delay={0}
        color={theme.textColor}
        fontSize={48}
        fontWeight={800}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          width: '100%',
          maxWidth: '650px',
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
                backgroundColor: 'rgba(255, 255, 255, 0.07)',
                borderLeft: `6px solid ${theme.primaryColor}`,
                borderRadius: '16px',
                padding: '20px 28px',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: theme.primaryColor,
                  fontSize: '26px',
                  fontWeight: 'bold',
                }}
              >
                {benefit.title}
              </h3>
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
