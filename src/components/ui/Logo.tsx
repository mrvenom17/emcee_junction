// src/components/ui/Logo.tsx
import React from 'react';
import CustomImage from './CustomImage';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <CustomImage
          src="/images/logos/logo1.png"
          alt="Emcee Junction Logo"
          className="h-20 w-20"
          fallbackSrc="/path/to/fallback/logo.png"
        />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full" />
      </div>
      <div className="ml-3">
        <h1 className="text-white text-2xl font-bold tracking-wider">
          EMCEE<span className="text-red-600 ml-2">JUNCTION</span>
        </h1>
      </div>
    </div>
  );
};

export default Logo;