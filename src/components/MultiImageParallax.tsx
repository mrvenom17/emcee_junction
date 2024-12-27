import React, { useEffect, useState } from 'react';

interface MultiImageParallaxProps {
  images: string[];
  height?: string;
}

export default function MultiImageParallax({ images, height = "60vh" }: MultiImageParallaxProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ height }}
    >
      <div className="grid grid-cols-3 h-full gap-2">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative h-full overflow-hidden"
            style={{
              transform: `translateY(${scrollPosition * (0.1 + index * 0.05)}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${image})`,
                transform: 'scale(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-700" />
          </div>
        ))}
      </div>
    </div>
  );
}