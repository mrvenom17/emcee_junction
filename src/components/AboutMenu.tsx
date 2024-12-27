import React from 'react';
import { Building2, Users, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MenuCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

function MenuCard({ icon, title, description, link }: MenuCardProps) {
  return (
    <Link 
      to={link}
      className="bg-zinc-900 p-6 rounded-lg transform hover:scale-105 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-red-500 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </Link>
  );
}

export default function AboutMenu() {
  return (
    <div className="absolute top-full left-0 mt-2 w-[600px] grid grid-cols-3 gap-4 bg-zinc-950/95 p-4 rounded-lg shadow-xl">
      <MenuCard
        icon={<Building2 className="h-8 w-8" />}
        title="Government Events"
        description="Official ceremonies and functions"
        link="/events/government"
      />
      <MenuCard
        icon={<Users className="h-8 w-8" />}
        title="Become an Anchor"
        description="Join our professional network"
        link="/enroll"
      />
      <MenuCard
        icon={<ClipboardList className="h-8 w-8" />}
        title="Enrollment"
        description="Register for our services"
        link="/enrollment"
      />
    </div>
  );
}