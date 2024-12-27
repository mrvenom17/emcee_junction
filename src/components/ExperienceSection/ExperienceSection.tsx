import React from 'react';
import { useNavigate } from 'react-router-dom';
import ExperienceCard from './ExperienceCard';
import { Building2, GraduationCap, PartyPopper, Users } from 'lucide-react';

export default function ExperienceSection() {
  const navigate = useNavigate();
  
  const experiences = [
    {
      title: "Government Events",
      description: "Official ceremonies, public functions, and government inaugurations",
      icon: Building2,
      events: 150,
      path: "/events/government"
    },
    {
      title: "Educational Events",
      description: "Convocations, seminars, and academic conferences",
      icon: GraduationCap,
      events: 300,
      path: "/events/educational"
    },
    {
      title: "Private Events",
      description: "Corporate meetings, product launches, and business summits",
      icon: Users,
      events: 500,
      path: "/events/private"
    },
    {
      title: "Parties & Celebrations",
      description: "Weddings, anniversaries, and social gatherings",
      icon: PartyPopper,
      events: 400,
      path: "/events/cultural"
    }
  ];

  return (
    <section className="px-12 py-16 bg-black">
      <h2 className="text-3xl font-bold text-white mb-8">Our Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiences.map((exp, index) => (
          <div key={index} onClick={() => navigate(exp.path)} className="cursor-pointer">
            <ExperienceCard {...exp} />
          </div>
        ))}
      </div>
    </section>
  );
}