export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-2xl font-bold">Nextera</h3>
          <p className="text-gray-400 mt-3 text-sm">
            Creating futuristic digital experiences.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300 text-sm">info@nextera.com</p>
          <p className="text-gray-300 text-sm mt-2">+91 98765 43210</p>
        </div>

      </div>

      <div className="text-center mt-10 text-gray-500 text-sm">
        © 2025 Nextera. All rights reserved.
      </div>

    </footer>
  );
}
