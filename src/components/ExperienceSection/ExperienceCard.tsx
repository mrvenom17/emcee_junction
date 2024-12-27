import React from 'react';
import { Icon } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  description: string;
  icon: Icon;
  events: number;
}

export default function ExperienceCard({ title, description, icon: IconComponent, events }: ExperienceCardProps) {
  return (
    <div className="bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-colors duration-300">
      <IconComponent className="w-12 h-12 text-red-600 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <p className="text-sm text-gray-500">{events}+ events completed</p>
    </div>
  );
}