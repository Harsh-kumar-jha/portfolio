// Component inspired by Tom Miller from the GSAP community
// https://codepen.io/creativeocean/pen/NPWLwJM

'use client';
import React, { useEffect, useRef, useState } from 'react';

type ScrambledTextProps = {
  className?: string;
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  children: string;
};

const DEFAULT_SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.:,;!?@#$%^&*()[]{}<>|/\\';

function randomChar(chars: string) {
  return chars[Math.floor(Math.random() * chars.length)];
}

export default function ScrambledText({
  className = '',
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  children,
}: ScrambledTextProps) {
  const [display, setDisplay] = useState(children);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDisplay(children);
  }, [children]);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    const original = children;
    let frame = 0;
    const totalFrames = Math.max(1, Math.floor((duration * 1000) / (speed * 50)));
    const chars = scrambleChars || DEFAULT_SCRAMBLE_CHARS;

    intervalRef.current = setInterval(() => {
      let scrambled = '';
      for (let i = 0; i < original.length; i++) {
        if (Math.random() < Math.max(0, 1 - frame / totalFrames)) {
          scrambled += randomChar(chars);
        } else {
          scrambled += original[i];
        }
      }
      setDisplay(scrambled);
      frame++;
      if (frame > totalFrames) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplay(original);
        setIsScrambling(false);
      }
    }, speed * 50);
  };

  useEffect(() => {
    scramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, duration, speed, scrambleChars]);

  return (
    <span
      className={className + ' cursor-pointer select-none'}
      onMouseEnter={scramble}
      style={{
        display: 'inline-block',
        filter: 'drop-shadow(0 0 6px #00fff7)',
        textShadow: '0 0 8px #00fff7, 0 0 16px #00fff7',
      }}
    >
      {display}
    </span>
  );
} 