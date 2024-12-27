import React from 'react';
import { Mail, Phone, User, Award, Camera } from 'lucide-react';

export default function EnrollForm() {
  return (
    <form className="space-y-6 max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-gray-400 mb-2">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <input
              type="text"
              className="w-full bg-zinc-900 text-white pl-12 pr-4 py-3 rounded focus:ring-2 focus:ring-red-600 focus:outline-none"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-gray-400 mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <input
              type="email"
              className="w-full bg-zinc-900 text-white pl-12 pr-4 py-3 rounded focus:ring-2 focus:ring-red-600 focus:outline-none"
              placeholder="email@example.com"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-gray-400 mb-2">Phone</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <input
              type="tel"
              className="w-full bg-zinc-900 text-white pl-12 pr-4 py-3 rounded focus:ring-2 focus:ring-red-600 focus:outline-none"
              placeholder="+1 234 567 8900"
            />
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-gray-400 mb-2">Years of Experience</label>
          <div className="relative">
            <Award className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <input
              type="number"
              className="w-full bg-zinc-900 text-white pl-12 pr-4 py-3 rounded focus:ring-2 focus:ring-red-600 focus:outline-none"
              placeholder="5"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-gray-400 mb-2">Profile Photo</label>
        <div className="relative">
          <Camera className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
          <input
            type="file"
            className="w-full bg-zinc-900 text-white pl-12 pr-4 py-3 rounded focus:ring-2 focus:ring-red-600 focus:outline-none"
            accept="image/*"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition-colors duration-300"
      >
        Submit Application
      </button>
    </form>
  );
}