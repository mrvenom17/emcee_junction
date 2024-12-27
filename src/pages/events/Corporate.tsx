import React from 'react';
import EventLayout from '../../components/ui/EventLayout';

export default function Corporate() {
  return (
    <EventLayout
      title="Corporate Events"
      description="Professional emcees for conferences, product launches, and business summits"
      coverImage="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Professional Excellence</h2>
          <p className="text-gray-400 mb-6">
            Our corporate event emcees bring polish and professionalism to your business gatherings. 
            With experience in handling high-stakes presentations and maintaining engaging dialogue, 
            they ensure your corporate message is delivered with impact.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your-corporate-video-id"
              title="Corporate Events"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
            alt="Corporate Event 1"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
            alt="Corporate Event 2"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
            alt="Corporate Event 3"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80"
            alt="Corporate Event 4"
            className="rounded-lg"
          />
        </div>
      </div>
    </EventLayout>
  );
}