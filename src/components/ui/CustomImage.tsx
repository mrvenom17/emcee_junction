// src/components/ui/CustomImage.tsx
import React from 'react';

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  fallbackSrc,
  onError,
  ...props
}) => {
  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallbackSrc) {
      event.currentTarget.src = fallbackSrc;
    }
    onError?.(event);
  };

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};

export default CustomImage;