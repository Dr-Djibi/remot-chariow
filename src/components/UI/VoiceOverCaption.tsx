import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface VoiceOverCaptionProps {
  text: string;
  delay?: number;
  color?: string;
}

export const VoiceOverCaption: React.FC<VoiceOverCaptionProps> = ({
  text,
  delay = 0,
  color = '#F3F5EE',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const entrance = spring({
    frame: frame - delay,
    fps,
    config: { damping: 16, stiffness: 150, mass: 0.5 },
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        bottom: '7%',
        transform: `translateX(-50%) translateY(${(1 - entrance) * 20}px)`,
        opacity: entrance,
        color,
        fontSize: '17px',
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        padding: '10px 18px',
        borderRadius: '999px',
        border: '1px solid rgba(255,255,255,0.18)',
        background: 'rgba(12,17,14,0.42)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 0 20px rgba(197, 243, 106, 0.12)',
        maxWidth: '82%',
        textAlign: 'center',
        zIndex: 2,
      }}
    >
      {text}
    </div>
  );
};
