import React from 'react';
import EventLayout from '../../components/ui/EventLayout';

export default function Literary() {
  return (
    <EventLayout
      title="Literary Events"
      description="Eloquent hosts for book launches, poetry readings, and literary festivals"
      coverImage="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Literary Mastery</h2>
          <p className="text-gray-400 mb-6">
            Our literary event hosts bring sophistication and cultural depth to your gatherings. 
            With expertise in literature and performing arts, they create an atmosphere that 
            celebrates the written and spoken word.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your-literary-video-id"
              title="Literary Events"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80"
            alt="Literary Event 1"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?auto=format&fit=crop&q=80"
            alt="Literary Event 2"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80"
            alt="Literary Event 3"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80"
            alt="Literary Event 4"
            className="rounded-lg"
          />
        </div>
      </div>
    </EventLayout>
  );
}