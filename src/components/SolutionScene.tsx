import React from 'react';
import { AbsoluteFill } from 'remotion';
import { PricingConfig, SolutionSceneConfig, ThemeConfig } from '../types/adConfig';
import { PriceBadge } from './UI/PriceBadge';
import { ProductImage } from './UI/ProductImage';
import { TextOverlay } from './UI/TextOverlay';

interface SolutionSceneProps {
  config: SolutionSceneConfig;
  pricing: PricingConfig;
  theme: ThemeConfig;
}

export const SolutionScene: React.FC<SolutionSceneProps> = ({ config, pricing, theme }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
        gap: '30px',
      }}
    >
      <TextOverlay
        text={config.title}
        delay={0}
        color={theme.primaryColor}
        fontSize={56}
        fontWeight={900}
      />

      <div style={{ width: '75%', maxWidth: '480px' }}>
        <ProductImage src={config.imageUrl} delay={10} />
      </div>

      <TextOverlay
        text={config.description}
        delay={20}
        color={theme.textColor}
        fontSize={28}
        fontWeight={500}
        style={{ maxWidth: '85%' }}
      />

      <PriceBadge pricing={pricing} delay={30} badgeColor={theme.accentColor} />
    </AbsoluteFill>
  );
};
