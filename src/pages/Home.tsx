import React from 'react';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Team from '../components/Team';
import Contact from '../components/Contact';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import EnrollSection from '../components/EnrollSection/EnrollSection';
import SubscriptionSection from '../components/SubscriptionSection/SubscriptionSection';
import MultiImageParallax from '../components/MultiImageParallax';
import TransitionSection from '../components/TransitionSection';

export default function Home() {
  const visionToTeamImages = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
  ];

  const enrollToSubscriptionImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
  ];

  return (
    <>
      <Hero />
      
      <TransitionSection>
        <ExperienceSection />
      </TransitionSection>

      <TransitionSection>
        <Vision />
      </TransitionSection>

      <MultiImageParallax images={visionToTeamImages} />

      <TransitionSection>
        <Team />
      </TransitionSection>

      <TransitionSection>
        <EnrollSection />
      </TransitionSection>

      <TransitionSection>
        <SubscriptionSection />
      </TransitionSection>

      <TransitionSection>
        <Contact />
      </TransitionSection>
    </>
  );
}