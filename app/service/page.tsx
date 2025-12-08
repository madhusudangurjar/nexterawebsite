import { Code, Palette, Server, Smartphone } from "lucide-react";

export default function Service() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-full py-32 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-black"></div>

        {/* Blurry lights */}
        <div className="absolute w-96 h-96 bg-purple-600/30 blur-[160px] rounded-full -top-20 left-10"></div>
        <div className="absolute w-96 h-96 bg-blue-600/30 blur-[160px] rounded-full top-20 right-10"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow-lg">
            Our Premium Services
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            High-quality development solutions crafted with Next.js, React, and modern UI frameworks.
          </p>
        </div>
      </section>

      {/* ---------------- SERVICES GRID ---------------- */}
      <section className="relative w-full py-20 px-6">
        <div className="relative z-10 max-w-7xl mx-auto text-center">

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            What We Offer
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-14">
            From idea to execution — we deliver scalable, fast and modern solutions for your business.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:scale-[1.07] transition-all duration-300 cursor-pointer hover:bg-white/10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                  <Code size={38} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-300 text-sm">
                High-performance and SEO-friendly websites built on Next.js.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:scale-[1.07] transition-all duration-300 cursor-pointer hover:bg-white/10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                  <Palette size={38} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-300 text-sm">
                Clean, modern and user-friendly interface designs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:scale-[1.07] transition-all duration-300 cursor-pointer hover:bg-white/10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                  <Smartphone size={38} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Mobile Apps</h3>
              <p className="text-gray-300 text-sm">
                Fast, responsive and fully functional mobile application solutions.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:scale-[1.07] transition-all duration-300 cursor-pointer hover:bg-white/10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                  <Server size={38} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Backend / API</h3>
              <p className="text-gray-300 text-sm">
                Scalable and secure backend development with API integration.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="relative py-24 px-6 text-center">
        <div className="absolute w-full h-full bg-gradient-to-t from-purple-600/10 to-transparent"></div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-4xl font-extrabold mb-4">Let’s Build Something Amazing</h2>
          <p className="text-gray-300 mb-8">
            Need a website, mobile app, or custom solution? We’re ready to help.
          </p>

          <a
            href="/contact"
            className="px-8 py-4 bg-purple-600 rounded-xl font-semibold text-white hover:bg-purple-700 transition-all"
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </main>
  );
}
