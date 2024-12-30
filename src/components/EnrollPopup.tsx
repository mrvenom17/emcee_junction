import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function EnrollPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // Show popup after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Become an Anchor!
        </h2>
        <p className="text-gray-600 mb-6">
          Join our platform and showcase your talent to thousands of event organizers.
        </p>
        
        <div className="space-y-4">
          <a 
            href="https://forms.google.com/your-form-url" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-red-600 text-white text-center py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Enroll Now
          </a>
          <button 
            onClick={() => setIsOpen(false)}
            className="block w-full bg-gray-100 text-gray-700 text-center py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}