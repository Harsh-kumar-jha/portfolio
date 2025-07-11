'use client';
import Noise from './Noise';

export default function NoiseBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
    </div>
  );
} 