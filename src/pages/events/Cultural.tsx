import React from 'react';
import EventLayout from '../../components/ui/EventLayout';

export default function Cultural() {
  return (
    <EventLayout
      title="Cultural Events"
      description="Versatile hosts for festivals, ceremonies, and cultural celebrations"
      coverImage="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Cultural Celebration</h2>
          <p className="text-gray-400 mb-6">
            Our cultural event hosts bring authenticity and cultural sensitivity to your celebrations. 
            With experience in diverse traditions and customs, they create inclusive and engaging 
            experiences that honor cultural heritage.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your-cultural-video-id"
              title="Cultural Events"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80"
            alt="Cultural Event 1"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
            alt="Cultural Event 2"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&q=80"
            alt="Cultural Event 3"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1504704911898-68304a7d2807?auto=format&fit=crop&q=80"
            alt="Cultural Event 4"
            className="rounded-lg"
          />
        </div>
      </div>
    </EventLayout>
  );
}