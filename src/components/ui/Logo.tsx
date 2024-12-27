import React from 'react';
import { Mic2 } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="relative">
        <Mic2 className="h-8 w-8 text-red-600" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full" />
      </div>
      <div className="ml-3">
        <h1 className="text-white text-2xl font-bold tracking-wider">
          EMCEE<span className="text-red-600 ml-2">JUNCTION</span>
        </h1>
      </div>
    </div>
  );
}