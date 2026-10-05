import React from 'react';
import { AbsoluteFill, Audio, Sequence, Series, staticFile, useVideoConfig } from 'remotion';
import { BenefitsScene } from '../components/BenefitsScene';
import { CTAScene } from '../components/CTAScene';
import { HookScene } from '../components/HookScene';
import { SolutionScene } from '../components/SolutionScene';
import { ClickImpact } from '../components/UI/ClickImpact';
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
  const ctaDurationFrames = Math.round(5 * fps);
  const cutFrames = [hookDurationFrames, hookDurationFrames + solutionDurationFrames, hookDurationFrames + solutionDurationFrames + benefitsDurationFrames];

  return (
    <AbsoluteFill>
      {product.audio?.voiceover && (
        <Audio
          src={staticFile(product.audio.voiceover.src)}
          volume={product.audio.voiceover.volume ?? 1}
        />
      )}
      {product.audio?.soundEffects?.map((effect, index) => (
        <Sequence key={`${effect.src}-${index}`} from={Math.round(effect.atSeconds * fps)}>
          <Audio src={staticFile(effect.src)} volume={effect.volume ?? 1} />
        </Sequence>
      ))}
      <Series>
        <Series.Sequence durationInFrames={hookDurationFrames}>
          <HookScene config={product.scenes.hook} cover={product.cover} theme={product.theme} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={solutionDurationFrames}>
          <SolutionScene
            config={product.scenes.solution}
            cover={product.cover}
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
      {cutFrames.map((cutFrame) => (
        <Sequence key={cutFrame} from={cutFrame - 5} durationInFrames={20}>
          <ClickImpact color={product.theme.primaryColor} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
