import React from 'react';
import { Building2, Award, Trophy, Crown } from 'lucide-react';

export default function TopLogos() {
  const logos = [
    { icon: Building2, label: 'Corporate' },
    { icon: Award, label: 'Excellence' },
    { icon: Trophy, label: 'Achievement' },
    { icon: Crown, label: 'Premium' }
  ];

  return (
    <div className="bg-black py-2">
      <div className="flex justify-center items-center space-x-12">
        {logos.map(({ icon: Icon, label }, index) => (
          <div key={index} className="flex items-center">
            <Icon className="h-6 w-6 text-white" />
            <span className="ml-2 text-white text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}