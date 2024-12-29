import React from 'react';

interface ParallaxSectionProps {
  imageUrl: string;
  height?: string;
}

export default function ParallaxSection({ imageUrl, height = "50vh" }: ParallaxSectionProps) {
  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ height }}
    >
      <div
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: 'translateZ(0)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </div>
  );
}