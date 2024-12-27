import React, { useEffect, useState } from 'react';

interface ParallaxGalleryProps {
  images: string[];
}

export default function ParallaxGallery({ images }: ParallaxGalleryProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-[60vh] relative overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute w-full h-full transition-transform duration-1000"
          style={{
            transform: `translateY(${scrollPosition * (0.1 + index * 0.05)}px)`,
            opacity: Math.max(0, 1 - (scrollPosition * 0.001)),
            zIndex: images.length - index,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            top: `${index * 5}%`
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}
    </div>
  );
}