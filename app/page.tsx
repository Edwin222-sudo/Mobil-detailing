"use client";

import { useState } from 'react';
import Image from 'next/image';
import {
  business,
  pricing,
  services,
  gallery,
  vehicles,
  whyChooseUs,
  howItWorks,
  booking,
} from './data';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: booking.serviceOptions[0],
    date: '',
    time: '',
    notes: '',
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
  };

  const phoneDigits = business.phone.replace(/\D/g, '');

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-brand/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-brand uppercase glow-text">
            {business.shortName}
          </h1>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-brand transition">Services</a>
            <a href="#gallery" className="hover:text-brand transition">Gallery</a>
            <a href="#vehicles" className="hover:text-brand transition">Vehicles</a>
            <a href="#book" className="bg-brand px-4 py-2 rounded hover:bg-brand-dark transition">Book Now</a>
          </div>
          <a href={`tel:${phoneDigits}`} className="md:hidden bg-brand px-3 py-1 rounded text-sm">
            Call Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('/hero.jpg')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-brand font-bold tracking-widest uppercase mb-2">
            {business.tagline}
          </h2>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 glow-text">
            {business.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {business.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="bg-brand text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-brand-dark transition shadow-lg">
              {business.hero.ctaPrimary}
            </a>
            <a href={`sms:${phoneDigits}`} className="bg-white text-black px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-200 transition">
              {business.hero.ctaSecondary}: {business.phone}
            </a>
          </div>
        </div>
      </section>

      {/* INFO BANNER */}
      <div className="bg-brand py-4">
        <div className="container mx-auto px-6 text-center font-bold text-base md:text-lg">
          CALL OR TEXT NOW: {business.phone} — SEND A PHOTO FOR A FAST ESTIMATE
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Why Choose <span className="text-brand">Us</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">{business.about.headline}</p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-square bg-neutral-800 rounded-xl flex items-center justify-center text-gray-600">
              {/* Replace with client photo */}
              Photo Placeholder
            </div>
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">{business.about.body}</p>
              <ul className="space-y-2">
                {business.about.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-brand font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US GRID */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                <h3 className="text-lg font-bold mb-2 text-brand">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-brand">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-brand transition">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-300 space-y-2">
                  {service.features.map((f, i) => (
                    <li key={i}>✓ {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLES WE SERVICE */}
      <section id="vehicles" className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Vehicles We <span className="text-brand">Service</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {vehicles.map((v, idx) => (
              <div key={idx} className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                <div className="text-5xl mb-4">{v.emoji}</div>
                <h3 className="text-2xl font-bold">{v.label}</h3>
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto">
            High-quality products and attention to detail guaranteed.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Transparent <span className="text-brand">Pricing</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-neutral-800 p-6 rounded-xl border-t-4 border-brand">
              <h3 className="text-xl font-bold mb-4">Full Service</h3>
              {pricing.complete.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-neutral-700">
                  <span className="text-sm">{item.type}</span>
                  <span className="font-bold text-brand">${item.price}</span>
                </div>
              ))}
            </div>
            <div className="bg-neutral-800 p-6 rounded-xl border-t-4 border-gray-600">
              <h3 className="text-xl font-bold mb-4">Interior Only</h3>
              {pricing.interiorOnly.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-neutral-700">
                  <span className="text-sm">{item.type}</span>
                  <span className="font-bold text-brand">${item.price}</span>
                </div>
              ))}
            </div>
            <div className="bg-neutral-800 p-6 rounded-xl border-t-4 border-gray-600">
              <h3 className="text-xl font-bold mb-4">Exterior Only</h3>
              {pricing.exteriorOnly.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-neutral-700">
                  <span className="text-sm">{item.type}</span>
                  <span className="font-bold text-brand">${item.price}</span>
                </div>
              ))}
            </div>
            <div className="bg-neutral-800 p-6 rounded-xl border-t-4 border-yellow-600">
              <h3 className="text-xl font-bold mb-4">Restoration</h3>
              {pricing.restoration.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-neutral-700">
                  <span className="text-sm">{item.type}</span>
                  <span className="font-bold text-brand">${item.price}+</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div className="bg-neutral-800 rounded-xl p-8 max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Add-Ons & Specialty Services</h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
              {pricing.addOns.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-neutral-700 text-sm">
                  <span className="text-gray-300">{item.name}</span>
                  <span className="font-bold text-white">
                    {item.price === 'Ask' ? 'Ask Us' : `$${item.price}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Discount / CTA Banner */}
          {pricing.discounts.map((d, idx) => (
            <div key={idx} className="max-w-4xl mx-auto bg-gradient-to-r from-brand to-blue-900 rounded-xl p-8 text-center">
              <span className="inline-block bg-white text-brand font-black px-4 py-1 rounded-full text-sm mb-3">
                {d.badge}
              </span>
              <h3 className="text-2xl font-bold mb-2 text-white">{d.title}</h3>
              <p className="text-white/90 mb-4">{d.description}</p>
              <a
                href={`sms:${phoneDigits}`}
                className="inline-block bg-white text-brand font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition"
              >
                Text {business.phone}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            How It <span className="text-brand">Works</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 text-center">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Before & <span className="text-brand">After</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Real results. Send us a photo for a fast estimate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gallery.map((item, idx) => (
              <div key={idx} className="bg-neutral-800 rounded-xl overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square bg-neutral-700 flex items-center justify-center text-gray-500">
                    <Image
                      src={item.before}
                      alt={`Before ${item.title}`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <span className="absolute top-2 left-2 bg-black/70 text-xs font-bold px-2 py-1 rounded z-10">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative aspect-square bg-neutral-700 flex items-center justify-center text-gray-500">
                    <Image
                      src={item.after}
                      alt={`After ${item.title}`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <span className="absolute top-2 left-2 bg-brand text-xs font-bold px-2 py-1 rounded z-10">
                      AFTER
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm text-gray-400">{item.vehicle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={`sms:${phoneDigits}`}
              className="inline-block bg-brand text-white px-8 py-4 rounded-md font-bold hover:bg-brand-dark transition"
            >
              Text Us Your Vehicle for a Quote →
            </a>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Book Your <span className="text-brand">Detail</span>
          </h2>
          <p className="text-center text-gray-400 mb-4">
            Fill out the form below or call/text us directly at {business.phone}.
          </p>
          <p className="text-center text-gray-500 text-sm mb-12">{business.hours}</p>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6 bg-neutral-900 p-8 rounded-xl border border-neutral-800"
          >
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Full Name</label>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand outline-none"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Phone Number</label>
              <input
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand outline-none"
                placeholder="847-555-1234"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-gray-400">
                Vehicle (Year, Make, Model — or Boat/RV)
              </label>
              <input
                required
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                type="text"
                className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand outline-none"
                placeholder="e.g. 2018 Ford F-150"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Service Requested</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand outline-none"
              >
                {booking.serviceOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Preferred Date</label>
              <input
                required
                name="date"
                value={formData.date}
                onChange={handleChange}
                type="date"
                className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Preferred Time</label>
              <input
                required
                name="time"
                value={formData.time}
                onChange={handleChange}
                type="time"
                className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand outline-none"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-gray-400">Additional Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand outline-none"
                placeholder="Pet hair, scratches, stains, specific add-ons, etc."
              ></textarea>
            </div>

            <button
              type="submit"
              className="md:col-span-2 bg-brand text-white font-bold text-lg py-4 rounded hover:bg-brand-dark transition"
            >
              Request Booking
            </button>

            {status === 'success' && (
              <div className="md:col-span-2 bg-green-900/50 border border-green-600 text-green-200 p-4 rounded text-center">
                ✅ Request received! We'll text you back shortly to confirm.
              </div>
            )}

            <p className="text-xs text-center text-gray-500 md:col-span-2 mt-2">
              Serving {business.serviceAreas.join(" • ")}
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-neutral-800 text-center text-gray-500">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-brand mb-4 glow-text">{business.name}</h2>
          <p className="mb-2">We Come To You — Serving {business.serviceAreas.join(", ")}</p>
          <p className="mb-6 font-bold text-white text-xl">{business.phone}</p>
          <p className="text-sm mb-2">{business.hours}</p>
          <p className="text-sm">Send photo of your vehicle for fast estimate</p>
          <p className="text-xs mt-8">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
