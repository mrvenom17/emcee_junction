import React, { useState } from 'react';
import { Calendar, Star, Award, Clock, Users } from 'lucide-react';
import OrganizerView from './OrganizerView';
import ProfileInfo from '../../components/profile/ProfileInfo';
import EventsList from '../../components/profile/EventsList';

export default function AnchorProfile() {
  const [viewMode, setViewMode] = useState<'anchor' | 'organizer'>('anchor');
  
  const anchorData = {
    name: "Sarah Johnson",
    role: "Professional Emcee",
    rating: 4.8,
    eventsCompleted: 150,
    experience: "5+ years",
    activePlan: "Professional",
    upcomingEvents: [
      { id: 1, name: "Tech Conference 2024", date: "2024-03-15" },
      { id: 2, name: "Corporate Summit", date: "2024-03-20" }
    ],
    pastEvents: [
      { id: 3, name: "Product Launch", date: "2024-02-10" },
      { id: 4, name: "Annual Meeting", date: "2024-02-01" }
    ]
  };

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 flex justify-end">
          <button
            onClick={() => setViewMode(viewMode === 'anchor' ? 'organizer' : 'anchor')}
            className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Users className="h-5 w-5" />
            <span>Switch to {viewMode === 'anchor' ? 'Organizer' : 'Anchor'} View</span>
          </button>
        </div>
        
        {viewMode === 'anchor' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <ProfileInfo data={anchorData} />
            </div>
            <div className="md:col-span-2">
              <EventsList 
                upcomingEvents={anchorData.upcomingEvents}
                pastEvents={anchorData.pastEvents}
              />
            </div>
          </div>
        ) : (
          <OrganizerView />
        )}
      </div>
    </div>
  );
}