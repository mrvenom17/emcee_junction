import React from 'react';
import { useParams } from 'react-router-dom';
import EventLayout from '../../components/ui/EventLayout';

const subscriptionDetails = {
  basic: {
    title: "Basic Plan",
    description: "Perfect for getting started",
    features: ["Profile listing", "Basic analytics", "Email support"],
    price: 29,
    coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
  },
  professional: {
    title: "Professional Plan",
    description: "Ideal for growing professionals",
    features: ["Profile listing", "Advanced analytics", "Priority support", "Featured listing"],
    price: 79,
    coverImage: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80"
  },
  enterprise: {
    title: "Enterprise Plan",
    description: "For established organizations",
    features: ["Everything in Professional", "24/7 support", "Custom branding", "API access"],
    price: 199,
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
  },
  custom: {
    title: "Custom Plan",
    description: "Tailored to your needs",
    features: ["Everything in Enterprise", "Dedicated account manager", "Custom integration", "White-label solution"],
    price: 499,
    coverImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80"
  }
};

export default function SubscriptionDetails() {
  const { plan } = useParams();
  const details = subscriptionDetails[plan as keyof typeof subscriptionDetails];

  return (
    <EventLayout
      title={details.title}
      description={details.description}
      coverImage={details.coverImage}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-900 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-white">${details.price}</h3>
            <p className="text-gray-400">per month</p>
          </div>
          <div className="space-y-4">
            {details.features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                {feature}
              </div>
            ))}
          </div>
          <button className="w-full mt-8 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
            Subscribe Now
          </button>
        </div>
      </div>
    </EventLayout>
  );
}