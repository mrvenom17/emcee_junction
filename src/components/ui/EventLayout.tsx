import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventLayoutProps {
  title: string;
  description: string;
  coverImage: string;
  children: React.ReactNode;
}

export default function EventLayout({ title, description, coverImage, children }: EventLayoutProps) {
  return (
    <div className="pt-16">
      <div className="relative h-[50vh]">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
          </div>
        </div>
        <Link 
          to="/"
          className="absolute top-8 left-8 text-white flex items-center hover:text-gray-300 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {children}
      </div>
    </div>
  );
}