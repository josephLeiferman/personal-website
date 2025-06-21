'use client';

import { Tilt } from '@/components/motion-primitives/tilt';

export function TiltSpotlight() {
  return (
    <div className="aspect-video max-w-sm">
      <Tilt
        rotationFactor={6}
        isRevese
        style={{
          transformOrigin: 'center center',
        }}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
        className="group relative rounded-lg transition-shadow hover:shadow-lg"
      >
        <img
          src="/cover-photo.png"
          alt="Joseph Leiferman Cover Photo"
          className="h-full w-full rounded-lg object-cover grayscale duration-700 group-hover:grayscale-0"
        />
      </Tilt>
    </div>
  );
}
