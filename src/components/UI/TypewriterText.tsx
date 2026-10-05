import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  framesPerCharacter?: number;
  speed?: number;
  color: string;
  fontSize: number;
  fontWeight?: React.CSSProperties['fontWeight'];
  maxWidth?: React.CSSProperties['maxWidth'];
  textAlign?: React.CSSProperties['textAlign'];
  letterSpacing?: number;
  style?: React.CSSProperties;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 0,
  framesPerCharacter,
  speed,
  color,
  fontSize,
  fontWeight = 800,
  maxWidth = '100%',
  textAlign = 'center',
  letterSpacing = 0,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - delay);
  const effectiveFramesPerCharacter = framesPerCharacter ?? (speed ? 10 / speed : 1.1);
  const visibleCharacters = Math.min(text.length, Math.floor(elapsed / effectiveFramesPerCharacter));
  const entrance = spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 130, mass: 0.45 },
  });
  const cursorOn = Math.floor(frame / 10) % 2 === 0;

  return (
    <div
      style={{
        display: 'inline-grid',
        maxWidth,
        opacity: entrance,
        color,
        fontSize,
        fontWeight,
        lineHeight: 1.13,
        textAlign,
        letterSpacing: `${letterSpacing}px`,
        fontFamily: 'monospace',
        textShadow: `0 0 28px ${color}45`,
        overflowWrap: 'anywhere',
        ...style,
      }}
    >
      <span style={{ gridArea: '1 / 1', visibility: 'hidden' }}>{text}</span>
      <span style={{ gridArea: '1 / 1' }}>
        {text.slice(0, visibleCharacters)}
        <span style={{ color: '#E89A5A', opacity: cursorOn ? 1 : 0.15 }}>|</span>
      </span>
    </div>
  );
};