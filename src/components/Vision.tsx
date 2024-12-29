import React from 'react';

export default function Vision() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              At EMCEE Junction, we envision a world where every event is elevated through professional hosting and seamless management. Our platform connects talented hosts with event organizers, creating memorable experiences that leave lasting impressions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We strive to be the bridge between exceptional talent and outstanding events, fostering a community of professional growth and excellence in event hosting.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/images/images/vision.jpg" 
              alt="Vision" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}