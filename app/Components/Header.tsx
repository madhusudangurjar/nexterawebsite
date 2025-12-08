/* Modern 3D Glassmorphism Header (TailwindCSS + Next.js)
   File: components/Header.tsx
   Effect: 3D blur background, frosted glass, neon hover, smooth animations
*/

"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 3D Glass Container */}
      <div className="backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/40 rotate-3 flex items-center justify-center text-white font-bold text-xl">
                N
              </div>
              <span className="text-xl font-semibold text-white drop-shadow-md hidden sm:block">Nextera</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/90 hover:text-white relative group transition"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Button */}
            <div className="flex items-center gap-3">
              <Link
                href="/get-a-quote"
                className="hidden md:inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-purple-500/40 hover:scale-[1.05] active:scale-95 transition"
              >
                Get Quote
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-white text-3xl"
              >
                {mobileOpen ? "✕" : "☰"}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-xl p-4 space-y-4 text-white">
          <Link href="/" className="block text-lg">Home</Link>
          <Link href="/about" className="block text-lg">About</Link>
          <Link href="/services" className="block text-lg">Services</Link>
          <Link href="/blog" className="block text-lg">Blog</Link>
          <Link href="/contact" className="block text-lg">Contact</Link>
          <Link
            href="/get-a-quote"
            className="block mt-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center shadow-lg"
          >
            Get Quote
          </Link>
        </div>
      )}
    </header>
  );
}