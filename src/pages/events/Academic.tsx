import React from 'react';
import EventLayout from '../../components/ui/EventLayout';

export default function Academic() {
  return (
    <EventLayout
      title="Academic Events"
      description="Expert hosts for conferences, symposiums, and educational seminars"
      coverImage="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Academic Excellence</h2>
          <p className="text-gray-400 mb-6">
            Our academic event hosts combine scholarly knowledge with engaging presentation skills. 
            Perfect for research conferences, academic seminars, and educational workshops, they 
            facilitate meaningful dialogue and knowledge exchange.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your-academic-video-id"
              title="Academic Events"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
            alt="Academic Event 1"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
            alt="Academic Event 2"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
            alt="Academic Event 3"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Academic Event 4"
            className="rounded-lg"
          />
        </div>
      </div>
    </EventLayout>
  );
}