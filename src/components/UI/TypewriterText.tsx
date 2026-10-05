import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  framesPerCharacter?: number;
  speed?: number;
  durationInFrames?: number;
  effect?: 'typewriter' | 'letter-pop' | 'word-rise';
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
  durationInFrames = 24,
  effect = 'typewriter',
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
  const effectiveFramesPerCharacter =
    framesPerCharacter ?? (speed ? Math.min(0.55, durationInFrames / Math.max(1, text.length)) : 0.45);
  const visibleCharacters =
    elapsed >= durationInFrames
      ? text.length
      : Math.min(text.length, Math.floor(elapsed / effectiveFramesPerCharacter));
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
        fontFamily: effect === 'typewriter' ? 'monospace' : 'inherit',
        textShadow: `0 0 28px ${color}45`,
        overflowWrap: 'anywhere',
        ...style,
      }}
    >
      <span style={{ gridArea: '1 / 1', visibility: 'hidden' }}>{text}</span>
      <span style={{ gridArea: '1 / 1', whiteSpace: 'pre-wrap' }}>
        {effect === 'typewriter' && (
          <>
            {text.slice(0, visibleCharacters)}
            {visibleCharacters < text.length && (
              <span style={{ color: '#E89A5A', opacity: cursorOn ? 1 : 0.15 }}>|</span>
            )}
          </>
        )}
        {effect === 'letter-pop' &&
          text.split('').map((character, index) => {
            const stagger = Math.min(0.45, durationInFrames / Math.max(1, text.length));
            const letterEntrance = spring({
              frame: elapsed - index * stagger,
              fps,
              config: { damping: 9, stiffness: 190, mass: 0.35 },
            });

            return (
              <span
                key={`${character}-${index}`}
                style={{
                  display: 'inline-block',
                  whiteSpace: 'pre',
                  opacity: letterEntrance,
                  transform: `translateY(${(1 - letterEntrance) * -18}px) scale(${0.72 + letterEntrance * 0.28})`,
                }}
              >
                {character}
              </span>
            );
          })}
        {effect === 'word-rise' &&
          text.split(/(\s+)/).map((word, index) => {
            if (/^\s+$/.test(word)) {
              return word;
            }

            const wordEntrance = spring({
              frame: elapsed - index * 2,
              fps,
              config: { damping: 13, stiffness: 150, mass: 0.45 },
            });

            return (
              <span
                key={`${word}-${index}`}
                style={{
                  display: 'inline-block',
                  opacity: wordEntrance,
                  transform: `translateY(${(1 - wordEntrance) * 28}px) rotateX(${(1 - wordEntrance) * -35}deg)`,
                  transformOrigin: 'bottom',
                }}
              >
                {word}
              </span>
            );
          })}
      </span>
    </div>
  );
};