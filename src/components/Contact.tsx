

import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">contact@emceejunction.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-400">123 Event Street, Suite 100<br />New York, NY 10001</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-zinc-800 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-zinc-800 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-zinc-800 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
              ></textarea>
            </div>
            <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}