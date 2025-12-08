"use client";
import React from "react";
import { Code, Palette, Smartphone, Server } from "lucide-react";
import { title } from "process";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ---------------- HERO SECTION ---------------- */}
      <section
        id="hero"
        className="relative w-full h-screen flex items-center justify-center text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black backdrop-blur-3xl" />

        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build Futuristic Digital Experiences
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Modern UI/UX, Next.js development, and premium digital branding.
          </p>
        </div>

        <div className="absolute w-72 h-72 bg-purple-600/30 blur-3xl rounded-full top-10 left-10"></div>
        <div className="absolute w-80 h-80 bg-blue-600/20 blur-3xl rounded-full bottom-10 right-10"></div>
      </section>

      {/* ---------------- SERVICES SECTION ---------------- */}
   <section className="relative w-full py-20 px-6 bg-black overflow-hidden">

      {/* Blurry Lights */}
      <div className="absolute w-96 h-96 bg-purple-600/20 blur-[150px] rounded-full -top-20 -left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full top-40 right-0 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Our Services
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          We provide high-quality digital solutions using the latest technologies.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:scale-[1.07] hover:shadow-purple-600/30 transition-all duration-300 cursor-pointer group">
            <div className="mb-4 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-300">
                <Code size={38} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
            <p className="text-gray-300 text-sm">
              High-performance websites built with Next.js & React.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:scale-[1.07] hover:shadow-pink-600/30 transition-all duration-300 cursor-pointer group">
            <div className="mb-4 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-300">
                <Palette size={38} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
            <p className="text-gray-300 text-sm">
              Modern and user-friendly interface designs to improve user experience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:scale-[1.07] hover:shadow-blue-600/30 transition-all duration-300 cursor-pointer group">
            <div className="mb-4 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-300">
                <Smartphone size={38} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Mobile Apps</h3>
            <p className="text-gray-300 text-sm">
              Clean, fast and scalable mobile applications.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:scale-[1.07] hover:shadow-green-600/30 transition-all duration-300 cursor-pointer group">
            <div className="mb-4 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-300">
                <Server size={38} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Backend API</h3>
            <p className="text-gray-300 text-sm">
              Secure & scalable backend systems and API integrations.
            </p>
          </div>

        </div>
      </div>
    </section>
      {/* ---------------- ABOUT US SECTION ---------------- */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-black/90 backdrop-blur-xl" />

        <div className="relative max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            About Us
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We create premium, modern and scalable digital products for global brands.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
              <h3 className="text-xl font-semibold">Experience</h3>
              <p className="text-gray-300 text-sm">Years of expertise building digital products.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-gray-300 text-sm">Using modern technologies like Next.js & AI.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
              <h3 className="text-xl font-semibold">Support</h3>
              <p className="text-gray-300 text-sm">24/7 client support from experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PORTFOLIO SECTION ---------------- */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Portfolio</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
              <div className="h-52 bg-white/10 rounded-xl"></div>
              <h3 className="mt-4 text-xl font-semibold">Web Development</h3>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
              <div className="h-52 bg-white/10 rounded-xl"></div>
              <h3 className="mt-4 text-xl font-semibold">Mobile App UI</h3>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
              <div className="h-52 bg-white/10 rounded-xl"></div>
              <h3 className="mt-4 text-xl font-semibold">Brand Design</h3>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS SECTION ---------------- */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-lg border border-white/10">
              <p className="italic text-gray-300">
                “Amazing work! My website looks powerful and modern.”
              </p>
              <h4 className="mt-4 font-semibold">— Client A</h4>
            </div>

            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-lg border border-white/10">
              <p className="italic text-gray-300">
                “Fast delivery and brilliant UI/UX design.”
              </p>
              <h4 className="mt-4 font-semibold">— Client B</h4>
            </div>

            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-lg border border-white/10">
              <p className="italic text-gray-300">
                “Very professional and supportive team.”
              </p>
              <h4 className="mt-4 font-semibold">— Client C</h4>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
