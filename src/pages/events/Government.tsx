import React from 'react';
import EventLayout from '../../components/ui/EventLayout';

export default function Government() {
  return (
    <EventLayout
      title="Government Events"
      description="Professional emcees for official ceremonies, public functions, and government inaugurations"
      coverImage="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Official Excellence</h2>
          <p className="text-gray-400 mb-6">
            Our government event hosts bring dignity and professionalism to official functions. 
            With experience in protocol and ceremonial proceedings, they ensure your government 
            events maintain the highest standards of decorum.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your-government-video-id"
              title="Government Events"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?auto=format&fit=crop&q=80"
            alt="Government Event 1"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=80"
            alt="Government Event 2"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
            alt="Government Event 3"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Government Event 4"
            className="rounded-lg"
          />
        </div>
      </div>
    </EventLayout>
  );
}