import React, { useRef, useEffect, useState } from 'react';

interface MultiLayerParallaxProps {
  images: string[];
  height?: string;
  speeds?: number[];
  offsets?: number[];
  scaleFactor?: number;
  stickyOffset?: number;
}

const MultiLayerParallax = ({
  images,
  height = "100vh", 
  speeds = [0.05, 0.1, 0.15, 0.2, 0.25],
  offsets = [0, 50, 100, 150, 200],
  scaleFactor = 1.2,
  stickyOffset = 0,
}: MultiLayerParallaxProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(true);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check if scrolled past the total parallax height
      const totalHeight = parallaxRef.current ? parallaxRef.current.clientHeight : 0;
      setIsFixed(window.scrollY < totalHeight - window.innerHeight + stickyOffset);
    };

    const updateContainerHeight = () => {
      if (parallaxRef.current) {
        setContainerHeight(parallaxRef.current.clientHeight);
      }
    };


    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);

    // Set initial height and attach resize listener
    updateContainerHeight();
    window.addEventListener('resize', updateContainerHeight);


    // Clean up listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateContainerHeight);
    };
  }, [stickyOffset, images, containerHeight]); // Correct dependencies


  const imageHeight = isFixed ? `${100 / images.length}vh` : `${height}`; // Dynamic height

  return (
    <div
      ref={parallaxRef}
      className={`relative w-full overflow-hidden transition-transform duration-500 ${
        isFixed ? `fixed top-${stickyOffset}px` : ''
      }`}
      style={{ height: isFixed ? 'auto' : height }}
    >
      {images.map((image, index) => {
        const speed = speeds[index % speeds.length];
        const offset = offsets[index % offsets.length];
        const scale = scaleFactor - index * 0.2; // scaleFactor usage corrected.
        const translateY = scrollY * speed + offset;


        return (
          <div
            key={index}
            className="absolute inset-0 w-full"  // Ensures full width and proper positioning
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${translateY}px) scale(${scale})`,
              zIndex: images.length - 1 - index,
              transition: 'transform 0.3s ease-out',
              height: imageHeight, // Consistent height applied
            }}
          >
            <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-700" />
          </div>
        );
      })}
    </div>
  );
};

export default MultiLayerParallax;

