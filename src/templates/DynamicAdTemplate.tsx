import React from 'react';
import { Series, useVideoConfig } from 'remotion';
import { BenefitsScene } from '../components/BenefitsScene';
import { CTAScene } from '../components/CTAScene';
import { HookScene } from '../components/HookScene';
import { SolutionScene } from '../components/SolutionScene';
import { ProductAdConfig } from '../types/adConfig';

interface DynamicAdTemplateProps {
  product: ProductAdConfig;
}

export const DynamicAdTemplate: React.FC<DynamicAdTemplateProps> = ({ product }) => {
  const { fps } = useVideoConfig();

  // Durées des scènes en secondes (total 20 secondes / 600 frames à 30fps)
  const hookDurationFrames = Math.round(3 * fps); // 0-3s
  const solutionDurationFrames = Math.round(6 * fps); // 3-9s
  const benefitsDurationFrames = Math.round(6 * fps); // 9-15s
  const ctaDurationFrames = Math.round(5 * fps); // 15-20s

  return (
    <Series>
      <Series.Sequence durationInFrames={hookDurationFrames}>
        <HookScene config={product.scenes.hook} theme={product.theme} />
      </Series.Sequence>

      <Series.Sequence durationInFrames={solutionDurationFrames}>
        <SolutionScene
          config={product.scenes.solution}
          pricing={product.pricing}
          theme={product.theme}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={benefitsDurationFrames}>
        <BenefitsScene config={product.scenes.benefits} theme={product.theme} />
      </Series.Sequence>

      <Series.Sequence durationInFrames={ctaDurationFrames}>
        <CTAScene
          config={product.scenes.cta}
          pricing={product.pricing}
          theme={product.theme}
          brandName={product.brandName}
        />
      </Series.Sequence>
    </Series>
  );
};
