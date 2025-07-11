// Animated noise background component
'use client';
import React, { useRef, useEffect } from 'react';

interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Noise: React.FC<NoiseProps> = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
  className = '',
  style = {},
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frame = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    let lastRefresh = 0;

    const draw = (now: number) => {
      if (!canvas || !ctx) return;
      if (now - lastRefresh > 1000 / patternRefreshInterval) {
        const w = canvas.width;
        const h = canvas.height;
        const imageData = ctx.createImageData(w, h);
        for (let i = 0; i < imageData.data.length; i += 4) {
          const shade = Math.floor(Math.random() * 256);
          imageData.data[i] = shade;
          imageData.data[i + 1] = shade;
          imageData.data[i + 2] = shade;
          imageData.data[i + 3] = patternAlpha;
        }
        ctx.putImageData(imageData, 0, 0);
        lastRefresh = now;
      }
      animationFrameId = requestAnimationFrame(draw);
    };
    animationFrameId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationFrameId);
  }, [patternRefreshInterval, patternAlpha]);

  return (
    <canvas
      ref={canvasRef}
      width={patternSize * patternScaleX}
      height={patternSize * patternScaleY}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 0,
        ...style,
      }}
    />
  );
};

export default Noise; 