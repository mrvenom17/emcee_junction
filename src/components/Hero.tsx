import React from 'react';
import { useTheme } from '../context/ThemeContext';

const image = '/images/hero/i.png'; // Just one image now

export default function Hero() {
  const { theme } = useTheme();

  return (
    <div className="relative h-screen w-full" 
         style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text contrast */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-6xl font-bold mb-8">
          <span className="bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text">
            Managing
          </span>{' '}
          <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>
            all types of Events
          </span>
        </h1>
      </div>
    </div>
  );
}
