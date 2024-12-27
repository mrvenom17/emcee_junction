import React from 'react';
import { Star, Award, Calendar } from 'lucide-react';

export default function OrganizerView() {
  const anchorData = {
    name: "Sarah Johnson",
    role: "Professional Emcee",
    rating: 4.8,
    eventsCompleted: 150,
    specializations: ["Corporate Events", "Tech Conferences", "Product Launches"],
    languages: ["English", "Spanish"],
    pastEvents: [
      { id: 1, name: "Tech Summit 2024", type: "Conference" },
      { id: 2, name: "Annual Corporate Meeting", type: "Corporate" },
      { id: 3, name: "Product Launch Event", type: "Launch" }
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-6">
          <div className="text-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
              alt={anchorData.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{anchorData.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{anchorData.role}</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span>{anchorData.rating} Rating</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Calendar className="w-5 h-5 text-blue-500 mr-2" />
              <span>{anchorData.eventsCompleted} Events</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Award className="w-5 h-5 text-red-500 mr-2" />
              <span>Verified Professional</span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2">
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Specializations
            </h3>
            <div className="flex flex-wrap gap-2">
              {anchorData.specializations.map((spec, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Past Events
            </h3>
            <div className="space-y-4">
              {anchorData.pastEvents.map(event => (
                <div 
                  key={event.id} 
                  className="flex justify-between items-center bg-gray-50 dark:bg-zinc-800 p-4 rounded"
                >
                  <span className="text-gray-900 dark:text-gray-200">{event.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{event.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}