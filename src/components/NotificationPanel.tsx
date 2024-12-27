import React from 'react';
import { Bell, X } from 'lucide-react';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export default function NotificationPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const notifications: Notification[] = [
    {
      id: 1,
      title: 'New Booking',
      message: 'You have a new event booking request',
      time: '5 min ago',
      read: false
    },
    {
      id: 2,
      title: 'Review Received',
      message: 'Someone left a new review on your profile',
      time: '1 hour ago',
      read: false
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          <button onClick={onClose}>
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border-b border-gray-100 ${
              notification.read ? 'bg-white' : 'bg-gray-50'
            }`}
          >
            <div className="flex justify-between">
              <h4 className="text-sm font-semibold text-gray-900">{notification.title}</h4>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}