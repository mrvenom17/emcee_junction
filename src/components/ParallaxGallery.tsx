import React, { useEffect, useState } from 'react';
import CustomImage from './ui/CustomImage';

interface ParallaxGalleryProps {
  images?: string[];
}

export default function ParallaxGallery({ images: propImages }: ParallaxGalleryProps) {
  const defaultImages = [
    '/images/hero/i1.jpg',
    '/images/hero/i2.jpg',
    '/images/hero/i3.jpg',
    '/images/hero/i4.jpg'
  ];
  
  const parallaxImages = propImages || defaultImages;
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
      {parallaxImages.map((image, index) => (
        <div
          key={index}
          className="absolute w-full h-full transition-transform duration-1000"
          style={{
            transform: `translateY(${scrollPosition * (0.1 + index * 0.05)}px)`,
            opacity: Math.max(0, 1 - scrollPosition * 0.001),
            zIndex: parallaxImages.length - index,
            top: `${index * 5}%`,
          }}
        >
          <CustomImage
            src={image}
            alt={`Parallax Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}
    </div>
  );
}