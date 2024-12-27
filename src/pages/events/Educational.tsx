import React from 'react';
import EventLayout from '../../components/ui/EventLayout';

export default function Educational() {
  return (
    <EventLayout
      title="Educational Events"
      description="Expert hosts for seminars, workshops, and educational conferences"
      coverImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Educational Excellence</h2>
          <p className="text-gray-400 mb-6">
            Our educational event hosts combine academic expertise with engaging presentation skills. 
            Perfect for workshops, training sessions, and educational conferences, they facilitate 
            meaningful learning experiences.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your-educational-video-id"
              title="Educational Events"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80"
            alt="Educational Event 1"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
            alt="Educational Event 2"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
            alt="Educational Event 3"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80"
            alt="Educational Event 4"
            className="rounded-lg"
          />
        </div>
      </div>
    </EventLayout>
  );
}