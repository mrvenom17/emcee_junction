import React from 'react';
import { Star, Calendar, Clock, Award } from 'lucide-react';

interface ProfileData {
  name: string;
  role: string;
  rating: number;
  eventsCompleted: number;
  experience: string;
  activePlan: string;
}

interface ProfileInfoProps {
  data: ProfileData;
}

export default function ProfileInfo({ data }: ProfileInfoProps) {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="text-center mb-6">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
          alt={data.name}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-black">{data.name}</h2>
        <p className="text-gray-600">{data.role}</p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center text-gray-700">
          <Star className="w-5 h-5 text-yellow-500 mr-2" />
          <span>{data.rating} Rating</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Calendar className="w-5 h-5 text-blue-500 mr-2" />
          <span>{data.eventsCompleted} Events</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Clock className="w-5 h-5 text-green-500 mr-2" />
          <span>{data.experience}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Award className="w-5 h-5 text-red-500 mr-2" />
          <span>{data.activePlan} Plan</span>
        </div>
      </div>
    </div>
  );
}