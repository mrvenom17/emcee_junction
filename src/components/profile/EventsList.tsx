import React from 'react';

interface Event {
  id: number;
  name: string;
  date: string;
}

interface EventsListProps {
  upcomingEvents: Event[];
  pastEvents: Event[];
}

export default function EventsList({ upcomingEvents, pastEvents }: EventsListProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6">
        <h3 className="text-xl font-semibold text-black mb-4">Upcoming Events</h3>
        <div className="space-y-4">
          {upcomingEvents.map(event => (
            <div key={event.id} className="flex justify-between items-center bg-gray-50 p-4 rounded">
              <span className="text-gray-900">{event.name}</span>
              <span className="text-gray-600">{event.date}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6">
        <h3 className="text-xl font-semibold text-black mb-4">Past Events</h3>
        <div className="space-y-4">
          {pastEvents.map(event => (
            <div key={event.id} className="flex justify-between items-center bg-gray-50 p-4 rounded">
              <span className="text-gray-900">{event.name}</span>
              <span className="text-gray-600">{event.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}