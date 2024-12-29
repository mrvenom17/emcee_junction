// src/components/Hero.tsx
import { useTheme } from '../context/ThemeContext';
import CustomImage from './ui/CustomImage'; // Ensure this is the correct import

export default function Hero() {
  const { theme } = useTheme();
  const images = [
    '/images/hero/i1.jpg',
    '/images/hero/i2.jpg',
    '/images/hero/i3.jpg',
    '/images/hero/i4.jpg'
  ];

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <CustomImage  // Ensure this is the correct component
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