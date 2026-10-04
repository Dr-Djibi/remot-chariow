import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface TextOverlayProps {
  text: string;
  delay?: number;
  color?: string;
  fontSize?: number;
  fontWeight?: React.CSSProperties['fontWeight'];
  textAlign?: React.CSSProperties['textAlign'];
  style?: React.CSSProperties;
}

export const TextOverlay: React.FC<TextOverlayProps> = ({
  text,
  delay = 0,
  color = '#FFFFFF',
  fontSize = 48,
  fontWeight = 'bold',
  textAlign = 'center',
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 12,
      stiffness: 100,
      mass: 0.5,
    },
  });

  const translateY = (1 - entrance) * 40;
  const opacity = entrance;
  const scale = 0.8 + entrance * 0.2;

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        color,
        fontSize: `${fontSize}px`,
        fontWeight,
        textAlign,
        lineHeight: 1.2,
        fontFamily: 'sans-serif',
        textShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
        ...style,
      }}
    >
      {text}
    </div>
  );
};
