import React from 'react';
import { useTheme } from '../context/ThemeContext';

const images = [
  'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80'
];

export default function Hero() {
  const { theme } = useTheme();

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>
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