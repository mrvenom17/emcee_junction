import React from 'react';
import EventLayout from '../../components/ui/EventLayout';

export default function PrivateEvents() {
  return (
    <EventLayout
      title="Private Events"
      description="Professional hosts for corporate meetings, product launches, and private gatherings"
      coverImage="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Private Excellence</h2>
          <p className="text-gray-400 mb-6">
            Our private event hosts bring sophistication and professionalism to your exclusive gatherings. 
            With experience in handling confidential meetings and private functions, they ensure your 
            events maintain the perfect balance of formality and engagement.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your-private-video-id"
              title="Private Events"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
            alt="Private Event 1"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80"
            alt="Private Event 2"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
            alt="Private Event 3"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
            alt="Private Event 4"
            className="rounded-lg"
          />
        </div>
      </div>
    </EventLayout>
  );
}