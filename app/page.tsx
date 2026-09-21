"use client";

import { useState } from 'react';

// --- SERVICE DATA ---
const services = [
  {
    title: "Paint Correction / Swirl Removal",
    description:
      "We remove swirl marks, scratches, and imperfections for a flawless finish. Full paint correction for scratches or swirl marks. If you think the scratches are too deep for anything but a complete repaint, don't rush to take your car to a repair shop. Give us a call. We might be able to save you time and money.",
    icon: "✨",
  },
  {
    title: "Ceramic Coating",
    description:
      "Creates a long-lasting protective layer over your vehicle's clear coat. Adds a stunning look with more shine and depth. Protects against UV exposure, preventing fading and oxidation over time. Repels water, dirt, road grime, and contaminants, keeping your car cleaner for longer. Makes washing your car quicker and easier. Helps maintain the vehicle's appearance, preserving long-term resale value.",
    icon: "🛡️",
  },
  {
    title: "Full Deep Clean of Your Interior",
    description:
      "We provide full interior detailing including carpet cleaning, upholstery cleaning, seat steam cleaning, leather conditioning, and odor elimination. Our services cover cars, trucks, SUVs, vans, and specialty vehicles, ensuring every ride feels fresh and restored.",
    icon: "🧼",
  },
  {
    title: "Headlight Restoration",
    description:
      "We restore clarity to foggy, yellowed headlights for improved appearance and safety.",
    icon: "💡",
  },
  {
    title: "Boat & Yacht Detailing",
    description:
      "Professional boat and yacht polishing services and interior detailing. We bring professional-grade equipment directly to your location.",
    icon: "🛥️",
  },
  {
    title: "Buffing & Polishing",
    description:
      "Full exterior polishing and buffing to bring back that showroom shine. We treat every vehicle with care, precision, and attention to detail.",
    icon: "🌀",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: 'Paint Correction',
    date: '',
    time: '',
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thanks ${formData.name}! We received your request for ${formData.service} on your ${formData.vehicle}. We will text you at ${formData.phone} to confirm.`
    );
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-brand-blue/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter text-brand-blue uppercase glow-text">
            Mobil Detailing
          </h1>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-brand-blue transition">Services</a>
            <a href="#gallery" className="hover:text-brand-blue transition">Gallery</a>
            <a href="#vehicles" className="hover:text-brand-blue transition">Vehicles</a>
            <a href="#book" className="bg-brand-blue px-4 py-2 rounded hover:bg-blue-700 transition">Book Now</a>
          </div>
          <a href="tel:8479643474" className="md:hidden bg-brand-blue px-3 py-1 rounded text-sm">
            Call Now
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          {/* Replace this background image URL with your own hero image */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase mb-2">
            Mobile Detailing — We Come To You
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 glow-text">
            Premium Auto Care <br /> At Your Doorstep
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Scratch removal, paint correction, full exterior polishing, deep interior cleaning, and complete interior &amp; exterior detailing — done professionally at your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book"
              className="bg-brand-blue text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-900/50"
            >
              Book Appointment
            </a>
            <a
              href="sms:8479643474"
              className="bg-white text-black px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-200 transition"
            >
              Text for Quote: 847-964-3474
            </a>
          </div>
        </div>
      </section>

      {/* INFO BANNER */}
      <div className="bg-brand-blue py-4">
        <div className="container mx-auto px-6 text-center font-bold text-lg">
          CALL OR TEXT NOW: 847-964-3474 — SEND A PHOTO OF YOUR CAR FOR A FAST ESTIMATE
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Our <span className="text-brand-blue">Services</span>
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            We bring professional-grade equipment directly to your doorstep, so you can skip the shop and still get high-quality results. Whether you need a quick refresh or a full restoration-style detail, we treat every vehicle with care, precision, and attention to detail.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-brand-blue transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLES WE SERVICE */}
      <section id="vehicles" className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Vehicles We <span className="text-brand-blue">Service</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold">Cars</h3>
            </div>
            <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
              <div className="text-5xl mb-4">🚐</div>
              <h3 className="text-2xl font-bold">RVs</h3>
            </div>
            <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
              <div className="text-5xl mb-4">🛥️</div>
              <h3 className="text-2xl font-bold">Boats of All Sizes</h3>
            </div>
          </div>
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto">
            High-quality products and attention to detail guaranteed.
          </p>
        </div>
      </section>

      {/* GALLERY SECTION — 5 Before/After Slots */}
      <section id="gallery" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Before &amp; <span className="text-brand-blue">After</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* IMAGE 1 */}
            <div className="aspect-square bg-neutral-800 rounded-lg flex items-center justify-center text-gray-600 border border-neutral-700">
              Before / After 1
            </div>
            {/* IMAGE 2 */}
            <div className="aspect-square bg-neutral-800 rounded-lg flex items-center justify-center text-gray-600 border border-neutral-700">
              Before / After 2
            </div>
            {/* IMAGE 3 */}
            <div className="aspect-square bg-neutral-800 rounded-lg flex items-center justify-center text-gray-600 border border-neutral-700">
              Before / After 3
            </div>
            {/* IMAGE 4 */}
            <div className="aspect-square bg-neutral-800 rounded-lg flex items-center justify-center text-gray-600 border border-neutral-700">
              Before / After 4
            </div>
            {/* IMAGE 5 */}
            <div className="aspect-square bg-neutral-800 rounded-lg flex items-center justify-center text-gray-600 border border-neutral-700">
              Before / After 5
            </div>
          </div>
          <p className="text-center text-gray-500 mt-6">
            Real results from recent details. Send us a photo of your vehicle for a fast estimate.
          </p>
        </div>
      </section>

      {/* PRICING / CTA SECTION */}
      <section id="pricing" className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transparent <span className="text-brand-blue">Pricing</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Every vehicle is different. Pricing depends on size, condition, and services requested. Call or text us with a photo of your vehicle for a fast, accurate estimate.
          </p>
          <a
            href="tel:8479643474"
            className="inline-block bg-brand-blue text-white px-10 py-5 rounded-md font-bold text-xl hover:bg-blue-700 transition shadow-lg shadow-blue-900/50"
          >
            📞 Call or Text: 847-964-3474
          </a>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="book" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Book Your <span className="text-brand-blue">Detail</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Fill out the form below to request a quote and schedule. We will text you back to confirm.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6 bg-neutral-900 p-8 rounded-xl border border-neutral-800"
          >
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Full Name</label>
              <input
                required
                name="name"
                onChange={handleChange}
                type="text"
                className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand-blue outline-none"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Phone Number</label>
              <input
                required
                name="phone"
                onChange={handleChange}
                type="tel"
                className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand-blue outline-none"
                placeholder="847-964-3474"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-gray-400">
                Vehicle (Year, Make, Model — or Boat/RV)
              </label>
              <input
                required
                name="vehicle"
                onChange={handleChange}
                type="text"
                className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand-blue outline-none"
                placeholder="e.g. 2018 Ford F-150"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Service Type</label>
              <select
                name="service"
                onChange={handleChange}
                className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand-blue outline-none"
              >
                <option>Paint Correction / Swirl Removal</option>
                <option>Ceramic Coating</option>
                <option>Full Interior Deep Clean</option>
                <option>Headlight Restoration</option>
                <option>Buffing &amp; Polishing</option>
                <option>Boat &amp; Yacht Detailing</option>
                <option>Full Interior &amp; Exterior Detail</option>
                <option>Other (Specify in notes)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Preferred Date</label>
              <input
                required
                name="date"
                onChange={handleChange}
                type="date"
                className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand-blue outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Preferred Time</label>
              <input
                required
                name="time"
                onChange={handleChange}
                type="time"
                className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand-blue outline-none"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-gray-400">
                Additional Notes / Order Request
              </label>
              <textarea
                name="notes"
                onChange={handleChange}
                rows={3}
                className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand-blue outline-none"
                placeholder="Mention any heavy stains, pet hair, scratches, or specific add-ons you want."
              ></textarea>
            </div>

            <button
              type="submit"
              className="md:col-span-2 bg-brand-blue text-white font-bold text-lg py-4 rounded hover:bg-blue-700 transition"
            >
              Request Quote &amp; Booking
            </button>
            <p className="text-xs text-center text-gray-500 md:col-span-2 mt-2">
              By submitting, you agree to be contacted via text/call.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 py-12 border-t border-neutral-800 text-center text-gray-500">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-brand-blue mb-4 glow-text">Mobil Detailing</h2>
          <p className="mb-2">Mobile Detailing — We Come To You</p>
          <p className="mb-6 font-bold text-white text-xl">847-964-3474</p>
          <p className="text-sm">Send photo of your car for fast estimate</p>
          <p className="text-xs mt-8">
            © {new Date().getFullYear()} Mobil Detailing. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
