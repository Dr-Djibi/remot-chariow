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

  const scenePlan = [
    { name: 'hook', durationInFrames: Math.round(5.8 * fps), accent: product.theme.primaryColor },
    { name: 'solution', durationInFrames: Math.round(6.2 * fps), accent: product.theme.accentColor },
    { name: 'benefits', durationInFrames: Math.round(7.2 * fps), accent: '#F3F5EE' },
    { name: 'cta', durationInFrames: Math.round(2.8 * fps), accent: product.theme.primaryColor },
  ];

  const cumulativeFrames: number[] = [];
  let cursor = 0;
  scenePlan.forEach((scene) => {
    cumulativeFrames.push(cursor);
    cursor += scene.durationInFrames;
  });

  const cutFrames = cumulativeFrames.slice(1);

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
        <Series.Sequence durationInFrames={scenePlan[0].durationInFrames}>
          <HookScene config={product.scenes.hook} cover={product.cover} theme={product.theme} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={scenePlan[1].durationInFrames}>
          <SolutionScene
            config={product.scenes.solution}
            cover={product.cover}
            pricing={product.pricing}
            theme={product.theme}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={scenePlan[2].durationInFrames}>
          <BenefitsScene config={product.scenes.benefits} theme={product.theme} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={scenePlan[3].durationInFrames}>
          <CTAScene
            config={product.scenes.cta}
            pricing={product.pricing}
            theme={product.theme}
            brandName={product.brandName}
          />
        </Series.Sequence>
      </Series>

      {cutFrames.map((cutFrame, index) => (
        <Sequence key={`${cutFrame}-${index}`} from={cutFrame - 5} durationInFrames={20}>
          <ClickImpact color={scenePlan[index + 1]?.accent ?? product.theme.primaryColor} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
