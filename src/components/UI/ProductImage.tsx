import React from 'react';
import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface ProductImageProps {
  src: string;
  alt?: string;
  delay?: number;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt = 'Product image',
  delay = 0,
  width = '100%',
  height = 'auto',
  borderRadius = 24,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 14,
      stiffness: 90,
    },
  });

  const floatY = Math.sin((frame / fps) * 2) * 10;
  const scale = entrance;
  const rotation = interpolate(entrance, [0, 1], [-8, 0]);

  return (
    <div
      style={{
        transform: `scale(${scale}) translateY(${floatY}px) rotate(${rotation}deg)`,
        opacity: entrance,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Img
        src={src}
        alt={alt}
        style={{
          width,
          height,
          objectFit: 'cover',
          borderRadius: `${borderRadius}px`,
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
        }}
      />
    </div>
  );
};
