import React from 'react';
import { Composition } from 'remotion';
import currentProductData from './data/currentProduct.json';
import { DynamicAdTemplate } from './templates/DynamicAdTemplate';
import { ProductAdConfig } from './types/adConfig';

const productData = currentProductData as ProductAdConfig;

export const RemotionRoot: React.FC = () => {
  const fps = 30;
  const totalDurationInSeconds = 20; // 3s hook + 6s solution + 6s benefits + 5s cta
  const durationInFrames = totalDurationInSeconds * fps;

  return (
    <>
      {/* Format Vertical (TikTok / Reels / Shorts / FB Stories) - 1080 x 1920 (9:16) */}
      <Composition
        id="Vertical"
        component={DynamicAdTemplate}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          product: productData,
        }}
      />

      {/* Format Carré (Facebook Feed / Instagram Feed) - 1080 x 1080 (1:1) */}
      <Composition
        id="Square"
        component={DynamicAdTemplate}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1080}
        defaultProps={{
          product: productData,
        }}
      />
    </>
  );
};
