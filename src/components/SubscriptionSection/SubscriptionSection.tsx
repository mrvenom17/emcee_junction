import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlanCard from './PlanCard';

export default function SubscriptionSection() {
  const navigate = useNavigate();
  
  const plans = [
    {
      name: "Basic",
      price: 29,
      path: "basic",
      features: [
        { text: "Profile listing", included: true },
        { text: "Basic analytics", included: true },
        { text: "Email support", included: true },
        { text: "Featured listing", included: false },
        { text: "Priority support", included: false },
        { text: "Custom branding", included: false }
      ]
    },
    {
      name: "Professional",
      price: 79,
      path: "professional",
      popular: true,
      features: [
        { text: "Profile listing", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Priority support", included: true },
        { text: "Featured listing", included: true },
        { text: "Custom branding", included: false },
        { text: "API access", included: false }
      ]
    },
    {
      name: "Enterprise",
      price: 199,
      path: "enterprise",
      features: [
        { text: "Profile listing", included: true },
        { text: "Advanced analytics", included: true },
        { text: "24/7 support", included: true },
        { text: "Featured listing", included: true },
        { text: "Custom branding", included: true },
        { text: "API access", included: true }
      ]
    }
  ];

  const handlePlanClick = (path: string) => {
    navigate(`/subscription/${path}`);
  };

  return (
    <section className="px-12 py-16 bg-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Select the perfect plan for your needs. All plans include access to our platform
          and basic features. Upgrade anytime as your needs grow.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {plans.map((plan, index) => (
          <div key={index} onClick={() => handlePlanClick(plan.path)} className="cursor-pointer">
            <PlanCard {...plan} />
          </div>
        ))}
      </div>
    </section>
  );
}