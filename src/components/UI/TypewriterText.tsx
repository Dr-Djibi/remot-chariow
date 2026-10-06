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
  whiteSpace?: React.CSSProperties['whiteSpace'];
  style?: React.CSSProperties;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 0,
  framesPerCharacter,
  speed,
  durationInFrames = 20,
  effect = 'typewriter',
  color,
  fontSize,
  fontWeight = 800,
  maxWidth = '100%',
  textAlign = 'center',
  letterSpacing = 0,
  whiteSpace = 'normal',
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - delay);
  const revealDuration = Math.max(10, Math.min(durationInFrames, Math.max(12, Math.ceil(text.length * 0.8))));
  const effectiveFramesPerCharacter =
    framesPerCharacter ?? (speed ? Math.min(0.8, revealDuration / Math.max(1, text.length)) : 0.7);
  const visibleCharacters =
    elapsed >= revealDuration ? text.length : Math.min(text.length, Math.floor((elapsed / revealDuration) * text.length));
  const entrance = spring({
    frame: frame - delay,
    fps,
    config: { damping: 16, stiffness: 150, mass: 0.4 },
  });
  const cursorOn = Math.floor((frame - delay) / 7) % 2 === 0;

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
        whiteSpace,
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
              <span style={{ color: '#E89A5A', opacity: cursorOn ? 1 : 0.12 }}>|</span>
            )}
          </>
        )}
        {effect === 'letter-pop' &&
          text.split('').map((character, index) => {
            const revealProgress = Math.max(0, Math.min(1, (elapsed - index * 1.1) / revealDuration));
            const letterEntrance = spring({
              frame: elapsed - index * 1.2,
              fps,
              config: { damping: 14, stiffness: 210, mass: 0.32 },
            });

            return (
              <span
                key={`${character}-${index}`}
                style={{
                  display: 'inline-block',
                  whiteSpace: 'pre',
                  opacity: Math.min(1, revealProgress * 1.4 + letterEntrance * 0.3),
                  transform: `translateY(${(1 - letterEntrance) * -18}px) rotate(${(1 - letterEntrance) * -10}deg) scale(${0.75 + letterEntrance * 0.25})`,
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

            const wordStart = index * 2.4;
            const wordEntrance = spring({
              frame: elapsed - wordStart,
              fps,
              config: { damping: 13, stiffness: 170, mass: 0.42 },
            });

            return (
              <span
                key={`${word}-${index}`}
                style={{
                  display: 'inline-block',
                  opacity: wordEntrance,
                  transform: `translateY(${(1 - wordEntrance) * 26}px) rotateX(${(1 - wordEntrance) * -30}deg)`,
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