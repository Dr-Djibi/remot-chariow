import React from 'react';
import { AbsoluteFill } from 'remotion';
import { CoverConfig, HookSceneConfig, ThemeConfig } from '../types/adConfig';
import { BackgroundFX } from './UI/BackgroundFX';
import { BookCover } from './UI/BookCover';
import { TypewriterText } from './UI/TypewriterText';

interface HookSceneProps {
  config: HookSceneConfig;
  cover: CoverConfig;
  theme: ThemeConfig;
}

export const HookScene: React.FC<HookSceneProps> = ({ config, cover, theme }) => {
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
      <BackgroundFX accentColor={theme.accentColor} primaryColor={theme.primaryColor} backgroundColor={theme.backgroundColor} />
      <BookCover config={cover} theme={theme} delay={4} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          maxWidth: '90%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <TypewriterText
          text={config.hookText}
          delay={18}
          speed={3}
          color={theme.textColor}
          fontSize={52}
          fontWeight={900}
          maxWidth="90%"
        />

        {config.subHookText && (
          <TypewriterText
            text={config.subHookText}
            delay={36}
            speed={4}
            color={theme.accentColor}
            fontSize={30}
            fontWeight={700}
            maxWidth="88%"
          />
        )}
      </div>
    </AbsoluteFill>
  );
};
