
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-0">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        <h3 className="text-2xl font-semibold text-white mb-3">FatimaWrites</h3>
        <p className="text-gray-400 mb-6">
          Thoughts, stories, and tutorials — written with love ✨
        </p>

        <div className="flex justify-center gap-6 text-gray-400 mb-6">
          <a href="#" className="hover:text-blue-400 transition">Twitter</a>
          <a href="https://www.instagram.com/artistic.official7?utm_source=qr&igsh=aW8wb29reHNuNmw5" className="hover:text-pink-400 transition">Instagram</a>
          <a href="#" className="hover:text-blue-500 transition">LinkedIn</a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} MahnoorWrites — All rights reserved.
        </p>
      </div>
    </footer>
  );
}

