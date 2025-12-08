export default function About() {
  return (
    <section id="about" className="relative w-full py-24 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-black/90 backdrop-blur-xl" />

      <div className="relative max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          About Our Agency
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
  );
}
