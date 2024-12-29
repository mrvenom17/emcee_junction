import React from 'react';

const teamMembers = [
  {
    name: "Saksham",
    role: "Co-Founder & CEO",
    bio: "Visionary leader with expertise in event management and business strategy.",
    image: "/images/images/t1.jpeg",
    position: "left"
  },
  {
    name: "Sangam",
    role: "Co-Founder & CTO",
    bio: "Tech innovator driving digital transformation in event hosting.",
    image: "images/images/t2.jpg",
    position: "right"
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-zinc-950">
      <h2 className="text-4xl font-bold text-center text-white mb-16">Our Team</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col space-y-16">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className={`flex items-center ${
                member.position === 'right' ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="w-1/2 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-lg shadow-2xl max-w-[80%] mx-auto"
                />
              </div>
              <div 
                className={`w-1/2 ${
                  member.position === 'right' ? 'pr-8' : 'pl-8'
                }`}
              >
                <div className={`bg-zinc-900/80 p-6 rounded-lg transform ${
                  member.position === 'right' ? '-translate-x-8' : 'translate-x-8'
                } max-w-[400px]`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-red-500 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}