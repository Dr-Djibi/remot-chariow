import React from 'react';
import { AbsoluteFill } from 'remotion';
import { HookSceneConfig, ThemeConfig } from '../types/adConfig';
import { ProductImage } from './UI/ProductImage';
import { TextOverlay } from './UI/TextOverlay';

interface HookSceneProps {
  config: HookSceneConfig;
  theme: ThemeConfig;
}

export const HookScene: React.FC<HookSceneProps> = ({ config, theme }) => {
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
      {config.imageUrl && (
        <div style={{ width: '80%', maxWidth: '500px' }}>
          <ProductImage src={config.imageUrl} delay={0} />
        </div>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          maxWidth: '90%',
        }}
      >
        <TextOverlay
          text={config.hookText}
          delay={10}
          color={theme.textColor}
          fontSize={52}
          fontWeight={900}
        />

        {config.subHookText && (
          <TextOverlay
            text={config.subHookText}
            delay={20}
            color={theme.accentColor}
            fontSize={32}
            fontWeight={600}
          />
        )}
      </div>
    </AbsoluteFill>
  );
};
