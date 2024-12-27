import React from 'react';
import EnrollForm from './EnrollForm';

export default function EnrollSection() {
  return (
    <section className="px-12 py-16 bg-zinc-950">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Enroll as an Anchor</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Join our platform and showcase your talent to thousands of event organizers.
          Fill out the form below to start your journey with us.
        </p>
      </div>
      <EnrollForm />
    </section>
  );
}