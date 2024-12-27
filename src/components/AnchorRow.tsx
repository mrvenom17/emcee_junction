import React from 'react';

interface Anchor {
  id: number;
  name: string;
  image: string;
  specialization: string;
}

interface AnchorRowProps {
  title: string;
  anchors: Anchor[];
}

export default function AnchorRow({ title, anchors }: AnchorRowProps) {
  return (
    <div className="px-12 mt-8">
      <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {anchors.map((anchor) => (
          <div
            key={anchor.id}
            className="flex-none w-64 hover:scale-105 transition-transform duration-300"
          >
            <div className="relative group cursor-pointer">
              <img
                src={anchor.image}
                alt={anchor.name}
                className="w-full h-36 object-cover rounded"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">{anchor.name}</h3>
                <p className="text-sm">{anchor.specialization}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}