import React from 'react';
import { Check } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PlanCardProps {
  name: string;
  price: number;
  features: PlanFeature[];
  popular?: boolean;
}

export default function PlanCard({ name, price, features, popular }: PlanCardProps) {
  return (
    <div className={`bg-zinc-900 rounded-lg p-8 ${popular ? 'ring-2 ring-red-600' : ''}`}>
      {popular && (
        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </span>
      )}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-4xl font-bold text-white">${price}</p>
        <p className="text-gray-400">per month</p>
      </div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-400">
            <Check className={`h-5 w-5 mr-2 ${feature.included ? 'text-red-600' : 'text-gray-600'}`} />
            <span className={!feature.included ? 'line-through text-gray-600' : ''}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-8 py-3 rounded font-semibold transition-colors duration-300 
        ${popular ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}>
        Choose Plan
      </button>
    </div>
  );
}